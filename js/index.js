var data = [
    '每天看着励志的语录却过着颓废的人生',
    '懦弱是会传染的，并且，勇气也会',
    '如果生活还没能改变你，那你已经失败了',
    '我拼尽全力追逐你的脚步，而你却消失在我的眼前',
    '有些事，只能一个人做，有些关，只能一个人过，有些路，只能一个人走',
    '没时间是最无力的借口',
    '我们都希望离别不是句号，而是破折号，指向一个带着笑容的温暖明天',
    '放下~简单两个字，寥寥十一笔',
    '有一种落差是，你配不上自己的野心，也辜负了所受的苦难',
    '喜欢你的我就像个赌徒，输了所有，却还不肯离场',
    '有勇气，有担当是好事，有能力才是前提',
    '我不强求，不代表不在乎，没有拥有，所以从未失去',
    '充满希望的旅途胜过终点的到达',
    '努力到无能为力，拼搏到感动自己',
    '时间不会停下来等你，我们现在过的每一天，都是余生中最年轻的一天',
    '成长是一场温柔的修行，不是越来越强硬和尖锐，而是越来越宽宥和平和',
    '就怕你一生碌碌无为，还安慰自己平凡可贵',
    '人生不能太过圆满，求而不得未必是遗憾',
    '日子就像喝茶一样，只会苦一阵子，不会苦一辈子',
    '如果不坚强，流泪给谁看',
    '宁愿跑起来被拌倒无数次，也不要规规矩矩走一辈子',
    '我们用人生最好的年华做抵押，去担保一个说出来都会被人嘲笑的梦想',
    '现实是此岸，理想是彼岸，中间隔着湍急的河流，行动则是架在川上的桥梁',
    '这个世界上没有天才，只有不努力的笨蛋',
    '心之所向，素履以往，生如逆旅，一苇以航',
    '你错过的，别人才会得到，正如你得到的都是别人错过的',
    '何必为昨天的泪，打湿今天的阳光',
    '人生没有白走的路，每一步都算数',
    '很多时候，不怕万人阻挡，只怕自己投降',
    '一个人至少拥有一个梦想，有一个理由去坚强，心若没有栖息的地方，到哪里都是流浪',
    '看不透是可惜的，看透了是可悲的',
    '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成',
    '你我还会这样相聚吗？我们会不会，像风中转蓬一样，各自滚向渺茫，相忘人生的荒漠',
    '注定分散的结局何必去挽留，强求的结果都不是好结果',
    '有些时候，其实自己已经知道答案，再坚持，不过是希望你会给我一个惊喜罢了',
    '世界上其实根本没有感同身受这回事，针不刺到别人身上，他们就不知道有多痛',
    '人总是在接近幸福时倍感幸福，在幸福进行时却患得患失',
    '别以为世界抛弃了你，其实世界压根没空搭理你',
    '世界上唯一不变的就是变化，世界上唯一可能的就是不可能',
    '因为有了因为，所以有了所以，既然已成既然，何必再说何必',
    '当你能飞的时候就不要放弃飞，当你能梦的时候就不要放弃梦',
    'Work hard in silence. let success make the noise.(在沉默中努力，让成功自己发声)',
    'We are all in the world of anxiety for safe.(我们都在不安的世界里找安稳)',
    'Loneliness is a no one to send a bad cold.(孤独是一场无人送药的重感冒)',
    'I will start fresh, be some one new.(我要重新开始，做不一样的自己)',
    'Never let your fear decide your future.(别让你的恐惧决定了你的未来)',
    'I believe good things happen every day.(我相信每天都有好事发生)',
    'Never give up, and good luck will find you.(不要放弃，好运总会垂青你的)',
    'Win a few, lose a few. that is life.(有得也有失，生活就是如此)'
]
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