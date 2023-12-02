const readlineSync= require('readline-sync')

let condition=false
while (!condition){
    function menu(){
        console.log(`       ======Menu======
    Men lis plan ki disponib yo : 
    1-120 Min + 4GB 7J 270G
    2-60 Min + 3GB 2J 100G
    3-30 Min + 1GB 1J 65G
    4-USCA 55G
    5-SMS 7J 55G
    6-PLAN SOLEY`)
    chwa=readlineSync.question("Chwazi yon opsyon : ")*1
    }
    menu()
    chwa.global
    switch(chwa){
        case 1:
            while (!condition){
                console.log(`Aktive plan 120 minit Digicel ak 4GB entenet valid pou 7 jou pou 270 Goud.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Tanpri tann SMS konfimasyon an avanw fe apel pou l pa faktire sou kont pwensipal ou.`)
                        condition=true
                        break
                    case 2:
                        menu()
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon plan ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        case 2:
            while (!condition){
                console.log(`Aktive plan 60 minit Digicel ak 3GB entenet valid pou 2 jou pou 100 Goud.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Tanpri tann SMS konfimasyon an avanw fe apel pou l pa faktire sou kont pwensipal ou.`)
                        condition=true
                        break
                    case 2:
                        menu();
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon plan ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        case 3:
            while (!condition){
                console.log(`Aktive plan 30 minit Digicel ak 1GB entenet valid pou 1 jou pou 65 Goud.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Tanpri tann SMS konfimasyon an avanw fe apel pou l pa faktire sou kont pwensipal ou.`)
                        condition=true
                        break
                    case 2:
                        menu()
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon plan ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        case 4:
            while (!condition){
                console.log(`Aktive plan 120 minit Digicel ak 4GB entenet valid pou 7 jou pou 270 Goud.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Tanpri tann SMS konfimasyon an avanw fe apel pou l pa faktire sou kont pwensipal ou.`)
                        condition=true
                        break
                    case 2:
                        menu();
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon plan ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        case 5:
            while (!condition){
                console.log(`Aktive 350 SMS Digi-Digi valid pou 7 jou pou 55 Goud.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Tanpri tann SMS konfimasyon an avanw voye mesaj bay yon moun poul l pa faktire sou kont pwensipal ou.`);
                        condition=true
                        break
                    case 2:
                        menu();
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon SMS ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        case 6:
            while (!condition){
                console.log(`Patisipe nan Tiraj 100 Mil Goud 100 Jou SOLEY la ak 5 Goud selman.
                1-Konfime
                2-Retounen
                3-Anile Pwosesis lan`)
                let chwaPlan=readlineSync.question("Chwazi yon opsyon : ")*1
                function chwa(){
                    
                }
                switch(chwaPlan){
                    case 1:
                        console.log(`Plan w lan ap aktive.
                        Toujou sonje aktive plan SOLEY ou an chak jou pouw ka youn nan ganyan yo.`)
                        condition=true
                        break
                    case 2:
                        menu()
                        condition=true
                        break
                    case 3:
                        console.log(`Ou anile avek sikse pwosesis aktivasyon plan ou an!`)
                        condition=true
                        break
                    default:
                        console.log(`Ou antre yon move chwa,tanpri rekomanse pwosesis lan a zewo!`)
                        condition=true
                        break
                }
            }
            condition=true
            break
        default:
            console.log("Ou antre yon move chwa, tanpri rekomanse pwosesis lan a zewo!")
    }
}