import { is } from '@magic/test'

import defaultRun, { run } from '../src/index.mjs'

import defaultHandler, { handler } from '../src/handler.mjs'

export default [
  { fn: () => run, expect: is.fn, info: 'run is a function' },
  { fn: () => defaultRun, expect: is.fn, info: 'run default export is a function' },
  { fn: is.deep.eq(run, defaultRun), info: 'run exports are equal' },

  { fn: () => handler, expect: is.fn, info: 'handler is a function' },
  { fn: () => defaultHandler, expect: is.fn, info: 'handler default export is a function' },
  { fn: is.deep.eq(handler, defaultHandler), info: 'handler exports are equal' },
]
