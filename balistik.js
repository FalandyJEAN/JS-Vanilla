const readlineSync = require('readline-sync');

const balistik = {
  _alph: 'abcdefghijklmnopqrstuvwxyz',
  _salt: "Ux00",
  encrypt: function (tèks) {
    if (typeof tèks !== 'string' || !tèks.match(/^[a-zA-Z\s]+$/)) {
      throw new Error("EreVale: Teks la dwe gen sèlman karaktè alfabetik ak espas.");
    }

    const teksKripte = tèks
      .split('')
      .map((karakte) => {
        const karakteAnMiniskil = karakte.toLowerCase();
        const endeks = this._alph.indexOf(karakteAnMiniskil);
        return endeks === -1 ? karakte : endeks.toString();
      })
      .join('.');

    return `${this._salt}.${teksKripte}.${tèks.length}`;
  },
  decrypt: function (teks) {
    const patiYo = teks.split('.');
    if (patiYo.length < 4 || patiYo[0] !== this._salt) {
      throw new Error("EreSalt: Salt la pa koresponn.");
    }

    const teksKripte = patiYo.slice(1, -1).join('.');
    const lotPati = parseInt(patiYo[patiYo.length - 1]);


    const teksDekripte = teksKripte
      .split('.')
      .map((pati) => {
        if (pati === '0') return 'a';
        const endeks = parseInt(pati);
        return endeks >= 0 && endeks < this._alph.length ? this._alph[endeks] : '';
      })
      .join('');

    return teksDekripte;
  },
};

while (true) {
  try {
    console.log("Chwazi aksyon ou vle fè:\n1. Kripte yon tèks\n2. Dekripte yon tèks\n3. Sòti")
    const chwa = readlineSync.question("Antre chwa ou an : ");

    if (chwa === "1") {
      const tèksKripte = readlineSync.question("Antre tèks ou vle kripte: ");
      const tèksKripteResultat = balistik.encrypt(tèksKripte);
      console.log(`Tèks kripte a: ${tèksKripteResultat}`);
    } else if (chwa === "2") {
      const tèksDekripte = readlineSync.question("Antre tèks kripte ou vle dekripte: ");
      try {
        const tèksDekripteResultat = balistik.decrypt(tèksDekripte);
        console.log(`Tèks dekripte a: ${tèksDekripteResultat}`);
      } catch (error) {
        console.error(`Erè: ${error.message}`);
      }
    } else if (chwa === "3") {
      console.log("Mèsi! Konekte ankò.")
      break;
    } else {
      console.log("Ou fè yon chwa ki envalid")
    }
  } catch (error) {
    console.error(`Erè: ${error.message}`);
  }
}
