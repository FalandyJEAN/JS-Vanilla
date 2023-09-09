class CookiePush {
    // Metòd pou ajoute yon koukiz
    add(name, value, expirationDate) {
      // Kreye yon chèn koukiz avèk non, valè, ak dat ekspirasyon
      const cookieString = `${name}=${value}; expires=${expirationDate};`;
      // Mete koukiz nan navigatè a
      document.cookie = cookieString;
    }
  
    // Metòd pou modifye yon koukiz si li ekziste
    update(name, value, expirationDate) {
      if (this.exists(name)) {
        // Si koukiz la ekziste, modifye li avèk nouvo valè ak dat ekspirasyon
        this.add(name, value, expirationDate);
      }
    }
  
    // Metòd pou rekipere yon koukiz pa non li
    get(name) {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
          return cookieValue;
        }
      }
      // Si koukiz la pa jwenn, retounen yon valè vid
      return '';
    }
  
    // Metòd pou efase yon koukiz
    delete(name) {
      if (this.exists(name)) {
        // Si koukiz la ekziste, modifye li pou fè l ekspire nan pasé
        this.add(name, '', 'Thu, 01 Jan 1970 00:00:00 UTC');
      }
    }
  
    // Metòd pou tcheke si yon koukiz ekziste
    exists(name) {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [cookieName] = cookie.trim().split('=');
        if (cookieName === name) {
          return true;
        }
      }
      return false;
    }
}
  
let cookie = new CookiePush()
cookie.add('sessionid', 'Value', 'Thu, 31 Dec 2023 23:59:59 UTC')
cookie.update('sessionid', 'NewValue', 'Thu, 31 Dec 2023 23:59:59 UTC')
const sessionValue = cookie.get('sessionid')
console.log('Koukiz sessionid:', sessionValue)
cookie.delete('sessionid')
