

function initiate() {
    record=true;
    shuffle(cards,card_before);
    clickable(cards,0);
    setTimeout(function(){
        overturn_grey();
        clickable(cards,1);
    },2000);
    click_card(box,cards);

    var restart=document.getElementById("btn");
    console.log(restart.tagName);
    restart.onclick=function (event) {
        initiate();
    }
}

function overturn_grey() {
    for(var i=0;i<cards.length;i++)
    {
        cards[i].setAttribute("class",card_after);
    }
}


function random(arr) {
    for(var i=1;i<arr.length;i++){
        var iRand=parseInt((arr.length-1)*Math.random()+1);
        // console.log(iRand);
        // console.log(arr[i]);
        var temp=arr[i];
        arr[i]=arr[iRand];
        arr[iRand]=temp;
        // console.log(arr[i]);
    }
    return arr;
    // arr.sort(function () {
    //     return Math.random()-0.5
    // });
}

//重新开始游戏后洗牌,传入li和打乱后的style数组

function shuffle(elem,style) {
    var result=random(style);
    for(var i=0;i<elem.length;i++){
        elem[i].setAttribute("class",result[i+1]);
    }
}


//把所有牌的功能设置是否可点击，1为true，0位为false
function clickable(elem,choose) {
    var i=0;
    if(choose){
        for(i;i<elem.length;i++)
            elem[i].setAttribute("disable","false");
    }
    else{
        for(i;i<elem.length;i++)
            elem[i].setAttribute("disable","disable");
    }
}

//点击一个牌面的结果
function click_card(box,cards) {
    var current;
    var style;
    var id;
    var target;
    box.onclick=function (event) {
        event=event||window.event;
        target=event.target;
        id=parseInt(target.id);
        target.className=card_before[id];
        target.setAttribute("disable","true");
        if(record){
            lastone=target;
            record=false;
        }
        else
        {
            if(target.className==lastone.className){record=true}
            else {
                setTimeout(function(){
                    overturn_grey();
                    clickable(cards,1);
                    record=true;
                },1000);
            }
        }

    }
    // for(var i=0;i<cards.length;i++)
    // {
    //     console.log(i);
    //     current=cards[i];
    //     style=card_before[i+1];
    //     current.onclick=function (event) {
    //         console.log(current.className);
    //         current.setAttribute("class",style);   onclick里面为什么不能用card_before[i];
    //         // if(record)
    //         //     lastone=cards[i];
    //         // else
    //         //     if(lastone.className==cards[i]){}
    //         //     else
    //         //          overturn_grey();
    //     };
    //
    // }
}