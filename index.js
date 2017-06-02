export default fn => {
  if (fn.length != 1) return fn

  let weak = new WeakMap
  let strong = new Map

  return key => {
    let cache = key === Object(key) ? weak : strong
    if (cache.has(key)) return cache.get(key)

    let result = fn(key)
    cache.set(key, result)

    return result
  }
}
