function animation(obj, target, callbeak) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var buchang = (target - obj.offsetLeft) / 10;
        //如果步长大于0 则向上取整，如果小于0，则向下取整
        buchang = buchang > 0 ? Math.ceil(buchang) : Math.floor(buchang);
        if ( obj.offsetLeft == target ) {
            clearInterval(obj.timer);
            
            callbeak && callbeak();
        }

        obj.style.left = obj.offsetLeft + buchang + 'px';
        
    }, 15);
}