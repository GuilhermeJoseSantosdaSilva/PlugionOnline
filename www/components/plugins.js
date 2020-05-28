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

function mostraMapa(lati, longe){
L.mapquest.key = 'qAs1VkBIpm4taRN4Ae5jtwBqWhAyOkO6';

        var map = L.mapquest.map('map', {
          center: [lati, longe],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){

  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude , position.coords.longitude);
        
    };

    function onError(error) {
        alert("Deu errado mané");
    }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

$(document).on("click", "#camera", function(){
  navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    savetoPhotoAlbum: true 
    });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
});
