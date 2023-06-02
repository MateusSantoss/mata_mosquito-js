var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var dificuldade = 1500



//função que calcular a altura e a largura do browser
function calcularAlturaeLargura() {
	// body...
	 altura = window.innerHeight
	 largura = window.innerWidth

	console.log(largura, altura)
	


}
calcularAlturaeLargura()

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	dificuldade = 1500
} else if ( nivel === 'dificil') {
	//1000
	dificuldade = 1000
} else if (nivel === 'saitama') {
	dificuldade = 750
}

   var cronometro = setInterval(function() {
		tempo -= 1
		if (tempo < 0) {
			clearInterval(cronometro)
			clearInterval(intervalo)
			window.location.href="vitoria.html"
			
		} else {
			document.getElementById('tempo_restante').innerHTML = tempo

	       }
	}, 1000);




function posicaoRandomica()  {

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		
		console.log(vidas)

		if (vidas > 3) {
			
			gameOver ()
			window.location.href = "gameover.html"


		} else {
			
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}

	}



		


	/*a variavél "posicaoX" gera um posição aleatória no eixo x
	e com o atributo "Math.floor, arredondamos o resultado pra baixo e
	multiplicamos pelo tamanho da tela associado a variavél "largura", 
	e altura, no caso da posição y*/
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX <0  ? 0: posicaoX
	posicaoY = posicaoY < 0 ? 0:posicaoY

	console.log(posicaoX, posicaoY) 

	/* o elemento do DOM: "document.createElement('tag_do_dom')"
	cria uma tag dentro do DOM*/
	var mosquito = document.createElement('img')

	/*O document.body.appendChild recebe a variavél que abriga o createElement
	e recebe através do src, o local do arquivo*/ 
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick= function () {
		const audio = new Audio ("audios/punch-2-123106.mp3")
		audio.play()
		

		this.remove()
	};

	
	document.body.appendChild(mosquito)

	
   




}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
			break;

	}
}


function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		

	}
}


