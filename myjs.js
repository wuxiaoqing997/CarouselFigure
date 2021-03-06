var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var set_img = function() {
    /* 获取图片总数*/
    var ele = e('#img-list')
    var total = parseInt(ele.dataset.total)
    log(total)
        /* 绑定上一页按钮*/
    var pre = e('#pre')
    bindEvent(pre, 'click', function() {
            log('pre')
                /* 移除当前显示图片的类*/
            var img = e('.show')
            var img_num = parseInt(img.dataset.index)
            log(img_num)
            removeClassAll('show')
                /* 下一张图片index*/
            var pre_index = parseInt(pre.dataset.index)
            log(pre_index)
            var pre_num = '#img' + (total + img_num + pre_index) % total
            log(pre_num)
            var pre_add = e(pre_num)
            pre_add.classList.add('show')
        })
        /* 绑定下一页按钮*/
    var next = e('#next')
    bindEvent(next, 'click', function() {
        log('next')
            /* 移除当前显示图片的类*/
        var img = e('.show')
        var img_num = parseInt(img.dataset.index)
        log(img_num)
        removeClassAll('show')
        var next_index = parseInt(next.dataset.index)
        log(next_index)
        var next_num = '#img' + (total + img_num + next_index) % total
        log(next_num)
        var next_add = e(next_num)
        next_add.classList.add('show')
            /* 绑定圆点事件 */
        removeClassAll('select')
        var indiSelector = '#ini' + (total + img_num + next_index) % total
        log(indiSelector)
        var indi = e(indiSelector)
        indi.classList.add('select')
    })
}
var set_ini = function() {
    var ele = e('#img-list')
    var total = parseInt(ele.dataset.total)
    log(total)
    var get_il = '.normal'
    bindAll(get_il, 'mouseover', function(event) {
        removeClassAll('show')
        var il = event.target
        var il_num = il.dataset.index.substring(4)
        log(il_num)
        removeClassAll('select')
        var indiSelector = '#ini' + (total + il_num) % total
        log(indiSelector)
        var indi = e(indiSelector)
        indi.classList.add('select')
        var next_num = '#img' + (total + il_num) % total
        log(next_num)
        var next_add = e(next_num)
        next_add.classList.add('show')
    })
}

set_img()
set_ini()