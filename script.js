const lista = document.getElementById("valores")

fetch("http://jsonplaceholder.typicode.com/users")
.then( resposta => resposta.json())
.then( json => {
    json.forEach( elemento => {
        adc_lista(elemento.name)
    })

})
.catch(error => {
    adc_lista("Erro")
})  
function adc_lista(nome){
    const item = document.createElement("li")
    item.innerHTML = nome
    lista.appendChild(item)
}