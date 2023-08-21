const readlineSync = require('readline-sync');

const balistik = {
  _alph: 'abcdefghijklmnopqrstuvwxyz',
  _salt: "Ux00",
  encrypt: function (tèks) {
    if (typeof tèks !== 'string' || !tèks.match(/^[a-zA-Z\s]+$/)) {
      throw new Error("EreVale: Teks la dwe gen selman karakte alfabetik ak espas.");
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

    if (teksKripte.length !== lotPati) {
      throw new Error("ErèLongè: Longè tèks kripte a pa koresponn.");
    }

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

do {
  try {
    console.log("Chwazi aksyon ou vle fè:\n1. Kripte yon teks\n2. Dekripte yon teks\n3. Sòti")
    const chwa = readlineSync.question("Antre chwa ou an : ");

    if (chwa === "1") {
      const teksKripte = readlineSync.question("Antre teks ou vle kripte: ");
      const teksKripteResultat = balistik.encrypt(teksKripte);
      console.log(`Teks kripte a: ${teksKripteResultat}`);
    } else if (chwa === "2") {
      const teksDekripte = readlineSync.question("Antre teks kripte ou vle dekripte: ");
      const teksDekripteResultat = balistik.decrypt(teksDekripte);
      console.log(`Teks dekripte a: ${teksDekripteResultat}`);
    } else if (chwa === "3") {
      console.log("Mèsi! Konekte ankò.")
      break;
    } else {
      console.log("Ou fè yon chwa ki envalid")
    }
  } catch (error) {
    console.error(`Ere: ${error.message}`);
  }
} while (true);
