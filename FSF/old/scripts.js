/*
auteur : Louis Gerard
contact : 0476/02.98.05
*/
var produits = {
        "beurre alu" : {"code":"100501", "Lait":true, "Gluten":false, "Oeuf":false, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false},
		"beurre campagne" : {"code":"503", "Lait":true, "Gluten":false, "Oeuf":false, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false},
		"maredsous" : {"code":"441", "Lait":true, "Gluten":false, "Oeuf":false, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false}
};
var Allergenes = ["Lait", "Gluten", "Oeuf", "Poisson", "Crustace", "Mollusque", "Arachide",
				"F. a coque" , "Moutarde", "Sesame", "Lupin", "Celeri", "Sulfite", "Soja"];
/*
*    CODE DE REFERENCE : 7 chiffres max pour mon tableau, si + ==> a voir pour la taille
*/
function creeTab() {
    /*var produits = {
        beurre: {lait:true fruitCoque:false}
	}*/

    

    /*if (produits["Beurre"].Lait) {document.getElementById("00").innerHTML = "X"}
		if (produits[value].Lait) {document.getElementById("5").innerHTML = "X"} and value is String
    }*/

    var tabl = "<table id=cssTableM><tr><td>Articles-Ingredients </td><td> Code ref </td><td> Quantite </td>";
    for (var i = 1; i < Allergenes.length+1; i++) {
        tabl += "<td>" + " " + i + ") " +Allergenes[i-1] + "</td>";
    }
	tabl += "</tr>"
  
	for (var i = 0; i < 17; i++) {
		tabl += "<td><input type=text style=border:none class=produit id=prod"+ i +"></td><td id=ref" + i + "></td><td><input type=text style=border:none id=quantite name=produit></td>";
		for (var j = 0; j < 14; j++){
		  var k = "" + j;
		  tabl += "<td id=" + i+k + "></td>";
		}
		tabl += "</tr>";
	}
	tabl += "</table>";
    
	document.getElementById("tabl").innerHTML = tabl;
}
function test(t){
	for (var i=0; i< 14;i++){
		var y = t.id.substr(-1) + i;
		document.getElementById(y).innerHTML = "";
	}
	var t2 = (t.value).toLowerCase();
  console.log(produits[t2]);
  if(produits[t2] == undefined){
    console.log("erreur");
  }else{
	  document.getElementById("ref" + t.id.substr(-1)).innerHTML = produits[t2].code;
    for(var i = 0; i < Allergenes.length; i++){
      var tab = Allergenes[i];
       if(produits[t2][tab]){
       var y = t.id.substr(-1) + i;
	   
        document.getElementById(y).innerHTML = "X";
      } 
    }
  }
}
//for (var i =0; i< 5; i++) {try{p[i]["Lait"].code; console.log(p[i]["Lait"].code)} catch(err){}}
// p sous forme p = 0 : beurre : "code":1234, "Lait" : true, "Gluten" : false
//
/*					1 : fromage : "code":5678, "Lait" : true, "Gluten" : false
function ajout() {
	//var produit = document.getElementById(y).innerHTML;
	produits.push({"beurre" : {"code":"123456", "Lait":true, "Gluten":false, "Oeuf":true, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false}});
}*/

function printProduit() {
	//var produitExist = "<table id=TableProduit><tr><td> Produits </td><td> Code ref </td>";
	var produitExist = "<table id=TableProduit>";
	var cle = Object.keys(produits);
	for(var i=0; i<3; i++) {
		var code = produits[cle[i]].code;
		produitExist += "<tr><td>"+ cle[i] +"</td><td> "+ code + " </td></tr>";
	}
	
	produitExist += "</tr></table>";
	document.getElementById("tableauP").innerHTML = produitExist;
}

// pour mettre des croix dans les cases ou l'innerHTML = 1
//document.getElementById("5").innerHTML = "X"



/*var produits = new Array();
produits.push({"beurre" : {"code":"123456", "Lait":true, "Gluten":false, "Oeuf":true, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false}});
produits.push({"lait" : {"code":"234567", "Lait":true, "Gluten":false, "Oeuf":false, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false}});
produits.push({"maredsous" : {"code":"345678", "Lait":true, "Gluten":false, "Oeuf":false, "Poisson":false, "Crustace":false, 
					"Mollusque":false, "Arachide":false, "F. a coque":false, "Moutarde":false, 
					"Sesame":false, "Lupin":false, "Celeri":false, "Sulfite":false, "Soja":false}});
for (var i =0; i< 5; i++) {try{console.log(produits[i]["beurre"]["code"])} catch(err){}}
for (var i =0; i< 5; i++) {try{console.log(produits[i]["maredsous"]["lait"])} catch(err){}}
*/
//produits.length-1  == lastIndex