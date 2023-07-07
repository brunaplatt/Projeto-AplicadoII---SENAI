let user = [
	{nome: "Bruna", senha: "123", acesso: "Adm"},
	{nome: "Douglas", senha: "456", acesso: "Adm"},
	{nome: "Luiz", senha: "789", acesso: "Adm"},
    {nome: "Maria", senha: "123", acesso: "Al_Prof"},
	{nome: "Roberto", senha: "456", acesso: "Al_Prof"},
	{nome: "Ana", senha: "789", acesso: "Al_Prof"},
]

let itens = [
	{id: "1", nome: "João", item: "Caneta", local: "Sala F21", imagem: "imagem"},
	// {id: "2", nome: "Julia", item: "Celular", local: "Sala D22", imagem: "celular.jpg"},
]
// localStorage.setItem("itens", JSON.stringify(itens));
// var imagem = new image();
// imagem.src = "C:\Users\dougf\VSCode\Projeto-AplicadoII---SENAI\img.envelope.jpg";
// itens[0][4] = imagem;

function login() {
    let getNome = document.getElementById("nome").value;
	let getSenha = document.getElementById("senha").value;
    let getAcesso = document.getElementById("usuario").value;
	let validaLogin = false;

	localStorage.setItem("user", JSON.stringify(user));
		
	for (let i in user){
		if(getNome == user[i].nome && getSenha == user[i].senha && getAcesso == user[i].acesso){
			direcionaLogin(user[i].acesso);
			validaLogin = true;
			break;
	    }
    }

	if(!validaLogin){
		alert("Login Incorreto");
	}
}
    
