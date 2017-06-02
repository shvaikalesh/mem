# mem

Tiny, modern memoization library for unary functions

## Up and running

Get the package right from GitHub repository:

`npm install --save shvaikalesh/mem`

Use `default` export:

`import mem from "mem"`

## Caching

* Objects: identity-based, weakly-referenced
* Primitives: [`SameValueZero`](https://tc39.github.io/ecma262/#sec-samevaluezero) algorithm
