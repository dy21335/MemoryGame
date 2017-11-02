

function initiate() {
    //把record设置为true，打乱card图片样式，设置开始时初始操作：所有牌面展示2s，然后全部翻转过去
    record=true;
    shuffle(cards,card_style);
    clickable(cards,0);
        overturn_grey();

    //添加点击事件
    click_card(box,cards);

    var restart=document.getElementById("btn");
    restart.onclick=function (event) {
        initiate();
    }
}

function overturn_grey() {
    setTimeout(function () {
        for(var i=0;i<cards.length;i++)
        {
            cards[i].className=card_grey+" animated flipInX";
            // cards[i].setAttribute("class",card_grey);
        }
        clickable(cards,1);
    },2000);

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
        target.className="";
        target.className=card_style[id]+" animated flipInY";
        target.setAttribute("disable","true");
        if(record){
            lastone=target;
            record=false;
        }
        else
        {
            if(target.className==lastone.className){
            }
            else {
                    overturn_grey();
                    target.className+="animated shake";
                    lastone.className+="animated shake";
            }
            record=true;
        }

    }
}