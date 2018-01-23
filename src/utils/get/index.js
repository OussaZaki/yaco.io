export default function get (dotKey = '', obj, defaultValue) {
    if (!obj) {
      return defaultValue
    }
    const value = dotKey.split('.').reduce(function (child, key) {
      return typeof child === 'object' ? child[key] : undefined
    }, obj)
    return value != null ? value : defaultValue
  }