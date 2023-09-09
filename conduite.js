function kaKondwi(laj,peyi){
    if (
        (laj>=18 && peyi==='Ayiti') ||
        (laj>=16 && peyi ==='Etazini')
    ) {
        return "Li ka kondwi.";
    }
    return "Li paka kondwi!";
}
console.log(kaKondwi(11,'Ayiti'));