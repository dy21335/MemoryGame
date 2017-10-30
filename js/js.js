

function initiate() {
    shuffle(cards,card_before);
    // setTimeout(overturn_grey,8000);
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
        console.log(iRand);
        console.log(arr[i]);
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
