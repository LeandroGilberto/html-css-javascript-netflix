let cards = document.getElementsByClassName("card");
let textCardsClicked = document.querySelector(".text-cards-clicked");

//classe que define os cards que forem clicados.
const classCardClicked = "card-clicked";

//Array que vai controlar os cards que forem clikados.

let cardsClicked = [];

textCardsClicked.innerHTML = "Voce nao selecionou :("

for (let card of cards) {
    card.addEventListener("click", function(){
        let { serie, name } = card.dataset;

   let cardFoiClicado = card.classList.contains(classCardClicked);


    if (cardFoiClicado){
//Existe a classe 
        card.classList.remove(classCardClicked);
        let index = cardsClicked.findIndex(cardsClicked => 
            cardsClicked.serie == serie);
            
            cardsClicked.splice(index, 1);


    } else{ //Nao existe a classe
        card.classList.add(classCardClicked);
        cardsClicked.push({ serie, name});

    }

if (cardsClicked.length ==0){
textoCardsClicked.innerHTML = "Voce nao selecionou :(";
textoCardsClicked.classList.remove("text-card-clicked");
textoCardsClicked.classCardClicked.add("no-text-card-clicked");


}
else{
textoCardsClicked.classList.remove("no-text-card-cliked");
textoCardsClicked.classList.add("text-card-clicked");


let text = "Voce selecionou:";




for (let cardsClicked of cardsClicked){

text += '<p>${cardCliked.name}<p>'

    text += ":)";
    textoCardsClicked.innerHTML = text;
}

}



    console.log(cardsClicked);
    });
}