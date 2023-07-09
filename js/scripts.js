let user = [
	{nome: "Bruna", senha: "123", acesso: "Adm"},
	{nome: "Douglas", senha: "456", acesso: "Adm"},
	{nome: "Luiz", senha: "789", acesso: "Adm"},
    {nome: "Maria", senha: "123", acesso: "Al_Prof"},
	{nome: "Roberto", senha: "456", acesso: "Al_Prof"},
	{nome: "Ana", senha: "789", acesso: "Al_Prof"},
]

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

	function Adicionar(){
		var it = GetItem("Nome", $("#Nome").val());

		if(it != null){
			alert("Item já cadastrado.");
			return;
		}
		var itens = JSON.stringify({
			Nome       : $("#Nome").val(),
			Descricao  : $("#Descricao").val(),
			Local      : $("#Local").val(),
			Data       : $("#Data").val(),
			Imagem     : $("#Imagem").val()
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
			Imagem     : $("#Imagem").val()
			});//Altera o item selecionado na tabela
		localStorage.setItem("tbItens", JSON.stringify(tbItens));
		alert("Informações editadas.")
		operacao = "A"; //Volta ao padrão
		return true;
	}

	function Listar(){

    	$("#tblListar").html("");
    	$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"<th></th>"+
			"	<th>Nome</th>"+
			"	<th>Descrição</th>"+
			"	<th>Local</th>"+
			"	<th>Data</th>"+
			//"	<th>Imagem</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
		);


    	for(var i in tbItens){
       		var it = JSON.parse(tbItens[i]);
        	$("#tblListar tbody").append("<tr>"+
        	"<td><img src='img/edit.png' alt='"+i+"' class = 'btnEditar'/><img src='img/delete.png' alt='"+i+"' class='btnExcluir'/></td>" +
       		"<td>"+it.Nome+"</td>" +
        	"<td>"+it.Descricao+"</td>" +
        	"<td>"+it.Local+"</td>" +
			"<td>"+it.Data+"</td>" +
			//"<td>"+it.Imagem+"</td>" +
        	"</tr>");
   		}
	}

	function Excluir(){
		tbItens.splice(indice_selecionado, 1);
		localStorage.setItem("tbItens", JSON.stringify(tbItens));
		alert("Registro excluído.");
	}

	function GetItem(propriedade, valor){
		var it = null;
        for (var itens in tbItens) {
            var i = JSON.parse(tbItens[itens]);
            if (i[propriedade] == valor)
                it = i;
        }
        return it;
	}

	Listar();

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

});