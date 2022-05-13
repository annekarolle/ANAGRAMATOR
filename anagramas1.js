const button = document.getElementById("findButton");
const textContent = document.createElement("h2");
const container = document.querySelector("div").appendChild(textContent)


button.addEventListener("click", getAnagramsOf);

function getAnagramsOf(){
   
    const typedText = document.getElementById("input").value;        
    const novaPalavra = typedText   

    const arrayDeAnagramas = compareAnagramas(novaPalavra)

    if (arrayDeAnagramas.length === 0){
        textContent.innerHTML = `Nenhum Anagrama da palavra ${novaPalavra} foi encontrado.`
    }
    else {
        renderizarPalavras(arrayDeAnagramas)
    }
    
  
}


function alphabetize(string) {
    const anagrama = string.toLowerCase().split("").sort().join("").trim()
    return anagrama
}

function compareAnagramas(string){
    let array1 = []
    for (let i = 0; i < words.length; i++){
        if (alphabetize(string) === alphabetize(words[i])){
            array1.push(words[i])
        }              
    }
    return array1
    
}

function renderizarPalavras(array){ 
    
    textContent.innerHTML = array
   
}

