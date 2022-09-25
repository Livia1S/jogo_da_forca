const letras = document.querySelectorAll('[data-letra]')
const iniciar = document.querySelector('.iniciar')
const busca = document.querySelector(".palavras")
const mensagem = document.querySelector('.frase')
const span = document.querySelector('.sugestao-titulo')

const canvas = document.getElementById('stick')
const ctx = canvas.getContext('2d')


const alfabeto = "aãáâbcçdeéêfghiíjklmnñoõóôpqrstuúvwxyz "
const palavraSecreta = ["Senhorita", "maçã", "pássaro", "ônibus", "xadrez", "Macunaíma", "Grande Sertão Veredas", "Quarup","A Guerra Dos Tronos", "Livro das Mil e Uma Noites"]
let tentativas = 0
let palavraSorteada = ''

function palavraAleatoria(array) {
    let indice = Math.random() * array.length
    return Math.floor(indice)
}

function validaCliqueDoBotao(){
    for (let i = 0; i < letras.length; i++) {
        letras[i].addEventListener ('click', (e) => {
            verificaBotao(e.target.value, palavraSorteada)
        })
}

    window.addEventListener('keydown', function(event) {
       
        let tecla = event.key

        const chave = alfabeto.includes(tecla)
        if(!chave){
             return
        }

        verificaBotao(tecla, palavraSorteada)
    })  
}


function verificaBotao(botao, palavra) {
    palavra = palavra.toLowerCase()
  
    if(tentativas < 8){   
          if(palavra.includes(botao)){
              document.querySelector(`button[value="${botao}"]`).style.background = "#5E8272"
              document.querySelector(`button[value="${botao}"]`).style.color = "white"
              
              mostraPalavra(palavra, botao)
          } else {
              montaForca(tentativas)
              document.querySelector(`button[value="${botao}"]`).style.background = "#7E3D57"
              document.querySelector(`button[value="${botao}"]`).style.color = "white"
              
              tentativas++
          }
    } else {
      document.querySelector('armazenamento').innerHTML = `<h2> Fim de Jogo </h2>`
    }    
  
  }
  
  
  
  function mostraPalavra(palavras, str) { 
  
      const letra = document.querySelectorAll('span')
  
          console.log(letra)
  
      palavras.split('').forEach((palavra, i, arrayPalavra) => {
          
          console.log(palavra, i, arrayPalavra)
  
      if(arrayPalavra[i] === str){
                letra[i].innerHTML = arrayPalavra[i] = str
           } 
  
      })
  
  }
       

  function ocultaPalavra(palavras) {
    
    const resultado = palavras.split('').map((palavra, i) => {
        return `<span>${palavra.replace(palavras.charAt(i), (letra) => {
               if(letra.indexOf(' ') >= 0){
                    return ' &nbsp '
               }
               return ' _ '
         })}</span>`
    }).join('')
    
    busca.innerHTML = `
        <div class="livro">
               <h3>${resultado}</h3>
        </div>
    `
}

iniciar.addEventListener('click', () => {
    ctx.clearReact(0, 0, 400, 600)
    tentativas = 0
    
    letras.forEach(elemento => { 
        elemento.style.backgroundColor = "#AAAAAA"
        elemento.style.color = "#000000"
    })

    //forca()     
  
    let palavra = palavraAleatoria(palavraSecreta)   
    palavraSorteada = palavraSecreta[palavra]
    ocultaPalavra(palavraSorteada)
})

validaCliqueDoBotao()

    

       /*tx.shadowColor = "rgba(0, 0, 0, 0.5)"
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 5*/


function forca () {

	ctx.beginPath()
	ctx.moveTo(25, 560)//base
	ctx.lineTo(75, 560)
	ctx.stroke()
	ctx.strokeStyle = "black"


	ctx.moveTo(50, 10)//vertical
	ctx.lineTo(50, 560)
	ctx.stroke()

	ctx.moveTo(50, 10)//horizontal
	ctx.lineTo(295, 10)
	ctx.stroke()


	ctx.moveTo(295, 10)//forca
	ctx.lineTo(295, 25)
	ctx.stroke()
	ctx.closePath()

    ctx.moveTo(295, 24)
	ctx.bezierCurveTo(315, 70, 330, 80, 295, 85)

	ctx.stroke()
	ctx.closePath()

    ctx.moveTo(295, 24)
	ctx.bezierCurveTo(275, 70, 260, 80, 295, 85)

	ctx.stroke()
	ctx.closePath()

}

forca()



function cabeca() {

    ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 5

	let x = 200;
	let y = 100;
	let width = 180;
	let heigth = 180;
	let shoulder = 50;
	let radius = 50;



	ctx.beginPath();
	ctx.moveTo(x + shoulder, y);
	ctx.lineTo(x + width - shoulder, y);
	ctx.arcTo(x + width, y, x + width, y + shoulder, radius);
	ctx.lineTo(x + width, y + heigth - shoulder);
	ctx.arcTo(x + width, y + heigth, x + width - shoulder, y + heigth, radius);
	ctx.lineTo(x + shoulder, y + heigth);
	ctx.arcTo(x, y + heigth, x, y + heigth - shoulder, radius);
	ctx.lineTo(x, y + shoulder);
	ctx.arcTo(x, y, x + shoulder, y, radius);


	ctx.closePath();
	//ctx.stroke();
	ctx.fillStyle = "#B0A399";
	ctx.fill();//cabeça


	ctx.shadowColor = "rgba(0, 0, 0, 0)"
	ctx.fillStyle = "#000"
	ctx.fillRect(230, 190, 15, 15)//olho direito

	ctx.fillStyle = "#000"
	ctx.fillRect(340, 190, 15, 15)//olho esquerdo

	ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
	ctx.moveTo(250, 180)//sobrancelha direita
	ctx.lineTo(230, 170)
	ctx.stroke()

	ctx.moveTo(335, 180)//sobrancelha esquerda
	ctx.lineTo(355, 170)
	ctx.stroke()
	ctx.strokeStyle = "black"

	ctx.beginPath()
	ctx.shadowColor = "rgba(0, 0, 0, 0.2)"
	ctx.beginPath() //boca
	ctx.lineTo(238, 225)//ponto inicial
	ctx.quadraticCurveTo(293, 260, 348, 225)//ponto central e ponto final
	ctx.stroke()
	//ctx.strokeStyle = "black"
	ctx.closePath()
}

