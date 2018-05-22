function calcul() {
    var pointuure = document.getElementById("pointure").value;
    var anneee = document.getElementById("annee").value;
  
    var result = ((((pointuure * 2) + 5) * 50 - anneee) + 1766);
  
    alert(result);
  }