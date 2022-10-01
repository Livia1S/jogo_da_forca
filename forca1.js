const letras = document.querySelectorAll('[data-letra]')
const iniciar = document.querySelector('#iniciar')
const busca = document.querySelector(".palavras")
const mensagem = document.querySelector('.frase')
const span = document.querySelector('.sugestao-titulo')

const canvas = document.getElementById('stick')
const ctx = canvas.getContext('2d')


const alfabeto = "aãáâbcçdeéêfghiíjklmnñoõóôpqrstuúvwxyz "

const palavraSecreta = ["Macunaíma", "Grande Sertão Veredas", "Quarup","A Guerra Dos Tronos", "Livro das Mil e Uma Noites", "Dom Casmurro", "O Cortiço", "Gabriela, Cravo e Canela", "Vestido de Noiva", "Vidas Secas", "A Paixão Segundo G.H.", "A Moreninha", "Iracema", "Memórias Póstumas de Brás Cubas", "O Ateneu", "As Três Marias", "Os Sertões", "O Guarani", "Incidente em Antares", "Quarto de Despejo", "Morte e Vida Severina", "Romance da Pedra do Reino", "Felicidade Clandestina", "Capitães de Areia", "O Quinze", "A Rosa do Povo", "Memórias de Um Sargento de Milícias", "Noite na Taverna", "Romanceiro da Inconfidência", "O Pagador de Promessas", "Triste Fim de Policarpo Quaresma", "O Tempo e o Vento", "Fogo Morto", "Lavoura Arcaica", "O Coronel e o Lobisomem", "Antes do Baile Verde", "Viva o Povo Brasileiro", "Sagarana", "Quincas Borba", "Feliz Ano Novo", "São Bernardo", "A Hora da Estrela", "Casa Grande e Senzala", "Memórias do Cárcere", "Budapeste", "Raízes do Brasil", "O Encontro Marcado", "Zero", "As Meninas", "Baú de Ossos", "A Alma Encantadora das Ruas", "A República dos Sonhos", "Um Copo de Cólera", "Moby Dick", "Romeu e Julieta", "A Divina Comédia", "Ilíada", "Odisseia", "O Jogo da Amarelinha", "A Metamorfose", "O Mahabharata", "Hamlet", "Dom Quixote", "Em Busca do Tempo Perdido", "Guerra e Paz", "Crime e Castigo", "Ulysses", "Madame Bovary", "O Processo", "A Montanha Mágica", "As Flores do Mal", "O Som e a Fúria", "O Príncipe", "O Grande Gatsby", "Os Miseráveis", "O Estrangeiro", "A Origem das Espécies", "Adeus às Armas", "Coração das Trevas", "Admirável Mundo Novo", "Mrs Dalloway", "Histórias Extraordinárias", "A Comédia Humana", "Grandes Esperanças", "O Homem sem Qualidades", "Viagens de Gulliver", "Os Lusíadas", "Os Três Mosqueteiros", "Decameron", "Esperando Godot", "Lolita", "Paraíso Perdido", "Robinson Crusoé", "O Retrato de Dorian Gray", "Cem Anos de Solidão", "O Homem sem Qualidades", "Fausto", "Doutor Fausto", "O Vermelho e o Negro", "Eneida", "Retrato de Uma Senhora", "Mensagem", "Os Moedeiros Falsos", "Alice no País das Maravilhas", "A Náusea", "A Consciência de Zeno", "Ficções", "O Rinoceronte", "A Morte de Virgílio", "Folhas de Relva", "O Deserto dos Tártaros", "A Ilustre Casa de Ramires", "As Vinhas da Ira", "Memórias de Adriano", "O Apanhador no Campo de Centeio", "As Aventuras de Huckleberry Finn", "O Leopardo", "Uma Passagem Para a Índia", "Orgulho e Preconceito", "Pais e Filhos", "As Cidades Invisíveis", "O Lobo da Estepe", "O Complexo de Portnoy", "Reparação", "Desonra", "As Irmãs Makioka", "Pedro Páramo", "Frankenstein", "O Mundo se Despedaça", "Amada", "O Conto da Aia", "A Revolução dos Bichos", "Jane Eyre", "O Sol é Para Todos", "O Morro dos Ventos Uivantes", "Ao Farol", "Anna Kariênina", "Os Contos de Cantuária", "Os Filhos da Meia-Noite", "O Pequeno Príncipe", "O Mestre e a Margarida", "Drácula", "A Mão Esquerda da Escuridão", "Um Conto de Natal", "Mulherzinhas", "Orlando", "As Aventuras de Tom Sawyer", "O Aleph", "O Senhor dos Anéis", "Harry Potter", "A Peste", "O Hobbit", "Rebecca", "E o Vento Levou", "David Copperfield", "Nada de Novo no Front", "Emma", "Persuasão", "O Caçador de Pipas", "O Senhor das Moscas", "Razão e Sensibilidade", "O Amor nos Tempos do Cólera", "Ratos e Homens", "O Conde de Monte Cristo", "Judas, O Obscuro", "Oliver Twist", "A Redoma de Vidro", "Pergunte ao Pó", "Germinal", "A Feira das Vaidades", "Atlas de Nuvens", "A Cor Púrpura", "Os Vestígios do Dia", "Um Estudo em Vermelho", "O Cão dos Baskervilles", "Ensaio Sobre a Cegueira", "O Nome da Rosa", "O Poder e a Glória", "A Guerra dos Mundos", "O Nome do Vento", "Tom Jones", "A Vida Modo de Usar", "O Pêndulo de Foucault", "Os Irmãos Karamázov", "Por Quem os Sinos Dobram", "Ilusões Perdidas", "A Filha do Capitão", "Bonequinha de Luxo", "O Poço e o Pêndulo", "Ensaio Sobre a Lucidez", "O Segundo Sexo", "Demian", "Os Maias", "Terra Sonâmbula", "Livro do Desassossego", "O Canto do Pássaro", "O Diário de Anne Frank", "Laranja Mecânica", "O Capote", "Doutor Jivago", "A Máquina de Fazer Espanhóis", "As Aventuras de Sherlock Holmes", "A Época da Inocência", "Assassinato no Expresso Oriente", "A Insustentável Leveza do Ser", "Servidão Humana", "A Cidade e os Cachorros", "Auto de Fé", "A Ilha Misteriosa", "Elogio da Loucura", "Intermitências da Morte", "A Guerra do Fim do Mundo", "Conversa no Catedral", "Tia Júlia e o Escrevinhador", "O Herói Discreto", "Crônica de Uma Morte Anunciada", "Ninguém Escreve ao Coronel", "Olhos de Cão Azul", "O Evangelho Segundo Jesus Cristo", "Memorial do Convento", "O Homem Duplicado", "A Caverna", "Olga", "Corações Sujos", "Os Últimos Soldados da Guerra Fria", ]


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

    let resultado = palavraSorteada
    palavra = palavra.toLowerCase()
    console.log(resultado)
    console.log(palavra)

    //const proto = document.querySelectorAll('span')
    const proto = Array.from(document.querySelectorAll('span'))
    proto.every(item => console.log(item))
    
  
            
        //document.querySelector('.palavras').innerHTML = `<h2>Parabéns! Você venceu!</h2>`
         //return
     
        if(tentativas < 7){  
        
          
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
      document.querySelector('.palavras').innerHTML = `<h2 id='fm'>Fim de Jogo</h2>`
      function cabeca2() {

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
    
    
        /*ctx.shadowColor = "rgba(0, 0, 0, 0)"
        ctx.fillStyle = "#000"
        ctx.fillRect(230, 190, 15, 15)//olho direito
    
        ctx.fillStyle = "#000"
        ctx.fillRect(340, 190, 15, 15)//olho esquerdo*/
    
        ctx.shadowColor = "rgba(0, 0, 0, 0)"
        ctx.fillStyle = "#000"
        ctx.fillRect(230, 190, 20, 2)//olho direito
    
        ctx.fillStyle = "#000"
        ctx.fillRect(340, 190, 20, 2)//olho esquerdo
    
        /*ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
        ctx.moveTo(250, 180)//sobrancelha direita
        ctx.lineTo(230, 170)
        ctx.stroke()*/
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
        ctx.moveTo(250, 170)//sobrancelha direita
        ctx.lineTo(230, 180)
        ctx.stroke()
    
        /*ctx.moveTo(335, 180)//sobrancelha esquerda
        ctx.lineTo(355, 170)
        ctx.stroke()
        ctx.strokeStyle = "black"*/
        ctx.moveTo(335, 170)//sobrancelha esquerda
        ctx.lineTo(355, 180)
        ctx.stroke()
        ctx.strokeStyle = "black"
    
        ctx.beginPath()
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)"
        ctx.beginPath() //boca
        ctx.lineTo(238, 245)//ponto inicial
        //ctx.quadraticCurveTo(293, 260, 348, 225)//ponto central e ponto final
        ctx.quadraticCurveTo(293, 200, 348, 245)//ponto central e ponto final
        ctx.stroke()
        //ctx.strokeStyle = "black"
        ctx.closePath()

      }
    }

      cabeca2()
      
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
    ctx.clearRect(0, 0, 400, 600)
    tentativas = 0
    
    letras.forEach(elemento => { 
        elemento.style.backgroundColor = "#AAAAAA"
        elemento.style.color = "#000000"
    })

    forca()     
  
    let palavra = palavraAleatoria(palavraSecreta)   
    palavraSorteada = palavraSecreta[palavra]
    ocultaPalavra(palavraSorteada)
})

validaCliqueDoBotao()


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
	ctx.fillStyle = "#B0A399";
	ctx.fill();
    //ctx.globalCompositeOperation='destination-over';
}

function pernaDireita () {

	ctx.fillStyle = "rgb(236, 78, 39)"
	ctx.fillRect(244, 358, 40, 50)

}

function pernaEsquerda () { 

	ctx.fillStyle = "rgb(236, 78, 39)"
	ctx.fillRect(296, 358, 40, 50)

}

function montaForca(tentativas){
    switch (tentativas) {
      
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
      
    }
    }


    function enviarItem() {

      const sugestao = document.querySelector(".sugestao")
      const enviarSugestao = sugestao.value

      palavraSecreta.push(enviarSugestao)
      console.log (palavraSecreta[palavraSecreta.length-1])
    }