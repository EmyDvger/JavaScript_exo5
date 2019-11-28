
    //fonction validation "onclick", je veux obtenir ceux ci
    function validation() {
      //declaration des variables
      var numberA = document.getElementById('numberA').value;
      var numberB = document.getElementById('numberB').value;
      /*declaration des variables result qui
      contient le résultat de la division du nombreA par le nombreB*/
      var result = numberA % numberB
      /*on demande pas le résultat d'une division mais le reste de la division,
      le % permet d'obtenir le reste*/
      alert(result);
    }
