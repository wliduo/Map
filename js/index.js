var data = []
var randomIndex = 0;
var i = 0;
var timer = 0;
var str = "";

function randomText() {
    // 重置索引i和文字
    i = 0;
    str = data[randomIndex];
    // 随机数不会和上一次重复，如果获取和上一次相同就重新获取，直到不同为止
    let index = Math.floor(data.length * Math.random());
    while (randomIndex === index) {
        index = Math.floor(data.length * Math.random());
        // console.log(this.randomIndex + ',' + index);
    }
    randomIndex = index
}

function typing() {
    // 打字
    if (i <= str.length) {
        if (i === str.length) {
            $('#title').html(str.slice(0, i++));
        } else {
            $('#title').html(str.slice(0, i++) + '_');
        }
        timer = setTimeout(function () {
            typing();
        }, 150);
    } else {
        clearTimeout(timer);
        // 停顿1.5秒开始删除文字
        setTimeout(function () {
            clearTitle();
        }, 1500);
    }
}

function clearTitle() {
    // 删除文字
    if (i >= 0) {
        $('#title').html(str.slice(0, i--) + '_');
        timer = setTimeout(function () {
            clearTitle();
        }, 50);
    } else {
        clearTimeout(timer);
        // 删除完成重置
        start();
    }
}

function start() {
    /* try {
        // 步骤一: 创建异步对象
        var ajax = new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            // IE6及其以下版本浏览器
            ajax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // 步骤二: 设置请求的url参数 参数一是请求的类型 参数二是请求的url 可以带参数 动态的传递参数starName到服务端
        // ajax.open('get', 'getStar.php?starName='+name);
        ajax.open('get', 'https://v1.hitokoto.cn', false);
        // 步骤三: 注册事件 onreadystatechange 状态改变就会调用 定义返回触发的函数 定义在send之前 不然同步请求就出问题
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // 步骤五: 如果能够进到这个判断 说明 数据 完美的回来了 并且请求的页面是存在的
                // console.log(JSON.parse(ajax.responseText));
                var text = JSON.parse(ajax.responseText);
                // console.log(text);
                // 重置索引i和文字
                i = 0;
                str = text.hitokoto;
                $('#author').html(text.from);
                typing();
            }
        }
        // 步骤四: 发送请求
        ajax.send();
        $.ajax({
            url: "https://v1.hitokoto.cn",
            success: function (result) {
                // 重置索引i和文字
                i = 0;
                str = result.hitokoto;
                $('#author').html(result.from);
                typing();
            }
        });
    } catch (err) {
        $('#author').html('随心');
        // 一开始默认给一个随机语句
        randomIndex = Math.floor(data.length * Math.random());
        randomText();
        typing();
    } */
    $.get("https://v1.hitokoto.cn", {}, function (data, status, jqxhr) {
        // 重置索引i和文字
        i = 0;
        str = data.hitokoto;
        $('#author').html(data.from);
        typing();
    }).fail(function () {
        $('#author').html('随心');
        // 一开始默认给一个随机语句
        randomIndex = Math.floor(data.length * Math.random());
        randomText();
        typing();
    });
}

$(document).ready(function () {
    start();
});


!function () {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
    function e(n) {
        return document.getElementsByTagName(n)
    }
    function t() {
        var t = e("script"), o = t.length, i = t[o - 1];
        return {
            l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", .5), c: n(i, "color", "0,0,0"), n: n(i, "count", 122)
        }
    }
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function i() {
        r.clearRect(0, 0, a, c); var n, e, t, o, m, l;
        s.forEach(function (i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c ||
                i.y < 0 ? -1 : 1,
                r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1;
                e < u.length; e++)n = u[e],
                    null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max,
                        r.beginPath(),
                        r.lineWidth = t / 2,
                        r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")",
                        r.moveTo(i.x, i.y),
                        r.lineTo(n.x, n.y), r.stroke()))
        }),
            x(i)
    } var a, c, u, m = document.createElement("canvas"), d = t(), l = "c_n" + d.l,
        r = m.getContext("2d"), x = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (n) {
                window.setTimeout(n, 1e3 / 45)
            },
        w = Math.random, y = {
            x: null, y: null, max: 2e4
        };
    m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0]
        .appendChild(m), o(), window.onresize = o,
        window.onmousemove = function (n) {
            n = n ||
                window.event, y.x = n.clientX, y.y = n.clientY
        },
        window.onmouseout = function () {
            y.x = null, y.y = null
        };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1; s.push({
            x: h, y: g, xa: v, ya: p, max: 6e3
        })
    }
    u = s.concat([y]), setTimeout(function () {
        i()
    }, 100)
}();