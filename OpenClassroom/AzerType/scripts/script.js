//fonksyon chwa itilizate an 
function chwaziFrazOubyenMO(){
    let chwa=prompt(`Chwazi jwet ou vle an
    M pou mo
    F pou fraz

    Antre chwa ou an la :`)

    while (chwa !=="F" && chwa!=="M"){
        chwa=prompt("Chwazi F pou fraz oubyen M pou mo :")
    }
    return chwa
}


//fonksyon pou afiche esko itilizate an 
function aficheRezilta(esko,nonbMo){
    console.log(`Esko ou se : ${esko} sou ${nonbMo}.`)
}

//fonsksyon pou konte esko
function boukNanJwetLa(lisPwopozisyon){
    let esko=0
    for(let i=0;i<lisPwopozisyon.length;i++){
        frazItilizate=prompt(`Tape mo sa yo : ${lisPwopozisyon[i]} .`)
        if(frazItilizate===lisPwopozisyon[i]){
            esko++
        }
    }
    return esko
}

//fonksyon pou demare jwet la
function demareJwetLa(){
    let chwa=chwaziFrazOubyenMO()
    let esko=0
    let nonbMo=0

    if(chwa==="M"){
        esko=boukNanJwetLa(lisMo)
        nonbMo=lisMo.length
    }else{
        esko=boukNanJwetLa(lisFraz)
        nonbMo=lisFraz.length
    }

    aficheRezilta(esko,nonbMo)
}
