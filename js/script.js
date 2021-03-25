function fazGet(url){
let request = new XMLHttpRequest()
request.open("Get", url, false)
request.send()
return request.responseText
}

function criarLinha(usuario){
let linha = document.createElement("tr");
let tdId = document.createElement("td");
let tdNome = document.createElement("td");
let tdData = document.createElement("td");
let tdCpf = document.createElement("td");
let tdRg = document.createElement("td");
let tdEmail = document.createElement("td");
let tdCel = document.createElement("td");

tdNome.innerHTML = usuario.nome;
tdData.innerHTML = usuario.data_nasc;
tdCpf.innerHTML = usuario.cpf;
tdRg.innerHTML = usuario.rg;
tdEmail.innerHTML = usuario.email;
tdCel.innerHTML = usuario.celular;

linha.appendChild(tdNome);
linha.appendChild(tdData);
linha.appendChild(tdCpf);
linha.appendChild(tdRg);
linha.appendChild(tdEmail);
linha.appendChild(tdCel);

return linha;

}

function main(){
data = fazGet("http://localhost/src/js/array.json")
let usuarios = JSON.parse(data);
let tabela = document.getElementById('myTable')
usuarios.forEach(element => {
let linha = criarLinha(element);
tabela.appendChild(linha);
});

}

main()

var tabela = document.getElementById("myTable");
var linhas = tabela.getElementsByTagName("tr");

for(var i = 0; i < linhas.length; i++){
var linha = linhas[i];
linha.addEventListener("click", function(){

selLinha(this, false); 
});
}

function selLinha(linha, multiplos){
if(!multiplos){
var linhas = linha.parentElement.getElementsByTagName("tr");
for(var i = 0; i < linhas.length; i++){
 var linha_ = linhas[i];
 linha_.classList.remove("selecionado");    
}
}
linha.classList.toggle("selecionado");
}

var btnVisualizar = document.getElementById("btnButton");

btnVisualizar.addEventListener("click", function(){
var selecionados = tabela.getElementsByClassName("selecionado");

if(selecionados.length < 1){
alert("Selecione pelo menos uma linha!");
return false;
}

var dados = "";

for(var i = 0; i < selecionados.length; i++){
var selecionado = selecionados[i];
selecionado = selecionado.getElementsByTagName("td");
dados +=" Nome : " + selecionado[0].innerHTML + "," +  " Data : " + selecionado[1].innerHTML + "," + " Cpf: " + selecionado[2].innerHTML + "," + " Rg : "  + selecionado[3].innerHTML + "," + " Email : " + selecionado[4].innerHTML + " , " + " Celular " + selecionado[5].innerHTML  + "\n";
}

alert(dados);
});

