use crate::domain::Domain;
use crate::frame::Frame;
use lambdaworks_math::circle::point::{CirclePoint, HasCircleParams};
use lambdaworks_math::field::element::FieldElement;
use lambdaworks_math::field::traits::{IsFFTField, IsField, IsSubFieldOf};
/// TransitionConstraint represents the behaviour that a transition constraint
/// over the computation that wants to be proven must comply with.
pub trait TransitionConstraint<F, E>: Send + Sync
where
    F: IsSubFieldOf<E> + IsFFTField + Send + Sync + HasCircleParams<F>,
    E: IsField + Send + Sync + HasCircleParams<E>,
{
    /// The degree of the constraint interpreting it as a multivariate polynomial.
    fn degree(&self) -> usize;

    /// The index of the constraint.
    /// Each transition constraint should have one index in the range [0, N),
    /// where N is the total number of transition constraints.
    fn constraint_idx(&self) -> usize;

    /// The function representing the evaluation of the constraint over elements
    /// of the trace table.
    ///
    /// Elements of the trace table are found in the `frame` input, and depending on the
    /// constraint, elements of `periodic_values` and `rap_challenges` may be used in
    /// the evaluation.
    /// Once computed, the evaluation should be inserted in the `transition_evaluations`
    /// vector, in the index corresponding to the constraint as given by `constraint_idx()`.
    fn evaluate(&self, frame: &Frame<F>, transition_evaluations: &mut [FieldElement<E>]);

    /// The periodicity the constraint is applied over the trace.
    ///
    /// Default value is 1, meaning that the constraint is applied to every
    /// step of the trace.
    fn period(&self) -> usize {
        1
    }

    /// The offset with respect to the first trace row, where the constraint
    /// is applied.
    /// For example, if the constraint has periodicity 2 and offset 1, this means
    /// the constraint will be applied over trace rows of index 1, 3, 5, etc.
    ///
    /// Default value is 0, meaning that the constraint is applied from the first
    /// element of the trace on.
    fn offset(&self) -> usize {
        0
    }

    /// For a more fine-grained description of where the constraint should apply,
    /// an exemptions period can be defined.
    /// This specifies the periodicity of the row indexes where the constraint should
    /// NOT apply, within the row indexes where the constraint applies, as specified by
    /// `period()` and `offset()`.
    ///
    /// Default value is None.
    fn exemptions_period(&self) -> Option<usize> {
        None
    }

    /// The offset value for periodic exemptions. Check documentation of `period()`,
    /// `offset()` and `exemptions_period` for a better understanding.
    fn periodic_exemptions_offset(&self) -> Option<usize> {
        None
    }

    /// The number of exemptions at the end of the trace.
    ///
    /// This method's output defines what trace elements should not be considered for
    /// the constraint evaluation at the end of the trace. For example, for a fibonacci
    /// computation that has to use the result 2 following steps, this method is defined
    /// to return the value 2.
    fn end_exemptions(&self) -> usize;

    /// Evaluate the `eval_point` in the polynomial that vanishes in all the exemptions points.
    fn evaluate_end_exemptions_poly(
        &self,
        eval_point: &CirclePoint<F>,
        // `trace_group_generator` can be calculated with `trace_length` but it is better to precompute it
        trace_group_generator: &CirclePoint<F>,
        trace_length: usize,
    ) -> FieldElement<F> {
        let one = FieldElement::<F>::one();
        if self.end_exemptions() == 0 {
            return one;
        }
        let period = self.period();
        // This accumulates evaluations of the point at the zerofier at all the offsets positions.
        (1..=self.end_exemptions())
            .map(|exemption| trace_group_generator * ((trace_length - exemption * period) as u128))
            .fold(one.clone(), |acc, vanishing_point| {
                acc * ((eval_point + vanishing_point.conjugate()).x - &one)
            })
    }

    /// Compute evaluations of the constraints zerofier over a LDE domain.
    /// TODO: See if we can evaluate using cfft.
    /// TODO: See if we can optimize computing only some evaluations and cycle them as in regular stark.
    #[allow(unstable_name_collisions)]
    fn zerofier_evaluations_on_extended_domain(&self, domain: &Domain<F>) -> Vec<FieldElement<F>> {
        let blowup_factor = domain.blowup_factor;
        let trace_length = domain.trace_length;
        let trace_log_2_size = trace_length.trailing_zeros();
        let lde_log_2_size = (blowup_factor * trace_length).trailing_zeros();
        let trace_group_generator = &domain.trace_group_generator;

        // if let Some(exemptions_period) = self.exemptions_period() {

        // } else {

        let lde_points = &domain.lde_coset_points;

        let mut zerofier_evaluations: Vec<_> = lde_points
            .iter()
            .map(|point| {
                // TODO: Is there a way to avoid this clone()?
                let mut x = point.x.clone();
                for _ in 1..trace_log_2_size {
                    x = x.square().double() - FieldElement::<F>::one();
                }
                x
            })
            .collect();
        FieldElement::inplace_batch_inverse(&mut zerofier_evaluations).unwrap();

        let end_exemptions_evaluations: Vec<_> = lde_points
            .iter()
            .map(|point| {
                self.evaluate_end_exemptions_poly(point, trace_group_generator, trace_length)
            })
            .collect();

        std::iter::zip(zerofier_evaluations, end_exemptions_evaluations)
            .map(|(eval, exemptions_eval)| eval * exemptions_eval)
            .collect()
    }

    /// Returns the evaluation of the zerofier corresponding to this constraint in some point
    /// `eval_point`, (which is in the circle over the extension field).
    #[allow(unstable_name_collisions)]
    fn evaluate_zerofier(
        &self,
        eval_point: &CirclePoint<F>,
        trace_group_generator: &CirclePoint<F>,
        trace_length: usize,
    ) -> FieldElement<F> {
        // if let Some(exemptions_period) = self.exemptions_period() {

        // } else {

        let end_exemptions_evaluation =
            self.evaluate_end_exemptions_poly(eval_point, trace_group_generator, trace_length);

        let trace_log_2_size = trace_length.trailing_zeros();
        let mut x = eval_point.x.clone();
        for _ in 1..trace_log_2_size {
            x = x.square().double() - FieldElement::<F>::one();
        }

        x.inv().unwrap() * end_exemptions_evaluation
    }
}
