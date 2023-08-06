const adicionaItem = (event) =>{
    const elemento = document.createElement("article")
    //criando um elemento
    elemento.setAttribute("class", "item")
    //definindo uma classe 
    elemento.setAttribute("onclick", "removeItem(event)")
    //setando o evento do onclick
    const aleatoria = document.getElementById("container")
    //pegando o container
    aleatoria.insertAdjacentElement("beforeend", elemento)
    //posicionando onde 
}

//parte 3

const removeItem = (event) => {
    const elementoClicado = event.target;
    //target = retorna o elemento mais proximo clicado
    //ele só e executado se tiver o onclick
    elementoClicado.remove();    
};