function direcionaLogin(acesso){
	if(acesso == "Adm"){
		window.location.href = "/adm.html";
	} else {
		window.location.href = "/alu_prof.html";
	}
}

	function Enviar()
{
alert("Enviado com Sucesso!");
}

	$(function(){
		var operacao = "A"; //"A"=Adição; "E"=Edição
		var indice_selecionado = -1; //Índice do item selecionado na lista
		var tbItens = localStorage.getItem("tbItens");// Recupera os dados armazenados
		tbItens = JSON.parse(tbItens); // Converte string para objeto
		if(tbItens == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbItens = [];
	});

	function Adicionar(){
		var itens = JSON.stringify({
			Nome       : $("#Nome").val(),
			Descricao  : $("#Descricao").val(),
			Local      : $("#Local").val(),
			Data       : $("#Data").val(),
			Imagem     : $("#Imagem").file()
	});
		tbItens.push(itens);
		localStorage.setItem("tbItens", JSON.stringify(tbItens));
		alert("Registro adicionado.");
		return true;
	}

	function Editar(){
		tbItens[indice_selecionado] = JSON.stringify({
			Nome       : $("#Nome").val(),
			Descricao  : $("#Descricao").val(),
			Local      : $("#Local").val(),
			Data       : $("#Data").val(),
			Imagem     : $("#Imagem").file()
			});//Altera o item selecionado na tabela
		localStorage.setItem("tbItens", JSON.stringify(tbItens));
		alert("Informações editadas.")
		operacao = "A"; //Volta ao padrão
		return true;
	}

	function Excluir(){
		tbItens.splice(indice_selecionado, 1);
		localStorage.setItem("tbItens", JSON.stringify(tbItens));
		alert("Registro excluído.");
	}

	function Listar(){
		$("#tblLiWistar tbody").append("</tr>");
	}

	
	function Listar(){
    	$("#tblListar").html("lista.html");
    	$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"<th></th>"+
			"	<th>Nome</th>"+
			"	<th>Descrição</th>"+
			"	<th>Local</th>"+
			"	<th>Data</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
		);


    	for(var i in tbItens){
       		var it = JSON.parse(tbItens[i]);
        	$("#tblListar tbody").append("<tr>");
        	$("#tblListar tbody").append("<td><img src='img/edit.png' alt='"+i+"' class = 'btnEditar'/><img src='img/delete.png' alt='"+i+"' class='btnExcluir'/></td>");
       		$("#tblListar tbody").append("<td>"+it.Nome+"</td>");
        	$("#tblListar tbody").append("<td>"+it.Descricao+"</td>");
        	$("#tblListar tbody").append("<td>"+it.Local+"</td>");
			$("#tblListar tbody").append("<td>"+it.Data+"</td>");
        	$("#tblListar tbody").append("</tr>");
   		}
	}

	$("#Cadastro").on("submit",function(){
    	if(operacao == "A")
        	return Adicionar();
    	else
        	return Editar();
	});


	$("#tblListar").on("click", ".btnEditar", function(){
    	operacao = "E";
    	indice_selecionado = parseInt($(this).attr("alt"));
    	var it = JSON.parse(tbItens[indice_selecionado]);
    	$("#Nome").val(it.Nome);
    	$("#Descricao").val(it.Descricao);
    	$("#Local").val(it.Local);
		$("#Data").val(it.Data);
		//$("#txtCodigo").attr("readonly","readonly");
    	$("#Nome").focus();
	});

	$("#tblListar").on("click", ".btnExcluir",function(){
    	indice_selecionado = parseInt($(this).attr("alt"));
    	Excluir();
    	Listar();
	});

	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});

	/*  <button id="btnCadastrar" onclick="cadastrarItem()">Cadastrar</button> HTML
        <button id="btnLogout" onclick="logout()">Cancelar</button> HTML
	
	function constroiItem(idItem, nome, nomeItem, localItem, imagemItem) {
		this.id = idItem;
		this.nome = nome;
		this.item = nomeItem;
		this.local = localItem;
		this.imagem = imagemItem;
	}
		
	function cadastrarItem(){	
	
		let nome = document.getElementById("nome").value; 
		let nomeItem = document.getElementById("nomeItem").value;
		let localItem = document.getElementById("localItem").value;
		let imagemItem = document.getElementById("imagemItem").value;
		localStorage.setItem("itens", JSON.stringify(itens));
		let itens2 = JSON.parse(localStorage.getItem("itens"));
		let idItem = parseFloat(itens2[itens2.length - 1].id) + 1
	
		if (nome == "" || nomeItem == "" || localItem == "" || imagemItem == "") {
			alert("Preencha todos os campos")
			var flag = 1;
		} else if(flag !==1) {
			var add = new constroiItem(String(idItem), nome, nomeItem, localItem, imagemItem)
	
			if(!localStorage.itens){
				itens = []
			} else {
				itens = JSON.parse(localStorage.itens)
			}
	
			itens.push(add)
			localStorage.setItem("itens", JSON.stringify(itens));
			console.log(Object.values(itens))
			alert("Item cadastrado com sucesso")
	
			document.getElementById("nome").value = null;
			document.getElementById("nomeItem").value = null;
			document.getElementById("localItem").value = null;
			document.getElementById("imagemItem").value = null;
		}

		itens.push(add)
		localStorage.setItem("itens", JSON.stringify(itens));
		console.log(Object.values(itens))
		alert("Item cadastrado com sucesso")

		document.getElementById("nome").value = null;
		document.getElementById("nomeItem").value = null;
		document.getElementById("localItem").value = null;
		document.getElementById("imagemItem").value = null;
	}
	
	function imprimiItens(){
	
		function criaTag(elemento) {
			return document.createElement(elemento)
		}
	
		let tabela = document.getElementById("tbitens");
		var linha = criaTag("tr");
		// let coluna = criaTag("td");        
	
		let itensTabela = JSON.parse(localStorage.getItem("itens"));
	
		itensTabela.sort(ordenacao);
	
		function criaCelula (tag, text){
			tag = criaTag(tag);
			tag.textContent = text;
			return tag;
		}
	
		let id = "";
		let nome = "";
		let item = "";
		let local = "";    
		let imagem = "";    
	
		for(let j = 0; j < itensTabela.length; j++){
	
			var linha = criaTag("tr");
			tabela.appendChild(linha);
			id = criaCelula("td", itensTabela[j].id);
			linha.appendChild(id);
			nome = criaCelula("td", itensTabela[j].nome);
			linha.appendChild(nome);
			item = criaCelula("td", itensTabela[j].item);
			linha.appendChild(item);
			local = criaCelula("td", itensTabela[j].local);
			linha.appendChild(local);
			imagem = criaCelula("td", itensTabela[j].imagem);
			linha.appendChild(imagem);
		}
	}
	
	function ordenacao(a, b, c, d, e){
		return a.id - b.id;
	}*/
