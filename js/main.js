//Business Logic
function facets (adaptability,affectiveDisposition,emotionalExpression,emotionalPerception,emotionalRegulation,lowImpulsivity,peerRelations,selfEsteem,selfMotivation){
    this.adaptability = adaptability;
    this.affectiveDisposition = affectiveDisposition;
    this.emotionalExpression = emotionalExpression;
    this.emotionalPerception = emotionalPerception;
    this.emotionalRegulations = emotionalRegulation;
    this.lowImpulsivity = lowImpulsivity;
    this.peerRelations = peerRelations;
    this.selfEsteem = selfEsteem;
    this.selfMotivation = selfMotivation;
   }

   facets.prototype.totalEi = function () {
    this.adaptability+this.affectiveDisposition+this.emotionalExpression+this.emotionalPerception+this.emotionalRegulation+this.lowImpulsivity+this.peerRelations+this.selfEsteem+this.selfMotivation;
   };


   function store (){
     this.totals = [];
   }

   store.prototype.addtotals = function (total){
     this.totals.push(total);
   }

   var ei = new store ();
   

   // user Logic
   $(document).ready(function(){

   var totalAdaptabililtyScore = 0 ;
   var totalAffectiveDscore = 0;
   var totalEmotionalEscore = 0;
   var totalEmotionalPscore = 0;
    var totalEmotionalRscore = 0;
   var totalLowImpulsivityscore = 0;
   var totalPeerRelationsscore = 0;
   var totalSelfEsteemscore = 0;
   var totalSelfMotivationscore=0;

    $("#questionnaire1").click(function(e){
      e.preventDefault();
     var adaptabilityScore ;
     var affectivedispositionScore ;
     var emotionalexpressionScore ;
     var emotionalperceptionScore;
     var lowimpulsivityScore ;
     var peerrelationScore;
     var selfesteemScore;
     var selfmotivationScore;
     var emotionalregulationScore;

     // function getScores(){
     //
     //    var facetNames = ['adaptability','affectivedisposition','emotionalexpression','emotionalperception','emotionalregulation','lowimpulsivity','peerrelations','selfesteem','selfmotivation'];
     //     facetNames.forEach(x =>{
     //       for( var i = 0 ; i < document.getElementsByName(x).length; i++ ){
     //         if (document.getElementsByName(x)[i].checked){
     //           switch(x){
     //             case 'adaptability':
     //             adaptabilityScore = parseInt(document.getElementsByName(x)[i].value);
     //             localStorage.setItem ('adapt',adaptabilityScore );
     //             case 'affectivedisposition':
     //             affectivedispositionScore = parseInt(document.getElementsByName(x)[i].value);
     //             localStorage.setItem ('disposition',affectivedispositionScore);
     //             case 'emotionalexpression':
     //            emotionalexpressionScore = parseInt(document.getElementsByName(x)[i].value);
     //             localStorage.setItem ('disposition',emotionalexpressionScore);
     //
     //
     //
     //           }
     //
     //
     //
     //     })
     //   })
     // }
     // getScores();
     // console.log(adaptabilityScore);
      adaptabilityScore = $("input:radio[name=adaptability]:checked").val();
      affectivedispositionScore = $("input:radio[name=affectivedisposition]:checked").val();
      emotionalexpressionScore  = $("input:radio[name=emotionalexpression]:checked").val();
      emotionalperceptionScore = $("input:radio[name=emotionalperception]:checked").val();
      emotionalregulationScore = $("input:radio[name=emotionalregulation]:checked").val();
      lowimpulsivityScore = $("input:radio[name=lowimpulsivity]:checked").val();
      peerrelationScore = $("input:radio[name=peerrelations]:checked").val();
      selfesteemScore = $("input:radio[name=selfesteem]:checked").val();
      selfmotivationScore = $("input:radio[name=selfmotivation]:checked").val();

      localStorage.setItem ('adapt',adaptabilityScore );
      localStorage.setItem ('dispositon',affectivedispositionScore );
      localStorage.setItem ('expression',emotionalexpressionScore);
      localStorage.setItem ('perception',emotionalperceptionScore);
      localStorage.setItem ('impulsivity',lowimpulsivityScore);
      localStorage.setItem ('relations',peerrelationScore);
      localStorage.setItem ('esteem',selfesteemScore);
      localStorage.setItem ('motivation',selfmotivationScore);
      localStorage.setItem ('regulation',emotionalregulationScore);
    });

    ///form 2
    $("#questionnaire2").click(function(e){
      e.preventDefault();
      var adaptabilityScore2 ;
      var affectivedispositionScore2 ;
      var emotionalexpressionScore2 ;
      var emotionalperceptionScore2;
      var lowimpulsivityScore2 ;
      var peerrelationScore2;
      var selfesteemScore2;
      var selfmotivationScore2;
      var emotionalregulationScore2;

      adaptabilityScore2 = $("input:radio[name=adaptability]:checked").val();
      affectivedispositionScore2 = $("input:radio[name=affectivedisposition]:checked").val();
      emotionalexpressionScore2  = $("input:radio[name=emotionalexpression]:checked").val();
      emotionalperceptionScore2 = $("input:radio[name=emotionalperception]:checked").val();
      emotionalregulationScore2 = $("input:radio[name=emotionalregulation]:checked").val();
      lowimpulsivityScore2 = $("input:radio[name=lowimpulsivity]:checked").val();
      peerrelationScore2 = $("input:radio[name=peerrelations]:checked").val();
      selfesteemScore2 = $("input:radio[name=selfesteem]:checked").val();
      selfmotivationScore2 = $("input:radio[name=selfmotivation]:checked").val();
      localStorage.setItem ('adapt2',adaptabilityScore2 );
      localStorage.setItem ('disposition2',affectivedispositionScore2);
      localStorage.setItem ('expression2',emotionalexpressionScore2);
      localStorage.setItem ('perception2',emotionalperceptionScore2);
      localStorage.setItem ('impulsivity2',lowimpulsivityScore2);
      localStorage.setItem ('relations2',peerrelationScore2);
      localStorage.setItem ('esteem2',selfesteemScore2);
      localStorage.setItem ('motivation2',selfmotivationScore2);
      localStorage.setItem ('regulation2',emotionalregulationScore2);
    });


    $("#questionnaire3").click(function(e){
      e.preventDefault();
      var adaptabilityScore3 ;
      var affectivedispositionScore3 ;
      var emotionalexpressionScore3 ;
      var emotionalperceptionScore3;
      var lowimpulsivityScore3 ;
      var peerrelationScore3;
      var selfesteemScore3;
      var selfmotivationScore3;
      var emotionalregulationScore3;

      adaptabilityScore3 = $("input:radio[name=adaptability]:checked").val();
      affectivedispositionScore3 = $("input:radio[name=affectivedisposition]:checked").val();
      emotionalexpressionScore3  = $("input:radio[name=emotionalexpression]:checked").val();
      emotionalperceptionScore3 = $("input:radio[name=emotionalperception]:checked").val();
      emotionalregulationScore3 = $("input:radio[name=emotionalregulation]:checked").val();
      lowimpulsivityScore3 = $("input:radio[name=lowimpulsivity]:checked").val();
      peerrelationScore3 = $("input:radio[name=peerrelations]:checked").val();
      selfesteemScore3 = $("input:radio[name=selfesteem]:checked").val();
      selfmotivationScore3 = $("input:radio[name=selfmotivation]:checked").val();
      localStorage.setItem ('adapt3',adaptabilityScore3 );
      localStorage.setItem ('disposition3',affectivedispositionScore3);
      localStorage.setItem ('expression3',emotionalexpressionScore3);
      localStorage.setItem ('perception3',emotionalperceptionScore3);
      localStorage.setItem ('impulsivity3',lowimpulsivityScore3);
      localStorage.setItem ('relations3',peerrelationScore3);
      localStorage.setItem ('esteem3',selfesteemScore3);
      localStorage.setItem ('motivation3',selfmotivationScore3);
      localStorage.setItem ('regulation3',emotionalregulationScore3);
    });

    //
    $("#questionnaire4").click(function(e){
      e.preventDefault();
      var adaptabilityScore4 ;
      var affectivedispositionScore4 ;
      var emotionalexpressionScore4 ;
      var emotionalperceptionScore4;
      var lowimpulsivityScore4 ;
      var peerrelationScore4;
      var selfesteemScore4;
      var selfmotivationScore4;
      var emotionalregulationScore4;

      adaptabilityScore4 = $("input:radio[name=adaptability]:checked").val();
      affectivedispositionScore4 = $("input:radio[name=affectivedisposition]:checked").val();
      emotionalexpressionScore4  = $("input:radio[name=emotionalexpression]:checked").val();
      emotionalperceptionScore4 = $("input:radio[name=emotionalperception]:checked").val();
      emotionalregulationScore4 = $("input:radio[name=emotionalregulation]:checked").val();
      lowimpulsivityScore4 = $("input:radio[name=lowimpulsivity]:checked").val();
      peerrelationScore4 = $("input:radio[name=peerrelations]:checked").val();
      selfesteemScore4 = $("input:radio[name=selfesteem]:checked").val();
      selfmotivationScore4 = $("input:radio[name=selfmotivation]:checked").val();
      localStorage.setItem ('adapt4',adaptabilityScore4 );
      localStorage.setItem ('disposition4',affectivedispositionScore4);
      localStorage.setItem ('expression4',emotionalexpressionScore4);
      localStorage.setItem ('perception4',emotionalperceptionScore4);
      localStorage.setItem ('impulsivity4',lowimpulsivityScore4);
      localStorage.setItem ('relations4',peerrelationScore4);
      localStorage.setItem ('esteem4',selfesteemScore4);
      localStorage.setItem ('motivation4',selfmotivationScore4);
      localStorage.setItem ('regulation4',emotionalregulationScore4);
    });

    //
    totalAdaptabililtyScore = parseInt(localStorage.getItem('adapt')) + parseInt(localStorage.getItem('adapt2')) + parseInt(localStorage.getItem('adapt3')) + parseInt(localStorage.getItem('adapt4'));
    totalAffectiveDscore = parseInt(localStorage.getItem('disposition')) + parseInt(localStorage.getItem('disposition2')) + parseInt(localStorage.getItem('disposition3')) + parseInt(localStorage.getItem('disposition4'));
    totalEmotionalEscore = parseInt(localStorage.getItem('expression')) + parseInt(localStorage.getItem('expression2')) + parseInt(localStorage.getItem('expression3')) + parseInt(localStorage.getItem('expression4'));
    totalEmotionalPscore = parseInt(localStorage.getItem('perception')) + parseInt(localStorage.getItem('perception2')) + parseInt(localStorage.getItem('perception3')) + parseInt(localStorage.getItem('perception4'));
    totalLowImpulsivityscore = parseInt(localStorage.getItem('impulsivity')) + parseInt(localStorage.getItem('impulsivity2')) + parseInt(localStorage.getItem('impulsivity3')) + parseInt(localStorage.getItem('impulsivity4'));
    totalPeerRelationsscore= parseInt(localStorage.getItem('relations')) + parseInt(localStorage.getItem('relations2')) + parseInt(localStorage.getItem('relations3')) + parseInt(localStorage.getItem('relations4'));
    totalSelfEsteemscore = parseInt(localStorage.getItem('esteem')) + parseInt(localStorage.getItem('esteem2')) + parseInt(localStorage.getItem('esteem3')) + parseInt(localStorage.getItem('esteem4'));
    totalSelfMotivationscore = parseInt(localStorage.getItem('motivation')) + parseInt(localStorage.getItem('motivation2')) + parseInt(localStorage.getItem('motivation3')) + parseInt(localStorage.getItem('motivation4'));
    totalEmotionalRscore = parseInt(localStorage.getItem('regulation')) + parseInt(localStorage.getItem('regulation2')) + parseInt(localStorage.getItem('regulation3')) + parseInt(localStorage.getItem('regulation4'));

    // var newTotal = new facets (totalAdaptabililtyScore,totalAffectiveDscore,totalEmotionalEscore,totalEmotionalPscore,totalEmotionalRscore,
    //     totalLowImpulsivityscore,totalPeerRelationsscore,totalSelfEsteemscore,totalSelfMotivationscore);
      // ei.addtotals(newTotal);
  //  var adapt = ei.totals[0].adaptability;
  //  var affective = ei.totals[0].affectiveDisposition;
  //  var expression = ei.totals[0].emotionalExpression;
  //  var perception = ei.totals[0].emotionalPerception;
  //  var regulation = ei.totals[0].emotionalRegulations;
  //  var impulsivity = ei.totals[0].lowImpulsivity;
  //  var peer = ei.totals[0].peerRelations;
  //  var esteem = ei.totals[0].selfEsteem ;
  //  var motivate = ei.totals[0].selfMotivation;

  console.log(totalAdaptabililtyScore);

});
