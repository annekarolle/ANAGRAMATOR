




function alphabetize(string) {
    const array = []
    for (let i = 0; i < string.length;i++){
        array.push(string.toLowerCase().split("").sort().join("").trim())
     
    }
    
    return array
        
}

        


console.log(alphabetize("good"))
