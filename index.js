export default fn => {
  let cache = new WeakMap

  return key => {
    if (cache.has(key)) return cache.get(key)

    let result = fn(key)
    cache.set(key, result)

    return result
  }
}
