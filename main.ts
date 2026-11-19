// news-image-20261119 entry program — Node 22, standard library only.
// Thursday 19 November 2026 in six panels: Shenzhen Summit, Rohingya
// Ruling, Gulf Widens, Crimea Bridge Hit Again, Bangladesh Burns and
// Anthropic IPO Record. The day's image is prepared ahead of time and
// shipped in this repo as
// entry.png; this program only places an exact copy at the output path
// the grader reads. Copying the same file verbatim means both runs write
// byte-identical output, with no network and no randomness involved.
// In the grader the output directory is /output; locally it is whatever
// MAKEFUN_OUTPUT_DIR names, defaulting to /output when unset.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, 'entry.png'), join(outputDir, 'entry.png'));
