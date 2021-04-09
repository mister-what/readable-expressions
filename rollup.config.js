import dts from "rollup-plugin-dts";

const config = [
  // …
  {
    input: "./typings/index.d.ts",
    output: [{ file: "./types/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;