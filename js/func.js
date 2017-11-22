/*
*初始化，包括界面初始化，添加点击事件
 */
function initiate() {
    record = true;
    shuffle(cards, card_style);
    clickable(cards, 0);
    overturn_grey(2000);

    //添加点击事件
    click_card(box, cards);

    var restart = document.getElementById("btn");
    restart.onclick = function (event) {
        initiate();
    }
}

/*
*全部翻转成灰色面
 */
function overturn_grey(time) {
    setTimeout(function () {
        for (var i = 0; i < cards.length; i++) {
            cards[i].className = card_grey + " animated flipInX";
            // cards[i].setAttribute("class",card_grey);
        }
        clickable(cards, 1);
    }, time);

}

/*
*打乱存储牌数组的顺序
 */
function random(arr) {
    for (var i = 1; i < arr.length; i++) {
        var iRand = parseInt((arr.length - 1) * Math.random() + 1);
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
        elem[i].setAttribute("class", result[i + 1]);
    }
}


/*
*设置牌面是否可点击，比如当一个牌面点击过一次之后，不可再次点击
* 参数elem是传入元素，choose是个bool值，1为可点击，0为不可点击
 */
function clickable(elem, choose) {
    var i = 0;
    if (choose) {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable", "false");
    }
    else {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable", "disable");
    }
}

/*
*点击一个牌面的结果，检查是否与上一个牌面匹配，如果不匹配，则全部牌面翻转成灰色
 */
function click_card(box, cards) {
    var current;
    var style;
    var id;
    var target;
    box.onclick = function (event) {
        event = event || window.event;
        target = event.target;
        id = parseInt(target.id);
        target.className = "";
        target.className = card_style[id] + " animated flipInY";
        target.setAttribute("disable", "true");
        if (record) {
            lastone = target;
            record = false;
        }
        else {
            if (target.className == lastone.className) {
            }
            else {
                overturn_grey(1000);
                target.className += "animated shake";
                lastone.className += "animated shake";
            }
            record = true;
        }

    }
}