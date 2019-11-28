function validation() {
  //fonction validation "onclick", je veux obtenir ceux ci
  //declaration des variables
  var numberA = document.getElementById('numberA').value;
  var numberB = document.getElementById('numberB').value;
  /*si numberA et numberB, sont pas des nombre mais des lettres, c'est vrai,
  donc alerte affiche erreur*/

  if (isNaN(numberA) == true || isNaN(numberB)){
  //numberA et numberB sans entre cote car on parle de la variable
    alert('erreur : ce n\'est pas un nombre');
  }else {
    if (numberB!=0){
      //si numberB est différents de 0 on va pouvoir faire le calcul
      var result = numberA % numberB;
      /*declaration des variables result qui
      contient le résultat de la division du nombreA par le nombreB*/
      /*on demande pas le résultat d'une division mais le reste de la division,
      le % permet d'obtenir le reste*/
      alert(Math.round(result));
      //permet d 'arrondir à l'entier le plus proche
    }else {
      alert('erreur : division impossible par 0');
    }
  }
}
