window.onload=function() {
    // var tabe =document.getElementById('tabe');
    var content = document.getElementById('content-index')
    var box = content.getElementsByTagName('ul');

    // banner轮播图
    var tab1 = document.getElementById('tab1');
    var aLi = tab1.getElementsByTagName('li');
    var pic = tab1.getElementsByTagName('section');

    var bprev = tab1.getElementsByClassName('prev');
    var bnext = tab1.getElementsByClassName('next');

    var tab2 = document.getElementById('tab2');
    var pic2 = tab2.getElementsByTagName('section');

    var gprev = tab2.getElementsByClassName('prev');
    var gnext = tab2.getElementsByClassName('next');

    var prev = document.getElementsByClassName('e-prev');
    var next = document.getElementsByClassName('e-next');
    var n=0;

    prev[0].onclick=function(e){
        n-=1
        // console.log('prev'+n)
        if(n<0){
            n=box.length-1;
            // console.log(n);
            for(a=0;a<box.length;a++){
                // box[a].style.display = 'none'
                box[a].style.opacity = '0'
            }
            // box[n].style.display = 'flex'
                box[n].style.opacity = '1'
        }else {
            for(a=0;a<box.length;a++){
                // box[a].style.display = 'none'
                box[a].style.opacity = '0'
            }
            // box[n].style.display = 'flex'
            box[n].style.opacity = '1'
            console.log('prev N:'+n)
        }
    }



    next[0].onclick=function(e){
        n+=1
        console.log('next N:'+n)
        if(n>box.length-1){
            n=0;
            for(a=0;a<box.length;a++){
            // box[a].style.display = 'none'
            box[a].style.opacity = '0'
            // box[a].style.left = '-1170px'
        }
            // box[n].style.display = 'flex'
            box[n].style.opacity = '1'
            // box[n].style.transition = 'all 600ms'
            // box[n].style.transform = 'translate(1170px)'
                // console.log('next'+n)
        }else {
            for(a=0;a<box.length;a++){
                // box[a].style.display = 'none'
                box[a].style.opacity = '0'
                
                // box[a].style.left = '-1170px'
            }
            // box[n].style.display = 'flex'
            box[n].style.opacity = '1'
            // box[n].style.transition = 'all 600ms'
            // box[n].style.transform = 'translate(1170px)'
        }
            if(e.preventDefault){
            e.preventDefault();
            }else{
            window.event.returnValue == false;
            }
        }

    bprev[0].onclick=function(e){
        n-=1
        // console.log('prev'+n)
        if(n<0){
            n=pic.length-1;
            // console.log(n);
            for(a=0;a<pic.length;a++){
                // box[a].style.display = 'none'
                pic[a].style.opacity = '0'                
                aLi[a].className = ''
            }
            // box[n].style.display = 'flex'
                pic[n].style.opacity = '1'
                aLi[n].className = 'active'
        }else {
            for(a=0;a<pic.length;a++){
                // box[a].style.display = 'none'
                pic[a].style.opacity = '0'
                aLi[a].className = ''
            }
            // box[n].style.display = 'flex'
            pic[n].style.opacity = '1'
            aLi[n].className = 'active'
            console.log('prev N:'+n)
        }
    }

    bnext[0].onclick=function(e){
        n+=1
        // console.log('prev'+n)
        if(n>pic.length-1){
            n=0;
            for(a=0;a<pic.length;a++){
                // box[a].style.display = 'none'
                pic[a].style.opacity = '0'
                aLi[a].className = ''
            }
            // box[n].style.display = 'flex'
                pic[n].style.opacity = '1'
                aLi[n].className = 'active'
        }else {
            for(a=0;a<pic.length;a++){
                // box[a].style.display = 'none'
                pic[a].style.opacity = '0'
                aLi[a].className = ''
            }
            // box[n].style.display = 'flex'
            pic[n].style.opacity = '1'
            aLi[n].className = 'active'
            console.log('next N:'+ pic.length)
        }
    }

    gprev[0].onclick=function(e){
        n-=1
        // console.log('prev'+n)
        if(n<0){
            n=pic2.length-1;
            // console.log(n);
            for(a=0;a<pic2.length;a++){
                // box[a].style.display = 'none'
                pic2[a].style.opacity = '0'                
            }
            // box[n].style.display = 'flex'
                pic2[n].style.opacity = '1'
        }else {
            for(a=0;a<pic2.length;a++){
                // box[a].style.display = 'none'
                pic2[a].style.opacity = '0'
            }
            // box[n].style.display = 'flex'
            pic2[n].style.opacity = '1'
            console.log('prev N:'+n)
        }
    }

    gnext[0].onclick=function(e){
        n+=1
        // console.log('prev'+n)
        if(n>pic2.length-1){
            n=0;
            for(a=0;a<pic2.length;a++){
                // box[a].style.display = 'none'
                pic2[a].style.opacity = '0'
            }
            // box[n].style.display = 'flex'
                pic2[n].style.opacity = '1'
        }else {
            for(a=0;a<pic2.length;a++){
                // box[a].style.display = 'none'
                pic2[a].style.opacity = '0'
            }
            // box[n].style.display = 'flex'
            pic2[n].style.opacity = '1'
            console.log('next N:'+ pic2.length)
        }
    }

    for (var i = 0; i < aLi['length']; i++) {
        aLi[i].setAttribute('data-number', i)
        aLi[i].onclick = function () {
            for (var a = 0; a < aLi['length']; a++) {
                aLi[a].className = '';
                pic[a].style.opacity = '0'
                // console.log('a'+a)
            }
            this.className = "active"
            pic[this.dataset.number].style.opacity = '1'
        }
        // console.log(i)
    }

    }

