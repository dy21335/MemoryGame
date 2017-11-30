/*
*Card构造函数
 */
function Card(cardStyle,greyCard,box,cards,text) {
    this.cardStyle=cardStyle; //多彩多色的卡片样式
    this.greyCard=greyCard; //灰色的卡片样式
    this.record=true;   //记录是否是一次匹配行为的第一次点击，true表示一次匹配行为中的第一次点击，false表示第二次
    this.box=box;   //外面的ul
    this.cards=cards;   //一系列的卡片
    this.lastone={}; //记录上一个点击的卡片对象
    this.moves=0;//记录已经点击的次数
    this.text=text;
    this.overturn=0;//记录所有卡片是否被成功翻转
}

Card.prototype.overturnGrey=overturnGrey;
Card.prototype.clickable=clickable;
Card.prototype.clickCard=clickCard;

/*
*全部翻转成灰色面
 */
function overturnGrey(time,cardIns) {
    cardIns.overturn=0;
    setTimeout(function () {
        for (var i = 0; i < cardIns.cards.length; i++) {
            cardIns.cards[i].className = cardIns.greyCard + " animated flipInX";
        }
        cardIns.box.addEventListener("click",check.bind(null, cardIns),false);
        // cardIns.box.removeEventListener("click",check.bind(null, cardIns),false);
        //为什么removeEventListener没有效果？
    }, time);

}

/*
*设置牌面是否可点击，比如当一个牌面点击过一次之后，不可再次点击
* 参数elem是传入元素，choose是个bool值，true为可点击，false为不可点击
* 调用这个方法的是card对象
 */
function clickable(elem, choose) {
    var i = 0;
    if (choose) {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable","true");
    }
    else {
        for (i; i < elem.length; i++)
            elem[i].setAttribute("disable", "false");
    }
}

/*
*点击一个牌面的结果
* 参数isadded是布尔值，true表示添加事件，false表示删除事件
 */
function clickCard(cardIns,isadded) {
    if (isadded) {
        cardIns.box.addEventListener("click",check.bind(box, cardIns),false);
    }
    else {
        cardIns.box.removeEventListener("click",check.bind(box, cardIns),false);
    }
}
/*
*具体的检查函数，检查是否与上一个牌面匹配，如果不匹配，则全部牌面翻转成灰色
* 还要检查一下是否是点击在ul上，点击ul为无效
 */
function check(cardIns) {

        var event = event || window.event;
        var target = event.target;
            if(target.tagName.toLowerCase()!="ul"){
             // console.log(target.tagName.toLowerCase());
            var id = parseInt($(target).index());
            var lastone = cardIns.lastone;
            cardIns.moves++;
            console.log(cardIns.moves);
            starStyle(cardIns.moves);



            cardIns.text.innerHTML=cardIns.moves.toString();

            target.className = cardIns.cardStyle[id] + " animated flipInY";

            if (cardIns.record) {
                cardIns.lastone = target;
                cardIns.record = false;
            }
            else {
                if (target.className == lastone.className) {

                }
                else {
                    target.className += "animated shake";
                    cardIns.lastone.className += "animated shake";

                    setTimeout(function () {
                        cardIns.overturn=0;
                        for (var i = 0; i < cardIns.cards.length; i++) {
                            cardIns.cards[i].className = cardIns.greyCard + " animated flipInX";
                        }
                    }, 1000);
                }

                cardIns.record = true;

            }
                //overturn值的改变，当overturn值等于16时，表示16张卡片都翻转了过来
                cardIns.overturn+=1;
                if(cardIns.overturn==16){
                    window.open("success.html",'_self');
                }
        }

}

//改变星星的样式
function starStyle(moves) {
    var top=document.getElementById('top');
    var stars=document.getElementsByTagName('span');
    switch (moves){
        case 8:
            stars[2].setAttribute("class","fa fa-star-o");
            break;
        case 16:
            stars[1].setAttribute("class","fa fa-star-o");
            break;
        case 24:
            stars[0].setAttribute("class","fa fa-star-o");
            break;
    }
}