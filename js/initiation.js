window.onload=function() {

//var cards=document.getElementsByTagName('li');
     window.card_before=[],//翻转前的card图，灰色
        window.card_after;//翻转后的card图


    card_before[1]="a_overturn_1 fa fa-bomb";
    card_before[2]="a_overturn_2 fa fa-building";
    card_before[3]="a_overturn_3 fa fa-car";
    card_before[4]="a_overturn_4 fa fa-codepen";
    card_before[5]="a_overturn_5 fa  fa-cube";
    card_before[6]="a_overturn_6 fa fa-cubes";
    card_before[7]="a_overturn_7 fa fa-database";
    card_before[8]="a_overturn_8 fa fa-delicious";
    card_before[9]="a_overturn_1 fa fa-bomb";
    card_before[10]="a_overturn_2 fa fa-building";
    card_before[11]="a_overturn_3 fa fa-car";
    card_before[12]="a_overturn_4 fa fa-codepen";
    card_before[13]="a_overturn_5 fa  fa-cube";
    card_before[14]="a_overturn_6 fa fa-cubes";
    card_before[15]="a_overturn_7 fa fa-database";
    card_before[16]="a_overturn_8 fa fa-delicious";

   window.card_after="b_overturn";

    // window.cardsList=[];
    window.box=document.getElementById('box');
    window.cards=box.getElementsByTagName('li');
    // for(var i=0;i<window.cards;i++){
    //     window.cardsList[i]=window.cards[i].getElementById('i');
    // }
    initiate();
    yicifanzhuan();
    
    function yicifanzhuan() {
        for(var i=0;i<cards.length;i++)
        {
            cards[i].onclick=function () {
                cards[i].setAttribute("class",card_before[i]);
                cards[i].setAttribute("disable","disable");
            }
        }
    }
  
};