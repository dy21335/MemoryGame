/*
*Card构造函数
 */
function Card(cardStyle,greyCard,box,cards) {
    this.cardStyle=cardStyle; //多彩多色的卡片样式
    this.greyCard=greyCard; //灰色的卡片样式
    this.record=true;   //记录是否是一次匹配行为的第一次点击，true表示一次匹配行为中的第一次点击，false表示第二次
    this.box=box;   //外面的ul
    this.cards=cards;   //一系列的卡片；
    this.lastone={}; //记录上一个点击的卡片对象
}

Card.prototype.overturnGrey=overturnGrey;
Card.prototype.clickable=clickable;
Card.prototype.clickCard=clickCard;

/*
*全部翻转成灰色面
 */
function overturnGrey(time,cardIns) {
    setTimeout(function () {
        for (var i = 0; i < cardIns.cards.length; i++) {
            cardIns.cards[i].className = cardIns.greyCard + " animated flipInX";
            // cards[i].setAttribute("class",greyCard);
        }
        cardIns.clickable(cardIns.cards, true);
    }, time);

}

/*
*设置牌面是否可点击，比如当一个牌面点击过一次之后，不可再次点击
* 参数elem是传入元素，choose是个bool值，true为可点击，false为不可点击
 */
function clickable(elem, choose) {
    var i = 0;
    if (choose) {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable", "false");
    }
    else {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable", "false");
    }
}

/*
*点击一个牌面的结果
 */
function clickCard(cardIns) {
    cardIns.box.onclick = check(cardIns);
}

/*
*具体的检查函数，检查是否与上一个牌面匹配，如果不匹配，则全部牌面翻转成灰色
 */
function check(cardIns) {
    return function() {
        event = event || window.event;
        var target = event.target;
        var id = parseInt($(target).index());
        var lastone = cardIns.lastone;
        target.className = cardIns.cardStyle[id] + " animated flipInY";
        target.disable="true";
        if (cardIns.record) {
            cardIns.lastone = target;
            cardIns.record = false;
        }
        else {
            if (target.className == lastone.className) {
            }
            else {
                cardIns.overturnGrey(1000,cardIns);
                target.className += "animated shake";
                cardIns.lastone.className += "animated shake";
            }
            cardIns.record = true;
        }
    }
}