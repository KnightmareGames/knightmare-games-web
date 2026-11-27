// Zips each folder in public/assets/press/ into public/assets/press/<folder>.zip
// so every press kit has a "download everything" file. Runs before `next build`.
import { readdirSync, statSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const dir = join(process.cwd(), "public/assets/press");
for (const name of readdirSync(dir)) {
  const folder = join(dir, name);
  if (!statSync(folder).isDirectory()) continue;
  const zip = join(dir, `${name}.zip`);
  rmSync(zip, { force: true });
  execFileSync("zip", ["-qrX", zip, "."], { cwd: folder });
  console.log(`press kit zip: assets/press/${name}.zip`);
}
