const lis = [10,12,14,16,18,20,22,24,26]

function aza(lis){
    let tiraj = []

    function jenereBoul(){
    
        let nombAza = lis[Math.floor(Math.random()*lis.length)]
        if(nombAza % 2 === 0 && tiraj.indexOf(nombAza) === -1){
            return nombAza
        }else{
            return jenereBoul()
        }
    }
    for(let i=0;i<3;i++){
        nombAza = jenereBoul()
        tiraj.push(nombAza)
    }

    return tiraj
}

let tiraj=aza(lis)
console.log(`Boul ki soti yo se : ${tiraj}`)

