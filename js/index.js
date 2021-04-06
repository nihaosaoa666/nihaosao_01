window.addEventListener('load', function() {
    var mainLeft = document.querySelector('.main_left');
    var ul = mainLeft.querySelector('ul');
    var btnL = mainLeft.querySelector('.btnL');
    var btnR = mainLeft.querySelector('.btnR');
    var ol = mainLeft.querySelector('ol');
    var ulNum = 0;
    var olNum = 0;
    //获取ul里的li宽度
    var liWidth = ul.querySelector('li').offsetWidth;

    // 动态创建导航点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('data-index', i);
        li.addEventListener('click', function() {
            //排他操作
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'bgColor';
            
            var index = this.dataset.index;
            ulNum = olNum = index;
            animation(ul, - index * liWidth);

        });

        //把导航点添加到ol中
        ol.appendChild(li);    
    }

    //默认ol的第一个子元素的class为bgColor
    ol.children[0].className = 'bgColor';
    ul.append(ul.children[0].cloneNode(true));

    //节流阀开关
    var flag = true;
    btnL.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (ulNum == 0) {
                ulNum = ul.children.length - 1;
                ul.style.left = - ulNum * liWidth + 'px';
            }
            ulNum--;
    
            olNum--;
            if (olNum < 0) {
                olNum = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[olNum].className = 'bgColor';
            animation(ul, - ulNum * liWidth, function() {
                flag = true;
            });
        }
    });

    //右边按钮事件
    btnR.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (ulNum == ul.children.length - 1) {
                ul.style.left = 0;
                ulNum = 0;
            }
            ulNum++;
    
            olNum++;
            if (olNum == ol.children.length) {
                olNum = 0;
            }
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            ol.children[olNum].className = 'bgColor';
    
            animation(ul, - ulNum * liWidth, function() {
                flag = true;
            });
        }
    });

    var timer = setInterval(function(){
        btnR.click();
    }, 2000);

    mainLeft.addEventListener('mouseenter', function(){
        clearInterval(timer);
    });
    mainLeft.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            btnR.click();
        }, 2000);
    });
});