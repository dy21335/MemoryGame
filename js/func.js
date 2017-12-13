/*
*初始化，包括界面初始化，添加点击事件
 */
function initiate() {
    var cardStyle,
        greyCard,
        box,
        cards,
        cardIns,
        top,
        stars,
        restartB;

    // var check=check.bind(cardIns);

    //一些变量的初始化
    cardStyle = ["a_overturn_1 fa fa-bomb",
        "a_overturn_2 fa fa-building",
        "a_overturn_3 fa fa-car",
        "a_overturn_4 fa fa-codepen",
        "a_overturn_5 fa  fa-cube",
        "a_overturn_6 fa fa-cubes",
        "a_overturn_7 fa fa-database",
        "a_overturn_8 fa fa-delicious",
        "a_overturn_1 fa fa-bomb",
        "a_overturn_2 fa fa-building",
        "a_overturn_3 fa fa-car",
        "a_overturn_4 fa fa-codepen",
        "a_overturn_5 fa  fa-cube",
        "a_overturn_6 fa fa-cubes",
        "a_overturn_7 fa fa-database",
        "a_overturn_8 fa fa-delicious"];
    greyCard = "b_overturn";
    box = document.getElementById('box');
    cards = box.getElementsByTagName('li');
    text=document.getElementById('moves');
    top=document.getElementById('top');
    stars=document.getElementsByTagName('span');

    //界面的初始化
    for(var i=0;i<3;i++){
        stars[i].setAttribute("class","fa fa-star");
    }
    text.innerHTML='0';

    //设置定时器
    var time=[];
    time[0]=0;
    var t=timedCount(time);//result数组，第一个元素是定时器标志，第二个是count的时间


    //cardIns是Card实例对象
    cardIns=new Card(cardStyle,greyCard,box,cards,text);

    shuffle(cardIns.cards, cardIns.cardStyle);

    cardIns.overturnGrey(2000,cardIns);

    var cardClick=check.bind(cardIns);
    cardIns.box.addEventListener("click",cardClick,false);

    var restart = document.getElementById("undo");
    restart.onclick = function (event) {
        console.log(time[0]);
        clearInterval(t);
        cardIns.box.removeEventListener("click",cardClick,false);
        initiate();
    };


}



/*
*打乱存储牌数组的顺序
 */
function random(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}


/*
*打乱牌的顺序
 */
function shuffle(elem, style) {
    var result = random(style);
    for (var i = 0; i < elem.length; i++) {
        elem[i].setAttribute("class", result[i]);
    }
}


function timedCount(time)
{
    time[0]=0;
    var t;
    t=window.setInterval(function () {
        time[0]++;
    },1000);
    return t;
}