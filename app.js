function bmiCalculator(peso, altura) {
  return peso / (altura * altura);
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  let valor1 = Number(document.getElementById("input-peso").value);
  let valor2 = Number(document.getElementById("input-altura").value);

  if (isNaN(valor1) || isNaN(valor2) || document.getElementById("input-peso").value.trim() === "" || document.getElementById("input-altura").value.trim() === "") {
    let errorMessage = document.createElement("h3");
    errorMessage.innerText = "Por favor, digite a altura e o peso.";
    let formTitle = document.getElementById("form");

    let existingTitle = formTitle.querySelector("h3");
    if (existingTitle) {
      formTitle.removeChild(existingTitle);
    }

    formTitle.appendChild(errorMessage);
    errorMessage.style.color = "rgba(113, 0, 0, 0.8)";
    errorMessage.style.fontFamily = "Arial";
    errorMessage.style.fontWeight = "Bold";
    errorMessage.style.fontSize = "24px";
    errorMessage.style.textAlign = "center";
  }else{
    let bmi = bmiCalculator(valor1, valor2);

    if (bmi < 18.5) {
      let underWeightTitle = document.createElement("h3");
      let texto = document.createTextNode(
        `Seu IMC é ${Math.floor(bmi)}, então você está abaixo do peso.`
      );
  
      underWeightTitle.appendChild(texto);
      let formTitle = document.getElementById("form");
  
      let existingTitle = formTitle.querySelector("h3");
      if (existingTitle) {
        formTitle.removeChild(existingTitle);
      }
  
      formTitle.appendChild(underWeightTitle);
      underWeightTitle.style.color = "rgba(113, 0, 0, 0.8)";
      underWeightTitle.style.fontFamily = "Arial";
      underWeightTitle.style.fontWeight = "Bold";
      underWeightTitle.style.fontSize = "24px";
      underWeightTitle.style.textAlign = "center";
      
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      let normalWeightTitle = document.createElement("h3");
      let texto = document.createTextNode(
        `Seu IMC é ${Math.floor(bmi)}, então você está no peso ideal.`
      );
  
      normalWeightTitle.appendChild(texto);
      let formTitle = document.getElementById("form");
  
      let existingTitle = formTitle.querySelector("h3");
      if (existingTitle) {
        formTitle.removeChild(existingTitle);
      }
  
      formTitle.appendChild(normalWeightTitle);
      normalWeightTitle.style.color = "rgba(0, 0, 100, 0.8)";
      normalWeightTitle.style.fontFamily = "Arial";
      normalWeightTitle.style.fontWeight = "Bold";
      normalWeightTitle.style.fontSize = "24px";
      normalWeightTitle.style.textAlign = "center";
      
    } else {
      let overWeightTitle = document.createElement("h3");
      let texto = document.createTextNode(
        `Seu IMC é ${Math.floor(bmi)}, então você está acima do peso.`
      );
  
      overWeightTitle.appendChild(texto);
      let formTitle = document.getElementById("form");
  
      let existingTitle = formTitle.querySelector("h3");
      if (existingTitle) {
        formTitle.removeChild(existingTitle);
      }
  
      formTitle.appendChild(overWeightTitle);
      overWeightTitle.style.color = "rgba(0, 0, 0, 0.8)";
      overWeightTitle.style.fontFamily = "Arial";
      overWeightTitle.style.fontWeight = "Bold";
      overWeightTitle.style.fontSize = "24px";
      overWeightTitle.style.textAlign = "center";
    }
    document.getElementById("input-peso").value = "";
    document.getElementById("input-altura").value = "";
  }

});
