class LSPush {
    constructor() {
      this.localStorageKey = "LSPushData"
      this.data = this.getDataFromLocalStorage()
    }
  
    add(key, value) {
      this.data[key] = value
      this.saveDataToLocalStorage()
    }
  
    update(key, newValue) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = newValue
        this.saveDataToLocalStorage()
      }
    }
  
    delete(key) {
      if (this.data.hasOwnProperty(key)) {
        delete this.data[key];
        this.saveDataToLocalStorage()
      }
    }
  
    get(key) {
      if (this.data.hasOwnProperty(key)) {
        return this.data[key]
      } else {
        return null
      }
    }
  
    getAll() {
      return this.data
    }
  
    clear() {
      this.data = {}
      this.saveDataToLocalStorage()
    }
  
    getDataFromLocalStorage() {
      const storedData = localStorage.getItem(this.localStorageKey)
      return storedData ? JSON.parse(storedData) : {}
    }
  
    saveDataToLocalStorage() {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.data))
    }
}
  
let lsPush = new LSPush()
lsPush.add("00045", "audio")
lsPush.add("00050", "ads")
console.log(lsPush.getAll())
lsPush.update("00045", "newAudio")
console.log(lsPush.get("00045"))
console.log(lsPush.get("00050"))
lsPush.delete("00045")
lsPush.delete("00050")
