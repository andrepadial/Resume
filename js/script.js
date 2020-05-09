$(function(){
    $('.selectpicker').selectpicker();
});


function translateWebSite (obj){
	
	// alert(obj.value);
	
	if(obj.value == 'Portuguese'){
		$("#homeBR").show();						
		$("#homeUS").hide();
		
		$("#aboutBR").show();
		$("#aboutUS").hide();
	}
	else{
		$("#homeUS").show();		
		$("#homeBR").hide();
		
		$("#aboutUS").show();
		$("#aboutBR").hide();
		
		$(flagBR).selectpicker = obj.value
	}
	
	$('.selectpicker').selectpicker('val', obj.value);
	
};