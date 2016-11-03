## Compare tree shaking of Rollup and Webpack 2 (beta)

Before you begin, `npm install` to install all dependencies

Then `npm run rollup` / `npm run webpack` to bundle using one or the other, or `npm run bundle` to bundle using both projects.

The entry file consists of just this code:

```js
import { permute } from 'd3-array';

permute();
```

The `permute` export from `d3-array` is a single function with no dependencies, weighing in at 161 bytes. Its full contents are as follows:

```js
export default function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
}
```

The resulting bundles, therefore, should have a similar file size if not smaller once minification is applied. Instead, as of this writing, Rollup 0.36.3 produces a 3KB minified bundle and Webpack 2.1.0-beta.25 produces a 4KB minified bundle.

In both cases, code is included in the bundle that was not referenced from the entry file or from the `permute` module in `d3-array`.

All bundles have been included in the repo for the sake of convenience.