var fotos = ["destaque-home.png" , "destaque-home2.png" , "destaque-home3.png", "destaque-home4.png"];

var fotoAtual=0;

var interval;



function TrocarFoto(){
	fotoAtual++;
	
	if(fotoAtual > 3 ){
		fotoAtual=0;
	}	
	document.querySelector(".imagens-banner").src="imagens/" + fotos [fotoAtual];
}

function myStartFunction(){

	interval = setInterval(TrocarFoto, 4000)
}

function myStopFunction(){
	clearInterval(interval);
}

window.onload = myStartFunction();




