const zhanghu = document.querySelector('.zhanghu');
const erwei = document.querySelector('.erwei');
const zhanghuF = document.querySelector('.zhanghuF');
const erweiF = document.querySelector('.erweiF');

// 账户/二维码登录切换逻辑(保留,无问题)
zhanghu.addEventListener('click', function (e) {
    e.preventDefault();
    erwei.classList.remove('active');
    zhanghu.classList.add('active');
    zhanghuF.classList.remove('none');
    zhanghuF.classList.add('block');
    erweiF.classList.add('none');
    erweiF.classList.remove('block');
});

erwei.addEventListener('click', function (e) {
    e.preventDefault();
    zhanghu.classList.remove('active');
    erwei.classList.add('active');
    erweiF.classList.remove('none');
    erweiF.classList.add('block');
    zhanghuF.classList.add('none');
    zhanghuF.classList.remove('block');
});

// 验证规则
const regUname = /^[a-zA-Z0-9_]{6,20}$/;
const regPwd = /^[a-zA-Z0-9_]{6,20}$/;

// 验证用户名
const uname = document.querySelector('[name="uname"]');
uname.addEventListener('change', verifyUname);
function verifyUname() {
    const span = uname.nextElementSibling;
    if (!regUname.test(uname.value.trim())) { // 加trim()去除首尾空格
        span.classList.remove('right');
        span.classList.add('error');
        span.innerHTML = '请输入6-20位字母、数字、下划线';
        return false;
    }
    span.innerHTML = '用户名格式正确';
    span.classList.remove('error');
    span.classList.add('right');
    return true;
}

// 验证密码
const upwd = document.querySelector('[name="upwd"]');
upwd.addEventListener('change', verifyPwd);
function verifyPwd() {
    const span = upwd.nextElementSibling;
    if (!regPwd.test(upwd.value.trim())) { // 加trim()去除首尾空格
        span.classList.remove('right');
        span.classList.add('error');
        span.innerHTML = '请输入6-20位字母、数字、下划线';
        return false;
    }
    span.classList.remove('error');
    span.classList.add('right');
    span.innerHTML = '密码格式正确';
    return true;
}

// 登录提交逻辑(核心优化)
const loginBtn = document.querySelector('#login-btn');
const ty = document.querySelector('[name="ty"]');
const tyTip = document.querySelector('.ty-tip'); // 协议提示文本

loginBtn.addEventListener('click', function (e) {
    // 1. 阻止默认提交行为
    e.preventDefault();

    // 2. 防重复提交:点击后禁用按钮
    if (this.disabled) return;
    this.disabled = true;
    this.textContent = '登录中...';

    // 3. 清空协议提示
    tyTip.style.display = 'none';

    // 4. 验证用户名和密码
    const isUnameValid = verifyUname();
    const isPwdValid = verifyPwd();
    if (!isUnameValid || !isPwdValid) {
        // 验证失败,恢复按钮状态
        this.disabled = false;
        this.textContent = '登录';
        return;
    }

    // 5. 验证用户协议
    if (!ty.checked) {
        tyTip.style.display = 'inline'; // 显示页面内提示(替代alert)
        this.disabled = false;
        this.textContent = '登录';
        return;
    }

    // 6. 验证通过,提交表单(直接用表单元素提交,更清晰)
    zhanghuF.submit();
    localStorage.setItem('uname', uname.value.trim());
    location.href = 'index.html';
});