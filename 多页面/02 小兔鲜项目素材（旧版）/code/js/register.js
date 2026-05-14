
const regUname = /^[a-zA-Z0-9_-]{6,10}$/
const regPhone = /^1[3-9]\d{9}$/
const regYzm = /^[0-9]{6}$/
const regPwd1 = /^[a-zA-Z0-9_-]{6,20}$/

//验证码倒计时
const getYzm = document.querySelector('.get-yzm')
let flag = true
let yzms = 5
getYzm.addEventListener('click', function () {
    if (phone.value == null || phone.value === '') {
        alert('请输入手机号')
        return false
    }
    if (flag) {
        flag = false
        let tyzms = yzms
        getYzm.innerHTML = `${yzms}秒后重新获取`
        let timeId = setInterval(function () {
            yzms--;
            getYzm.innerHTML = `${yzms}秒后重新获取`
            if (yzms <= 0) {
                clearInterval(timeId)
                getYzm.innerHTML = '获取验证码'
                flag = true
                tyzms = yzms
            }
        }, 1000)
    }
})
//验证用户名
const uname = document.querySelector('[name="uname"]')
uname.addEventListener('change', verifyUname)
function verifyUname() {
    const span = uname.nextElementSibling
    if (!regUname.test(uname.value)) {
        span.classList.remove('right')
        span.classList.add('error')
        span.innerHTML = '请输入6-10位字母、数字、下划线或短横线'
        return false
    }
    span.classList.remove('error')
    span.classList.add('right')
    span.innerHTML = '用户名格式正确'
    return true
}

//验证手机号
const phone = document.querySelector('[name="uphone"]')
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
    const span = phone.nextElementSibling
    if (!regPhone.test(phone.value)) {
        span.classList.remove('right')
        span.classList.add('error')
        span.innerHTML = '请输入正确的手机号'
        return false
    }
    span.classList.remove('error')
    span.classList.add('right')
    span.innerHTML = '手机号格式正确'
    return true
}

//验证验证码
const yzm = document.querySelector('[name="uyzm"]')
yzm.addEventListener('change', verifyYzm)
function verifyYzm() {
    const span = yzm.nextElementSibling.nextElementSibling
    if (!regYzm.test(yzm.value)) {
        span.classList.remove('right')
        span.classList.add('error')
        span.innerHTML = '请输入6位数字验证码'
        return false
    }
    span.classList.remove('error')
    span.classList.add('right')
    span.innerHTML = '验证码格式正确'
    return true
}

//验证密码
const pwd1 = document.querySelector('[name="upwd1"]')
pwd1.addEventListener('change', verifyPwd1)
function verifyPwd1() {
    const span = pwd1.nextElementSibling
    if (!regPwd1.test(pwd1.value)) {
        span.classList.remove('right')
        span.classList.add('error')
        span.innerHTML = '请输入6-20位字母、数字、下划线或短横线'
        return false
    }
    span.classList.remove('error')
    span.classList.add('right')
    span.innerHTML = '密码格式正确'
    return true
}

//验证确认密码
const pwd2 = document.querySelector('[name="upwd2"]')
pwd2.addEventListener('change', verifyPwd2)
function verifyPwd2() {
    const span = pwd2.nextElementSibling
    if (!(pwd2.value === pwd1.value && pwd2.value !== '')) {
        span.classList.remove('right')
        span.classList.add('error')
        span.innerHTML = '两次密码输入不一致'
        return false
    }
    span.classList.remove('error')
    span.classList.add('right')
    span.innerHTML = '确认密码格式正确'
    return true
}

//同意注册协议
const ty = document.querySelector('.icon--tongyi')
ty.addEventListener('click', function () {
    ty.classList.toggle('right')
})

//验证注册按钮
const form = document.querySelector('form')
// 防重复提交标记(新增,无额外变量,仅新增一个基础标记)
let isSubmitting = false;

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // 1. 防重复提交:避免多次点击提交
    if (isSubmitting) return;
    isSubmitting = true;

    // 2. 验证注册协议(保留原alert)
    if (!ty.classList.contains('right')) {
        alert('请先同意注册协议')
        isSubmitting = false; // 恢复提交状态
        return
    }

    // 3. 先执行所有验证函数(解决||短路问题,确保每个验证都触发)
    const unameValid = verifyUname();
    const phoneValid = verifyPhone();
    const yzmValid = verifyYzm();
    const pwd1Valid = verifyPwd1();
    const pwd2Valid = verifyPwd2();

    // 4. 判断是否有验证失败(保留原alert文案)
    if (!unameValid || !phoneValid || !yzmValid || !pwd1Valid || !pwd2Valid) {
        alert('请填写完整信息')
        isSubmitting = false; // 恢复提交状态
        return
    }

    // 5. 验证通过,提交表单
    form.submit()
    // 6. 提交成功后,重置防重复提交标记
    isSubmitting = false;
    // 7. 跳转首页
    location.href = 'index.html'
})



