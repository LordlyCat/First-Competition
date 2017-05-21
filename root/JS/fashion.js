var view = document.querySelector('#view');
var wrapper = document.querySelector('#wrapper');
var div = wrapper.querySelectorAll('div');
var w = document.body.clientWidth; //浏览器可视化宽度
var h = document.documentElement.clientHeight;//浏览器可视化高度
var description = document.querySelector('p');



wrapper.style.marginLeft = -w/5 + 'px';
view.style.height = h + 'px';
for (var i = 0; i < div.length; i++) {
    div[i].style.width = w/5 + 'px';
}

function moving () {
    function getMousePosition(e) {
       
        var e = e || window.event || arguments.callee.caller.arguments[0];
        
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        //var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        //var y = e.pageY || e.clientY + scrollY;
        return x;
    }
    //console.log(getMousePos());
    var x = getMousePosition();
    wrapper.style.marginLeft = -2*x/4.99 + 'px';
}


var img = [
    'url(../image/1summer-breeze.jpg)',
    'url(../image/2vacation-edit.jpg)',
    'url(../image/3blooming.jpg)',
    'url(../image/4baseball-uniform.jpg)',
    'url(../image/5tailoring.jpg)',
    'url(../image/6this-is-denim.jpg)',
    'url(../image/southern.jpg)'
]

function getImg (event) {

    event = event ? event : window.event; 
    var e = event.srcElement ? event.srcElement : event.target; 

    e.children[0].style.color = 'white';

    switch (e.parentNode.className) {
        case 'left':
            div[0].style.backgroundImage = img[0];
            break;

        case 'one':
            div[1].style.backgroundImage = img[1];
            break;

        case 'two':
            div[2].style.backgroundImage = img[2];
            break;

        case 'three':
            div[3].style.backgroundImage = img[3];
            break;

        case 'four':
            div[4].style.backgroundImage = img[4];
            break;

        case 'five':
            div[5].style.backgroundImage = img[5];
            break;

        case 'right':
            div[6].style.backgroundImage = img[6];
            break;
    }    
        switch (e.className ) {
        case 'left':
            div[0].style.backgroundImage = img[0];
            break;

        case 'one':
            div[1].style.backgroundImage = img[1];
            break;

        case 'two':
            div[2].style.backgroundImage = img[2];
            break;

        case 'three':
            div[3].style.backgroundImage = img[3];
            break;

        case 'four':
            div[4].style.backgroundImage = img[4];
            break;

        case 'five':
            div[5].style.backgroundImage = img[5];
            break;

        case 'right':
            div[6].style.backgroundImage = img[6];
            break;
    }
}

function out (event) {
    event = event ? event : window.event; 
    var e = event.srcElement ? event.srcElement : event.target;
    e.children[0].style.color = 'gray';

    var parent = e.parentNode;
    switch (e.className) {
        case 'left':
            div[0].style.backgroundImage = '';
            break;

        case 'one':
            div[1].style.backgroundImage = '';
            break;

        case 'two':
            div[2].style.backgroundImage = '';
            break;

        case 'three':
            div[3].style.backgroundImage = '';
            break;

        case 'four':
            div[4].style.backgroundImage = '';
            break;

        case 'five':
            div[5].style.backgroundImage = '';
            break;

        case 'right':
            div[0].style.backgroundImage = '';
            break;
    }

    switch (e.parentNode.className) {
        case 'left':
            div[0].style.backgroundImage = '';
            break;

        case 'one':
            div[1].style.backgroundImage = '';
            break;

        case 'two':
            div[2].style.backgroundImage = '';
            break;

        case 'three':
            div[3].style.backgroundImage = '';
            break;

        case 'four':
            div[4].style.backgroundImage = '';
            break;

        case 'five':
            div[5].style.backgroundImage = '';
            break;

        case 'right':
            div[0].style.backgroundImage = '';
            break;
    }
}

function getURL (event) {
    event = event ? event : window.event; 
    var e = event.srcElement ? event.srcElement : event.target;

    var parent = e.parentNode;
    switch (e.className) {
        case 'left':
            window.location = 'https://www.zara.cn/cn/zh/-current/feifei-sun/editorial/-c940541p4734252.html';
            break;

        case 'one':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/vacation-edit/-c943006p4763057.html';
            break;

        case 'two':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/blooming/-c939016p4709141.html';
            break;

        case 'three':
            window.location = 'https://www.zara.cn/cn/zh/%E7%94%B7%E5%A3%AB/-c359049p4734156.html';
            break;

        case 'four':
            window.location = 'https://www.zara.cn/cn/zh/editorials/man/tailoring/-c920008p4639565.html';
            break;

        case 'five':
            window.location = 'https://www.zara.cn/cn/zh/editorials/man/denim/-c928009p4639609.html';
            break;

        case 'right':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/southern-airs/-c939014p4709123.html';

            break;
    }

    switch (e.parentNode.className) {
        case 'left':
            window.location = 'https://www.zara.cn/cn/zh/-current/feifei-sun/editorial/-c940541p4734252.html';
            break;

        case 'one':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/vacation-edit/-c943006p4763057.html';
            break;

        case 'two':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/blooming/-c939016p4709141.html';
            break;

        case 'three':
            window.location = 'https://www.zara.cn/cn/zh/%E7%94%B7%E5%A3%AB/-c359049p4734156.html';
            break;

        case 'four':
            window.location = 'https://www.zara.cn/cn/zh/editorials/man/tailoring/-c920008p4639565.html';
            break;

        case 'five':
            window.location = 'https://www.zara.cn/cn/zh/editorials/man/denim/-c928009p4639609.html';
            break;

        case 'right':
            window.location = 'https://www.zara.cn/cn/zh/editorials/woman/southern-airs/-c939014p4709123.html';
            break;
    }

}

//div[0].style.backgroundImage = img[0];
wrapper.addEventListener('mousemove',  moving, false);
wrapper.addEventListener('mouseover', getImg, false);
wrapper.addEventListener('mouseout', out, false);
wrapper.addEventListener('click', getURL, false);

description.addEventListener('mouseover', getImg, false);