//cabeca()

function chapeu() {

    ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 5

    ctx.beginPath()
	ctx.fillStyle = "#8E7AFF"
	ctx.arc(290, 110, 70, (Math.PI/180) * 0, (Math.PI/180) * 180, true)
	ctx.fill()
	ctx.closePath();

}

function barriga () {

    ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
    ctx.shadowOffsetX = 3
    ctx.shadowOffsetY = 3
    ctx.shadowBlur = 5


	let p = 230;
	let l = 280;
	let larg = 120;
	let alt = 80;
	let omb = 25;
	let rad = 25;



	ctx.beginPath();
	ctx.moveTo(p + omb, l);
	ctx.lineTo(p + larg - omb, l);
	ctx.arcTo(p + larg, l, p + larg, l + omb, rad);
	ctx.lineTo(p + larg, l + alt - omb);
	ctx.arcTo(p + larg, l + alt, p + larg - omb, l + alt, rad);
	ctx.lineTo(p + omb, l + alt);
	ctx.arcTo(p, l + alt, p, l + alt - omb, rad);
	ctx.lineTo(p, l + omb);
	ctx.arcTo(p, l, p + omb, l, rad);


	ctx.closePath();
	//ctx.stroke();
	ctx.fillStyle = "rgb(240, 100, 65)";
	ctx.fill();

}

function bracoDireito() {

	let b = 215;
	let d = 280;
	let tam = 30;
	let tur = 60;
	let bro = 15;
	let ral = 15;



	ctx.beginPath();
	ctx.moveTo(b + bro, d);
	ctx.lineTo(b + tam - bro, d);
	ctx.arcTo(b + tam, d, b + tam, d + bro, ral);
	ctx.lineTo(b + tam, d + tur - bro);
	ctx.arcTo(b + tam, d + tur, b + tam - bro, d + tur, ral);
	ctx.lineTo(b + bro, d + tur);
	ctx.arcTo(b, d + tur, b, d + tur - bro, ral);
	ctx.lineTo(b, d + bro);
	ctx.arcTo(b, d, b + bro, d, ral);

	ctx.closePath();
	//ctx.stroke();
	ctx.fillStyle = "#B0A399";
	ctx.fill();

}


function bracoEsquerdo() {

	let t = 330;
	let u = 280;
	let tah = 30;
	let tus = 60;
	let bri = 15;
	let rak = 15;



	ctx.beginPath();
	ctx.moveTo(t + bri, u);
	ctx.lineTo(t + tah - bri, u);
	ctx.arcTo(t + tah, u, t + tah, u + bri, rak);
	ctx.lineTo(t + tah, u + tus - bri);
	ctx.arcTo(t + tah, u + tus, t + tah - bri, u + tus, rak);
	ctx.lineTo(t + bri, u + tus);
	ctx.arcTo(t, u + tus, t, u + tus - bri, rak);
	ctx.lineTo(t, u + bri);
	ctx.arcTo(t, u, t + bri, u, rak);

	ctx.closePath();
	//ctx.stroke();
	ctx.fillStyle = "#B0A399";
	ctx.fill();

}

function pernaDireita () {

	ctx.fillStyle = "rgb(236, 78, 39)"
	ctx.fillRect(242, 358, 40, 50)

}

function pernaEsquerda () { 

	ctx.fillStyle = "rgb(236, 78, 39)"
	ctx.fillRect(298, 358, 40, 50)

}

/*function fimDoJogo () {
    document.querySelector('h4').innerHTML = `<h4> Fim de Jogo </h4>`
    montaForca()
}//criei essa function pra ser o case 7 e criei um h4 no html - cabeça2*/



function montaForca(tentativas){
    switch (tentativas) {
      /*case 0:
        forca()
        break;*/
      case 0:
        cabeca()
        break;
      case 1:
        chapeu()
        break;
      case 2:
        barriga()
        break;
      case 3:
        bracoDireito()
        break;
      case 4:
        bracoEsquerdo()
        break;
      case 5:
        pernaDireita()
        break;
      case 6:
        pernaEsquerda()
      /*case 7:
        fimDoJogo()*/
    }
    }

    var arr = [];

    function enviarItem() {

        if (localStorage.meuArr) {

            arr = JSON.parse(localStorage.getItem('meuArr'));

        }

        let novoItem = document.getElementById("v").value;
        arr.push(novoItem);
        document.getElementById("v").value = "";
        localStorage.meuArr = JSON.stringify(arr);
    }

    /*function showItens() {
        let resultDIV = document.getElementById('d');
        resultDIV.innerHTML = "";
        if (localStorage.meuArr) {
            arr = JSON.parse(localStorage.getItem('meuArr'));
        }

        for(var i in arr) {
            let p = document.createElement("p");
            p.innerHTML = arr[i];
            resultDIV.append(p);
        }
    }

    function clearItems() {
        arr = [];
        localStorage.meuArr = JSON.stringify(arr)
    }*/




