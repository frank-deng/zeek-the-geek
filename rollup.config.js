//import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'js/game.js',
    output:{
        name:"Game",
        file:"game.js",
        format:'umd',
        sourcemap:false,
        compact:true
    },
    plugins: [
        /*
        babel({
            exclude: 'node_modules/**',
        }),
        */
        terser()
    ]
};
