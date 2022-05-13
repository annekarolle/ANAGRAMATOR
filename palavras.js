const button = document.getElementById("findButton");


button.addEventListener("click", getAnagramsOf);

function getAnagramsOf(){
    const typedText = document.getElementById("input").value;
    const novaPalavra = typedText
   
    alphabetize(novaPalavra)
    
}


function alphabetize(string) {
    const array = []
    for (let i = 0; i < string.length; i++){
        array.push(string.toLowerCase().split("").sort().join("").trim())
    }
     const textContent = document.createElement("h2")
     textContent.innerHTML =  array
     const container = document.querySelector("div").appendChild(textContent)
   

        
}



