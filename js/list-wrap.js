window.onload = function () {
    // var tabe =document.getElementById('tabe');
    var btn = document.getElementById('btn');
    var aLi = btn.getElementsByTagName('li');
    var content = document.getElementById('content')
    var box = content.getElementsByTagName('ul');

    var prev = document.getElementsByClassName('e-prev');
    var next = document.getElementsByClassName('e-next');
    var n = 0;

    prev[0].onclick = function (e) {
        n -= 1
        // console.log('prev'+n)
        if (n < 0) {
            n = aLi.length - 1;
            // console.log(n);
            for (a = 0; a < aLi.length; a++) {
                box[a].style.display = 'none'
                aLi[a].getElementsByTagName('a')[0].className = 'deactive'
            }
            box[n].style.display = 'block'
            aLi[n].getElementsByTagName('a')[0].className = 'active'
        } else {
            for (a = 0; a < aLi.length; a++) {
                box[a].style.display = 'none'
                aLi[a].getElementsByTagName('a')[0].className = 'deactive'
            }
            box[n].style.display = 'block'
            aLi[n].getElementsByTagName('a')[0].className = 'active'
            console.log('prev N:' + n)
        }
    }

    next[0].onclick = function (e) {
        n += 1
        console.log('next N:' + n)
        if (n > aLi.length - 1) {
            n = 0;
            for (a = 0; a < aLi.length; a++) {
                box[a].style.display = 'none'
                aLi[a].getElementsByTagName('a')[0].className = 'deactive'
            }
            box[n].style.display = 'block'
            aLi[n].getElementsByTagName('a')[0].className = 'active'
            // console.log('next'+n)
        } else {
            for (a = 0; a < aLi.length; a++) {
                box[a].style.display = 'none'
                aLi[a].getElementsByTagName('a')[0].className = 'deactive'
            }
            box[n].style.display = 'block'
            aLi[n].getElementsByTagName('a')[0].className = 'active'

        }
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue == false;
        }
    }

    for (var i = 0; i < aLi.length; i++) {
        ! function (j) {
            aLi[j].onclick = function (e) {
                console.log('j:' + j);

                for (a = 0; a < aLi.length; a++) {
                    box[a].style.display = 'none'
                    aLi[a].getElementsByTagName('a')[0].className = 'deactive'
                }
                box[j].style.display = 'block'
                aLi[j].getElementsByTagName('a')[0].className = 'active'

                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    window.event.returnValue == false;
                }
            };
        }(i);
    }
}