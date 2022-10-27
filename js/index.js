window.addEventListener('load', function () {
    let arrow_l = document.querySelector('.arrow_l');
    let arrow_r = document.querySelector('.arrow_r');
    let focus = document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })
    //根据图片的数目确认小圆点的数量
    let ul = focus.querySelector('ul');
    let ol = this.document.querySelector('.circle');
    for (let i = 0; i < ul.children.length; i++) {
        let li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        //点击小圆点，点到的小圆点变色
        li.addEventListener('click', function () {
            for (let i = 0; i < ul.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index');

            animate(ul, -index * focusWidth);
        })

    }
    ol.children[0].className = 'current';
    //克隆第一张照片，进行无缝切换
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //点击右箭头，进行图片切换
    let num = 0;
    let circle = 0;
    arrow_r.addEventListener('click', function () {
        // if (num < ul.children.length) {
        //     num++;
        //     animate(ul, -num * focusWidth);
        // }
        // else {
        //     ul.style.left = 0;
        //     num = 0;
        // }
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        //点击右键移动，相对应的小圆圈也会发生变化
        circle++;
        // circle = circle % ul.children.length;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.className[circle].className = 'current';

    })
})