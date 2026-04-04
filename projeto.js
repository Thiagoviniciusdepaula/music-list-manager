class Produto {
	constructor(nome,album,duração, data) {
		this.nome = nome;
		this.album = album;
		this.duração = this.duração;
		this.data = data;
	}
}

function montarTabela(lista) {
	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
		auxHtml += '<tr>'+
		           '<td>'+ lista[i].nome +'</td>'+
							 '<td>'+ lista[i].album +'</td>'+
							 '<td>'+ lista[i].tempo +'</td>'+
							 '<td>'+ lista[i].data +'</td>'+
							 '<td>'+ 
							 	'<button class="btn btn-warning" rel="'+ i +'">Alterar</button>'+
							 '</td>'+
							 '</tr>';
	}
	return auxHtml;
} 

function validar(numero) {
	if (!isNaN(numero) && numero != '') {
		return true;
	} else {
		return false;
	}
}

let auxPosicao = '';
let listaMusicas = [];
let musica1 = new Produto('All my loving', 'With the Beatles', 2.07, 1963);
let musica2 = new Produto('Taxman', 'Revolver', 2.44, 1966);
let musica3 = new Produto('Dont Let me Donw', 'Abbey Road', 3.33, 1969);
listaMusicas.push(musica1);
listaMusicas.push(musica2);
listaMusicas.push(musica3);

//window.onload = function() {
$(document).ready(() => {
	//document.getElementById('tabela').innerHTML = montarTabela(listaMusicas);
	$('#tabela').html(montarTabela(listaMusicas));
	//document.getElementById('btnSalvar').onclick = function() {
	$('#btnSalvar').click(() => {	
		//let nome = document.getElementById('nome').value;
		let nome = $('#nome').val();
		//let album = document.getElementById('album').value;
		let album = $('#album').val();
		//let tempo = document.getElementById('tempo').value;
		let tempo = $('#tempo').val();
		//let data = document.getElementById('data').value;
		let data = $('#data').val();
		if (album != '' && validar(tempo)
				&& validar(data)) {
			let novaMusica = new Produto(nome,album,tempo,data);
			listaMusicas.push(novaMusica);
			//document.getElementById('tabela').innerHTML = montarTabela(listaMusicas);
			$('#tabela').html(montarTabela(listaMusicas));
			$('input').val('');
		} else {
			alert('Digite os valores corretamente!');
		}		
	});

	$('#tabela').on('click','.btn-warning', (evento) => {
		auxPosicao = evento.target.getAttribute('rel');
		$('#nome').val(listaMusicas[auxPosicao].nome);
		$('#album').val(listaMusicas[auxPosicao].album);
		$('#tempo').val(listaMusicas[auxPosicao].tempo);
		$('#data').val(listaMusicas[auxPosicao].data);
	});
	
});
