document.addEventListener('DOMContentLoaded', function() {
  // Preencher dropdown
  populateDropdown();
  // Habilitar/desabilitar botão baseado na seleção
  enableDisableButton();
});

// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado pelo botão: " + copyText.value);
  }
}

// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}

// Função de preencher o dropdown de "Navegação"
function populateDropdown() {
  var caminhoElement = document.getElementById('Caminho');
  if (caminhoElement) {
    var caminho = caminhoElement.value;
    var caminhoArray = caminho.split(',');
    var select = document.getElementById('navegacaoURA');

    select.innerHTML = '';

    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Navegação:";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.style.color = "#000000";
    select.appendChild(defaultOption);

    caminhoArray.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.trim();
      option.text = item.trim();
      option.disabled = true;
      option.style.color = "#000000";
      select.appendChild(option);
    });
  }
}

// Função de habilitar/desabilitar o botão baseado na seleção
function enableDisableButton() {
  const selectElement = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');

  // Iniciar com o botão desabilitado
  button.disabled = true;
  button.style.cursor = "not-allowed";

  // Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
  selectElement.addEventListener('change', function() {
    const selectedValue = selectElement.value;

    // Verificar se a opção "Consórcio Transferência" foi selecionada
    if (selectedValue === "20868534" || selectedValue !== "") {
      button.disabled = false;
      button.style.cursor = "pointer";
    } else {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
  });
}

// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);

  if (opTransf != "") {
    let transfSkill = "";

    switch (opTransf) {
      case "20868525":
        transfSkill = "20868525 - Consórcio Adesão";
        break;
      case "20868526":
        transfSkill = "20868526 - Consórcio Assembléia";
        break;
      case "20868527":
        transfSkill = "20868527 - Consórcio Assuntos Gerais";
        break;
      case "20868528":
        transfSkill = "20868528 - Consórcio Baixa DOC";
        break;
      case "20868529":
        transfSkill = "20868529 - Consórcio Cadastro";
        break;
      case "20868530":
        transfSkill = "20868530 - Consórcio Contemplação";
        break;
      case "20868531":
        transfSkill = "20868531 - Consórcio Financeiro";
        break;
      case "20868532":
        transfSkill = "20868532 - Consórcio Funchal";
        break;
      case "20868533":
        transfSkill = "20868533 - Consórcio Retenção";
        break;
      case "20868534":
        transfSkill = "20868534 - Consórcio Sicoob";
        break;
      case "20868535":
        transfSkill = "20868535 - Consórcio Troca Titularidade";
        break;
      case "PUC":
        transfSkill = "URA PUC";
        break;
    }

    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      executarFuncao();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}

function executarFuncao() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log('Função executada!');
  document.getElementById('openConfirmation').value = "transf";
}

// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  console.log('BOTAO PESQUISA');
  this.value = "pesquisa";
  console.log('ACIONADO');
});

// Opções para o select
const allOptions = [
  { value: "", text: "Lista de Transferência:" },
  { value: "20868525", text: "20868525 - Consórcio Adesão" },
  { value: "20868526", text: "20868526 - Consórcio Assembleia" },
  { value: "20868527", text: "20868527 - Consórcio Assuntos Gerais" },
  { value: "20868528", text: "20868528 - Consórcio Baixa DOC" },
  { value: "20868529", text: "20868529 - Consórcio Cadastro" },
  { value: "20868530", text: "20868530 - Consórcio Contemplação" },
  { value: "20868531", text: "20868531 - Consórcio Financeiro" },
  { value: "20868532", text: "20868532 - Consórcio Funchal" },
  { value: "20868533", text: "20868533 - Consórcio Retencao" },
  { value: "20868534", text: "20868534 - Consórcio Transferência" }, // Será exibida apenas para "Consórcio Contemplação"
  { value: "20868535", text: "20868535 - Consórcio Troca Titularidade" },
  { value: "PUC", text: "URA PUC" }
];

// Opções para "Consórcio Contemplação" (apenas Transferência e URA PUC)
const contemplationOptions = [
  { value: "20868534", text: "20868534 - Consórcio Transferência" },
  { value: "PUC", text: "URA PUC" }
];

// Obter o valor do input SkillT
const skillValue = document.getElementById("SkillT").value;

// Obter o select
const select = document.getElementById("ListaTransf");

// Escolher as opções com base na skill
const optionsToShow = skillValue === "20868530"
  ? contemplationOptions
  : allOptions.filter(option => option.value !== "20868534" && option.value !== skillValue);

// Adicionar as opções ao select
optionsToShow.forEach(option => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  select.appendChild(opt);
});
