//import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

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
        commonjs(),
        terser()
    ]
};
