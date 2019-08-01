
//Business Logic

function facets(adaptability,affectiveDisposition,emotionalExpression,emotionalPerception,emotionalRegulation,lowImpulsivity,peerRelations,selfEsteem,selfMotivation){
  this.adaptability = adapt;
  this.affectiveDisposition = affect;
  this.emotionalExpression = emotionalE;
  this.emotionalPerception= emotionalP;
  this.emotionalRegulation = emotionalR;
  this.lowImpulsivity = lowImpulsivity;
  this.peerRelations = peerRelations;
  this.selfEsteem = selfEsteem;
  this.selfMotivation = selfMotivation;

}

facets.prototype.totalEi = function () {

  this.adaptability+this.affectiveDisposition+this.emotionalExpression+this.emotionalPerception+this.emotionalRegulation+this.lowImpulsivity+this.peerRelations+this.selfEsteem+this.selfMotivation;

};

// user Logic

$(document).ready(function(){
 var totalAdaptabililtyScore = 0 ;

 var totalAffectiveDscore = 0;
 var totalEmotionalEscore = 0;
 var totalEmotionalPscore = 0;
 var totalLowImpulsivityscore = 0;
 var totalPeerRelationsscore = 0;
 var totalSelfEsteemscore = 0;
 var totalSelfMotivationscore=0;


  $(".questionnaire1").submit(function(e){
    e.preventDefault();

   var adaptabilityScore ;
   var affectivedispositionScore ;
   var emotionalexpressionScore ;
   var emotionalperceptionScore;
   var lowimpulsivityScore ;
   var peerrelationScore;
   var selfesteemScore;
   var selfmotivationScore;


   function getScores(){
     var facetscore = [adaptabilityScore, affectivedispositionScore, emotionalexpressionScore , emotionalperceptionScore, lowimpulsivityScore, peerrelationScore, selfesteemScore,selfmotivationScore];

     facetscore.forEach( y => {
      var facetNames = ['adaptability','affectivedisposition','emotionalexpression','emotionalperception','emotionalregulation','lowimpulsivity','peerrelations','selfesteem','selfmotivation'];
       facetNames.forEach(x =>{
         for( var i = 0 ; i < document.getElementsByName(x).length; i++ ){
           if (document.getElementsByName(x)[i].checked){
             y += parseInt(document.getElementsByName(x)[i].value);

           }
         }

       })

     })



   }

   getScores();




  })
})
