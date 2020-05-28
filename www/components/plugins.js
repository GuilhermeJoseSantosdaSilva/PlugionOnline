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

$(document).on("click", "#cdg_barra", function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Escaneia alguma coisa ai amigão", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});

$(document).on("click", "#conexao", function(){
  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

checkConnection();
});