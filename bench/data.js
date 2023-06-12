window.BENCHMARK_DATA = {
  "lastUpdate": 1686610212657,
  "repoUrl": "https://github.com/lambdaclass/lambdaworks",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "943963cdfb977c2f54bf6dca60e5475985c30606",
          "message": "Add cairo memory and range check constraints (#337)\n\n* add trace commitments to transcript\n\n* move sampling of z to round 3\n\n* add batch_commit function\n\n* add commitments of the composition polynomial to the transcript\n\n* refactor sampling of boundary and transition coefficients\n\n* add ood evaluations to transcript\n\n* minor refactor\n\n* move sample batch to lib\n\n* extract deep composition randomness to round 4\n\n* refactor fri commitment phase\n\n* refactor next_fri_layer\n\n* remove last iteration of fri commit phase\n\n* refactor fri_commit_phase\n\n* move sampling of q_0 to query phase. Rename\n\n* refactor fri decommitment\n\n* add fri last value to proof and remove it from decommitments\n\n* remove layers commitments from decommitment\n\n* remove unused FriQuery struct\n\n* leave only symmetric points in the proof\n\n* remove unnecesary last fri layer\n\n* reuse composition poly evaluations from round_1 in the consistency check\n\n* minor refactor\n\n* fix trace ood commitments and small refactor\n\n* move fri_query_phase to fri mod\n\n* minor refactor in build deeep composition poly function\n\n* refactor deep composition poly related code\n\n* minor modifications to comments\n\n* clippy\n\n* add comments\n\n* move iota sampling to step 0 and rename challenges\n\n* minor refactor and add missing opening checks\n\n* minor refactor\n\n* move transition divisor computation outside of the main loop of the computation of the composition polynomial\n\n* add protocol to docs\n\n* clippy and fmt\n\n* remove old test\n\n* fix typo\n\n* fmt\n\n* remove unnecessary public attribute\n\n* move build_execution trace to round 1\n\n* add rap support to air\n\n* remove commit_original_trace function\n\n* Add auxiliary trace polynomials and commitments in the first round\n\n* Test simple fibonacci\n\n* fix format in starks protocol docs\n\n* fmt, clippy\n\n* remove comments, add sampling of cairo rap\n\n* add commented test\n\n* remove old test\n\n* First step of memory constraints\n\n* Add public input to AIR. Build auxiliary columns for Cairo.\n\n* Fix bug in build_aux\n\n* Cargo fmt\n\n* fix aux table bug\n\n* fix number_auxiliary_rap_columns\n\n* Remove program_size parameter for CairoAIR\n\n* Refactor merge PublicInputs\n\n* Add transition degree in fibonacci rap\n\n* Tests for build auxiliary trace\n\n* Add auxiliary transition constraints for memory\n\n* Add final permutation argumentation boundary auxiliary constraint\n\n* WIP: boundary memory constraints\n\n* fix memory indexing\n\n* make public input mutable argument of build_main_trace\n\n* add range check column build function\n\n* Add missing values in offsets columns. Concatenate sorted offsets to original trace\n\n* add test to concatenate. Fix offset variables\n\n* add permutation argument column for range checks\n\n* add range_check permutation argument transition constraints\n\n* add range checks continuity transition constraints\n\n* Add debug assertion for verifying divisibility of transition polynomials by their zerofiers\n\n* Add boundary constraint for range checks\n\n* Add boundary constraints range check min and max\n\n* Add dummy AIR and test to debug\n\n* fix evaluate_polynomial_on_lde_domain\n\n* Remove default implementation for number of auxiliary RAP columns\n\n* fix composition poly bound degree\n\n* remove unused public input attribute\n\n* clippy\n\n* fix dummy test\n\n* Remove check polynomial divisibility\n\n* Add test of malicious program\n\n* Add simple_program.json for testing purposes\n\n* Remove some useless commented code\n\n* Fix: malicious test uses also malicious memory\n\n* Cargo\n\n* Add comments\n\n* comment transition exemptions vector\n\n* update stark protocol to include range checks\n\n* use markdown auto numbered lists\n\n* Ignore test_prove_cairo_simple_program for Metal\n\n* move boundary term degree adjustment power out of the closure\n\n* Add test for range checks. Rename malicious test.\n\n* Helper function to load cairo programs and memory\n\n* Return Error when trace length is not enough for the Cairo trace to fit in\n\n* Return an error when trace length is not large enough. Add larger\nfibonacci tests.\n\n* clippy\n\n* ignore large test cases\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>\nCo-authored-by: Mariano Nicolini <mariano.nicolini.91@gmail.com>\nCo-authored-by: Sergio Chouhy <schouhy@eryxsoluciones.com.ar>",
          "timestamp": "2023-05-25T09:40:44Z",
          "tree_id": "cd9853079a2588775eb36934c8d10b13ec7c0046",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/943963cdfb977c2f54bf6dca60e5475985c30606"
        },
        "date": 1685007989914,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 131503467,
            "range": "± 4314482",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 248141614,
            "range": "± 19962184",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 481096083,
            "range": "± 2121285",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 975324958,
            "range": "± 8794766",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34464143,
            "range": "± 250819",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68014087,
            "range": "± 438897",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132877031,
            "range": "± 631354",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278139822,
            "range": "± 3846727",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31187599,
            "range": "± 345414",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58582782,
            "range": "± 988400",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 122859854,
            "range": "± 3210673",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 263854364,
            "range": "± 20041801",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164858428,
            "range": "± 751532",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 331561989,
            "range": "± 1197276",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 653177895,
            "range": "± 4825007",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1302930104,
            "range": "± 10709339",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 456422531,
            "range": "± 1391724",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 915871750,
            "range": "± 5743565",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1800456646,
            "range": "± 3952873",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3535342542,
            "range": "± 16118794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "943963cdfb977c2f54bf6dca60e5475985c30606",
          "message": "Add cairo memory and range check constraints (#337)\n\n* add trace commitments to transcript\n\n* move sampling of z to round 3\n\n* add batch_commit function\n\n* add commitments of the composition polynomial to the transcript\n\n* refactor sampling of boundary and transition coefficients\n\n* add ood evaluations to transcript\n\n* minor refactor\n\n* move sample batch to lib\n\n* extract deep composition randomness to round 4\n\n* refactor fri commitment phase\n\n* refactor next_fri_layer\n\n* remove last iteration of fri commit phase\n\n* refactor fri_commit_phase\n\n* move sampling of q_0 to query phase. Rename\n\n* refactor fri decommitment\n\n* add fri last value to proof and remove it from decommitments\n\n* remove layers commitments from decommitment\n\n* remove unused FriQuery struct\n\n* leave only symmetric points in the proof\n\n* remove unnecesary last fri layer\n\n* reuse composition poly evaluations from round_1 in the consistency check\n\n* minor refactor\n\n* fix trace ood commitments and small refactor\n\n* move fri_query_phase to fri mod\n\n* minor refactor in build deeep composition poly function\n\n* refactor deep composition poly related code\n\n* minor modifications to comments\n\n* clippy\n\n* add comments\n\n* move iota sampling to step 0 and rename challenges\n\n* minor refactor and add missing opening checks\n\n* minor refactor\n\n* move transition divisor computation outside of the main loop of the computation of the composition polynomial\n\n* add protocol to docs\n\n* clippy and fmt\n\n* remove old test\n\n* fix typo\n\n* fmt\n\n* remove unnecessary public attribute\n\n* move build_execution trace to round 1\n\n* add rap support to air\n\n* remove commit_original_trace function\n\n* Add auxiliary trace polynomials and commitments in the first round\n\n* Test simple fibonacci\n\n* fix format in starks protocol docs\n\n* fmt, clippy\n\n* remove comments, add sampling of cairo rap\n\n* add commented test\n\n* remove old test\n\n* First step of memory constraints\n\n* Add public input to AIR. Build auxiliary columns for Cairo.\n\n* Fix bug in build_aux\n\n* Cargo fmt\n\n* fix aux table bug\n\n* fix number_auxiliary_rap_columns\n\n* Remove program_size parameter for CairoAIR\n\n* Refactor merge PublicInputs\n\n* Add transition degree in fibonacci rap\n\n* Tests for build auxiliary trace\n\n* Add auxiliary transition constraints for memory\n\n* Add final permutation argumentation boundary auxiliary constraint\n\n* WIP: boundary memory constraints\n\n* fix memory indexing\n\n* make public input mutable argument of build_main_trace\n\n* add range check column build function\n\n* Add missing values in offsets columns. Concatenate sorted offsets to original trace\n\n* add test to concatenate. Fix offset variables\n\n* add permutation argument column for range checks\n\n* add range_check permutation argument transition constraints\n\n* add range checks continuity transition constraints\n\n* Add debug assertion for verifying divisibility of transition polynomials by their zerofiers\n\n* Add boundary constraint for range checks\n\n* Add boundary constraints range check min and max\n\n* Add dummy AIR and test to debug\n\n* fix evaluate_polynomial_on_lde_domain\n\n* Remove default implementation for number of auxiliary RAP columns\n\n* fix composition poly bound degree\n\n* remove unused public input attribute\n\n* clippy\n\n* fix dummy test\n\n* Remove check polynomial divisibility\n\n* Add test of malicious program\n\n* Add simple_program.json for testing purposes\n\n* Remove some useless commented code\n\n* Fix: malicious test uses also malicious memory\n\n* Cargo\n\n* Add comments\n\n* comment transition exemptions vector\n\n* update stark protocol to include range checks\n\n* use markdown auto numbered lists\n\n* Ignore test_prove_cairo_simple_program for Metal\n\n* move boundary term degree adjustment power out of the closure\n\n* Add test for range checks. Rename malicious test.\n\n* Helper function to load cairo programs and memory\n\n* Return Error when trace length is not enough for the Cairo trace to fit in\n\n* Return an error when trace length is not large enough. Add larger\nfibonacci tests.\n\n* clippy\n\n* ignore large test cases\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>\nCo-authored-by: Mariano Nicolini <mariano.nicolini.91@gmail.com>\nCo-authored-by: Sergio Chouhy <schouhy@eryxsoluciones.com.ar>",
          "timestamp": "2023-05-25T09:40:44Z",
          "tree_id": "cd9853079a2588775eb36934c8d10b13ec7c0046",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/943963cdfb977c2f54bf6dca60e5475985c30606"
        },
        "date": 1685010429220,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1627068009,
            "range": "± 10868121",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3892612129,
            "range": "± 77041785",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3395123876,
            "range": "± 5676327",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8552195085,
            "range": "± 61548463",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7067305799,
            "range": "± 6287837",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18341367412,
            "range": "± 89841504",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 14729824848,
            "range": "± 15221688",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 39242362801,
            "range": "± 529624859",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1154489496,
            "range": "± 1383378",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2419840374,
            "range": "± 3255042",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 5072167223,
            "range": "± 4063114",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 10599014256,
            "range": "± 8163458",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 82600361,
            "range": "± 3500586",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 164438756,
            "range": "± 2049624",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 336847889,
            "range": "± 6851403",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 668649937,
            "range": "± 10956530",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2801689561,
            "range": "± 6932607",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5859908944,
            "range": "± 6062540",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 12263922694,
            "range": "± 13167590",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 25435395707,
            "range": "± 17499229",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3012304017,
            "range": "± 3008576",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6302840024,
            "range": "± 2862855",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 13107479122,
            "range": "± 7515206",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 27251055831,
            "range": "± 51458368",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 156,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/8",
            "value": 1383979,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/128",
            "value": 26872750,
            "range": "± 6048",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/256",
            "value": 78151890,
            "range": "± 155968",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/512",
            "value": 255266107,
            "range": "± 346243",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/1024",
            "value": 910254037,
            "range": "± 2644000",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/2 column Fibonacci",
            "value": 949639,
            "range": "± 1163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf93accc0ea0401499c514634dac064dea4f12eb",
          "message": "Remove plonk (#379)\n\n* Remove plonk\r\n\r\n* Update gitignore\r\n\r\n* Remove DS Store",
          "timestamp": "2023-05-25T08:22:13-03:00",
          "tree_id": "87b52a97812cc51b857b130adf551b025d5d176d",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/bf93accc0ea0401499c514634dac064dea4f12eb"
        },
        "date": 1685014089841,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128996345,
            "range": "± 2161765",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256197906,
            "range": "± 1387115",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 487212520,
            "range": "± 5320694",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 981927812,
            "range": "± 10392032",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34196275,
            "range": "± 174178",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67784818,
            "range": "± 507683",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 144628746,
            "range": "± 5204995",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 297874958,
            "range": "± 6323514",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 36963347,
            "range": "± 1943273",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 60371793,
            "range": "± 2779711",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 118825035,
            "range": "± 4304820",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 237915229,
            "range": "± 3152582",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 233118020,
            "range": "± 24756147",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 447166635,
            "range": "± 40835955",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 1136933771,
            "range": "± 20024922",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 2514252854,
            "range": "± 108715456",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 467387260,
            "range": "± 2950213",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 926398229,
            "range": "± 4028138",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1925434333,
            "range": "± 118453923",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 4272485833,
            "range": "± 130077728",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@fcarrone.com",
            "name": "Federico Carrone",
            "username": "unbalancedparentheses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61b26ab9e89e5dcd1c7081fa0beebcde1d58445f",
          "message": "Update README.md (#380)",
          "timestamp": "2023-05-25T13:24:01+02:00",
          "tree_id": "b4ce60a8101c097ba371ae32e56154241e06f554",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/61b26ab9e89e5dcd1c7081fa0beebcde1d58445f"
        },
        "date": 1685014188512,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 138548295,
            "range": "± 4142052",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 267261552,
            "range": "± 9165221",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 648007521,
            "range": "± 79751754",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 1394477104,
            "range": "± 30737531",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 39696783,
            "range": "± 1737617",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 78650968,
            "range": "± 5463998",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 149374437,
            "range": "± 9139138",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 306033593,
            "range": "± 64436788",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31653540,
            "range": "± 426199",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59464131,
            "range": "± 1326287",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 116437808,
            "range": "± 2621343",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 230319027,
            "range": "± 5191552",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 235418187,
            "range": "± 226151387",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 463869875,
            "range": "± 699461639",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 1030519854,
            "range": "± 846841051",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1323081250,
            "range": "± 788981557",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 456829187,
            "range": "± 2019273",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 923789750,
            "range": "± 8540651",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1798817520,
            "range": "± 6020321",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3529748000,
            "range": "± 20291106",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "141a46c422856c12aaae7774ef87bc3d0750c6d9",
          "message": "Revert \"Fix STARK prover benchmarks (#354)\" (#377)\n\nThis reverts commit 3d33d9457b8279f65c959924a39ce029c0386af2.",
          "timestamp": "2023-05-25T06:33:46-03:00",
          "tree_id": "38db3caa9e582c9f2ce243eec16952744cb2b086",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/141a46c422856c12aaae7774ef87bc3d0750c6d9"
        },
        "date": 1685016459610,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1933959696,
            "range": "± 10201072",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4326542461,
            "range": "± 36507459",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3982139426,
            "range": "± 11716186",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9501294073,
            "range": "± 35363840",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 8350178596,
            "range": "± 44327496",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 20582578076,
            "range": "± 75701123",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 17254674438,
            "range": "± 106727089",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 44100180856,
            "range": "± 346088082",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1384578516,
            "range": "± 1612630",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2889094412,
            "range": "± 9397640",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 6056187985,
            "range": "± 24883948",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 12706537350,
            "range": "± 2507022",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 88149995,
            "range": "± 237229",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 178323837,
            "range": "± 761750",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 354394736,
            "range": "± 688306",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 723500737,
            "range": "± 7487269",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 3346004959,
            "range": "± 1278987",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 6997164029,
            "range": "± 76454461",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 14614508169,
            "range": "± 7706202",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 30379950246,
            "range": "± 177683519",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3601798455,
            "range": "± 12974185",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 7441315207,
            "range": "± 18054877",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 15433403239,
            "range": "± 246212417",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 31740618399,
            "range": "± 356354543",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 7273,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 457,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 692,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 479,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 625,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/8",
            "value": 2063329,
            "range": "± 35347",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/128",
            "value": 1022250154,
            "range": "± 5439745",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/256",
            "value": 7844194863,
            "range": "± 39503878",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/512",
            "value": 61461112202,
            "range": "± 337878038",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/Simple Fibonacci/1024",
            "value": 482421826918,
            "range": "± 3758753594",
            "unit": "ns/iter"
          },
          {
            "name": "STARK/2 column Fibonacci",
            "value": 1287608,
            "range": "± 15094",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "estefano.bargas@fing.edu.uy",
            "name": "Estéfano Bargas",
            "username": "xqft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "422e57513d8d9b86b398e92d6ad7ee5d38d9fdbb",
          "message": "Remove stark criterion benches from CI (#381)",
          "timestamp": "2023-05-26T09:43:05Z",
          "tree_id": "ca086bf41de7a431cada702e211811f6dd2d5aa0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/422e57513d8d9b86b398e92d6ad7ee5d38d9fdbb"
        },
        "date": 1685094540574,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128862239,
            "range": "± 2839819",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255122687,
            "range": "± 1532030",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 489138916,
            "range": "± 3858098",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 990766604,
            "range": "± 13359028",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34274338,
            "range": "± 456718",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68168964,
            "range": "± 454163",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133158623,
            "range": "± 1856548",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276797260,
            "range": "± 2332844",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31158982,
            "range": "± 163348",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 55511352,
            "range": "± 3172042",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121245016,
            "range": "± 3315653",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 244752444,
            "range": "± 18522935",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164661518,
            "range": "± 896110",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330912125,
            "range": "± 2079146",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 658372666,
            "range": "± 5263557",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1325714291,
            "range": "± 32731242",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 456346614,
            "range": "± 5027036",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 916959583,
            "range": "± 7885323",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1798091479,
            "range": "± 8205384",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3500912021,
            "range": "± 35355525",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "estefano.bargas@fing.edu.uy",
            "name": "Estéfano Bargas",
            "username": "xqft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "422e57513d8d9b86b398e92d6ad7ee5d38d9fdbb",
          "message": "Remove stark criterion benches from CI (#381)",
          "timestamp": "2023-05-26T09:43:05Z",
          "tree_id": "ca086bf41de7a431cada702e211811f6dd2d5aa0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/422e57513d8d9b86b398e92d6ad7ee5d38d9fdbb"
        },
        "date": 1685096880467,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1634616142,
            "range": "± 2383837",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4211436569,
            "range": "± 34184913",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3407962209,
            "range": "± 3314629",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9184112146,
            "range": "± 31731647",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7110200009,
            "range": "± 8491203",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 19752949141,
            "range": "± 39798555",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 14807727014,
            "range": "± 7382567",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 41758891522,
            "range": "± 280311277",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1153713185,
            "range": "± 193935",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2420380570,
            "range": "± 1234613",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 5068030527,
            "range": "± 1324635",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 10590095795,
            "range": "± 2647691",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 90929473,
            "range": "± 678481",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 186140236,
            "range": "± 957974",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 369233463,
            "range": "± 2074842",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 747496636,
            "range": "± 4758684",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2817214873,
            "range": "± 3865601",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5885693918,
            "range": "± 3473009",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 12282137835,
            "range": "± 4838269",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 25565152920,
            "range": "± 22685614",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3047168630,
            "range": "± 1821828",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6343230987,
            "range": "± 3142128",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 13187689925,
            "range": "± 5445118",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 27420739663,
            "range": "± 13250606",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 6063,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 390,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 594,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 429,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mariano.nicolini.91@gmail.com",
            "name": "Mariano A. Nicolini",
            "username": "entropidelic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "599b356aaa37f3971e507eb00d3f6860140c7a51",
          "message": "Change field in math benchmarks to Stark field (#383)",
          "timestamp": "2023-05-26T08:41:24-03:00",
          "tree_id": "4bc60338d977e43fec8596b93e7bbe35e9ce81e3",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/599b356aaa37f3971e507eb00d3f6860140c7a51"
        },
        "date": 1685101615493,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128448479,
            "range": "± 3339125",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254473562,
            "range": "± 2625581",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 483488677,
            "range": "± 4896354",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 984364250,
            "range": "± 14278988",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 33974463,
            "range": "± 242793",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67609252,
            "range": "± 624949",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133146864,
            "range": "± 806196",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 275412312,
            "range": "± 2999974",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 30793910,
            "range": "± 288014",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59052981,
            "range": "± 479872",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121317833,
            "range": "± 4584346",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 248518187,
            "range": "± 20718994",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163162751,
            "range": "± 757268",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329741489,
            "range": "± 3501862",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 660018354,
            "range": "± 2889649",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1304457479,
            "range": "± 22631424",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 459235854,
            "range": "± 1445626",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 909413749,
            "range": "± 6058018",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1796377875,
            "range": "± 8899692",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3537617812,
            "range": "± 24256173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mariano.nicolini.91@gmail.com",
            "name": "Mariano A. Nicolini",
            "username": "entropidelic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "599b356aaa37f3971e507eb00d3f6860140c7a51",
          "message": "Change field in math benchmarks to Stark field (#383)",
          "timestamp": "2023-05-26T08:41:24-03:00",
          "tree_id": "4bc60338d977e43fec8596b93e7bbe35e9ce81e3",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/599b356aaa37f3971e507eb00d3f6860140c7a51"
        },
        "date": 1685103902746,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1620400245,
            "range": "± 2109808",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3901033234,
            "range": "± 21351887",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3383611397,
            "range": "± 13880794",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8500882439,
            "range": "± 10655422",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7055064460,
            "range": "± 6694192",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18326411754,
            "range": "± 22871303",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 14707618495,
            "range": "± 12413474",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 39031886940,
            "range": "± 64380359",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1154286793,
            "range": "± 591655",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2420862095,
            "range": "± 1127819",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 5070668836,
            "range": "± 770846",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 10592744685,
            "range": "± 1688423",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 80226064,
            "range": "± 254664",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 160893718,
            "range": "± 1039781",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 323701124,
            "range": "± 986893",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 665185068,
            "range": "± 2977145",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2800154306,
            "range": "± 2400760",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5856080738,
            "range": "± 4977462",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 12224620705,
            "range": "± 9050254",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 25491883778,
            "range": "± 11588209",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3024642325,
            "range": "± 3317181",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6305694321,
            "range": "± 5635069",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 13116540894,
            "range": "± 7809667",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 27275264044,
            "range": "± 7337233",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 157,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 119,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanbono94@gmail.com",
            "name": "Juan Bono",
            "username": "juanbono"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5b938d27bc2436738acfa70efd1888769f50417",
          "message": "inline cios (#385)",
          "timestamp": "2023-05-26T12:50:44-03:00",
          "tree_id": "7a28a497c70e7403855ca44a4a3f91dbab111421",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/b5b938d27bc2436738acfa70efd1888769f50417"
        },
        "date": 1685116636228,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 139023706,
            "range": "± 3798061",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 274355448,
            "range": "± 40377570",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 679639166,
            "range": "± 13961238",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 1411421666,
            "range": "± 9222080",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 37506242,
            "range": "± 1493951",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 75255769,
            "range": "± 1622221",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 197671125,
            "range": "± 4893877",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 408291781,
            "range": "± 18822115",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31915074,
            "range": "± 483034",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58831920,
            "range": "± 3883532",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 123617891,
            "range": "± 1908210",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 262964861,
            "range": "± 14086123",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 180152794,
            "range": "± 8438447",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 439557198,
            "range": "± 14850367",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 829112458,
            "range": "± 46207746",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1798563812,
            "range": "± 118789330",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 646727771,
            "range": "± 104040964",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 1389940687,
            "range": "± 170147403",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 2788698937,
            "range": "± 245589989",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 5652175020,
            "range": "± 212068806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mariano.nicolini.91@gmail.com",
            "name": "Mariano A. Nicolini",
            "username": "entropidelic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75423a1b88fbcb2bf0308db445e268f416c377b7",
          "message": "Add div2 method for unsigned integer (#384)\n\n* Add div2 method for unsigned integer\r\n\r\n* Add allow unused lint to div2",
          "timestamp": "2023-05-26T12:50:55-03:00",
          "tree_id": "eb808a4e18c044afc8ed78fccb234b573b9e15ff",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/75423a1b88fbcb2bf0308db445e268f416c377b7"
        },
        "date": 1685116647015,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 177425354,
            "range": "± 19715929",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 356192635,
            "range": "± 51595596",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 723433375,
            "range": "± 103802590",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 1891749437,
            "range": "± 90264516",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 49592187,
            "range": "± 2149559",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 102263721,
            "range": "± 4768830",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 144363889,
            "range": "± 4866306",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 289644416,
            "range": "± 1116331",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 33289374,
            "range": "± 1026064",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 61763675,
            "range": "± 1088559",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 123997493,
            "range": "± 9251694",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 243264541,
            "range": "± 2981588",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 219911382,
            "range": "± 2113325",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 442038781,
            "range": "± 3915094",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 939331187,
            "range": "± 63262423",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1824562396,
            "range": "± 231752047",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 945180708,
            "range": "± 255024695",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 1444856771,
            "range": "± 507967617",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 2780987146,
            "range": "± 799474611",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 5509832187,
            "range": "± 1103182473",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanbono94@gmail.com",
            "name": "Juan Bono",
            "username": "juanbono"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5b938d27bc2436738acfa70efd1888769f50417",
          "message": "inline cios (#385)",
          "timestamp": "2023-05-26T12:50:44-03:00",
          "tree_id": "7a28a497c70e7403855ca44a4a3f91dbab111421",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/b5b938d27bc2436738acfa70efd1888769f50417"
        },
        "date": 1685118496300,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1445614152,
            "range": "± 1136047",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3448184691,
            "range": "± 16050906",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3019672325,
            "range": "± 4050511",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7590172531,
            "range": "± 27894992",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6292952189,
            "range": "± 5445270",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 16299191638,
            "range": "± 55996357",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13110274562,
            "range": "± 5142054",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 34646588858,
            "range": "± 308440990",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 850170750,
            "range": "± 1021564",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 1786644564,
            "range": "± 1374322",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 3742125702,
            "range": "± 1730124",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 7834755149,
            "range": "± 2365538",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 74638583,
            "range": "± 2456884",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 160451887,
            "range": "± 2167788",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 319943870,
            "range": "± 2911558",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 644542042,
            "range": "± 1479996",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2320571599,
            "range": "± 8355280",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 4858260753,
            "range": "± 4434250",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 10140975131,
            "range": "± 5498498",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 21128565537,
            "range": "± 16430723",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2505804719,
            "range": "± 2922835",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 5215635040,
            "range": "± 3834271",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 10862655565,
            "range": "± 25016345",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 22566989543,
            "range": "± 27860902",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 6067,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 390,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 599,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 411,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 527,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mariano.nicolini.91@gmail.com",
            "name": "Mariano A. Nicolini",
            "username": "entropidelic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75423a1b88fbcb2bf0308db445e268f416c377b7",
          "message": "Add div2 method for unsigned integer (#384)\n\n* Add div2 method for unsigned integer\r\n\r\n* Add allow unused lint to div2",
          "timestamp": "2023-05-26T12:50:55-03:00",
          "tree_id": "eb808a4e18c044afc8ed78fccb234b573b9e15ff",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/75423a1b88fbcb2bf0308db445e268f416c377b7"
        },
        "date": 1685118966163,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1464190653,
            "range": "± 24212917",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4400543919,
            "range": "± 106188162",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3224313447,
            "range": "± 226649788",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9251506270,
            "range": "± 86360203",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7115663339,
            "range": "± 512993840",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 21213003976,
            "range": "± 60714149",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 15537765566,
            "range": "± 58788765",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 44793845231,
            "range": "± 127397248",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1027712395,
            "range": "± 9794195",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2162366590,
            "range": "± 19311961",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 4523169564,
            "range": "± 20721607",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 9509305056,
            "range": "± 42444077",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 102029428,
            "range": "± 2341254",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 203506397,
            "range": "± 3609861",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 413303962,
            "range": "± 6378264",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 834003113,
            "range": "± 11822526",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2774734779,
            "range": "± 16699167",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5812065798,
            "range": "± 17473414",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 12153190424,
            "range": "± 45455780",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 25317365738,
            "range": "± 76107074",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3003548849,
            "range": "± 22236738",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6267089099,
            "range": "± 28727457",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 13024884967,
            "range": "± 43747888",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 26999689778,
            "range": "± 126216471",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 98,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 416,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 141,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 234,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 185,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 186,
            "range": "± 37",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maigonzalez@fi.uba.ar",
            "name": "Matías Ignacio González",
            "username": "matias-gonz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6ffed48b1b96d55ff6d994195822c0e5b36acf9",
          "message": "Add gen_twiddles implementation in CUDA (#310)\n\n* Added cuda mod and poc\n\n* Finished poc\n\n* Working CUDA FFT POC\n\n* Added cuda ptx compilation make rule\n\n* Added CUDA u256 prime field\n\n* Added CI job for testing with CUDA\n\n* Add CUDAFieldElement\n\n* Added support for u256 montgomery field\n\n* Remove unwrap()s\n\n* Add evaluate_fft_cuda\n\n* Remove default feature cuda\n\n* Remove default feature cuda\n\n* Remove unnecessary reference\n\n* Fix clippy errors\n\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\n\n* Fix benches error\n\n* Rename `IsTwoAdicField` -> `IsFFTField`\n\n* Fix cannot find function error\n\n* Add TODO\n\n* Interpolate fft cuda (#300)\n\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\n\n* Add error handling for CUDA's fft implementation (#301)\n\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\n\n* Remove unwrap from interpolate_fft\n\n* Add calc_twiddles* CUDA functions\n\n* Fix CUDA compile errors\n\n* Fix more CUDA compile errors\n\n* Recompile metallib\n\n* Separate twiddle functions into different files\n\n* Update makefile\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Recombine all twiddles functions in the same file\n\nSomething's up with `Fp256::inverse`.\nUsing the function inside a kernel causes compilation to freeze.\n\n* Comment out `calc_twiddles*_inv` functions\n\nThese functions slow down compilation to a halt, and are equivalent to calling `calc_twiddles*` with an inverted `_omega`\n\n* Refactor get_twiddles so that it uses cuda\n\n* Fix PTX\n\n* Fix compile errors\n\n* Fix CUDAFelt from\n\n* Fix comparision chain\n\n* Add missing slice\n\n* Add missing type annotation\n\n* Change ? to unwrap\n\n* Remove reference\n\n* Change input param type\n\n* Update param types\n\n* Update calc_twiddles_bitrev\n\n* Change root\n\n* Load all functions\n\n* Change types to unsigned\n\n* Refactor reference\n\n* Update LaunchConfig\n\n* Update Block size\n\n* Use vec!\n\n* Update blockdim\n\n* Refactor twiddles\n\n* Add twiddles.ptx\n\n* Fix imports\n\n* Remove unwraps\n\n* Fix errors\n\n* Add map_err\n\n* Add missing map_err\n\n* Remove unused import\n\n* Update interpolate_fft\n\n* Integrate _CUDA_ implementation with _fft_ crate (#298)\n\n* Add evaluate_fft_cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove unnecessary reference\r\n\r\n* Fix clippy errors\r\n\r\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\r\n\r\n* Fix benches error\r\n\r\n* Fix cannot find function error\r\n\r\n* Add TODO\r\n\r\n* Interpolate fft cuda (#300)\r\n\r\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\r\n\r\n* Add error handling for CUDA's fft implementation (#301)\r\n\r\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\r\n\r\n* Remove unwrap from interpolate_fft\r\n\r\n* Add `CudaState` as a wrapper around cudarc primitives (#311)\r\n\r\n* Add CudaState\r\n\r\n* Use CudaState in `fft` function\r\n\r\n* Remove old attributes\r\n\r\n* Remove `unwrap`s in Metal and Cuda state init\r\n\r\n* Extract library loading to helper function\r\n\r\n* Fix compilation errors and move LaunchConfig use\r\n\r\n* Remove unnecesary modulo operation\r\n\r\nThe `threadIdx.x` builtin variable goes from 0 to `blockDim.x` (non-inclusive) so we don't need the modulo.\r\n\r\n* Add bounds checking to launch\r\n\r\n* Fix compilation errors\r\n\r\n* Fix all compile errors\r\n\r\n* Recompile fft.ptx\r\n\r\n---------\r\n\r\nCo-authored-by: matias-gonz <maigonzalez@fi.uba.ar>\n\n* Fix compile error\n\n* Fix compilation errors\n\n* Use prop_assert_eq instead of assert_eq\n\n* Remove unused fp.cuh\n\n* Don't use `prop_filter` for `field_vec`\n\nThe use of `prop_filter` slows tests down, and can cause nondeterministic test failures when the filter function true/false ratio is too low.\nIn this case, using it would cause tests with a too high max exponent to fail.\n\n* Refactor index calculation in CUDA\n\n* Fix compile errors\n\n* Update evaluate fft cuda call\n\n* Update evaluate_fft_cpu call\n\n* Remove repeated code\n\n* Remove unused constant\n\n* Add missing cfg not cuda\n\n* Fix cfg\n\n* Refactor gen_twiddles using CudaState\n\n* Fix compile errors\n\n* Add state to function call\n\n* Update GenTwiddles.launch\n\n* Fix warnings\n\n* Remove cfg\n\n* Fix cfg\n\n* Update felt condition\n\n* Remove mut\n\n* Update error\n\n* Change library import\n\n* Add namespace\n\n* Update block dim\n\n* Add casts\n\n* Fix unsigned\n\n* Update makefile\n\n* Add turbofish to gen_twiddles\n\n* Add turbofish to get_calc_twiddles\n\n* Comment code\n\n* Update omega param\n\n* Update block dim\n\n* Add assert\n\n* Add casts\n\n* Update twiddles\n\n* Fix map\n\n* Add type annotation\n\n* Add turbo fish\n\n* Add type annotation\n\n* Fix turbofish\n\n* Fix turbofish type annotation\n\n* Add assert\n\n* Add guard clause\n\n* Implement gen_twiddles in stark256 file\n\n* Template twiddles\n\n* Fix Fp\n\n* Delete unused files\n\n* Update stark256.ptx\n\n---------\n\nCo-authored-by: Estéfano Bargas <estefano.bargas@fing.edu.uy>\nCo-authored-by: Tomás <tomas.gruner@lambdaclass.com>\nCo-authored-by: Tomás <47506558+MegaRedHand@users.noreply.github.com>",
          "timestamp": "2023-05-30T17:41:04Z",
          "tree_id": "ab6fbb42e4c0110bdeea2208f947ab886c6858db",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f6ffed48b1b96d55ff6d994195822c0e5b36acf9"
        },
        "date": 1685468802616,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130098540,
            "range": "± 3309219",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 251694083,
            "range": "± 2968183",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 483093718,
            "range": "± 8068407",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 970608937,
            "range": "± 6512765",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34261828,
            "range": "± 957463",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 66812522,
            "range": "± 164271",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132622764,
            "range": "± 1145791",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 269387677,
            "range": "± 903740",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 28263531,
            "range": "± 579054",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 54719935,
            "range": "± 2751650",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 115147860,
            "range": "± 4311363",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 266345874,
            "range": "± 22053390",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164079142,
            "range": "± 1596455",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329493322,
            "range": "± 1480319",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650504000,
            "range": "± 4874076",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1305697687,
            "range": "± 16203418",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 447179135,
            "range": "± 1542227",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 901440021,
            "range": "± 4317688",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1749579875,
            "range": "± 14298011",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3473994895,
            "range": "± 12999047",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maigonzalez@fi.uba.ar",
            "name": "Matías Ignacio González",
            "username": "matias-gonz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6ffed48b1b96d55ff6d994195822c0e5b36acf9",
          "message": "Add gen_twiddles implementation in CUDA (#310)\n\n* Added cuda mod and poc\n\n* Finished poc\n\n* Working CUDA FFT POC\n\n* Added cuda ptx compilation make rule\n\n* Added CUDA u256 prime field\n\n* Added CI job for testing with CUDA\n\n* Add CUDAFieldElement\n\n* Added support for u256 montgomery field\n\n* Remove unwrap()s\n\n* Add evaluate_fft_cuda\n\n* Remove default feature cuda\n\n* Remove default feature cuda\n\n* Remove unnecessary reference\n\n* Fix clippy errors\n\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\n\n* Fix benches error\n\n* Rename `IsTwoAdicField` -> `IsFFTField`\n\n* Fix cannot find function error\n\n* Add TODO\n\n* Interpolate fft cuda (#300)\n\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\n\n* Add error handling for CUDA's fft implementation (#301)\n\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\n\n* Remove unwrap from interpolate_fft\n\n* Add calc_twiddles* CUDA functions\n\n* Fix CUDA compile errors\n\n* Fix more CUDA compile errors\n\n* Recompile metallib\n\n* Separate twiddle functions into different files\n\n* Update makefile\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Recombine all twiddles functions in the same file\n\nSomething's up with `Fp256::inverse`.\nUsing the function inside a kernel causes compilation to freeze.\n\n* Comment out `calc_twiddles*_inv` functions\n\nThese functions slow down compilation to a halt, and are equivalent to calling `calc_twiddles*` with an inverted `_omega`\n\n* Refactor get_twiddles so that it uses cuda\n\n* Fix PTX\n\n* Fix compile errors\n\n* Fix CUDAFelt from\n\n* Fix comparision chain\n\n* Add missing slice\n\n* Add missing type annotation\n\n* Change ? to unwrap\n\n* Remove reference\n\n* Change input param type\n\n* Update param types\n\n* Update calc_twiddles_bitrev\n\n* Change root\n\n* Load all functions\n\n* Change types to unsigned\n\n* Refactor reference\n\n* Update LaunchConfig\n\n* Update Block size\n\n* Use vec!\n\n* Update blockdim\n\n* Refactor twiddles\n\n* Add twiddles.ptx\n\n* Fix imports\n\n* Remove unwraps\n\n* Fix errors\n\n* Add map_err\n\n* Add missing map_err\n\n* Remove unused import\n\n* Update interpolate_fft\n\n* Integrate _CUDA_ implementation with _fft_ crate (#298)\n\n* Add evaluate_fft_cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove unnecessary reference\r\n\r\n* Fix clippy errors\r\n\r\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\r\n\r\n* Fix benches error\r\n\r\n* Fix cannot find function error\r\n\r\n* Add TODO\r\n\r\n* Interpolate fft cuda (#300)\r\n\r\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\r\n\r\n* Add error handling for CUDA's fft implementation (#301)\r\n\r\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\r\n\r\n* Remove unwrap from interpolate_fft\r\n\r\n* Add `CudaState` as a wrapper around cudarc primitives (#311)\r\n\r\n* Add CudaState\r\n\r\n* Use CudaState in `fft` function\r\n\r\n* Remove old attributes\r\n\r\n* Remove `unwrap`s in Metal and Cuda state init\r\n\r\n* Extract library loading to helper function\r\n\r\n* Fix compilation errors and move LaunchConfig use\r\n\r\n* Remove unnecesary modulo operation\r\n\r\nThe `threadIdx.x` builtin variable goes from 0 to `blockDim.x` (non-inclusive) so we don't need the modulo.\r\n\r\n* Add bounds checking to launch\r\n\r\n* Fix compilation errors\r\n\r\n* Fix all compile errors\r\n\r\n* Recompile fft.ptx\r\n\r\n---------\r\n\r\nCo-authored-by: matias-gonz <maigonzalez@fi.uba.ar>\n\n* Fix compile error\n\n* Fix compilation errors\n\n* Use prop_assert_eq instead of assert_eq\n\n* Remove unused fp.cuh\n\n* Don't use `prop_filter` for `field_vec`\n\nThe use of `prop_filter` slows tests down, and can cause nondeterministic test failures when the filter function true/false ratio is too low.\nIn this case, using it would cause tests with a too high max exponent to fail.\n\n* Refactor index calculation in CUDA\n\n* Fix compile errors\n\n* Update evaluate fft cuda call\n\n* Update evaluate_fft_cpu call\n\n* Remove repeated code\n\n* Remove unused constant\n\n* Add missing cfg not cuda\n\n* Fix cfg\n\n* Refactor gen_twiddles using CudaState\n\n* Fix compile errors\n\n* Add state to function call\n\n* Update GenTwiddles.launch\n\n* Fix warnings\n\n* Remove cfg\n\n* Fix cfg\n\n* Update felt condition\n\n* Remove mut\n\n* Update error\n\n* Change library import\n\n* Add namespace\n\n* Update block dim\n\n* Add casts\n\n* Fix unsigned\n\n* Update makefile\n\n* Add turbofish to gen_twiddles\n\n* Add turbofish to get_calc_twiddles\n\n* Comment code\n\n* Update omega param\n\n* Update block dim\n\n* Add assert\n\n* Add casts\n\n* Update twiddles\n\n* Fix map\n\n* Add type annotation\n\n* Add turbo fish\n\n* Add type annotation\n\n* Fix turbofish\n\n* Fix turbofish type annotation\n\n* Add assert\n\n* Add guard clause\n\n* Implement gen_twiddles in stark256 file\n\n* Template twiddles\n\n* Fix Fp\n\n* Delete unused files\n\n* Update stark256.ptx\n\n---------\n\nCo-authored-by: Estéfano Bargas <estefano.bargas@fing.edu.uy>\nCo-authored-by: Tomás <tomas.gruner@lambdaclass.com>\nCo-authored-by: Tomás <47506558+MegaRedHand@users.noreply.github.com>",
          "timestamp": "2023-05-30T17:41:04Z",
          "tree_id": "ab6fbb42e4c0110bdeea2208f947ab886c6858db",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f6ffed48b1b96d55ff6d994195822c0e5b36acf9"
        },
        "date": 1685470638272,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1499796356,
            "range": "± 8555870",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 2448672553,
            "range": "± 21101437",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3129276361,
            "range": "± 1193422",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 5520142408,
            "range": "± 15305800",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6524163066,
            "range": "± 3176275",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 11990290305,
            "range": "± 44997619",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13608311880,
            "range": "± 12204431",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 25404183309,
            "range": "± 178723180",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 939702399,
            "range": "± 220987",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 1974730975,
            "range": "± 514729",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 4142537559,
            "range": "± 7514118",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 8656844018,
            "range": "± 1850522",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 75889551,
            "range": "± 891475",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 151733878,
            "range": "± 979707",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 302940663,
            "range": "± 1377375",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 611703901,
            "range": "± 2228874",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2474656132,
            "range": "± 523690",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5181991238,
            "range": "± 1640416",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 10826851918,
            "range": "± 8217582",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 22613549187,
            "range": "± 9142262",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2651667237,
            "range": "± 6782636",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 5524374021,
            "range": "± 3359061",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 11505257827,
            "range": "± 2875018",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 23930970595,
            "range": "± 16780250",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 8,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 139,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 101,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maigonzalez@fi.uba.ar",
            "name": "Matías Ignacio González",
            "username": "matias-gonz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af9e400fb9371c4ee1bfd6e9264e67ce1e4d9cdc",
          "message": "Add Bitrev permutation in CUDA (#312)\n\n* Added cuda mod and poc\n\n* Finished poc\n\n* Working CUDA FFT POC\n\n* Added cuda ptx compilation make rule\n\n* Added CUDA u256 prime field\n\n* Added CI job for testing with CUDA\n\n* Add CUDAFieldElement\n\n* Added support for u256 montgomery field\n\n* Remove unwrap()s\n\n* Add evaluate_fft_cuda\n\n* Remove default feature cuda\n\n* Remove default feature cuda\n\n* Remove unnecessary reference\n\n* Fix clippy errors\n\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\n\n* Fix benches error\n\n* Rename `IsTwoAdicField` -> `IsFFTField`\n\n* Fix cannot find function error\n\n* Add TODO\n\n* Interpolate fft cuda (#300)\n\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\n\n* Add error handling for CUDA's fft implementation (#301)\n\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\n\n* Remove unwrap from interpolate_fft\n\n* Add calc_twiddles* CUDA functions\n\n* Fix CUDA compile errors\n\n* Fix more CUDA compile errors\n\n* Recompile metallib\n\n* Separate twiddle functions into different files\n\n* Update makefile\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Recombine all twiddles functions in the same file\n\nSomething's up with `Fp256::inverse`.\nUsing the function inside a kernel causes compilation to freeze.\n\n* Comment out `calc_twiddles*_inv` functions\n\nThese functions slow down compilation to a halt, and are equivalent to calling `calc_twiddles*` with an inverted `_omega`\n\n* Refactor get_twiddles so that it uses cuda\n\n* Fix PTX\n\n* Fix compile errors\n\n* Fix CUDAFelt from\n\n* Fix comparision chain\n\n* Add missing slice\n\n* Add missing type annotation\n\n* Change ? to unwrap\n\n* Remove reference\n\n* Change input param type\n\n* Update param types\n\n* Update calc_twiddles_bitrev\n\n* Change root\n\n* Load all functions\n\n* Change types to unsigned\n\n* Refactor reference\n\n* Update LaunchConfig\n\n* Update Block size\n\n* Use vec!\n\n* Update blockdim\n\n* Refactor twiddles\n\n* Add twiddles.ptx\n\n* Fix imports\n\n* Remove unwraps\n\n* Fix errors\n\n* Add map_err\n\n* Add missing map_err\n\n* Remove unused import\n\n* Update interpolate_fft\n\n* Add bitrev_permutation in CUDA\n\n* Fix function signature\n\n* Add bitrev_permutation in cuda interface\n\n* Fix compilation errors\n\n* Change usize into u64\n\n* Add bitrev_permutation.ptx\n\n* Integrate _CUDA_ implementation with _fft_ crate (#298)\n\n* Add evaluate_fft_cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove unnecessary reference\r\n\r\n* Fix clippy errors\r\n\r\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\r\n\r\n* Fix benches error\r\n\r\n* Fix cannot find function error\r\n\r\n* Add TODO\r\n\r\n* Interpolate fft cuda (#300)\r\n\r\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\r\n\r\n* Add error handling for CUDA's fft implementation (#301)\r\n\r\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\r\n\r\n* Remove unwrap from interpolate_fft\r\n\r\n* Add `CudaState` as a wrapper around cudarc primitives (#311)\r\n\r\n* Add CudaState\r\n\r\n* Use CudaState in `fft` function\r\n\r\n* Remove old attributes\r\n\r\n* Remove `unwrap`s in Metal and Cuda state init\r\n\r\n* Extract library loading to helper function\r\n\r\n* Fix compilation errors and move LaunchConfig use\r\n\r\n* Remove unnecesary modulo operation\r\n\r\nThe `threadIdx.x` builtin variable goes from 0 to `blockDim.x` (non-inclusive) so we don't need the modulo.\r\n\r\n* Add bounds checking to launch\r\n\r\n* Fix compilation errors\r\n\r\n* Fix all compile errors\r\n\r\n* Recompile fft.ptx\r\n\r\n---------\r\n\r\nCo-authored-by: matias-gonz <maigonzalez@fi.uba.ar>\n\n* Fix compile error\n\n* Fix compilation errors\n\n* Use prop_assert_eq instead of assert_eq\n\n* Remove unused fp.cuh\n\n* Don't use `prop_filter` for `field_vec`\n\nThe use of `prop_filter` slows tests down, and can cause nondeterministic test failures when the filter function true/false ratio is too low.\nIn this case, using it would cause tests with a too high max exponent to fail.\n\n* Refactor index calculation in CUDA\n\n* Fix compile errors\n\n* Update evaluate fft cuda call\n\n* Update evaluate_fft_cpu call\n\n* Remove repeated code\n\n* Remove unused constant\n\n* Add missing cfg not cuda\n\n* Fix cfg\n\n* Refactor gen_twiddles using CudaState\n\n* Fix compile errors\n\n* Add state to function call\n\n* Update GenTwiddles.launch\n\n* Fix warnings\n\n* Remove cfg\n\n* Refactor bitrev_permutation using CudaState\n\n* Fix get_bitrev_permutation\n\n* Fix block_dim\n\n* Fix group size\n\n* Fix get_bitrev_permutation call\n\n* Remove unused state variable\n\n* Fix warnings\n\n* Add bitrev_permutation\n\n* Update makefile\n\n* Update make build-cuda\n\n* Upodate build-cuda\n\n* Update build-cuda\n\n* Template bitrev_permutation\n\n* Update stark256.ptx\n\n* Delete unused clone and add explaining comment\n\n---------\n\nCo-authored-by: Estéfano Bargas <estefano.bargas@fing.edu.uy>\nCo-authored-by: Tomás <tomas.gruner@lambdaclass.com>\nCo-authored-by: Tomás <47506558+MegaRedHand@users.noreply.github.com>",
          "timestamp": "2023-05-30T18:34:02Z",
          "tree_id": "d5d2dae9d2c8749bb6b6968f6bd64bd41b9e7a58",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/af9e400fb9371c4ee1bfd6e9264e67ce1e4d9cdc"
        },
        "date": 1685471983066,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130904441,
            "range": "± 2376782",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255556708,
            "range": "± 2353656",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 493369833,
            "range": "± 1167629",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 969144354,
            "range": "± 7066289",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34239009,
            "range": "± 270801",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68171980,
            "range": "± 755465",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132849912,
            "range": "± 772739",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276344656,
            "range": "± 3569298",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31048995,
            "range": "± 320332",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 57916308,
            "range": "± 3691493",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 118081941,
            "range": "± 8888764",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 251505041,
            "range": "± 22174590",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163692049,
            "range": "± 865290",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330141041,
            "range": "± 2023644",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650855000,
            "range": "± 6059685",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1296896729,
            "range": "± 17930924",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 452206760,
            "range": "± 1551733",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 896349812,
            "range": "± 4065737",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1757488104,
            "range": "± 12955481",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3473887708,
            "range": "± 30568313",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maigonzalez@fi.uba.ar",
            "name": "Matías Ignacio González",
            "username": "matias-gonz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af9e400fb9371c4ee1bfd6e9264e67ce1e4d9cdc",
          "message": "Add Bitrev permutation in CUDA (#312)\n\n* Added cuda mod and poc\n\n* Finished poc\n\n* Working CUDA FFT POC\n\n* Added cuda ptx compilation make rule\n\n* Added CUDA u256 prime field\n\n* Added CI job for testing with CUDA\n\n* Add CUDAFieldElement\n\n* Added support for u256 montgomery field\n\n* Remove unwrap()s\n\n* Add evaluate_fft_cuda\n\n* Remove default feature cuda\n\n* Remove default feature cuda\n\n* Remove unnecessary reference\n\n* Fix clippy errors\n\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\n\n* Fix benches error\n\n* Rename `IsTwoAdicField` -> `IsFFTField`\n\n* Fix cannot find function error\n\n* Add TODO\n\n* Interpolate fft cuda (#300)\n\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\n\n* Add error handling for CUDA's fft implementation (#301)\n\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\n\n* Remove unwrap from interpolate_fft\n\n* Add calc_twiddles* CUDA functions\n\n* Fix CUDA compile errors\n\n* Fix more CUDA compile errors\n\n* Recompile metallib\n\n* Separate twiddle functions into different files\n\n* Update makefile\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Compile all `.cu` files in `CUDAPATH`\n\n* Recombine all twiddles functions in the same file\n\nSomething's up with `Fp256::inverse`.\nUsing the function inside a kernel causes compilation to freeze.\n\n* Comment out `calc_twiddles*_inv` functions\n\nThese functions slow down compilation to a halt, and are equivalent to calling `calc_twiddles*` with an inverted `_omega`\n\n* Refactor get_twiddles so that it uses cuda\n\n* Fix PTX\n\n* Fix compile errors\n\n* Fix CUDAFelt from\n\n* Fix comparision chain\n\n* Add missing slice\n\n* Add missing type annotation\n\n* Change ? to unwrap\n\n* Remove reference\n\n* Change input param type\n\n* Update param types\n\n* Update calc_twiddles_bitrev\n\n* Change root\n\n* Load all functions\n\n* Change types to unsigned\n\n* Refactor reference\n\n* Update LaunchConfig\n\n* Update Block size\n\n* Use vec!\n\n* Update blockdim\n\n* Refactor twiddles\n\n* Add twiddles.ptx\n\n* Fix imports\n\n* Remove unwraps\n\n* Fix errors\n\n* Add map_err\n\n* Add missing map_err\n\n* Remove unused import\n\n* Update interpolate_fft\n\n* Add bitrev_permutation in CUDA\n\n* Fix function signature\n\n* Add bitrev_permutation in cuda interface\n\n* Fix compilation errors\n\n* Change usize into u64\n\n* Add bitrev_permutation.ptx\n\n* Integrate _CUDA_ implementation with _fft_ crate (#298)\n\n* Add evaluate_fft_cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove default feature cuda\r\n\r\n* Remove unnecessary reference\r\n\r\n* Fix clippy errors\r\n\r\nNOTE: we currently don't have a linting job in the CI for the _metal_ and _cuda_ features\r\n\r\n* Fix benches error\r\n\r\n* Fix cannot find function error\r\n\r\n* Add TODO\r\n\r\n* Interpolate fft cuda (#300)\r\n\r\n* Add interpolate_fft_cuda\r\n\r\n* Fix RootsConfig\r\n\r\n* Remove unnecessary coefficients\r\n\r\n* Add not(feature = \"cuda\")\r\n\r\n* Add unwrap for interpolate_fft\r\n\r\n* Add error handling for CUDA's fft implementation (#301)\r\n\r\n* Move cuda/field to cuda/abstractions\r\n\r\nThis is to more closely mimic the metal dir structure\r\n\r\n* Move helpers from metal to crate root\r\n\r\n* Add `CudaError`\r\n\r\n* Move functions, remove errors\r\n\r\n* Add CudaError variants for fft\r\n\r\n* Add TODO\r\n\r\n* Remove default metal feature\r\n\r\n* Fix compile errors\r\n\r\n* Fix missing imports errors\r\n\r\n* Fix compile errors\r\n\r\n* Allow dead_code in helpers module\r\n\r\n* Remove unwrap from interpolate_fft\r\n\r\n* Add `CudaState` as a wrapper around cudarc primitives (#311)\r\n\r\n* Add CudaState\r\n\r\n* Use CudaState in `fft` function\r\n\r\n* Remove old attributes\r\n\r\n* Remove `unwrap`s in Metal and Cuda state init\r\n\r\n* Extract library loading to helper function\r\n\r\n* Fix compilation errors and move LaunchConfig use\r\n\r\n* Remove unnecesary modulo operation\r\n\r\nThe `threadIdx.x` builtin variable goes from 0 to `blockDim.x` (non-inclusive) so we don't need the modulo.\r\n\r\n* Add bounds checking to launch\r\n\r\n* Fix compilation errors\r\n\r\n* Fix all compile errors\r\n\r\n* Recompile fft.ptx\r\n\r\n---------\r\n\r\nCo-authored-by: matias-gonz <maigonzalez@fi.uba.ar>\n\n* Fix compile error\n\n* Fix compilation errors\n\n* Use prop_assert_eq instead of assert_eq\n\n* Remove unused fp.cuh\n\n* Don't use `prop_filter` for `field_vec`\n\nThe use of `prop_filter` slows tests down, and can cause nondeterministic test failures when the filter function true/false ratio is too low.\nIn this case, using it would cause tests with a too high max exponent to fail.\n\n* Refactor index calculation in CUDA\n\n* Fix compile errors\n\n* Update evaluate fft cuda call\n\n* Update evaluate_fft_cpu call\n\n* Remove repeated code\n\n* Remove unused constant\n\n* Add missing cfg not cuda\n\n* Fix cfg\n\n* Refactor gen_twiddles using CudaState\n\n* Fix compile errors\n\n* Add state to function call\n\n* Update GenTwiddles.launch\n\n* Fix warnings\n\n* Remove cfg\n\n* Refactor bitrev_permutation using CudaState\n\n* Fix get_bitrev_permutation\n\n* Fix block_dim\n\n* Fix group size\n\n* Fix get_bitrev_permutation call\n\n* Remove unused state variable\n\n* Fix warnings\n\n* Add bitrev_permutation\n\n* Update makefile\n\n* Update make build-cuda\n\n* Upodate build-cuda\n\n* Update build-cuda\n\n* Template bitrev_permutation\n\n* Update stark256.ptx\n\n* Delete unused clone and add explaining comment\n\n---------\n\nCo-authored-by: Estéfano Bargas <estefano.bargas@fing.edu.uy>\nCo-authored-by: Tomás <tomas.gruner@lambdaclass.com>\nCo-authored-by: Tomás <47506558+MegaRedHand@users.noreply.github.com>",
          "timestamp": "2023-05-30T18:34:02Z",
          "tree_id": "d5d2dae9d2c8749bb6b6968f6bd64bd41b9e7a58",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/af9e400fb9371c4ee1bfd6e9264e67ce1e4d9cdc"
        },
        "date": 1685474364297,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1757054123,
            "range": "± 15934451",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4186012114,
            "range": "± 26274778",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3701467969,
            "range": "± 49710699",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8946788815,
            "range": "± 70886137",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7608840521,
            "range": "± 57902546",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 19350450169,
            "range": "± 349721964",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 16127841431,
            "range": "± 125480447",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 41119879333,
            "range": "± 345696737",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 1039376574,
            "range": "± 9914721",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 2184371180,
            "range": "± 11262465",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 4591960121,
            "range": "± 20808746",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 9637833495,
            "range": "± 80680488",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 98911888,
            "range": "± 3034566",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 196971872,
            "range": "± 2646822",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 386541674,
            "range": "± 6737143",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 789644322,
            "range": "± 20088458",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2867958166,
            "range": "± 27840711",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5954361087,
            "range": "± 70422978",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 12474418383,
            "range": "± 101012899",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 25907457229,
            "range": "± 149763675",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 3139462324,
            "range": "± 98282193",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6353874027,
            "range": "± 108373902",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 13208002891,
            "range": "± 138678430",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 27730229196,
            "range": "± 421431058",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 868,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 27965,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 786,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1131,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 933,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 776,
            "range": "± 55",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9378d38acc81c17d9c5a03e901bd8fbb1da21a3f",
          "message": "perf: weaken power in sqrt (#397)\n\n* bench: benchmarks for field sqrt\n\n* perf: weaken power in sqrt\n\n* perf: use primitive type for index",
          "timestamp": "2023-05-30T20:57:06Z",
          "tree_id": "81433da823002851ac453b6ecf98bc8c7b2bd04f",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/9378d38acc81c17d9c5a03e901bd8fbb1da21a3f"
        },
        "date": 1685480573909,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130302132,
            "range": "± 2368549",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256181833,
            "range": "± 667932",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 494253572,
            "range": "± 2461532",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 971375833,
            "range": "± 10945507",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35083156,
            "range": "± 388876",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68997423,
            "range": "± 962315",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 136115795,
            "range": "± 2042192",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 279696406,
            "range": "± 4338988",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31232671,
            "range": "± 241964",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 60009140,
            "range": "± 605063",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121749115,
            "range": "± 3204515",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 258818784,
            "range": "± 18190489",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163977836,
            "range": "± 645174",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 331078812,
            "range": "± 963521",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 653363625,
            "range": "± 3859337",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1309901562,
            "range": "± 8034378",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 447042698,
            "range": "± 1409411",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 898188687,
            "range": "± 8291405",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1765620479,
            "range": "± 4886444",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3474232292,
            "range": "± 17826404",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65b3780abaf7c61d0fc8ba8ea83d35788e69ebad",
          "message": "fix: Pippenger substraction overflow (#376)",
          "timestamp": "2023-05-30T21:11:22Z",
          "tree_id": "30e333bf674959ec4ef55bef0a483a52200956de",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/65b3780abaf7c61d0fc8ba8ea83d35788e69ebad"
        },
        "date": 1685481424259,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129012752,
            "range": "± 2575695",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255811822,
            "range": "± 1698687",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 488277489,
            "range": "± 5168413",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 978042187,
            "range": "± 11745231",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34338684,
            "range": "± 402931",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67953521,
            "range": "± 640262",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132988525,
            "range": "± 747120",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277923041,
            "range": "± 2853095",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31215038,
            "range": "± 318037",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58277373,
            "range": "± 1841538",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 122130811,
            "range": "± 4457343",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 241124770,
            "range": "± 23444388",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 162979561,
            "range": "± 853066",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329875833,
            "range": "± 2570536",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 649700437,
            "range": "± 5819351",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1310380583,
            "range": "± 13777842",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 452259333,
            "range": "± 2469609",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 898374604,
            "range": "± 5666748",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1756034104,
            "range": "± 15605378",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3640858520,
            "range": "± 290336832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31403d4ae6df411a5a32c84f378816716e7e9805",
          "message": "bench: benchmark all gen twiddles configs (#373)",
          "timestamp": "2023-05-30T21:15:49Z",
          "tree_id": "444ddd6f3d33e0d30dfb569a7ea01e5b7352ffe0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/31403d4ae6df411a5a32c84f378816716e7e9805"
        },
        "date": 1685481681099,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 178254823,
            "range": "± 193604630",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 281264271,
            "range": "± 425737931",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 493502198,
            "range": "± 2509393",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 964256687,
            "range": "± 12767533",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34521088,
            "range": "± 372410",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68146915,
            "range": "± 498939",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133122083,
            "range": "± 908138",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 274416333,
            "range": "± 3198657",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31105772,
            "range": "± 159459",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59893867,
            "range": "± 2108056",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120948370,
            "range": "± 4225593",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 268875010,
            "range": "± 24070018",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164650421,
            "range": "± 1004733",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330647458,
            "range": "± 2240034",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 646934375,
            "range": "± 5440547",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1306593146,
            "range": "± 10955771",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 443431291,
            "range": "± 7204455",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 900374791,
            "range": "± 6221261",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1764544000,
            "range": "± 14753788",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3450165625,
            "range": "± 18196811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49c67abe35fd39403b0a4be978f61f771f26b77",
          "message": "perf: weaken power in twiddles generation (#375)\n\n* bench: benchmark all gen twiddles configs\n\n* perf: weaken power in twiddles generation\n\nKeep a running product of roots rather than computing the power each\ntime.\nReplace the batch inversion by eager inversion of the primitive root.\n\nThese two changes give a 25% throughput boost in FFT and 2x in\npolynomial evaluation and interpolation.\nDetailed benchmarks in PR #375 description.\n\n* chore: document the optimization a bit",
          "timestamp": "2023-05-30T21:26:25Z",
          "tree_id": "fcbb71147032ce694d78772ab95443afd1125818",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f49c67abe35fd39403b0a4be978f61f771f26b77"
        },
        "date": 1685482320600,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130435241,
            "range": "± 1648758",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255463604,
            "range": "± 2131082",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 485751562,
            "range": "± 3659960",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 973115479,
            "range": "± 9046579",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35252901,
            "range": "± 403211",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68724389,
            "range": "± 318027",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132980500,
            "range": "± 495228",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277344666,
            "range": "± 3491735",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31276454,
            "range": "± 261892",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 56084366,
            "range": "± 2782406",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 122322850,
            "range": "± 8706994",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 231302802,
            "range": "± 13824903",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163151290,
            "range": "± 852275",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330866625,
            "range": "± 1211960",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 651544854,
            "range": "± 5928788",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1308229437,
            "range": "± 19859917",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 448632979,
            "range": "± 2046269",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 893291042,
            "range": "± 7273612",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1740824687,
            "range": "± 9629590",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3440714354,
            "range": "± 20065930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9378d38acc81c17d9c5a03e901bd8fbb1da21a3f",
          "message": "perf: weaken power in sqrt (#397)\n\n* bench: benchmarks for field sqrt\n\n* perf: weaken power in sqrt\n\n* perf: use primitive type for index",
          "timestamp": "2023-05-30T20:57:06Z",
          "tree_id": "81433da823002851ac453b6ecf98bc8c7b2bd04f",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/9378d38acc81c17d9c5a03e901bd8fbb1da21a3f"
        },
        "date": 1685482474816,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1439360853,
            "range": "± 736629",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3296976324,
            "range": "± 15853701",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3004469562,
            "range": "± 2010400",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7376449615,
            "range": "± 8860140",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6277735644,
            "range": "± 3465593",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 15886085805,
            "range": "± 48310236",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13069778216,
            "range": "± 8087155",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 33866678122,
            "range": "± 81447673",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 850030029,
            "range": "± 255799",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 1785802444,
            "range": "± 443697",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 3744595658,
            "range": "± 5237979",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 7834015683,
            "range": "± 5475164",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 78798649,
            "range": "± 990070",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 159056461,
            "range": "± 526076",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 314914822,
            "range": "± 581495",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 642012744,
            "range": "± 3325092",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2318321184,
            "range": "± 1483461",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 4850240393,
            "range": "± 2325200",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 10130955324,
            "range": "± 5604405",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 21113592388,
            "range": "± 7702540",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2509133563,
            "range": "± 1932748",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 5234756478,
            "range": "± 14404869",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 10884139777,
            "range": "± 4138044",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 22637923955,
            "range": "± 8174049",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 1540,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 98747,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 1145,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1591,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 1225,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 1214,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65b3780abaf7c61d0fc8ba8ea83d35788e69ebad",
          "message": "fix: Pippenger substraction overflow (#376)",
          "timestamp": "2023-05-30T21:11:22Z",
          "tree_id": "30e333bf674959ec4ef55bef0a483a52200956de",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/65b3780abaf7c61d0fc8ba8ea83d35788e69ebad"
        },
        "date": 1685483331880,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1438139682,
            "range": "± 1259342",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3347487921,
            "range": "± 8607068",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3008013778,
            "range": "± 1755482",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7339124378,
            "range": "± 18271013",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6271618239,
            "range": "± 4588012",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 15811281734,
            "range": "± 19698641",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13076195294,
            "range": "± 7299904",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 33562904681,
            "range": "± 54567777",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential",
            "value": 857003192,
            "range": "± 240923",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #2",
            "value": 1800604512,
            "range": "± 258077",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #3",
            "value": 3776456551,
            "range": "± 926439",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Sequential #4",
            "value": 7901372745,
            "range": "± 2037870",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 71222691,
            "range": "± 1165295",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 154476910,
            "range": "± 942217",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 317373411,
            "range": "± 1421088",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 646953527,
            "range": "± 2092418",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2322916161,
            "range": "± 1515945",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 4865941723,
            "range": "± 2948861",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 10163092966,
            "range": "± 5420899",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 21181556416,
            "range": "± 4875461",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2497082289,
            "range": "± 1822114",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 5208388717,
            "range": "± 1920738",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 10842917312,
            "range": "± 4694531",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 22546472934,
            "range": "± 8163256",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 157,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b853cea4b24c74fb47beff815d2814308a976d",
          "message": "Optimize invert (#396)\n\n* Initial version\n\n* Optimize invert!\n\n* Update\n\n* Invert\n\n* Optimize invert\n\n* Delete launch.json\n\n* fix inv\n\n* remove comment\n\n* remove div2 and add shr_inplace\n\n* fmt\n\n* fix test\n\n* rustify shl_inplace\n\n* remove duplicated test\n\n* fmt\n\n* move implementation of shl_inplace to ShlAssign trait impl\n\n* fmt\n\n---------\n\nCo-authored-by: juanbono <juanbono94@gmail.com>\nCo-authored-by: Sergio Chouhy <sergio.chouhy@gmail.com>",
          "timestamp": "2023-05-30T21:53:24Z",
          "tree_id": "8d3a266e86f8bae755dd04fadfe70c6e54c93558",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/d1b853cea4b24c74fb47beff815d2814308a976d"
        },
        "date": 1685483939159,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128823375,
            "range": "± 2143700",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254602968,
            "range": "± 2248357",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 487245906,
            "range": "± 4626894",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 977672854,
            "range": "± 4867631",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34056288,
            "range": "± 346487",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68346447,
            "range": "± 804284",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133071844,
            "range": "± 382673",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 279689281,
            "range": "± 2891371",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31320597,
            "range": "± 341480",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 57035363,
            "range": "± 2902618",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120608432,
            "range": "± 13603505",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 266525312,
            "range": "± 20608637",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163213836,
            "range": "± 985762",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329862239,
            "range": "± 1755807",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650604145,
            "range": "± 3840462",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1302141958,
            "range": "± 13445681",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 448228573,
            "range": "± 2874592",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 894275041,
            "range": "± 5312732",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1767001229,
            "range": "± 7455913",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3440634791,
            "range": "± 27809048",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49c67abe35fd39403b0a4be978f61f771f26b77",
          "message": "perf: weaken power in twiddles generation (#375)\n\n* bench: benchmark all gen twiddles configs\n\n* perf: weaken power in twiddles generation\n\nKeep a running product of roots rather than computing the power each\ntime.\nReplace the batch inversion by eager inversion of the primitive root.\n\nThese two changes give a 25% throughput boost in FFT and 2x in\npolynomial evaluation and interpolation.\nDetailed benchmarks in PR #375 description.\n\n* chore: document the optimization a bit",
          "timestamp": "2023-05-30T21:26:25Z",
          "tree_id": "fcbb71147032ce694d78772ab95443afd1125818",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f49c67abe35fd39403b0a4be978f61f771f26b77"
        },
        "date": 1685484028170,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1438198286,
            "range": "± 1609825",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3706165280,
            "range": "± 23560279",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3002333411,
            "range": "± 2380909",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8096081105,
            "range": "± 20455779",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6254589048,
            "range": "± 3696902",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17502497170,
            "range": "± 104963632",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13030878103,
            "range": "± 15290840",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 37187809978,
            "range": "± 173889039",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 37521868,
            "range": "± 196981",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37400929,
            "range": "± 111908",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 82750425,
            "range": "± 395079",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 82876475,
            "range": "± 267025",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 75257389,
            "range": "± 173991",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 75495759,
            "range": "± 126686",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 165463505,
            "range": "± 295958",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 165975654,
            "range": "± 354007",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 151010469,
            "range": "± 72270",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 150901569,
            "range": "± 181833",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 337254667,
            "range": "± 986867",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 337630983,
            "range": "± 1217893",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 300863704,
            "range": "± 155323",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 300717932,
            "range": "± 237198",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 680297656,
            "range": "± 2624892",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 678344874,
            "range": "± 1789992",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 90032660,
            "range": "± 503440",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 182104587,
            "range": "± 529216",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 367439824,
            "range": "± 616677",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 749923439,
            "range": "± 3426228",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1549107455,
            "range": "± 2086014",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3227395918,
            "range": "± 2986141",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6710063949,
            "range": "± 4737314",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13939694797,
            "range": "± 13374184",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1632839801,
            "range": "± 2565420",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3392496723,
            "range": "± 2307762",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 7036744959,
            "range": "± 2987371",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14582913496,
            "range": "± 9757880",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 180,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31403d4ae6df411a5a32c84f378816716e7e9805",
          "message": "bench: benchmark all gen twiddles configs (#373)",
          "timestamp": "2023-05-30T21:15:49Z",
          "tree_id": "444ddd6f3d33e0d30dfb569a7ea01e5b7352ffe0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/31403d4ae6df411a5a32c84f378816716e7e9805"
        },
        "date": 1685484583823,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1677116084,
            "range": "± 17831195",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3896616518,
            "range": "± 15032830",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3472391833,
            "range": "± 14665109",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8496446526,
            "range": "± 10241600",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7319501265,
            "range": "± 38657916",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18347258777,
            "range": "± 105191131",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 15229737653,
            "range": "± 26381218",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 39362439242,
            "range": "± 134975003",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 1032527396,
            "range": "± 3691439",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 1146734638,
            "range": "± 7182679",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 1029830905,
            "range": "± 7164051",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 1146174096,
            "range": "± 4874342",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 2166807221,
            "range": "± 8409103",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 2391150776,
            "range": "± 5144752",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 2158984601,
            "range": "± 8923149",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 2388067521,
            "range": "± 8328314",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 4529251561,
            "range": "± 12914747",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 4981619197,
            "range": "± 12896127",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 4529528981,
            "range": "± 20204272",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 4983522598,
            "range": "± 16774932",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 9450647528,
            "range": "± 17974500",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 10396667311,
            "range": "± 33695396",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 9470476717,
            "range": "± 31667985",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 10372419376,
            "range": "± 20867542",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 88045746,
            "range": "± 565036",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 175752852,
            "range": "± 540340",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 344448957,
            "range": "± 1181225",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 693519044,
            "range": "± 2949885",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 2733252014,
            "range": "± 6191311",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 5673388371,
            "range": "± 23642987",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 11859400255,
            "range": "± 35729537",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 24512979300,
            "range": "± 163648743",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2939748339,
            "range": "± 29042995",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 6047396477,
            "range": "± 44400726",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 12690075125,
            "range": "± 85283012",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 26629544678,
            "range": "± 125812282",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 215,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 1699,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 268,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 500,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 314,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 318,
            "range": "± 12",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b853cea4b24c74fb47beff815d2814308a976d",
          "message": "Optimize invert (#396)\n\n* Initial version\n\n* Optimize invert!\n\n* Update\n\n* Invert\n\n* Optimize invert\n\n* Delete launch.json\n\n* fix inv\n\n* remove comment\n\n* remove div2 and add shr_inplace\n\n* fmt\n\n* fix test\n\n* rustify shl_inplace\n\n* remove duplicated test\n\n* fmt\n\n* move implementation of shl_inplace to ShlAssign trait impl\n\n* fmt\n\n---------\n\nCo-authored-by: juanbono <juanbono94@gmail.com>\nCo-authored-by: Sergio Chouhy <sergio.chouhy@gmail.com>",
          "timestamp": "2023-05-30T21:53:24Z",
          "tree_id": "8d3a266e86f8bae755dd04fadfe70c6e54c93558",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/d1b853cea4b24c74fb47beff815d2814308a976d"
        },
        "date": 1685485548441,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1438399975,
            "range": "± 3348944",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3396328100,
            "range": "± 25764476",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3003077443,
            "range": "± 2815501",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7361939887,
            "range": "± 39016441",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6261173915,
            "range": "± 3877485",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 15856502634,
            "range": "± 57038742",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13041833325,
            "range": "± 10256249",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 33829749924,
            "range": "± 62115074",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 37293048,
            "range": "± 75126",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37352651,
            "range": "± 176361",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 78103215,
            "range": "± 323380",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 78320472,
            "range": "± 336155",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 74770191,
            "range": "± 228448",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 74874169,
            "range": "± 142031",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 157352294,
            "range": "± 1530559",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 158086483,
            "range": "± 1424467",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 149854155,
            "range": "± 233361",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 149683101,
            "range": "± 240668",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 317971269,
            "range": "± 2070054",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 316496747,
            "range": "± 601798",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 298078542,
            "range": "± 351777",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 298126919,
            "range": "± 240415",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 633612120,
            "range": "± 1518874",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 634178071,
            "range": "± 5730210",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 78086521,
            "range": "± 1739813",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 159882668,
            "range": "± 702583",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 321028822,
            "range": "± 933530",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 657088150,
            "range": "± 3828596",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1542706092,
            "range": "± 1618402",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3216804658,
            "range": "± 3102332",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6692871794,
            "range": "± 8512935",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13877699319,
            "range": "± 24349112",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1623898220,
            "range": "± 6284702",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3378854956,
            "range": "± 5004845",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 7008068679,
            "range": "± 7775256",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14528364435,
            "range": "± 15096328",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 348,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46dd588e9263a2f36935a2c41f28dc2e3352edc4",
          "message": "perf: compute inverse of 2 only once in sqrt (#399)",
          "timestamp": "2023-05-31T20:41:18Z",
          "tree_id": "840741905a8248fcdff4a6126abc8308dd7b247b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/46dd588e9263a2f36935a2c41f28dc2e3352edc4"
        },
        "date": 1685566032416,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129219259,
            "range": "± 3433374",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256687270,
            "range": "± 1595102",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486372479,
            "range": "± 4783006",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 979011145,
            "range": "± 6664970",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34062043,
            "range": "± 277612",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67955521,
            "range": "± 722692",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133724220,
            "range": "± 2506489",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276255208,
            "range": "± 2312316",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31148116,
            "range": "± 108181",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59033163,
            "range": "± 530936",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121233901,
            "range": "± 2958483",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 262802801,
            "range": "± 24816566",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163747206,
            "range": "± 894645",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330160791,
            "range": "± 739442",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 651557187,
            "range": "± 5730550",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1307901791,
            "range": "± 11887856",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 451625062,
            "range": "± 2768955",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 897664479,
            "range": "± 5263826",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1738798458,
            "range": "± 8190242",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3470673542,
            "range": "± 31908810",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46dd588e9263a2f36935a2c41f28dc2e3352edc4",
          "message": "perf: compute inverse of 2 only once in sqrt (#399)",
          "timestamp": "2023-05-31T20:41:18Z",
          "tree_id": "840741905a8248fcdff4a6126abc8308dd7b247b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/46dd588e9263a2f36935a2c41f28dc2e3352edc4"
        },
        "date": 1685568025275,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1669127993,
            "range": "± 16051848",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4454461572,
            "range": "± 51666667",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3521801458,
            "range": "± 40734163",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9846331931,
            "range": "± 49739479",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7172282336,
            "range": "± 104414666",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 21088016737,
            "range": "± 129757383",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 15335119260,
            "range": "± 172030754",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 44974943780,
            "range": "± 190966352",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 38515962,
            "range": "± 1294681",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 38520778,
            "range": "± 1312113",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 84080642,
            "range": "± 2355782",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 84627381,
            "range": "± 1582861",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 82520521,
            "range": "± 1411831",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 84058709,
            "range": "± 3318443",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 175242377,
            "range": "± 1623707",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 175499716,
            "range": "± 3853033",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 172599772,
            "range": "± 1782273",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 172421247,
            "range": "± 4466044",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 353498342,
            "range": "± 4656813",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 354099654,
            "range": "± 4594915",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 352463205,
            "range": "± 6332244",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 348429274,
            "range": "± 5150266",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 703525486,
            "range": "± 8383273",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 716492008,
            "range": "± 16177541",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 97660151,
            "range": "± 1840589",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 201055325,
            "range": "± 2495207",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 424127363,
            "range": "± 8628195",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 852495241,
            "range": "± 16409442",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1830127611,
            "range": "± 26911084",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3830819934,
            "range": "± 32742110",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 7866349303,
            "range": "± 250508652",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 15813750262,
            "range": "± 587212700",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1755040157,
            "range": "± 27068344",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3868703840,
            "range": "± 35895754",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 8048228177,
            "range": "± 120385881",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 16515682053,
            "range": "± 689758225",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 896,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 28629,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 805,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1182,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 973,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 864,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02b3167d3a8d25d00ea09bde27837e08554eefb",
          "message": "perf: specialize is_neutral_element for each curve (#403)",
          "timestamp": "2023-06-02T13:01:19Z",
          "tree_id": "da6d217a92dd504c9b736d78d2a2e3586b61c7b7",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/a02b3167d3a8d25d00ea09bde27837e08554eefb"
        },
        "date": 1685711226243,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130048143,
            "range": "± 1853471",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256278073,
            "range": "± 1514504",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 488830458,
            "range": "± 4635592",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 967024729,
            "range": "± 13638472",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34162661,
            "range": "± 207127",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67778622,
            "range": "± 838967",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133192126,
            "range": "± 566432",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 275522593,
            "range": "± 3294141",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 27603308,
            "range": "± 792974",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59116882,
            "range": "± 1952266",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 118278643,
            "range": "± 6612821",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 231441520,
            "range": "± 16510845",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164720103,
            "range": "± 1019578",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329744218,
            "range": "± 1971306",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650772916,
            "range": "± 4338385",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1300020542,
            "range": "± 15641346",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 447116656,
            "range": "± 1495654",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 901960667,
            "range": "± 8278710",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1764044875,
            "range": "± 5005925",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3477518646,
            "range": "± 25970834",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02b3167d3a8d25d00ea09bde27837e08554eefb",
          "message": "perf: specialize is_neutral_element for each curve (#403)",
          "timestamp": "2023-06-02T13:01:19Z",
          "tree_id": "da6d217a92dd504c9b736d78d2a2e3586b61c7b7",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/a02b3167d3a8d25d00ea09bde27837e08554eefb"
        },
        "date": 1685713261221,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1660553725,
            "range": "± 29579445",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4521524020,
            "range": "± 29659987",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3492784070,
            "range": "± 74551740",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9934834262,
            "range": "± 91322667",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7203543136,
            "range": "± 124590079",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 21361320706,
            "range": "± 81203556",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 15152374378,
            "range": "± 167529036",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 45731012624,
            "range": "± 225465086",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42008940,
            "range": "± 1018114",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 42983840,
            "range": "± 1019131",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 88517470,
            "range": "± 1320015",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 88450192,
            "range": "± 998736",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 86269983,
            "range": "± 883426",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 87408726,
            "range": "± 2048208",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 178776310,
            "range": "± 2644516",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 179028552,
            "range": "± 1959283",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 177254582,
            "range": "± 2505863",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 175058821,
            "range": "± 3312520",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 367075761,
            "range": "± 8926130",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 359536268,
            "range": "± 2820116",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 353255529,
            "range": "± 5584008",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 347111296,
            "range": "± 4902910",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 719194286,
            "range": "± 8852131",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 725294496,
            "range": "± 9159437",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 98617407,
            "range": "± 2691860",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 211340333,
            "range": "± 2385529",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 434661991,
            "range": "± 6303984",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 880486983,
            "range": "± 12342223",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1763170480,
            "range": "± 21046295",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3747687923,
            "range": "± 45438050",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 7807340972,
            "range": "± 80275460",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 16122272763,
            "range": "± 111658726",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1898237356,
            "range": "± 28729146",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3941454173,
            "range": "± 46879931",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 8163646575,
            "range": "± 82743192",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 17021851843,
            "range": "± 361824055",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 40,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 97,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 183,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 134,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 130,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bb6d220b12dcb7d7e478757e7ed546abffa2f59",
          "message": "Add mixed addition optimization for the miller loop of the BLS 12 381 curve (#364)\n\n* add mixed addition optimization for the miller loop of the bls12381\ncurve\n\n* clippy, fmt\n\n* add missing test\n\n* add benches for ate pairing\n\n* fmt",
          "timestamp": "2023-06-02T14:18:23Z",
          "tree_id": "93308cd71434f51cfbaed1fd9080dd69594fba20",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/7bb6d220b12dcb7d7e478757e7ed546abffa2f59"
        },
        "date": 1685715841984,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130851135,
            "range": "± 3659336",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254275479,
            "range": "± 1670623",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 494241500,
            "range": "± 1331675",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 980858124,
            "range": "± 8835134",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34313041,
            "range": "± 194481",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67749073,
            "range": "± 462373",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133230201,
            "range": "± 1566964",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276941104,
            "range": "± 3967575",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31276682,
            "range": "± 324979",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59833848,
            "range": "± 2996569",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121047913,
            "range": "± 4704465",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 239318062,
            "range": "± 18108360",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163976253,
            "range": "± 953359",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330249135,
            "range": "± 1557263",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650869417,
            "range": "± 4360797",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1306967354,
            "range": "± 13066061",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 448159198,
            "range": "± 1229719",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 899732708,
            "range": "± 2250037",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1764314812,
            "range": "± 5005130",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3441581771,
            "range": "± 20887434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bb6d220b12dcb7d7e478757e7ed546abffa2f59",
          "message": "Add mixed addition optimization for the miller loop of the BLS 12 381 curve (#364)\n\n* add mixed addition optimization for the miller loop of the bls12381\ncurve\n\n* clippy, fmt\n\n* add missing test\n\n* add benches for ate pairing\n\n* fmt",
          "timestamp": "2023-06-02T14:18:23Z",
          "tree_id": "93308cd71434f51cfbaed1fd9080dd69594fba20",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/7bb6d220b12dcb7d7e478757e7ed546abffa2f59"
        },
        "date": 1685717504390,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1417155868,
            "range": "± 1303323",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3699207786,
            "range": "± 21104686",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2952793899,
            "range": "± 2119419",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8008650717,
            "range": "± 23972098",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6163377837,
            "range": "± 3862433",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17267196403,
            "range": "± 38979475",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 12831932179,
            "range": "± 6875634",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 36973317072,
            "range": "± 61879001",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 37321397,
            "range": "± 259768",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37306098,
            "range": "± 212371",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 76790443,
            "range": "± 672956",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 77420204,
            "range": "± 534565",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 74940068,
            "range": "± 231767",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 75180737,
            "range": "± 273073",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 155224204,
            "range": "± 510366",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 155256456,
            "range": "± 538339",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 150602688,
            "range": "± 446274",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 150646302,
            "range": "± 349424",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 315391469,
            "range": "± 1100786",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 314983139,
            "range": "± 1990286",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 299719497,
            "range": "± 335679",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 299738140,
            "range": "± 906720",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 638412647,
            "range": "± 6285699",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 637266870,
            "range": "± 4018282",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 78681382,
            "range": "± 828330",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 159430920,
            "range": "± 445286",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 323166285,
            "range": "± 1650885",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 661534436,
            "range": "± 3925216",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1519032325,
            "range": "± 2308995",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3167599675,
            "range": "± 3587988",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6588739420,
            "range": "± 6295606",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13693423719,
            "range": "± 17969870",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1604025484,
            "range": "± 2098039",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3326890396,
            "range": "± 2573320",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6902741311,
            "range": "± 4464892",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14326637924,
            "range": "± 12158703",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 6037,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 387,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 577,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 399,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 400,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a80c169928706ea6423991a420657b123dd11050",
          "message": "perf: use `2` as first non-qr candidate (#400)\n\n`1` is a quad residue no matter the field, so we can just skip it when\nwe look for our first non-residue for `sqrt`. This saves us a call to\n`legendre_symbol`, giving a tiny but non-negligible boost.",
          "timestamp": "2023-06-02T14:57:07Z",
          "tree_id": "845858e5d855e408b42fc29ebccf0d2a74a66036",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/a80c169928706ea6423991a420657b123dd11050"
        },
        "date": 1685718178226,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130310160,
            "range": "± 1924639",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256185552,
            "range": "± 2409556",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 484811625,
            "range": "± 3255579",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 977968874,
            "range": "± 7143520",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34149320,
            "range": "± 354000",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68003170,
            "range": "± 452421",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132901609,
            "range": "± 318989",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 280093510,
            "range": "± 3415111",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31432688,
            "range": "± 823689",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 52038016,
            "range": "± 1583511",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120984933,
            "range": "± 6934445",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 261054784,
            "range": "± 17312012",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163654637,
            "range": "± 1555592",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330909719,
            "range": "± 950888",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 652786562,
            "range": "± 4163357",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1307688500,
            "range": "± 12239115",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 446803437,
            "range": "± 2334575",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 894876166,
            "range": "± 5716687",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1736722333,
            "range": "± 7624469",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3474517854,
            "range": "± 17443738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a80c169928706ea6423991a420657b123dd11050",
          "message": "perf: use `2` as first non-qr candidate (#400)\n\n`1` is a quad residue no matter the field, so we can just skip it when\nwe look for our first non-residue for `sqrt`. This saves us a call to\n`legendre_symbol`, giving a tiny but non-negligible boost.",
          "timestamp": "2023-06-02T14:57:07Z",
          "tree_id": "845858e5d855e408b42fc29ebccf0d2a74a66036",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/a80c169928706ea6423991a420657b123dd11050"
        },
        "date": 1685720306008,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1873826030,
            "range": "± 35148431",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4760272524,
            "range": "± 48149155",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3891367593,
            "range": "± 55024189",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 10387541242,
            "range": "± 84337063",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7794397187,
            "range": "± 59694153",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 22261502254,
            "range": "± 86661132",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 16451342379,
            "range": "± 155248800",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 47550521306,
            "range": "± 90694506",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 48003489,
            "range": "± 912071",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 47645845,
            "range": "± 1114374",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 95778737,
            "range": "± 1457740",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 96310978,
            "range": "± 1761330",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 93874789,
            "range": "± 1603055",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 95603066,
            "range": "± 1722312",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 189170505,
            "range": "± 2332929",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 193779577,
            "range": "± 3683185",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 189658802,
            "range": "± 3110959",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 187667442,
            "range": "± 2702197",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 386129231,
            "range": "± 4732968",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 379095928,
            "range": "± 4287207",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 375039536,
            "range": "± 6409171",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 378233012,
            "range": "± 3525049",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 747574564,
            "range": "± 10627753",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 759338344,
            "range": "± 11981309",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 106854900,
            "range": "± 2455850",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 224710493,
            "range": "± 6490839",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 460083723,
            "range": "± 6052760",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 913774321,
            "range": "± 12415741",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1973956447,
            "range": "± 41567382",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 4074295245,
            "range": "± 46990509",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 8521017099,
            "range": "± 84529643",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 17402956429,
            "range": "± 163981722",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 2049312705,
            "range": "± 21036885",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 4229945325,
            "range": "± 38018020",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 8852645134,
            "range": "± 153217604",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 18277162288,
            "range": "± 252943725",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 468,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 7517,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 526,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 802,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 550,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 556,
            "range": "± 31",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pdeymon@fi.uba.ar",
            "name": "Pablo Deymonnaz",
            "username": "pablodeymo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dd47c23a33d2fe312b8f77947ddc00222c2e8fb",
          "message": "sqrt_qfe for BLS12381TwistCurveFieldElement (#407)\n\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-02T18:03:52Z",
          "tree_id": "3f89bb34025f27b860f712164198285d0e478392",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/6dd47c23a33d2fe312b8f77947ddc00222c2e8fb"
        },
        "date": 1685729376979,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128790729,
            "range": "± 2313615",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255883781,
            "range": "± 3030925",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 485699875,
            "range": "± 4087018",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 973337937,
            "range": "± 8787241",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34024031,
            "range": "± 293689",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68514061,
            "range": "± 944441",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133321052,
            "range": "± 949728",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 280051083,
            "range": "± 3934313",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31542271,
            "range": "± 233270",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58958358,
            "range": "± 776808",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120679936,
            "range": "± 4668256",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 259308208,
            "range": "± 18878994",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163420469,
            "range": "± 1041197",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330638250,
            "range": "± 1396618",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 645162958,
            "range": "± 6870973",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1298846625,
            "range": "± 13194333",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 452576666,
            "range": "± 1736659",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 900828250,
            "range": "± 4252332",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1762781020,
            "range": "± 5307951",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3481707958,
            "range": "± 11010515",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pdeymon@fi.uba.ar",
            "name": "Pablo Deymonnaz",
            "username": "pablodeymo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dd47c23a33d2fe312b8f77947ddc00222c2e8fb",
          "message": "sqrt_qfe for BLS12381TwistCurveFieldElement (#407)\n\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-02T18:03:52Z",
          "tree_id": "3f89bb34025f27b860f712164198285d0e478392",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/6dd47c23a33d2fe312b8f77947ddc00222c2e8fb"
        },
        "date": 1685731468983,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1633637615,
            "range": "± 30633663",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4590393331,
            "range": "± 58086501",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3649324109,
            "range": "± 48983156",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 10050331939,
            "range": "± 30615958",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7691742055,
            "range": "± 193601354",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 21771833914,
            "range": "± 141364235",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 16049599376,
            "range": "± 225859319",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 46750561003,
            "range": "± 268066547",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 44756195,
            "range": "± 414556",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 43276949,
            "range": "± 1402982",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 90739018,
            "range": "± 1611287",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 94179884,
            "range": "± 4023734",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 92340070,
            "range": "± 1720630",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 92032670,
            "range": "± 1370631",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 188197780,
            "range": "± 3189347",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 189308785,
            "range": "± 3142525",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 185532320,
            "range": "± 4950132",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 184258817,
            "range": "± 5027591",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 382794690,
            "range": "± 5490091",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 371516783,
            "range": "± 3661656",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 406549319,
            "range": "± 25449086",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 356056328,
            "range": "± 6893189",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 734734672,
            "range": "± 9019720",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 741411316,
            "range": "± 13665498",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 101882653,
            "range": "± 2309504",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 220965509,
            "range": "± 3055936",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 447539980,
            "range": "± 5212444",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 893415816,
            "range": "± 12643068",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1944783576,
            "range": "± 32623540",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3965159940,
            "range": "± 103153315",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 8118062175,
            "range": "± 121760306",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 16841697007,
            "range": "± 342080941",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1968807670,
            "range": "± 44923587",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 4046424634,
            "range": "± 46965681",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 8781967048,
            "range": "± 123461792",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 18296998768,
            "range": "± 152772433",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 938,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 29189,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 849,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 34,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1228,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 993,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 836,
            "range": "± 47",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pdeymon@fi.uba.ar",
            "name": "Pablo Deymonnaz",
            "username": "pablodeymo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15246ff9e92984ec3deec911ed9a99ca5676fde0",
          "message": "Using msm pippenger in kzg commit (#408)\n\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-02T19:07:40Z",
          "tree_id": "a4f16bf0caaa1550dc8249aea4569d9de8376c87",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/15246ff9e92984ec3deec911ed9a99ca5676fde0"
        },
        "date": 1685733205015,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130532397,
            "range": "± 3430082",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255994916,
            "range": "± 3959352",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 489037770,
            "range": "± 6511889",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 976864625,
            "range": "± 7626470",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35221881,
            "range": "± 514067",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 69074319,
            "range": "± 636630",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 136485650,
            "range": "± 1876680",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 281050646,
            "range": "± 4197297",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 28476938,
            "range": "± 796247",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 55179391,
            "range": "± 2662311",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120180298,
            "range": "± 7950011",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 245244409,
            "range": "± 18337948",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165077293,
            "range": "± 2489869",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330042718,
            "range": "± 1607319",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 655402771,
            "range": "± 5799272",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1304820396,
            "range": "± 14136339",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 445696791,
            "range": "± 6909778",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 895382250,
            "range": "± 5538010",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1742387646,
            "range": "± 6440818",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3444762000,
            "range": "± 14747359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pdeymon@fi.uba.ar",
            "name": "Pablo Deymonnaz",
            "username": "pablodeymo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15246ff9e92984ec3deec911ed9a99ca5676fde0",
          "message": "Using msm pippenger in kzg commit (#408)\n\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-02T19:07:40Z",
          "tree_id": "a4f16bf0caaa1550dc8249aea4569d9de8376c87",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/15246ff9e92984ec3deec911ed9a99ca5676fde0"
        },
        "date": 1685734667481,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1484833178,
            "range": "± 2393916",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 2397628304,
            "range": "± 31027970",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3103169099,
            "range": "± 7195656",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 5409291740,
            "range": "± 23224496",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6466561985,
            "range": "± 6803717",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 11741259733,
            "range": "± 22581075",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13481835210,
            "range": "± 14594899",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 25324114675,
            "range": "± 60383625",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42270277,
            "range": "± 91894",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 42048372,
            "range": "± 91383",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 70466214,
            "range": "± 220878",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 71142210,
            "range": "± 754611",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 84073198,
            "range": "± 136195",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 84337400,
            "range": "± 177502",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 142095538,
            "range": "± 527205",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 141135192,
            "range": "± 696671",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 167639984,
            "range": "± 373301",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 166763279,
            "range": "± 448857",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 278366733,
            "range": "± 748550",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 278242306,
            "range": "± 1247502",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 331938786,
            "range": "± 372796",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 331646880,
            "range": "± 577805",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 552719520,
            "range": "± 2203426",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 552617556,
            "range": "± 2934122",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 68582786,
            "range": "± 1731441",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 150145341,
            "range": "± 1104924",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 294972290,
            "range": "± 2753855",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 602101240,
            "range": "± 2150564",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1571708154,
            "range": "± 3721010",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3285581519,
            "range": "± 3774725",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6844879547,
            "range": "± 2150582",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 14232380364,
            "range": "± 13481685",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1645275871,
            "range": "± 2423938",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3432208911,
            "range": "± 3322011",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 7129284819,
            "range": "± 7960436",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14773209218,
            "range": "± 11931427",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 503,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 16003,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 403,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 677,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 418,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "818ca85ab17e03b18fd5aeb94ef073ab7a6ef7bb",
          "message": "Move default sqrt implementation to IsPrimeField trait (#402)\n\n* move default sqrt implementation to IsPrimeField trait\n\n* refactor sqrt\n\n* minor refactor\n\n* remove old tests\n\n* test both square roots",
          "timestamp": "2023-06-05T14:45:58Z",
          "tree_id": "ffd16497a9fd7b36f5a516db42c44631ed0e497a",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/818ca85ab17e03b18fd5aeb94ef073ab7a6ef7bb"
        },
        "date": 1685976697876,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128803088,
            "range": "± 2859410",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 252598583,
            "range": "± 2057236",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 489177937,
            "range": "± 4416882",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 981345688,
            "range": "± 6662033",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34516673,
            "range": "± 325259",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68324435,
            "range": "± 637389",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133974605,
            "range": "± 1055974",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277186864,
            "range": "± 3602203",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 30087744,
            "range": "± 1500376",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59076371,
            "range": "± 743009",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 123598046,
            "range": "± 4172940",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 258850756,
            "range": "± 15631429",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164890392,
            "range": "± 678893",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330788937,
            "range": "± 1627924",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 648551229,
            "range": "± 2491797",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1307033187,
            "range": "± 19597377",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 452968020,
            "range": "± 1376476",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 897510792,
            "range": "± 6060990",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1760139542,
            "range": "± 9123120",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3446940250,
            "range": "± 23331021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "818ca85ab17e03b18fd5aeb94ef073ab7a6ef7bb",
          "message": "Move default sqrt implementation to IsPrimeField trait (#402)\n\n* move default sqrt implementation to IsPrimeField trait\n\n* refactor sqrt\n\n* minor refactor\n\n* remove old tests\n\n* test both square roots",
          "timestamp": "2023-06-05T14:45:58Z",
          "tree_id": "ffd16497a9fd7b36f5a516db42c44631ed0e497a",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/818ca85ab17e03b18fd5aeb94ef073ab7a6ef7bb"
        },
        "date": 1685978768019,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1691730359,
            "range": "± 18384056",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4623480871,
            "range": "± 45731328",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3585520901,
            "range": "± 64111744",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 10101915674,
            "range": "± 83550177",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 7557208068,
            "range": "± 469623458",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 21695241194,
            "range": "± 50903450",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 15620545233,
            "range": "± 157705479",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 46566166575,
            "range": "± 108238917",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 43914222,
            "range": "± 1156423",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 43104856,
            "range": "± 1189377",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 93288473,
            "range": "± 3129476",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 89470444,
            "range": "± 1494350",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 90889225,
            "range": "± 1260724",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 92109252,
            "range": "± 1899122",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 184513883,
            "range": "± 4421910",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 182777796,
            "range": "± 3413526",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 179550289,
            "range": "± 3290232",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 179906152,
            "range": "± 3864066",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 365440752,
            "range": "± 4333146",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 366608251,
            "range": "± 5201380",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 355366951,
            "range": "± 9029675",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 365449755,
            "range": "± 5986424",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 730974239,
            "range": "± 14291039",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 725769522,
            "range": "± 9690325",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 100320088,
            "range": "± 2254369",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 212725432,
            "range": "± 1301504",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 439353175,
            "range": "± 4464026",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 904242878,
            "range": "± 22650268",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1855073940,
            "range": "± 29194982",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3841069565,
            "range": "± 50637007",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 8047633927,
            "range": "± 71531759",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 16653179207,
            "range": "± 205029475",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1968109197,
            "range": "± 26248666",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 4096119636,
            "range": "± 29790417",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 8460210770,
            "range": "± 100037998",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 17760597445,
            "range": "± 559596432",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 97,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 429,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 141,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 238,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 184,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 202,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c517e5c581f273ac6028ea1e293e8e00d0d33233",
          "message": "perf: improve accuracy of FFT benches (#411)\n\n- Use `iter_batched` rather than cloning input inside the benchmarked\n  functions\n- Properly fix symbol names and exclude from inlining the helper\n  functions to help IAI exclude them from the measurement\n- Exclude bit reversal from ordered FFT benchmarks, as that's measured\n  separately",
          "timestamp": "2023-06-05T17:09:27Z",
          "tree_id": "06b797b35eacf5ca2a3d75df2696119777e40683",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/c517e5c581f273ac6028ea1e293e8e00d0d33233"
        },
        "date": 1685985305116,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130591786,
            "range": "± 3100559",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254213437,
            "range": "± 2733442",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486680031,
            "range": "± 3696186",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 983118104,
            "range": "± 5924517",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34227321,
            "range": "± 297648",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67513068,
            "range": "± 492486",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133238874,
            "range": "± 1239506",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278403687,
            "range": "± 4552307",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31272775,
            "range": "± 255511",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58191860,
            "range": "± 2284804",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 125099698,
            "range": "± 4635315",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 267069427,
            "range": "± 18535704",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163590516,
            "range": "± 3541480",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 323206791,
            "range": "± 11160388",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 646302042,
            "range": "± 8848957",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1311018229,
            "range": "± 9187941",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 450900864,
            "range": "± 1973128",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 899649063,
            "range": "± 2782997",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1765026041,
            "range": "± 4272359",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3475449771,
            "range": "± 16296087",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "844f912664d74ce918d0237123ba720c7d90b296",
          "message": "perf: improve accuracy of field IAI benchmarks (#412)\n\n- Extract FP element sample creation into a `util` function to allow\n  exclusion from measurement.\n- Likewise for getting a quadratic residue by squaring the sample.\n- Replace the apprpriate call in IAI and Criterion benches.",
          "timestamp": "2023-06-05T17:36:10Z",
          "tree_id": "85d77b4d73c23b29c48de48701d726ba4e18c2d0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/844f912664d74ce918d0237123ba720c7d90b296"
        },
        "date": 1685986920879,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130916250,
            "range": "± 2484817",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256456614,
            "range": "± 2848197",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 484700666,
            "range": "± 3023891",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 978701646,
            "range": "± 8050398",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34533771,
            "range": "± 353203",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68083458,
            "range": "± 609976",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132864407,
            "range": "± 801874",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277195322,
            "range": "± 3317624",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31251258,
            "range": "± 1129979",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 56643798,
            "range": "± 2864754",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 117950972,
            "range": "± 5503554",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 264116156,
            "range": "± 16066397",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165203418,
            "range": "± 966060",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329746385,
            "range": "± 2446209",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 648281125,
            "range": "± 5964618",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1309259625,
            "range": "± 12577508",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 451204375,
            "range": "± 6767478",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 934087333,
            "range": "± 78960592",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 2039085187,
            "range": "± 29869859",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 4152415937,
            "range": "± 682417719",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c517e5c581f273ac6028ea1e293e8e00d0d33233",
          "message": "perf: improve accuracy of FFT benches (#411)\n\n- Use `iter_batched` rather than cloning input inside the benchmarked\n  functions\n- Properly fix symbol names and exclude from inlining the helper\n  functions to help IAI exclude them from the measurement\n- Exclude bit reversal from ordered FFT benchmarks, as that's measured\n  separately",
          "timestamp": "2023-06-05T17:09:27Z",
          "tree_id": "06b797b35eacf5ca2a3d75df2696119777e40683",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/c517e5c581f273ac6028ea1e293e8e00d0d33233"
        },
        "date": 1685987014239,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1335505544,
            "range": "± 1671760",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3727222514,
            "range": "± 17088163",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2794268579,
            "range": "± 3172589",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8204785640,
            "range": "± 20999255",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5834901822,
            "range": "± 4432129",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17827343496,
            "range": "± 51613618",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 12168595049,
            "range": "± 4281767",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 38141555371,
            "range": "± 99129524",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 36972215,
            "range": "± 190262",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 36967673,
            "range": "± 312317",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 83746183,
            "range": "± 539432",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 84212948,
            "range": "± 719400",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 74299358,
            "range": "± 193638",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 74477174,
            "range": "± 286380",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 172013027,
            "range": "± 1409066",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 171494752,
            "range": "± 1738009",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 149807855,
            "range": "± 361996",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 149246464,
            "range": "± 217404",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 344026175,
            "range": "± 2337774",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 344712290,
            "range": "± 2385007",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 298697579,
            "range": "± 1137275",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 298389011,
            "range": "± 666478",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 671821658,
            "range": "± 11635474",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 679835705,
            "range": "± 3696177",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 61633917,
            "range": "± 1286058",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 132774170,
            "range": "± 1368890",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 261823505,
            "range": "± 2020125",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 534751752,
            "range": "± 4708390",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1535810074,
            "range": "± 2527233",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3202500161,
            "range": "± 3154181",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6650667046,
            "range": "± 8729963",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13789634329,
            "range": "± 9601588",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1620813316,
            "range": "± 3475769",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3374814193,
            "range": "± 4190671",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6991062244,
            "range": "± 8956774",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14464805540,
            "range": "± 6822938",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 157,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c3dba9d10b8ad08e5471defc9fe4c66558337e",
          "message": "perf: optimize MSM routines (#405)\n\n- Replace multiplication by small constants with addition chains, as\n  their construction in Montgomery is expensive.\n- Reduce duplication of operations by storing temporaries.\n- Replace an order check by its equivalent inequality check to avoid\n  conversion to normal form.",
          "timestamp": "2023-06-05T17:39:47Z",
          "tree_id": "b7f13acd10fda09d28e73374d9bf0051f0059f31",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/72c3dba9d10b8ad08e5471defc9fe4c66558337e"
        },
        "date": 1685987132473,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 189675947,
            "range": "± 181196314",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 462513208,
            "range": "± 351022248",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 841251958,
            "range": "± 812254260",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 2031071250,
            "range": "± 1014498395",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 50623584,
            "range": "± 14772861",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 73541039,
            "range": "± 4000230",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132754158,
            "range": "± 351317",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278320281,
            "range": "± 3106630",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31083529,
            "range": "± 257434",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59036012,
            "range": "± 1463520",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120337295,
            "range": "± 4669278",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 250296159,
            "range": "± 16129656",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163579449,
            "range": "± 754572",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329907010,
            "range": "± 2150442",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650568000,
            "range": "± 5528754",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1306848979,
            "range": "± 12348332",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 447115395,
            "range": "± 2138106",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 897028458,
            "range": "± 6068265",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1739366416,
            "range": "± 28506381",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3427920291,
            "range": "± 58230885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c3dba9d10b8ad08e5471defc9fe4c66558337e",
          "message": "perf: optimize MSM routines (#405)\n\n- Replace multiplication by small constants with addition chains, as\n  their construction in Montgomery is expensive.\n- Reduce duplication of operations by storing temporaries.\n- Replace an order check by its equivalent inequality check to avoid\n  conversion to normal form.",
          "timestamp": "2023-06-05T17:39:47Z",
          "tree_id": "b7f13acd10fda09d28e73374d9bf0051f0059f31",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/72c3dba9d10b8ad08e5471defc9fe4c66558337e"
        },
        "date": 1685988782515,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1291195878,
            "range": "± 13301871",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3740815586,
            "range": "± 131585078",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2658166672,
            "range": "± 44330104",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8152623021,
            "range": "± 101178561",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5781155044,
            "range": "± 156350362",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17698329995,
            "range": "± 84029239",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 11787439922,
            "range": "± 142029172",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 38039945097,
            "range": "± 159401881",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 34686777,
            "range": "± 568297",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 34217899,
            "range": "± 834722",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 76322643,
            "range": "± 1183098",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 75869900,
            "range": "± 1017156",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 72962520,
            "range": "± 2432083",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 73226688,
            "range": "± 1634604",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 159280439,
            "range": "± 1571690",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 162878119,
            "range": "± 1437537",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 147958673,
            "range": "± 4281272",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 149144545,
            "range": "± 4274349",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 320235570,
            "range": "± 2342046",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 323781713,
            "range": "± 2352369",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 298300879,
            "range": "± 7680139",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 304232365,
            "range": "± 5360314",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 650344109,
            "range": "± 9261529",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 639791525,
            "range": "± 8256956",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 47459474,
            "range": "± 789257",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 117482977,
            "range": "± 1244576",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 243133718,
            "range": "± 1089113",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 502835814,
            "range": "± 2627805",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1436752588,
            "range": "± 31248466",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3087335275,
            "range": "± 43662002",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6385504379,
            "range": "± 126659682",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13378465525,
            "range": "± 163200328",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1526557501,
            "range": "± 26930296",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3188243151,
            "range": "± 28950108",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6651998982,
            "range": "± 117045640",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 13827275093,
            "range": "± 146110596",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 738,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 23064,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 585,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 853,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 582,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 581,
            "range": "± 36",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "844f912664d74ce918d0237123ba720c7d90b296",
          "message": "perf: improve accuracy of field IAI benchmarks (#412)\n\n- Extract FP element sample creation into a `util` function to allow\n  exclusion from measurement.\n- Likewise for getting a quadratic residue by squaring the sample.\n- Replace the apprpriate call in IAI and Criterion benches.",
          "timestamp": "2023-06-05T17:36:10Z",
          "tree_id": "85d77b4d73c23b29c48de48701d726ba4e18c2d0",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/844f912664d74ce918d0237123ba720c7d90b296"
        },
        "date": 1685988799515,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1561354967,
            "range": "± 9633731",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3903897142,
            "range": "± 36836051",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3279307843,
            "range": "± 28310577",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8637007207,
            "range": "± 106941834",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6819664062,
            "range": "± 43709846",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18898090538,
            "range": "± 65265302",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 14252770866,
            "range": "± 56789354",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 40492178574,
            "range": "± 48162995",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42261246,
            "range": "± 496720",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 42331032,
            "range": "± 318719",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 85464394,
            "range": "± 523960",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 86466877,
            "range": "± 518288",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 84862552,
            "range": "± 1094733",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 85255281,
            "range": "± 770840",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 173319531,
            "range": "± 924110",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 173229011,
            "range": "± 1890842",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 170176294,
            "range": "± 1618152",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 170641638,
            "range": "± 1810163",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 350128485,
            "range": "± 3354356",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 350423994,
            "range": "± 1690182",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 340203160,
            "range": "± 2408307",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 337591259,
            "range": "± 3736032",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 704654326,
            "range": "± 3573441",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 699852962,
            "range": "± 7025097",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 55962948,
            "range": "± 1667096",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 125070917,
            "range": "± 1854379",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 248040186,
            "range": "± 3289402",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 511336301,
            "range": "± 3561900",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1754659566,
            "range": "± 10372138",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3635759405,
            "range": "± 23363692",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 7510945329,
            "range": "± 46558526",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 15665555220,
            "range": "± 41276580",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1829320395,
            "range": "± 7597250",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3804711783,
            "range": "± 20593126",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 7917440428,
            "range": "± 27518734",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 16261511052,
            "range": "± 45567853",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 437,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 6917,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 439,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 675,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 470,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 602,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46f7c5efcaf732705b6a40da8e5453ff1100acd0",
          "message": "perf: fix polynomial benchmarks (#416)",
          "timestamp": "2023-06-05T18:40:01Z",
          "tree_id": "4a76bc85bc1f54d1a56a40bc2cea676c82825fcc",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/46f7c5efcaf732705b6a40da8e5453ff1100acd0"
        },
        "date": 1685990740005,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 133358419,
            "range": "± 5450281",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 251441646,
            "range": "± 3076736",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486607937,
            "range": "± 3639171",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 972012666,
            "range": "± 12587346",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 33884028,
            "range": "± 210439",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67868803,
            "range": "± 437391",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133275969,
            "range": "± 2341826",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276796343,
            "range": "± 3424920",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31122591,
            "range": "± 483474",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58343570,
            "range": "± 3720024",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 119996033,
            "range": "± 3941441",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 257124177,
            "range": "± 18670229",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165089537,
            "range": "± 1028250",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 328856323,
            "range": "± 6040187",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 652117979,
            "range": "± 4256186",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1319905771,
            "range": "± 17644699",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 450650458,
            "range": "± 3341533",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 892754437,
            "range": "± 5781315",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1765231458,
            "range": "± 7037954",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3473429020,
            "range": "± 22917107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46f7c5efcaf732705b6a40da8e5453ff1100acd0",
          "message": "perf: fix polynomial benchmarks (#416)",
          "timestamp": "2023-06-05T18:40:01Z",
          "tree_id": "4a76bc85bc1f54d1a56a40bc2cea676c82825fcc",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/46f7c5efcaf732705b6a40da8e5453ff1100acd0"
        },
        "date": 1685992576897,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1503593717,
            "range": "± 54645639",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3874431003,
            "range": "± 58811782",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 3088576676,
            "range": "± 112554748",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8694899718,
            "range": "± 71970813",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 6315887962,
            "range": "± 160224055",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18901557353,
            "range": "± 152933306",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 13319588971,
            "range": "± 154084095",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 40250422766,
            "range": "± 144323692",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 40742348,
            "range": "± 1833359",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37974320,
            "range": "± 1080280",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 83758161,
            "range": "± 2477997",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 80219381,
            "range": "± 2070081",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 83910078,
            "range": "± 1767213",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 84659872,
            "range": "± 2252880",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 164293145,
            "range": "± 2238527",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 160873349,
            "range": "± 5001931",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 168719473,
            "range": "± 5104254",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 155574857,
            "range": "± 4752341",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 341115444,
            "range": "± 6194993",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 332761534,
            "range": "± 8306013",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 335597228,
            "range": "± 7301502",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 312956947,
            "range": "± 10506181",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 672300825,
            "range": "± 18802206",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 675425229,
            "range": "± 15748862",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 54328652,
            "range": "± 1411525",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 119723796,
            "range": "± 1269738",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 242039220,
            "range": "± 2425462",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 502697566,
            "range": "± 4638097",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1693497533,
            "range": "± 71918919",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3466432475,
            "range": "± 94169282",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 7202943438,
            "range": "± 126114666",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 14864638204,
            "range": "± 225497362",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1841070325,
            "range": "± 30750370",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3727833214,
            "range": "± 61579140",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 7761844152,
            "range": "± 100368758",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 16096534370,
            "range": "± 71710476",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 46,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 107,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 165,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 154,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 911,
            "range": "± 36",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88e3d1c1d220e9433f6e43ca2dc0fe467208e70e",
          "message": "Implement Square Separated Operand Scanning (#406)\n\n* Add sos algorithm\n\n* WIP: Square for unsigned integer\n\n* Fix bug in square of unsigned integer. Add custom square for Montgomery Field\n\n* benches wip\n\n* improve pow in Montgomery prime fields\n\n* improve square first loop\n\n* improve code readability\n\n* minor refactor in pow for montgomery backend prime fields\n\n* minor refactor. Add comments to sos_square\n\n* remove unnecessary bench\n\n* fmt\n\n* perf: removing iterators\n\n* add square with default impl to IsField\n\n* add inline\n\n* fmt\n\n* add comment on intentional non black boxed parameters in benches\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>\nCo-authored-by: Mario Rugiero <mario.rugiero@lambdaclass.com>",
          "timestamp": "2023-06-05T21:42:52Z",
          "tree_id": "b009fad7d7caf2faa2387b2cb5eb00755b0f7e74",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/88e3d1c1d220e9433f6e43ca2dc0fe467208e70e"
        },
        "date": 1686001715685,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129316770,
            "range": "± 2553820",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254963729,
            "range": "± 1206161",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 487296947,
            "range": "± 3058878",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 970171875,
            "range": "± 14631840",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34247940,
            "range": "± 311804",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68232246,
            "range": "± 596432",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133184155,
            "range": "± 1056814",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276287250,
            "range": "± 2916493",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31356534,
            "range": "± 196219",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58745177,
            "range": "± 1408977",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121794959,
            "range": "± 7368394",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 251245208,
            "range": "± 19782465",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163656756,
            "range": "± 657368",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330011125,
            "range": "± 5752290",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650504292,
            "range": "± 2943747",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1306690416,
            "range": "± 16302223",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 455603812,
            "range": "± 3393326",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 901351042,
            "range": "± 6369786",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1737490583,
            "range": "± 8272821",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3480291958,
            "range": "± 19122426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88e3d1c1d220e9433f6e43ca2dc0fe467208e70e",
          "message": "Implement Square Separated Operand Scanning (#406)\n\n* Add sos algorithm\n\n* WIP: Square for unsigned integer\n\n* Fix bug in square of unsigned integer. Add custom square for Montgomery Field\n\n* benches wip\n\n* improve pow in Montgomery prime fields\n\n* improve square first loop\n\n* improve code readability\n\n* minor refactor in pow for montgomery backend prime fields\n\n* minor refactor. Add comments to sos_square\n\n* remove unnecessary bench\n\n* fmt\n\n* perf: removing iterators\n\n* add square with default impl to IsField\n\n* add inline\n\n* fmt\n\n* add comment on intentional non black boxed parameters in benches\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>\nCo-authored-by: Mario Rugiero <mario.rugiero@lambdaclass.com>",
          "timestamp": "2023-06-05T21:42:52Z",
          "tree_id": "b009fad7d7caf2faa2387b2cb5eb00755b0f7e74",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/88e3d1c1d220e9433f6e43ca2dc0fe467208e70e"
        },
        "date": 1686003513869,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1278155227,
            "range": "± 16812263",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4276322739,
            "range": "± 30259859",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2629222937,
            "range": "± 22650554",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 9525145646,
            "range": "± 48959459",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5501658404,
            "range": "± 72705722",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 20699288738,
            "range": "± 40778946",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 11401670131,
            "range": "± 90683087",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 44211553952,
            "range": "± 98270141",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 47331252,
            "range": "± 1019947",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 46253218,
            "range": "± 635469",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 95538244,
            "range": "± 1197568",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 93046290,
            "range": "± 1266373",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 90134701,
            "range": "± 1300809",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 90222962,
            "range": "± 1317614",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 186468482,
            "range": "± 1519715",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 185328648,
            "range": "± 1876578",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 187121450,
            "range": "± 2847326",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 182932743,
            "range": "± 1902159",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 371335846,
            "range": "± 2962315",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 369247550,
            "range": "± 6883234",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 368157162,
            "range": "± 6770425",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 371313127,
            "range": "± 4909466",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 748919012,
            "range": "± 11076138",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 745017092,
            "range": "± 5262276",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 69865117,
            "range": "± 1277102",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 148888563,
            "range": "± 2175372",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 304872964,
            "range": "± 4468070",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 611745380,
            "range": "± 11813824",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1455241713,
            "range": "± 16830564",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3069608155,
            "range": "± 51734026",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6439278879,
            "range": "± 113633185",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13034208316,
            "range": "± 445654157",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1576847358,
            "range": "± 26932599",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3266915848,
            "range": "± 38788373",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6737250362,
            "range": "± 67786715",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 13963418647,
            "range": "± 108195356",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 1755,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 113914,
            "range": "± 11924",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 1434,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 458,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1750,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 108825,
            "range": "± 4640",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 4679,
            "range": "± 242",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "30e6fb2e88ae92463549bb195e66ec052de827a0",
          "message": "Compile shaders in CI (#371)\n\n* Make the GPU jobs compile the shaders\n\n* Make CI fail if shader is not up to date\n\n* Add nvcc installation to CI\n\n* Appease clippy\n\n* Remove unneeded shader files\n\n* Fix targets not recompiling\n\n* Add intial build.rs for gpu crate\n\n* Edit build script\n\n* Appease clippy\n\n* Add metal compilation to build.rs and remove shader\n\n* Fix cuda compilation script\n\n* Appease clippy\n\n* Appease 1.70 clippy\n\n* Add cuda shader to .gitignore\n\n* gitignore all compiled shader files\n\n* Use `CARGO_MANIFEST_DIR` to get full path to src\n\n* Appease clippy\n\n* Re-add allow(dead_code)",
          "timestamp": "2023-06-06T14:35:50Z",
          "tree_id": "1d6c9c0933f4af03fe44bd628f20c05c9ff2eed6",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/30e6fb2e88ae92463549bb195e66ec052de827a0"
        },
        "date": 1686062514816,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 131328894,
            "range": "± 4816796",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 244635055,
            "range": "± 6468542",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486175531,
            "range": "± 9300405",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 975001395,
            "range": "± 16309169",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34986156,
            "range": "± 332254",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 69177204,
            "range": "± 711105",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 135509420,
            "range": "± 1205654",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 280269906,
            "range": "± 3754499",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 28072346,
            "range": "± 635438",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 54369822,
            "range": "± 3834574",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 116819082,
            "range": "± 4509612",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 241774104,
            "range": "± 22993986",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163926087,
            "range": "± 1052797",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329485958,
            "range": "± 1299618",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 637564667,
            "range": "± 9055029",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1315067854,
            "range": "± 13606709",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 442629916,
            "range": "± 6147816",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 890679750,
            "range": "± 9808861",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1740244354,
            "range": "± 8315966",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3421679354,
            "range": "± 10474205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "30e6fb2e88ae92463549bb195e66ec052de827a0",
          "message": "Compile shaders in CI (#371)\n\n* Make the GPU jobs compile the shaders\n\n* Make CI fail if shader is not up to date\n\n* Add nvcc installation to CI\n\n* Appease clippy\n\n* Remove unneeded shader files\n\n* Fix targets not recompiling\n\n* Add intial build.rs for gpu crate\n\n* Edit build script\n\n* Appease clippy\n\n* Add metal compilation to build.rs and remove shader\n\n* Fix cuda compilation script\n\n* Appease clippy\n\n* Appease 1.70 clippy\n\n* Add cuda shader to .gitignore\n\n* gitignore all compiled shader files\n\n* Use `CARGO_MANIFEST_DIR` to get full path to src\n\n* Appease clippy\n\n* Re-add allow(dead_code)",
          "timestamp": "2023-06-06T14:35:50Z",
          "tree_id": "1d6c9c0933f4af03fe44bd628f20c05c9ff2eed6",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/30e6fb2e88ae92463549bb195e66ec052de827a0"
        },
        "date": 1686064132490,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1227090394,
            "range": "± 46622309",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3748042782,
            "range": "± 100885498",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2524939125,
            "range": "± 75445115",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7990458030,
            "range": "± 101879623",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4722875022,
            "range": "± 191673374",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17610288529,
            "range": "± 303605593",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9859925673,
            "range": "± 335666748",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 37958566406,
            "range": "± 283433333",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42972222,
            "range": "± 1305622",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37858587,
            "range": "± 1417717",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 84803457,
            "range": "± 3260029",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 88715560,
            "range": "± 4350991",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 91399648,
            "range": "± 1849935",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 88362251,
            "range": "± 4777687",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 165665451,
            "range": "± 3433238",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 162787066,
            "range": "± 3403895",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 160213895,
            "range": "± 3745048",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 163151381,
            "range": "± 5455909",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 328318062,
            "range": "± 9083284",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 351292059,
            "range": "± 13575463",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 322330938,
            "range": "± 10584895",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 329616051,
            "range": "± 10465658",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 668294666,
            "range": "± 17441195",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 663567045,
            "range": "± 17603143",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 52594031,
            "range": "± 1828074",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 118461673,
            "range": "± 2714644",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 242800377,
            "range": "± 4761888",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 498710194,
            "range": "± 16399422",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1353312862,
            "range": "± 34224329",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2828704229,
            "range": "± 96493899",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5923413752,
            "range": "± 144905431",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 12173746062,
            "range": "± 266726310",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1521532183,
            "range": "± 42876609",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3187366790,
            "range": "± 56037759",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6575627164,
            "range": "± 131565096",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 13066347540,
            "range": "± 174616915",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 3281,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 422579,
            "range": "± 22679",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 2274,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 606,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 2760,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 422007,
            "range": "± 18322",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 7855,
            "range": "± 3261",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5ddf5268c6f0f3ac96d2321ab7cf5c3a3f6ca08",
          "message": "perf: perform reversal of roots of unity in-place (#410)\n\nThis removes a big allocation from the FFT path.",
          "timestamp": "2023-06-06T17:28:06Z",
          "tree_id": "ea56e7b55c4a1ed7127fffb8e6d287ac846f2b4b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f5ddf5268c6f0f3ac96d2321ab7cf5c3a3f6ca08"
        },
        "date": 1686072830379,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129710774,
            "range": "± 3557329",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 252101635,
            "range": "± 2646345",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 483716656,
            "range": "± 3956588",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 972902896,
            "range": "± 12056295",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34338302,
            "range": "± 336786",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67920258,
            "range": "± 552318",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133847276,
            "range": "± 1313289",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278213999,
            "range": "± 4012554",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 30921909,
            "range": "± 586744",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 55512905,
            "range": "± 3134719",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 116345134,
            "range": "± 5618433",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 258652146,
            "range": "± 19759530",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163656579,
            "range": "± 1092793",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330340531,
            "range": "± 2417684",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 647512937,
            "range": "± 5121417",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1314804583,
            "range": "± 19982439",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 451587948,
            "range": "± 1977206",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 901063500,
            "range": "± 3248479",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1764338750,
            "range": "± 8080998",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3471406583,
            "range": "± 20507804",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5ddf5268c6f0f3ac96d2321ab7cf5c3a3f6ca08",
          "message": "perf: perform reversal of roots of unity in-place (#410)\n\nThis removes a big allocation from the FFT path.",
          "timestamp": "2023-06-06T17:28:06Z",
          "tree_id": "ea56e7b55c4a1ed7127fffb8e6d287ac846f2b4b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/f5ddf5268c6f0f3ac96d2321ab7cf5c3a3f6ca08"
        },
        "date": 1686074530162,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1214680213,
            "range": "± 1941078",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3898533389,
            "range": "± 22136331",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2547227528,
            "range": "± 4274457",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8602516047,
            "range": "± 11002971",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5323690871,
            "range": "± 8751028",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18675974815,
            "range": "± 57537926",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 11065761086,
            "range": "± 16226962",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 39891458233,
            "range": "± 125709204",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 45027637,
            "range": "± 190873",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 44910292,
            "range": "± 117217",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 71970755,
            "range": "± 861606",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 73013434,
            "range": "± 276720",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 89268432,
            "range": "± 183626",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 90002922,
            "range": "± 381962",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 150226626,
            "range": "± 712568",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 149284494,
            "range": "± 708404",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 179582270,
            "range": "± 1140385",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 179721030,
            "range": "± 281340",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 301360529,
            "range": "± 515435",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 300613414,
            "range": "± 651876",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 357304000,
            "range": "± 3388125",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 357884169,
            "range": "± 901463",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 602088903,
            "range": "± 1457040",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 602026540,
            "range": "± 1271244",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 60638385,
            "range": "± 248628",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 123745585,
            "range": "± 502478",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 247397891,
            "range": "± 447364",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 508599751,
            "range": "± 3039827",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1397711591,
            "range": "± 9199326",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2937712563,
            "range": "± 5608409",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6073133616,
            "range": "± 23745896",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 12641392102,
            "range": "± 39452927",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1505617933,
            "range": "± 4573273",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3119801235,
            "range": "± 14230841",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6480324318,
            "range": "± 26209933",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 13433591704,
            "range": "± 53453419",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 407,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 143,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 51,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 196,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 538,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 880,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91916f001cd9f3f7acd69cd2d9e023f7609d5584",
          "message": "perf: keep a running power for scale (#413)",
          "timestamp": "2023-06-06T19:12:05Z",
          "tree_id": "bc1d492a1dada0dfd6162620b9c1342c192d39ed",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/91916f001cd9f3f7acd69cd2d9e023f7609d5584"
        },
        "date": 1686079074456,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130187463,
            "range": "± 3355110",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254655864,
            "range": "± 1978335",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486773948,
            "range": "± 5081237",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 994996542,
            "range": "± 15111689",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34435997,
            "range": "± 391711",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 67985047,
            "range": "± 506191",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132908621,
            "range": "± 563878",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278581437,
            "range": "± 2943541",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31160775,
            "range": "± 304983",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 55341044,
            "range": "± 2346164",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 118599431,
            "range": "± 3685167",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 245798687,
            "range": "± 18424662",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164745042,
            "range": "± 925669",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330759760,
            "range": "± 1300418",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 652375645,
            "range": "± 3917794",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1311061833,
            "range": "± 24162702",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 448593822,
            "range": "± 1657406",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 893478250,
            "range": "± 5755364",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1761763625,
            "range": "± 12990482",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3456656104,
            "range": "± 25838119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91916f001cd9f3f7acd69cd2d9e023f7609d5584",
          "message": "perf: keep a running power for scale (#413)",
          "timestamp": "2023-06-06T19:12:05Z",
          "tree_id": "bc1d492a1dada0dfd6162620b9c1342c192d39ed",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/91916f001cd9f3f7acd69cd2d9e023f7609d5584"
        },
        "date": 1686080342252,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1152181607,
            "range": "± 741719",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 2179694881,
            "range": "± 18024966",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2412517692,
            "range": "± 674549",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 4890645223,
            "range": "± 14022983",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5042191101,
            "range": "± 2020437",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 10564024719,
            "range": "± 16577787",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 10517365026,
            "range": "± 1850182",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 23138784459,
            "range": "± 52926837",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42426280,
            "range": "± 99138",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 42261633,
            "range": "± 165970",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 60371483,
            "range": "± 2066084",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 58775426,
            "range": "± 952019",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 84286519,
            "range": "± 280725",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 84787778,
            "range": "± 145705",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 131642381,
            "range": "± 1974701",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 130628062,
            "range": "± 2820720",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 169053929,
            "range": "± 309267",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 169419751,
            "range": "± 2599130",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 275089889,
            "range": "± 1405763",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 275084535,
            "range": "± 856724",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 336257661,
            "range": "± 550208",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 336668301,
            "range": "± 7615199",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 548629974,
            "range": "± 1625197",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 547365695,
            "range": "± 1760429",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 44432246,
            "range": "± 1155395",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 103647737,
            "range": "± 951508",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 212905473,
            "range": "± 581203",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 429749760,
            "range": "± 5215971",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1310196753,
            "range": "± 3234417",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2748085816,
            "range": "± 1428179",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5710573272,
            "range": "± 3018243",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 11872002501,
            "range": "± 8304037",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1386545717,
            "range": "± 2682411",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2888044447,
            "range": "± 2182612",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5994945387,
            "range": "± 7548220",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 12418504756,
            "range": "± 6633575",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 210,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 3387,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 277,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 198,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 419,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 2245,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 1424,
            "range": "± 24",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "bbe27a3a764d4e348734e83f15d7ac32d902473a",
          "message": "perf/merkle inplace (#417)\n\n* perf: add benchmark for merkle tree construction\n\n* perf: lower number of elements for merkle bench\n\n* perf: remove allocations in recursive merkle build step\n\n* perf: bump sample size again, as now it can finish\n\n* chore: cargo fmt",
          "timestamp": "2023-06-07T18:01:33Z",
          "tree_id": "e73b84df8a3bb9d7ee4cfdb1b4091265d91b3bb3",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/bbe27a3a764d4e348734e83f15d7ac32d902473a"
        },
        "date": 1686162532504,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 128950079,
            "range": "± 2494586",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254224802,
            "range": "± 1592343",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 494121052,
            "range": "± 1532713",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 977704541,
            "range": "± 5889725",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35211377,
            "range": "± 201604",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68368835,
            "range": "± 383619",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133122862,
            "range": "± 648249",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278405166,
            "range": "± 3364137",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31401445,
            "range": "± 222005",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 58411914,
            "range": "± 2904959",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 116093243,
            "range": "± 4700363",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 253323590,
            "range": "± 18478195",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165068529,
            "range": "± 640522",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329426041,
            "range": "± 2114371",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 649226999,
            "range": "± 5460011",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1290943958,
            "range": "± 20275652",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 452674062,
            "range": "± 4632615",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 896594417,
            "range": "± 5112024",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1768155812,
            "range": "± 12462476",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3475145792,
            "range": "± 21288937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "bbe27a3a764d4e348734e83f15d7ac32d902473a",
          "message": "perf/merkle inplace (#417)\n\n* perf: add benchmark for merkle tree construction\n\n* perf: lower number of elements for merkle bench\n\n* perf: remove allocations in recursive merkle build step\n\n* perf: bump sample size again, as now it can finish\n\n* chore: cargo fmt",
          "timestamp": "2023-06-07T18:01:33Z",
          "tree_id": "e73b84df8a3bb9d7ee4cfdb1b4091265d91b3bb3",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/bbe27a3a764d4e348734e83f15d7ac32d902473a"
        },
        "date": 1686163940985,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1005653282,
            "range": "± 1850079",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3270647228,
            "range": "± 24222259",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2105461456,
            "range": "± 1099978",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7335041441,
            "range": "± 21418689",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4402392684,
            "range": "± 8979781",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 15973888693,
            "range": "± 20834967",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9208468894,
            "range": "± 4966742",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 34287272631,
            "range": "± 39208065",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 36761760,
            "range": "± 144510",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 36713174,
            "range": "± 116804",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 53479109,
            "range": "± 701752",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 52906959,
            "range": "± 1198657",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 74650071,
            "range": "± 169937",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 74675934,
            "range": "± 64411",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 124895981,
            "range": "± 634637",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 125190052,
            "range": "± 1511068",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 150906741,
            "range": "± 146053",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 150639198,
            "range": "± 243067",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 259447502,
            "range": "± 528546",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 259672801,
            "range": "± 1021636",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 301844756,
            "range": "± 108429",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 301823764,
            "range": "± 33955",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 523774305,
            "range": "± 817906",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 524319927,
            "range": "± 956859",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 49866247,
            "range": "± 443772",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 109284768,
            "range": "± 327405",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 224433163,
            "range": "± 429055",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 457642729,
            "range": "± 1719744",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1168179112,
            "range": "± 1569667",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2453918099,
            "range": "± 2419641",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5100308039,
            "range": "± 3952762",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 10592319951,
            "range": "± 5507718",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1252349859,
            "range": "± 2016685",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2618061050,
            "range": "± 2384547",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5433565069,
            "range": "± 3883516",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 11260567744,
            "range": "± 5604767",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 108,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 43,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 152,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 488,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d61e799e09b380d8fdcb38565cd2a2e2f84d192",
          "message": "perf: implement Ruffini rule division for 'x - b' monomials (#419)",
          "timestamp": "2023-06-07T18:51:29Z",
          "tree_id": "2d214152ecb52c89749a9264b8d82ed78a7396bc",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/5d61e799e09b380d8fdcb38565cd2a2e2f84d192"
        },
        "date": 1686164231319,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129213219,
            "range": "± 2743230",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 253324583,
            "range": "± 2833271",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 493167791,
            "range": "± 2349355",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 971917604,
            "range": "± 11289850",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35153252,
            "range": "± 308129",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68890775,
            "range": "± 738707",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 135926731,
            "range": "± 1557241",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277860666,
            "range": "± 2906932",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 28800019,
            "range": "± 1133941",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59096185,
            "range": "± 1990322",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120232952,
            "range": "± 5082903",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 260885889,
            "range": "± 17821734",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163589219,
            "range": "± 760840",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330729781,
            "range": "± 1918432",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650202854,
            "range": "± 4324939",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1315140583,
            "range": "± 28832057",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 450293375,
            "range": "± 2672492",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 891155771,
            "range": "± 6773296",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1763150083,
            "range": "± 12070776",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3450070104,
            "range": "± 15109996",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.rugiero@nextroll.com",
            "name": "Mario Rugiero",
            "username": "Oppen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d61e799e09b380d8fdcb38565cd2a2e2f84d192",
          "message": "perf: implement Ruffini rule division for 'x - b' monomials (#419)",
          "timestamp": "2023-06-07T18:51:29Z",
          "tree_id": "2d214152ecb52c89749a9264b8d82ed78a7396bc",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/5d61e799e09b380d8fdcb38565cd2a2e2f84d192"
        },
        "date": 1686165748785,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1011101451,
            "range": "± 720579",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3585617803,
            "range": "± 10122277",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2124979962,
            "range": "± 1292978",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7992676827,
            "range": "± 13883833",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4439785871,
            "range": "± 1870006",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 17378814810,
            "range": "± 31749705",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9259203530,
            "range": "± 6303431",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 37300881327,
            "range": "± 771777826",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 38202690,
            "range": "± 201549",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37874831,
            "range": "± 195905",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 64239001,
            "range": "± 1113311",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 63627030,
            "range": "± 1200519",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 75624454,
            "range": "± 116652",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 75784127,
            "range": "± 215126",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 136039767,
            "range": "± 919318",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 137201447,
            "range": "± 840854",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 152656504,
            "range": "± 227856",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 152401220,
            "range": "± 402993",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 281166201,
            "range": "± 683761",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 280178443,
            "range": "± 498492",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 303233066,
            "range": "± 337299",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 303450990,
            "range": "± 390846",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 557075690,
            "range": "± 1144256",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 557148834,
            "range": "± 1497315",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 60770885,
            "range": "± 2011816",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 127397515,
            "range": "± 498060",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 259085675,
            "range": "± 415960",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 524716036,
            "range": "± 2930863",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1199074638,
            "range": "± 4032453",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2505323473,
            "range": "± 2843759",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5199059590,
            "range": "± 4159103",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 10783553787,
            "range": "± 9601289",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1285912516,
            "range": "± 2224057",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2670826332,
            "range": "± 1891836",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5536118896,
            "range": "± 3614596",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 11442289579,
            "range": "± 10708551",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 3089,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 395483,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 1962,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 504,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 2388,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 355375,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 6611,
            "range": "± 2175",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 739458,
            "range": "± 3336",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 3137,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "084bf75a7442c036b34e29497759138421ee61a7",
          "message": "Flip if condition (#420)\n\ngives ~14% increase in performance",
          "timestamp": "2023-06-08T16:20:35Z",
          "tree_id": "1f46ac7959956256fded6d1cc0f2cb2572d1deee",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/084bf75a7442c036b34e29497759138421ee61a7"
        },
        "date": 1686241601790,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129042701,
            "range": "± 1420074",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256057020,
            "range": "± 562004",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 494526000,
            "range": "± 3526511",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 971886833,
            "range": "± 16208147",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34258251,
            "range": "± 239952",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68525015,
            "range": "± 721721",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 132946126,
            "range": "± 812934",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 277413958,
            "range": "± 2272212",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 30863736,
            "range": "± 1606889",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59927527,
            "range": "± 503019",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 122876400,
            "range": "± 3603407",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 242572458,
            "range": "± 25301534",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163693642,
            "range": "± 507479",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329967094,
            "range": "± 4490697",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 645442249,
            "range": "± 5940967",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1452595146,
            "range": "± 26888052",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 468902062,
            "range": "± 10587055",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 1063724958,
            "range": "± 31473612",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 2057852208,
            "range": "± 77180482",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 4709741833,
            "range": "± 786572173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfd00669e5d34ad2449cbdbaec0e16c73619c5e9",
          "message": "Fft used prime field (#422)",
          "timestamp": "2023-06-08T16:23:54Z",
          "tree_id": "3d57abd716079fd91d1ea37c59d4ab532a4d6d12",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/dfd00669e5d34ad2449cbdbaec0e16c73619c5e9"
        },
        "date": 1686241798679,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 269772719,
            "range": "± 107968410",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 624323895,
            "range": "± 220597454",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 1018375812,
            "range": "± 506259123",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 2010095520,
            "range": "± 1044442388",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 37659750,
            "range": "± 11279075",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 75878977,
            "range": "± 28484248",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 146004361,
            "range": "± 47587709",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 279676385,
            "range": "± 4695040",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 30924833,
            "range": "± 161591",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59824784,
            "range": "± 3163115",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 123470395,
            "range": "± 2731277",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 254228885,
            "range": "± 21668003",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 164835474,
            "range": "± 779097",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330356406,
            "range": "± 2377122",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 651577479,
            "range": "± 3146000",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1302107521,
            "range": "± 13079080",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 444317562,
            "range": "± 6395454",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 885306062,
            "range": "± 8496433",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1727938396,
            "range": "± 20682591",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3426792375,
            "range": "± 17247210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "084bf75a7442c036b34e29497759138421ee61a7",
          "message": "Flip if condition (#420)\n\ngives ~14% increase in performance",
          "timestamp": "2023-06-08T16:20:35Z",
          "tree_id": "1f46ac7959956256fded6d1cc0f2cb2572d1deee",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/084bf75a7442c036b34e29497759138421ee61a7"
        },
        "date": 1686242834622,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1076131927,
            "range": "± 1050343",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 2098634257,
            "range": "± 19757840",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2251368251,
            "range": "± 8342711",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 4826752173,
            "range": "± 23023104",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4702143910,
            "range": "± 19587635",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 10332898061,
            "range": "± 25351210",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9812187836,
            "range": "± 11767157",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 22667714806,
            "range": "± 75275377",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 42718864,
            "range": "± 237355",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 42587627,
            "range": "± 82308",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 63305604,
            "range": "± 974551",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 66646173,
            "range": "± 1032284",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 84812546,
            "range": "± 165154",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 84897929,
            "range": "± 190589",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 139590436,
            "range": "± 1580776",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 138827981,
            "range": "± 2442819",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 170587404,
            "range": "± 639393",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 169645058,
            "range": "± 320376",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 278887831,
            "range": "± 579353",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 278119504,
            "range": "± 763795",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 337775751,
            "range": "± 1130240",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 337905753,
            "range": "± 996576",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 554261417,
            "range": "± 1082541",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 554039746,
            "range": "± 1131376",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 50678021,
            "range": "± 734386",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 107027509,
            "range": "± 310942",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 215156244,
            "range": "± 566126",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 436903927,
            "range": "± 3038720",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1236678358,
            "range": "± 3758265",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2585194453,
            "range": "± 4560456",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5379422432,
            "range": "± 14795587",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 11175080896,
            "range": "± 10436847",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1309853771,
            "range": "± 4135358",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2730053012,
            "range": "± 10498209",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5656396146,
            "range": "± 5146321",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 11714313128,
            "range": "± 16928809",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 501,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 16036,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 416,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 325,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 556,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 8524,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 1816,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 39692,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 485,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfd00669e5d34ad2449cbdbaec0e16c73619c5e9",
          "message": "Fft used prime field (#422)",
          "timestamp": "2023-06-08T16:23:54Z",
          "tree_id": "3d57abd716079fd91d1ea37c59d4ab532a4d6d12",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/dfd00669e5d34ad2449cbdbaec0e16c73619c5e9"
        },
        "date": 1686243375761,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1122653641,
            "range": "± 11147063",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3517930064,
            "range": "± 33521569",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2371439200,
            "range": "± 32634648",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 7766399311,
            "range": "± 93061594",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5096757531,
            "range": "± 63839146",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 16957959546,
            "range": "± 45236266",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 10639235556,
            "range": "± 27843697",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 36398680005,
            "range": "± 116959591",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 44450731,
            "range": "± 464612",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 44740766,
            "range": "± 390189",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 71428068,
            "range": "± 1576450",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 71008385,
            "range": "± 1776935",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 88855318,
            "range": "± 368067",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 86309675,
            "range": "± 1325143",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 146414008,
            "range": "± 2238309",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 146272687,
            "range": "± 2206345",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 175909807,
            "range": "± 2252065",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 177285530,
            "range": "± 1844699",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 295859650,
            "range": "± 5565369",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 291096092,
            "range": "± 7754035",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 353797613,
            "range": "± 2969958",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 355283145,
            "range": "± 1508905",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 601762887,
            "range": "± 1696844",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 602150287,
            "range": "± 2798808",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 56783299,
            "range": "± 1356701",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 123453324,
            "range": "± 608520",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 250496650,
            "range": "± 6656846",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 507520276,
            "range": "± 2178796",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1350691985,
            "range": "± 16431582",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2818155171,
            "range": "± 24201816",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5860844453,
            "range": "± 5932484",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 12155091704,
            "range": "± 20907488",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1451670171,
            "range": "± 1643181",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3017320013,
            "range": "± 4351956",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6249091976,
            "range": "± 4097745",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 12929216810,
            "range": "± 11472553",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 1847,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 118168,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 1364,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1697,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 102204,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 4855,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 236735,
            "range": "± 3284",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 1860,
            "range": "± 22",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b0f56e8158df510bbdb6cad82a246be5b9c99cdb",
          "message": "Add bitwise operations for `UnsignedInteger` (#423)\n\n* Add missing bit operations to UnsignedInteger\n\n* Add tests\n\n* Add `bits` method\n\n* Unpack Uint limbs via matching\n\nJust because it looks cooler!\n\n* Add benchmarks\n\n* Appease clippy",
          "timestamp": "2023-06-12T13:06:25Z",
          "tree_id": "8b0d327ddf24e30031ac5c8b7da14ce999e67a74",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/b0f56e8158df510bbdb6cad82a246be5b9c99cdb"
        },
        "date": 1686575523910,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 130178903,
            "range": "± 2369354",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 255934583,
            "range": "± 2081991",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 487240843,
            "range": "± 3386517",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 973061916,
            "range": "± 10402645",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34441718,
            "range": "± 239681",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68267276,
            "range": "± 590515",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133435998,
            "range": "± 873943",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 275919323,
            "range": "± 3526665",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31170912,
            "range": "± 226096",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 59261914,
            "range": "± 3632382",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 120600097,
            "range": "± 7026172",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 258895020,
            "range": "± 17030756",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 163145463,
            "range": "± 1280989",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 329922489,
            "range": "± 2061524",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 650232271,
            "range": "± 3525402",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1313543417,
            "range": "± 28445145",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 451691708,
            "range": "± 2434376",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 896797542,
            "range": "± 6578601",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1771590437,
            "range": "± 6476190",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3480122688,
            "range": "± 8690527",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b0f56e8158df510bbdb6cad82a246be5b9c99cdb",
          "message": "Add bitwise operations for `UnsignedInteger` (#423)\n\n* Add missing bit operations to UnsignedInteger\n\n* Add tests\n\n* Add `bits` method\n\n* Unpack Uint limbs via matching\n\nJust because it looks cooler!\n\n* Add benchmarks\n\n* Appease clippy",
          "timestamp": "2023-06-12T13:06:25Z",
          "tree_id": "8b0d327ddf24e30031ac5c8b7da14ce999e67a74",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/b0f56e8158df510bbdb6cad82a246be5b9c99cdb"
        },
        "date": 1686577317537,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1218297484,
            "range": "± 24794626",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 4036149081,
            "range": "± 37334695",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2584446108,
            "range": "± 60247962",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8982350051,
            "range": "± 79241515",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5327628034,
            "range": "± 151456245",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 19535939948,
            "range": "± 148238592",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 11487763360,
            "range": "± 160008878",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 42183367163,
            "range": "± 582432544",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 47934401,
            "range": "± 1272090",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 46269219,
            "range": "± 1245484",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 81883063,
            "range": "± 2945584",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 81348742,
            "range": "± 3348719",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 93243691,
            "range": "± 1332059",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 95439642,
            "range": "± 1697865",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 165977179,
            "range": "± 1947363",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 174197370,
            "range": "± 4051611",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 195213120,
            "range": "± 4511817",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 193706198,
            "range": "± 3118792",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 344948666,
            "range": "± 7900415",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 342780839,
            "range": "± 6550472",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 385991078,
            "range": "± 8838998",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 372875256,
            "range": "± 7900838",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 727644263,
            "range": "± 19277284",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 744145505,
            "range": "± 16495078",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 71558721,
            "range": "± 2763128",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 155954178,
            "range": "± 3074498",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 314386176,
            "range": "± 5232634",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 632353168,
            "range": "± 14151592",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1431463099,
            "range": "± 30982201",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 3021041936,
            "range": "± 75831383",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6291285773,
            "range": "± 101924108",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 13134492691,
            "range": "± 210495690",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1555466812,
            "range": "± 38456592",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3211925814,
            "range": "± 53606270",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6647455636,
            "range": "± 77700481",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 14051208560,
            "range": "± 141370405",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 919,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 29396,
            "range": "± 1952",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 835,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 325,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1044,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 30081,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 3284,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 77725,
            "range": "± 6135",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 933,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ca0c68a3f46a67c5f75b65040fda984ec850bd10",
          "message": "Add bit len to prime fields (#425)\n\n* Add bit len to prime fields\n\n* Refactor\n\n* Fmt",
          "timestamp": "2023-06-12T16:28:13Z",
          "tree_id": "a1a6e48e335e2c080d32d52f44e59583e19fa71b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/ca0c68a3f46a67c5f75b65040fda984ec850bd10"
        },
        "date": 1686587659205,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129802608,
            "range": "± 2598114",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 256022052,
            "range": "± 2091440",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 495264114,
            "range": "± 1852527",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 980282646,
            "range": "± 13761487",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 35232698,
            "range": "± 549921",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 69220008,
            "range": "± 758510",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 136606249,
            "range": "± 1670368",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 280933666,
            "range": "± 3662594",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 28540058,
            "range": "± 770375",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 53072323,
            "range": "± 3121692",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121268864,
            "range": "± 6583032",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 254290614,
            "range": "± 24851652",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165340093,
            "range": "± 1215595",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330284646,
            "range": "± 1817669",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 651833167,
            "range": "± 2950359",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1308762542,
            "range": "± 29083089",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 449381677,
            "range": "± 1804745",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 895594708,
            "range": "± 5829524",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1743278208,
            "range": "± 7499618",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3435170750,
            "range": "± 19379374",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12560266+MauroToscano@users.noreply.github.com",
            "name": "Mauro Toscano",
            "username": "MauroToscano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ca0c68a3f46a67c5f75b65040fda984ec850bd10",
          "message": "Add bit len to prime fields (#425)\n\n* Add bit len to prime fields\n\n* Refactor\n\n* Fmt",
          "timestamp": "2023-06-12T16:28:13Z",
          "tree_id": "a1a6e48e335e2c080d32d52f44e59583e19fa71b",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/ca0c68a3f46a67c5f75b65040fda984ec850bd10"
        },
        "date": 1686589042934,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 989471712,
            "range": "± 4565730",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3093100658,
            "range": "± 18199833",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2067822245,
            "range": "± 2088887",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 6848249802,
            "range": "± 48217970",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4326230591,
            "range": "± 4229961",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 15069987774,
            "range": "± 74819455",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9020005203,
            "range": "± 28940021",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 32038072714,
            "range": "± 168312487",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 37332547,
            "range": "± 366311",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 37655553,
            "range": "± 260653",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 59706003,
            "range": "± 912015",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 58702143,
            "range": "± 1297179",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 75422033,
            "range": "± 264436",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 76161634,
            "range": "± 231671",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 128343230,
            "range": "± 635486",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 127720588,
            "range": "± 932493",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 151813961,
            "range": "± 712948",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 153184308,
            "range": "± 234305",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 263928810,
            "range": "± 499612",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 262529118,
            "range": "± 874888",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 302197931,
            "range": "± 1095325",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 302240126,
            "range": "± 134056",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 529315348,
            "range": "± 715303",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 529429256,
            "range": "± 526151",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 56686790,
            "range": "± 301384",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 111118833,
            "range": "± 423607",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 227625098,
            "range": "± 1145667",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 467662920,
            "range": "± 2903050",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1149651668,
            "range": "± 6663298",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2416764377,
            "range": "± 6385223",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5013806090,
            "range": "± 3199159",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 10417351113,
            "range": "± 13677569",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1260882185,
            "range": "± 5857437",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2590963066,
            "range": "± 4654507",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5354209211,
            "range": "± 7322940",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 11074442939,
            "range": "± 7330708",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 177,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 1434,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 222,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 110,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 344,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 1592,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 955,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 4739,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 181,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43053772+diegokingston@users.noreply.github.com",
            "name": "Diego K",
            "username": "diegokingston"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecde47c0d574053023a54a8dadf011bd74d0dc76",
          "message": "Update README.md (#429)\n\n* Update README.md\r\n\r\n* styling README\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Adjusting bullets\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n---------\r\n\r\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-12T21:51:58+02:00",
          "tree_id": "2139f9ac040e91c776c93745dd5d6f3af11025e7",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/ecde47c0d574053023a54a8dadf011bd74d0dc76"
        },
        "date": 1686599843818,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129313910,
            "range": "± 2395305",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 253770333,
            "range": "± 2646685",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 486537229,
            "range": "± 2445304",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 970973854,
            "range": "± 11447307",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34120652,
            "range": "± 307014",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68427808,
            "range": "± 974751",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 134081671,
            "range": "± 1130172",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 276627291,
            "range": "± 2592361",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31324343,
            "range": "± 199104",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 56430854,
            "range": "± 2171022",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 117450603,
            "range": "± 3309789",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 258135076,
            "range": "± 14400630",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165055470,
            "range": "± 550096",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330563645,
            "range": "± 1298477",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 648666333,
            "range": "± 6656395",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1305968375,
            "range": "± 18060193",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 448104885,
            "range": "± 1427092",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 893249270,
            "range": "± 7425276",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1770433937,
            "range": "± 7286425",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3482495020,
            "range": "± 8257189",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43053772+diegokingston@users.noreply.github.com",
            "name": "Diego K",
            "username": "diegokingston"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecde47c0d574053023a54a8dadf011bd74d0dc76",
          "message": "Update README.md (#429)\n\n* Update README.md\r\n\r\n* styling README\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n* Adjusting bullets\r\n\r\n* Update README.md\r\n\r\n* Update README.md\r\n\r\n---------\r\n\r\nCo-authored-by: Pablo Deymonnaz <deymonnaz@gmail.com>",
          "timestamp": "2023-06-12T21:51:58+02:00",
          "tree_id": "2139f9ac040e91c776c93745dd5d6f3af11025e7",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/ecde47c0d574053023a54a8dadf011bd74d0dc76"
        },
        "date": 1686601124869,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1094408110,
            "range": "± 1412486",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 2149260620,
            "range": "± 10896802",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2289886820,
            "range": "± 1735212",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 4908980774,
            "range": "± 9643466",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 4783491934,
            "range": "± 2019044",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 10588052971,
            "range": "± 7807434",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 9975598242,
            "range": "± 2267388",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 23358513976,
            "range": "± 27437324",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 43198409,
            "range": "± 119965",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 43255739,
            "range": "± 50737",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 69963970,
            "range": "± 2190342",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 69863088,
            "range": "± 193080",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 85873350,
            "range": "± 78373",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 85953640,
            "range": "± 144614",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 142654858,
            "range": "± 199522",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 142823764,
            "range": "± 240424",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 171681431,
            "range": "± 223769",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 171583996,
            "range": "± 275075",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 280838231,
            "range": "± 747983",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 280203207,
            "range": "± 674327",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 340771496,
            "range": "± 194481",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 340569584,
            "range": "± 654383",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 556556000,
            "range": "± 796923",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 556808822,
            "range": "± 647946",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 52890798,
            "range": "± 130802",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 107315915,
            "range": "± 317651",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 216847513,
            "range": "± 582507",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 436251827,
            "range": "± 3774918",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1266771859,
            "range": "± 2352688",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2637619929,
            "range": "± 1412469",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 5475779339,
            "range": "± 3652956",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 11369945225,
            "range": "± 5938761",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1334359007,
            "range": "± 2479789",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 2767886908,
            "range": "± 1988510",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 5732105711,
            "range": "± 3806964",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 11860451477,
            "range": "± 8772550",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 211,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 3385,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 193,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 447,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 2238,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 1255,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 12912,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "133ffb3d08af658f19c80dd1b9194608c0e8bbf2",
          "message": "Refactor IsCryptoHash to have more flexible Merkle trees (#418)\n\n* proof of concept of optimizing merklee trees\n\n* wip\n\n* refactor IsCryptoHash to IsMerkleTreeBackend\n\n* move merkle tree backend trait to merkle module\n\n* refactor merkletree generic\n\n* fmt\n\n* add test\n\n* add docs for merkle tree backend trait\n\n* fix typo\n\n* add docs to merkle tree backend\n\n* docs\n\n* docs\n\n* remove commented line\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>",
          "timestamp": "2023-06-12T22:15:26Z",
          "tree_id": "a921437c1c75ad2a935a0e0486a24e81b9a6c805",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/133ffb3d08af658f19c80dd1b9194608c0e8bbf2"
        },
        "date": 1686608463329,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Parallel (Metal)",
            "value": 129396404,
            "range": "± 1182561",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #2",
            "value": 254775187,
            "range": "± 3225939",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #3",
            "value": 495107802,
            "range": "± 1601338",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Parallel (Metal) #4",
            "value": 969754604,
            "range": "± 13225096",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal)",
            "value": 34392504,
            "range": "± 277352",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #2",
            "value": 68043646,
            "range": "± 940983",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #3",
            "value": 133601617,
            "range": "± 1270275",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/Parallel (Metal) #4",
            "value": 278078062,
            "range": "± 3698517",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal)",
            "value": 31013368,
            "range": "± 275346",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #2",
            "value": 55082507,
            "range": "± 3151907",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #3",
            "value": 121177201,
            "range": "± 3123817",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Parallel (Metal) #4",
            "value": 256836927,
            "range": "± 18467461",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal",
            "value": 165024883,
            "range": "± 442813",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #2",
            "value": 330937249,
            "range": "± 782718",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #3",
            "value": 649452833,
            "range": "± 3750668",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_fft_metal #4",
            "value": 1308035958,
            "range": "± 11773084",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal",
            "value": 453952156,
            "range": "± 1535206",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #2",
            "value": 899348229,
            "range": "± 4288012",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #3",
            "value": 1740193020,
            "range": "± 7460432",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/interpolate_fft_metal #4",
            "value": 3476763958,
            "range": "± 11503598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41742639+schouhy@users.noreply.github.com",
            "name": "Sergio Chouhy",
            "username": "schouhy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "133ffb3d08af658f19c80dd1b9194608c0e8bbf2",
          "message": "Refactor IsCryptoHash to have more flexible Merkle trees (#418)\n\n* proof of concept of optimizing merklee trees\n\n* wip\n\n* refactor IsCryptoHash to IsMerkleTreeBackend\n\n* move merkle tree backend trait to merkle module\n\n* refactor merkletree generic\n\n* fmt\n\n* add test\n\n* add docs for merkle tree backend trait\n\n* fix typo\n\n* add docs to merkle tree backend\n\n* docs\n\n* docs\n\n* remove commented line\n\n---------\n\nCo-authored-by: ajgarassino <ajgarassino@gmail.com>",
          "timestamp": "2023-06-12T22:15:26Z",
          "tree_id": "a921437c1c75ad2a935a0e0486a24e81b9a6c805",
          "url": "https://github.com/lambdaclass/lambdaworks/commit/133ffb3d08af658f19c80dd1b9194608c0e8bbf2"
        },
        "date": 1686610211348,
        "tool": "cargo",
        "benches": [
          {
            "name": "Ordered FFT/Sequential from NR radix2",
            "value": 1200187047,
            "range": "± 10316159",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2",
            "value": 3883827428,
            "range": "± 40683192",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #2",
            "value": 2506425522,
            "range": "± 27856249",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #2",
            "value": 8648681813,
            "range": "± 97818408",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #3",
            "value": 5331198869,
            "range": "± 89404033",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #3",
            "value": 18757565225,
            "range": "± 221468263",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from NR radix2 #4",
            "value": 11067163423,
            "range": "± 157893905",
            "unit": "ns/iter"
          },
          {
            "name": "Ordered FFT/Sequential from RN radix2 #4",
            "value": 40146978173,
            "range": "± 489363627",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural",
            "value": 46614264,
            "range": "± 874288",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed",
            "value": 46007519,
            "range": "± 1073196",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed",
            "value": 78581509,
            "range": "± 826719",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed",
            "value": 79648480,
            "range": "± 2287747",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #2",
            "value": 91773805,
            "range": "± 1046955",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #2",
            "value": 91822801,
            "range": "± 900087",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #2",
            "value": 160801896,
            "range": "± 2076579",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #2",
            "value": 161733714,
            "range": "± 2284341",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #3",
            "value": 187359395,
            "range": "± 4261630",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #3",
            "value": 187482866,
            "range": "± 2959385",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #3",
            "value": 327832594,
            "range": "± 5579667",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #3",
            "value": 329740958,
            "range": "± 4365426",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural #4",
            "value": 366127576,
            "range": "± 3606064",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/natural inversed #4",
            "value": 366488175,
            "range": "± 12022838",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed #4",
            "value": 658374045,
            "range": "± 29611711",
            "unit": "ns/iter"
          },
          {
            "name": "FFT twiddles generation/bit-reversed inversed #4",
            "value": 675514471,
            "range": "± 12302704",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential",
            "value": 71244948,
            "range": "± 2175836",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #2",
            "value": 148786507,
            "range": "± 1964960",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #3",
            "value": 305564435,
            "range": "± 5355009",
            "unit": "ns/iter"
          },
          {
            "name": "Bit-reverse permutation/Sequential #4",
            "value": 619266876,
            "range": "± 10147464",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT",
            "value": 1422958652,
            "range": "± 54159908",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #2",
            "value": 2990670063,
            "range": "± 30767591",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #3",
            "value": 6106578764,
            "range": "± 26408749",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial evaluation/Sequential FFT #4",
            "value": 12937589033,
            "range": "± 123998680",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT",
            "value": 1561808778,
            "range": "± 21832031",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #2",
            "value": 3214825192,
            "range": "± 40796395",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #3",
            "value": 6705967236,
            "range": "± 63838178",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial interpolation/Sequential FFT #4",
            "value": 13887819896,
            "range": "± 243445407",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate",
            "value": 1779,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/evaluate_slice",
            "value": 115666,
            "range": "± 5993",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/add",
            "value": 1445,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/neg",
            "value": 468,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/sub",
            "value": 1938,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/mul",
            "value": 107624,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div",
            "value": 4907,
            "range": "± 1775",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with generic div",
            "value": 254538,
            "range": "± 9192",
            "unit": "ns/iter"
          },
          {
            "name": "Polynomial/div by 'x - b' with Ruffini",
            "value": 1858,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}