// 顶部导航栏登录状态判断
const li1 = document.querySelector('.TopNav_box li:nth-child(1)')
const li2 = li1.nextElementSibling.nextElementSibling

// 渲染登录状态
function render() {
    uname = localStorage.getItem('uname');
    if (uname) {
        li1.innerHTML = `<a href="javascript:;"> <i class="iconfont icon-yonghu"></i>${uname}</a>`
        li2.innerHTML = `<a href="javascript:;">${'退出登录'}</a>`
        li1.onclick = null;
    }
    else {
        li1.innerHTML = `<a href="login.html">${'请先登录'}</a>`
        li2.innerHTML = `<a href="login.html">${'免费注册'}</a>`
    }
}
render();
// 退出登录
// 先移除旧事件(避免重复绑定),再判断内容
li2.onclick = null;
if (li2.innerText.trim() === '退出登录') {
    li2.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止a标签默认行为
        // 用confirm替代alert(confirm有返回值:确定=true,取消=false)
        if (confirm('确定退出登录吗?')) {
            localStorage.removeItem('uname');
            render(); // 重新渲染页面
        }
    });
}

// nav 点击切换类名
const headNavA = document.querySelectorAll('.HeadNav_bg ul li a');
headNavA.forEach(item => {
    item.addEventListener('click', function () {
        headNavA.forEach(i => i.classList.remove('indexActive'))
        this.classList.add('indexActive');
    })
})