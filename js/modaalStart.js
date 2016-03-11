$(document).ready( function() {
    var ingangInhoud = $('#ingang').detach();
    var halInhoud = $('#hal').detach();
    var patroonInhoud = $('#patroon').detach();
    
    //events bij de thumbs
    
    $('#ingang1').on('click',function() {
        modaalVenObj.openen({inhoud: ingangInhoud, breedte: 600});
        
    });
   
     $('#hal1').on('click',function() {
        modaalVenObj.openen({inhoud: halInhoud, breedte: 700});
        
    });
   
      $('#hotel').on('click',function() {
        modaalVenObj.openen({inhoud: patroonInhoud, breedte: 700});
        
    });
   
});  