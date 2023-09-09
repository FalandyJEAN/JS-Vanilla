class URLPush {
  constructor() {
    this.params = {};
    const queryString = window.location.search.slice(1)
    const paramPairs = queryString.split('&')

    for (const pair of paramPairs) {
      const [key, value] = pair.split('=')
      this.params[key] = decodeURIComponent(value)
    }
  }

  push(key, value) {
    this.params[key] = value
    this.updateURL()
  }

  update(key, value) {
    if (this.params.hasOwnProperty(key)) {
      this.params[key] = value
      this.updateURL()
    }
  }

  remove(key) {
    if (this.params.hasOwnProperty(key)) {
      delete this.params[key]
      this.updateURL()
    }
  }

  get(key) {
    return this.params[key]
  }

  updateURL() {
    const newQueryString = Object.entries(this.params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
    
    const newURL = `${window.location.pathname}?${newQueryString}`
    window.history.replaceState({}, '', newURL)
  }
}

let url = new URLPush()
url.push('search', 'Value')
url.update('search', 'Value')
url.get('search')
url.remove('search')
