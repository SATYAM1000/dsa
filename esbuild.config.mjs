import * as esbuild from "esbuild";
import glob from "fast-glob";

const entryPoints = await glob("src/**/*.ts");

await esbuild
  .build({
    entryPoints,
    outdir: "dist",
    platform: "node",
    bundle: false,
    minify: false,
    format: "cjs",
    target: "esnext",
    sourcemap: false,
  })
  .catch(() => process.exit(1));
