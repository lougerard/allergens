var appel = 0;
var aliments = getReadProduit();
console.log("aliments : " + aliments);
$(document).ready(function() {
	
	//$( function() {
    //var availableTags = aliments;
	console.log("aliments in ready : " + aliments);
    var availableTags = ['toi','moi'];
    //$( "#testTag" ).autocomplete({
    $( "#tags" ).autocomplete({
      source: availableTags,
	  select: function mytest() {
			console.log("appel executé" + appel);
			appel++;
		  }
    });
  //});
});