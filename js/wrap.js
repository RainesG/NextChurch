window.onload =function (){
    var tab = document.getElementById('tab1');
    var aLi = tab.getElementsByTagName('li');
    var article = document.getElementsByTagName('article');

    var prev = tab.getElementsByClassName('prev');
    var next = tab.getElementsByClassName('next');
    var n = 0;

    for (var a = 0; a < 5; a++) {
        console.log(a)
    }
    console.log('prev'+prev)
    prev[0].onclick=function(){
        console.log('asd');
        n=n-1;
        if(n === -1){
            alert('前面没有了')
        }else{
            article[0].style.left = -(n * 1970) + 'px'
            for (var a = 0; a < aLi['length']; a++) {
                aLi[a].className = '';
            }
            aLi[n].className = "active"
            alert("asd");
        }
    }

    prev[1].onclick=function(){
        n=n-1;
        if(n === -1){
            alert('前面没有了')
        }else{
            article[1].style.left = -(n * 968) + 'px'
        }
        
    }


    next[0].onclick=function(){
        n=n+1
        if(n > 2){
            alert('后面没有了');
        }else{
            article[0].style.left = -(n * 1970) + 'px'
            for (var a = 0; a < aLi['length']; a++) {
                aLi[a].className = '';
            }
            aLi[n].className = "active"
        }
    }

    next[1].onclick=function(){
        n=n+1
        if(n > 2){
            alert('后面没有了');
        }else{
            article[1].style.left = -(n * 968) + 'px'
        }
    }

    document.getElementById('tab1').onmouseover=function(){
        clearInterval(close)
        console.log("asd");
    }

    document.getElementById('tab1').onmouseout=function(){
       close = setInterval(function(){
      n = n + 1
        if (n > 2) {
            n = -1
        } else {

            for (var a = 0; a < aLi['length']; a++) {
                aLi[a].className = '';
            }
            aLi[n].className = "active"

            article[0].style.left = -(n * 1970) + 'px'
            article[1].style.left = -(n * 968) + 'px'
        }
    },2000)

    }

    var close = setInterval(function(){
        n = n + 1
          if (n > 2) {
              n = -1
          } else {

              for (var a = 0; a < aLi['length']; a++) {
                  aLi[a].className = '';
              }
              aLi[n].className = "active"

              article[0].style.left = -(n * 1970) + 'px'
              article[1].style.left = -(n * 968) + 'px'
          }
      },2000)

    for (var i = 0; i < aLi['length']; i++) {
        aLi[i].setAttribute('data-number', i)
        // setAttribute 设置元素属性  
        // 接受两个参数.第一个表示属性名.第二个表示属性值
        aLi[i].onclick = function (e) {
            for (var a = 0; a < aLi['length']; a++) {
                aLi[a].className = '';
            }
            this.className = "active"
            article[0].style.left = -(this.dataset.number * 1970) + 'px'
            article[1].style.left = -(this.dataset.number * 968) + 'px'
        }
    }
}