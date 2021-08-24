//import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";

export default {
    input: 'js/game.js',
    output:{
        name:"Game",
        file:"game.js",
        format:'umd',
        sourcemap:true,
        compact:true
    },
    plugins: [
        /*
        babel({
            exclude: 'node_modules/**',
        }),
        */
        eslint(),
        commonjs(),
        terser()
    ]
};
