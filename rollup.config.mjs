import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import postcss from "rollup-plugin-postcss";
import UnoCSS from "@unocss/postcss";

const shared = {
	input: "src/index.ts",
	external: ["react", "react/jsx-runtime", "react-dom"],
	plugins: [
		resolve({
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		}),
		typescript(),
		postcss({
			plugins: [UnoCSS()],
		}),
	],
};

export default [
	// ESM
	{
		...shared,
		output: {
			dir: "dist/es",
			format: "es",
			sourcemap: true,
		},
	},
	// CommonJS
	{
		...shared,
		output: {
			dir: "dist/cjs",
			format: "cjs",
			sourcemap: true,
		},
	},
];
