/*
auteur : Louis Gerard
contact : 0476/02.98.05
*/

function addConfirm() {
	var r = confirm("Etes vous sûr de vouloir ajouter ce produit à la liste de commande ?");
	if (r == true) {
		// do add product to list
	} else {
		//do nothing
	}
}


function tabStock() {
	var tab = "<table id='table_id' class='display'> <thead> <tr><th>Produit</th> <th>Quantité/u</th> <th>Unités</th> <th>Quantité totale</th> <th>Stock</th> <th>Commander</th></tr> </thead> <tbody>";
	for (var i=0; i < 50; i++) {
		tab += "<tr> <td> sel </td> <td> 1 kg </td>	<td> 1 </td> <td> 1 kg </td> <td> rouge </td> <td> <img src='com.png' onclick='addConfirm()' width='20' height='20'> </td> </tr>";
	}
	tab += "</tbody>";
	document.getElementById("tab").innerHTML = tab;
}    