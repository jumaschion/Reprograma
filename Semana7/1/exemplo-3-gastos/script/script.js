  const button = document.querySelector(".transacao__button");
  const transacaoInputNome = document.getElementById("transacaoInputName")
  const transacaoInputValor = document.getElementById("transacaoInputMoney")
  const transacaoInputData = document.getElementById("transacaoInputDate")

    button.addEventListener("click", function(event) {
      event.preventDefault(); //previne o evento padrão
      const tabela = document.querySelector(".extrato__table"); //pega a tabela do documento
     
      //criar linha
      const linha = document.createElement("tr") 

      //criar colunas
      const colunaNome = document.createElement("td")
      const colunaNomeTexto = document.createTextNode(transacaoInputName.value)  << TROCAR PARA NOME DA CONSTANTE
      colunaNome.appendChild(colunaNomeTexto);

      const colunaValor = document.createElement("td")
      const colunaValorTexto = document.createTextNode(transacaoInputMoney.value)
      colunaValor.appendChild(colunaValorTexto);

      const colunaData = document.createElement("td")
      const colunaDataTexto = document.createTextNode(transacaoInputDate.value)
      colunaData.appendChild(colunaDataTexto);
      
      //adicionar colunas nas linhas
      linha.appendChild(colunaNome)
      linha.appendChild(colunaValor)
      linha.appendChild(colunaData)

      //adicione linha a tabela
      tabela.appendChild(linha);
    } )

   