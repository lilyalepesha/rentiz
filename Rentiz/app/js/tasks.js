let words = ["Ебал", "отчима", "гондончик"];
let newwords = words.reduce(function(newwords, current, index){
    if (index == 0){
        return current;
    }else{
        return newwords + " " + current;
    }
})
console.log(newwords);