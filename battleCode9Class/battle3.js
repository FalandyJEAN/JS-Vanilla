function reverse(sekans){
    return sekans.split(",").reverse().join(",")
}

let valeAn = reverse("1,2,3,4,5")
console.log(valeAn)