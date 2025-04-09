/**
 * @author fxd
 * @date 2025-4-1
 * @description 轮播图功能实现(新加了切换效果 切换效果可选值：Slide（滑动效果）、Fade（淡入淡出效果）)
 */


/**
 * @param {String} selectors 你要挂载的节点
 * @param {Array} imageList 图片列表
 * @param {Number} [width=500] 轮播图宽度
 * @param {Number} [height=300] 轮播图高度
 * @param {Number} [transitiontime=1000] 切换动画时间
 * @param {Number} [changeTime=2000] 自动轮播图片切换间隔
 * @param {String} [changeStyle="Slide"] 切换效果 可选值：Slide（滑动效果）、Fade（淡入淡出效果）
 * @returns {undefined}
 */
function changeImage(selectors, imageList, width = 500, height = 300, transitiontime = 1000, changeTime = 2000, changeStyle = "Slide") {
    if (!selectors || typeof selectors !== 'string' || !Array.isArray(imageList) || imageList.length === 0 || imageList.some(item => typeof item !== 'string')) {
        console.error('必要参数错误');
        return;
    }
    changeImage.transitiontime = changeImage.transitiontime ? changeImage.transitiontime : transitiontime;
    changeImage.changeTime = changeImage.changeTime ? changeImage.changeTime : changeTime;
    changeImage.changeStyle = changeImage.changeStyle ? changeImage.changeStyle : changeStyle;
    changeImage.imgPos = 0;
    // 整个轮播图板块盒子
    let banner_bkDom = document.querySelector(selectors);
    // 图片列表初始化渲染
    function initBanner(imageList) {
        banner_bkDom.style.width = width + 'px';
        // banner_bkDom.style.overflow = 'hidden';
        banner_bkDom.style.position = 'relative';
        banner_bkDom.innerHTML += `
        <ul style="overflow:hidden;width:${width}px;height:${height}px;display:flex;">
        ${[imageList[imageList.length - 1], ...imageList, imageList[0]].map(imgStr =>
            `<li style="flex:0 0 auto;width:${width}px;height:${height}px;background-color: #000;transform:translate(-100%);transition:all ${changeImage.transitiontime}ms;background-image: url(${imgStr});background-size:100% 100%;"></li>`
        ).join('')}
        </ul>
        <div class="page" style="width:${width};display:flex;">
        ${imageList.map((_, index) =>
            `<div class="${index === 0 ? 'active-page' : ''}">${index + 1}</div>`
        ).join('')}
        </div>
        <div class="last" style="width:5%;height:20%;background-color:#fff;"><i class="iconfont ${changeImage.lastIcon}"></i></div>
        <div class="next" style="width:5%;height:20%;background-color:#fff;"><i class="iconfont ${changeImage.nextIcon}"></i></div>
        `;
    }
    initBanner(imageList);

    // 图片列表
    let liDoms = document.querySelectorAll(`${selectors} li`);
    // 上一页按钮
    let lastButDom = document.querySelector(`${selectors} .last`);
    // 下一页按钮
    let nextButDom = document.querySelector(`${selectors} .next`);
    // 页码列表
    let pageDoms = document.querySelectorAll(`${selectors} .page div`);

    // 图片位置初始值
    let bannerPos = -100;

    // 图片换页时样式设计
    function bannerReset() {
        // 当切换时 禁止 翻页按钮交互功能
        // lastButDom.style.pointerEvents='none';
        // nextButDom.style.pointerEvents='none';
        lastButDom.removeEventListener('click', lastButClick);
        nextButDom.removeEventListener('click', nextButClick);
        // 图片与页码选中效果相对应
        pageDoms.forEach(item => {
            item.classList.remove('active-page');
        })
        let pageIndex = 0;
        switch (bannerPos) {
            case 0:
                pageIndex = imageList.length - 1; break;
            case imageList.length * (-100) - 100:
                pageIndex = 0; break;
            default:
                pageIndex = bannerPos / -100 - 1; break;
        }
        pageDoms[pageIndex].classList.add('active-page');

        // 将所有图片移动到对应位置
        liDoms.forEach(dom => {
            dom.style.transform = `translate(${bannerPos}%)`
        })

        // 延时器设置 在图片切换完成后执行 防止切换不丝滑有bug
        setTimeout(function () {
            // 开头与末尾图片的过度处理
            if (bannerPos == imageList.length * (-100) - 100 || bannerPos == 0) {
                bannerPos = (bannerPos == (imageList.length * (-100) - 100)) ? -100 : imageList.length * (-100);
                liDoms.forEach(dom => {
                    dom.style.transition = 'none';
                    dom.style.transform = `translate(${bannerPos}%)`
                })
            }
            setTimeout(() => {
                // 将交互效果 过度效果回复
                // lastButDom.style.pointerEvents='all';
                // nextButDom.style.pointerEvents='all';
                lastButDom.addEventListener('click', lastButClick)
                nextButDom.addEventListener('click', nextButClick)
                liDoms.forEach(dom => {
                    dom.style.transition = `all ${changeImage.transitiontime}ms`;
                })
            }, 100);
        }, changeImage.transitiontime)
    }

    // 图片切换效果（渐入渐入渐出）
    function bannerReset2() {
        //设置图片位置

        // 当切换时 禁止 翻页按钮交互功能
        lastButDom.removeEventListener('click', lastButClick);
        nextButDom.removeEventListener('click', nextButClick);
        // 图片与页码选中效果相对应
        pageDoms.forEach(item => {
            item.classList.remove('active-page');
        })
        pageDoms[changeImage.imgPos].classList.add('active-page');

        let liDom1 = document.querySelectorAll(`${selectors} li`)[1];
        liDom1.style.backgroundImage = `url(${imageList[changeImage.imgPos]})`;

        // 延时器设置 在图片切换完成后执行 防止切换不丝滑有bug
        setTimeout(function () {
            // 开头与末尾图片的过度处理
            setTimeout(() => {
                // 将交互效果 过度效果回复
                // lastButDom.style.pointerEvents='all';
                // nextButDom.style.pointerEvents='all';
                lastButDom.addEventListener('click', lastButClick)
                nextButDom.addEventListener('click', nextButClick)
                liDoms.forEach(dom => {
                    dom.style.transition = `all ${changeImage.transitiontime}ms`;
                })
            }, 100);
        }, changeImage.transitiontime)
    }
    function lastButClick() {
        bannerPos += 100;
        changeImage.imgPos = (changeImage.imgPos + imageList.length - 1) % imageList.length;
        bannerReset2()
        if (changeImage.changeStyle === "Slide") {
            bannerReset();
        } else if (changeImage.changeStyle === "Fade") {
            bannerReset2();
        }
    }
    function nextButClick() {
        bannerPos -= 100;
        changeImage.imgPos = (changeImage.imgPos + 1) % imageList.length;
        if (changeImage.changeStyle === "Slide") {
            bannerReset();
        } else if (changeImage.changeStyle === "Fade") {
            bannerReset2();
        }
    }
    lastButDom.addEventListener('click', lastButClick)
    nextButDom.addEventListener('click', nextButClick)
    let pageEvent = 'pointerenter'
    if (changeImage.pageEvent === 'click') {
        pageEvent = 'click';
    }
    // 图片页码跳转
    pageDoms.forEach((item, i) => {
        item.addEventListener(`${pageEvent}`, function () {
            bannerPos = -100 * (i + 1);
            changeImage.imgPos = i;
            if (changeImage.changeStyle === "Slide") {
                bannerReset();
            } else if (changeImage.changeStyle === "Fade") {
                bannerReset2();
            }
        })
    })

    // 定时轮播功能
    function changeImageByTime() {
        return setInterval(() => {
            nextButDom.click();
        }, changeImage.changeTime);
    }
    let changeTimer = changeImageByTime();
    // 当鼠标进入时停止轮播
    banner_bkDom.addEventListener('pointerenter', () => {
        console.log('停止轮播图片');
        clearInterval(changeTimer);
    })
    // 当鼠标移开 继续轮播
    banner_bkDom.addEventListener('pointerleave', () => {
        // if(isDown)return;
        console.log('开始轮播图片');
        changeTimer = changeImageByTime();
    })
    // 滑动切换图片
    let startX = 0, moveX = 0;
    let isDown = false;
    banner_bkDom.addEventListener('pointerdown', (event) => {
        startX = event.clientX;
        isDown = true;
    })
    banner_bkDom.addEventListener('pointermove', (event) => {
        if (!isDown) return;
        moveX = startX - event.clientX;
    })
    window.addEventListener('pointerup', () => {
        if (!isDown) return;
        isDown = false;
        //判断边界值
        if (moveX > 0)
            nextButDom.click();
        else if (moveX < 0)
            lastButDom.click();
        moveX = 0;
    })
    // window.addEventListener('touchend',()=>{
    //     if(!isDown) return;
    //     console.log('touchup');
    //     isDown = false;
    //     //判断边界值
    //     if(moveX>0)
    //         nextButDom.click();
    //     else if(moveX<0)
    //         lastButDom.click();
    //     moveX=0;
    //     // console.log('开始轮播图片');
    //     // changeTimer = changeImageByTime();
    // })

    // 添加clear函数
    changeImage.clear = () => {
        clearInterval(changeTimer);
    }
}
export default changeImage;