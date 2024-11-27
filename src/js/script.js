// alert("Seja bem vindo ao Site")

/*FUNÇÃO PARA TROCAR A COR */
function trocar(cor){
    /*PEGA COR E TROCA NO BODY */
    document.body.style.background =cor;
}

//Criando slideShow

/*DECLARANDO O ARRAY DE IMAGENS */
let imagens=[
    'src/assets/img1.jpg',
    'src/assets/img2.jpg',
    'src/assets/img3.jpg'
]

/*DECLARANDO AS VARIAVEIS */
let index =0; /*COMEÇANDO A VARIAVEIL EM 0 */
let time =3000; /* TEMPO DE 3 SEGUNDOS */
 

/*FUNÇAO SLIDESHOW */
function slideShow(){
    /*USANDO O DOM PARA PEGAR O ID IMAGE E PEGAR AS IMAGENS */
    document.getElementById("image").src=imagens[index];
    /*INCREMENTANDO A CADA IMAGEM DO ARRAY */
    index++;
    /*SE A IMAGEM FOR DIREFRENTE FOR MAIOR QUE A POSIÇÃO 0  */
    if(index == imagens.length){ index =0}
    /*INICIA A TROCA DE IMAGEM COM SEGUNDOS ENTRE ELAS */
    setTimeout("slideShow()",time)
}

/*EXECUTANDO A FUNÇÃO SLIDESHOW */
slideShow();

