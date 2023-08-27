class CookiePush{
    constructor(){
        this.cookie=localStorage
    }

    add(key,value,date){
        if (!this.cookie.getItem(key)) {
            const data = {value, date }
            this.cookie.setItem(key, JSON.stringify(data))
        }
    }

    update(key,value,date){
        if (this.cookie.getItem(key)) {
            const data = { value, date }
            this.cookie.setItem(key, JSON.stringify(data))
        }
    }
    get(key){
        let dataString= this.cookie.getItem(key)
        return dataString

    }

    delete(key){
        this.cookie.removeItem(key)
    }
}



let cookie = new CookiePush()
cookie.add("00045", "audio", "26 Aout")
cookie.add("00050", "ads", "28 Aout")
cookie.update("00045", "newAudio", "27 Aout")
cookie.get("00045")
console.log(cookie.get("00045"))
console.log(cookie.get("00050"))
cookie.delete("00045")