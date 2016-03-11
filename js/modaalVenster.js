var modaalVenObj = (function () {
    
    var $window = $(window);
    var $modaalVenster = $('<div class="modaal-venster"/>');
    var $modaalInhoud = $('<div class="modaal-inhoud"/>');
    var $sluitKnop = $('<span class="sluit-knop">&#10005;</span>');
    
    $modaalVenster.append($modaalInhoud);
    
    return {
    
    centreren: function() {
        
       
    },
        openen: function(instellingen) {
       $modaalInhoud.append(instellingen.inhoud, $sluitKnop);
        $modaalInhoud.css({width: instellingen.breedte+'px' || 'auto',
                          height: instellingen.hoogte+'px' || 'auto'});
        $modaalVenster.appendTo('body');
            modaalVenObj.centreren();
        $sluitKnop.on('click', modaalVenObj.sluiten);
        },
        
        sluiten: function()  {
        
       $modaalInhoud.empty();
        $modaalVenster.detach();
        
        }
    
    }
}());