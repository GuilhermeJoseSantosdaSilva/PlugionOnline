// This is a JavaScript file

$(document).on("click", "#alerta", function(){
  function retorno(){

  }
  navigator.notification.alert("Recomendado o uso de Avast Antivírus premium master com resguardo da Ultraprotectionclonedecartão", retorno, "Detectamos 289732 vírus no seu celular", "Oh não");
});

$(document).on("click", "#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex = 2){
      navigator.notification.alert("Digite a senha de seu cartão Mastercard");
    } else {
      navigator.notification.alert("Digite a senha de seu cartão Cielo");
    }
  }
  navigator.notification.confirm("Confirme o cartão de crédito a ser usado", confirma,"Escolhe ai patrão",['Cielo','Mastercard']);
});

$(document).on("click", "#beep", function(){
  navigator.notification.beep(2);
});

$(document).on("click", "#vibra", function(){
  navigator.vibrate(1000);
});