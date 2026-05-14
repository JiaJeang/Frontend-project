document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./index.css">');
const data = [
  { id: 0, title: "从世界期待中感受中美元首外交分量", tag: null },
  { id: 1, title: "习近平同特朗普参观天坛", tag: "热" },
  { id: 2, title: "中美元首会谈", tag: "热" },
  { id: 3, title: "中国量子计算再破纪录", tag: null },
  { id: 4, title: "小米、特斯拉、比亚迪相继调价", tag: "热" },
  { id: 5, title: "日本批量生成AI视频抹黑中国", tag: "热" },
  { id: 6, title: "网警侦破有偿删差评案 刑拘7人", tag: null },
  { id: 7, title: "中美建设性战略稳定关系", tag: "新" },
  { id: 8, title: "37岁小伙吹气球半个月赚了60万", tag: "热" },
  { id: 9, title: "深夜飙涨 中国资产大爆发", tag: "热" },
  { id: 10, title: "一场婚礼还在掏空三代人吗", tag: null },
  { id: 11, title: "\"浙江一中学5名学生怀孕\"系谣言", tag: null },
  { id: 12, title: "特朗普参观天坛:惊艳!大美中国!", tag: "热" },
  { id: 13, title: "空军一号轰鸣 这名解放军火爆外网", tag: "热" },
  { id: 14, title: "老人到银行存钱 170万全是练功券", tag: null },
  { id: 15, title: "一根针抢回40万元", tag: "新" },
  { id: 16, title: "特朗普:今天的会谈举世瞩目", tag: "热" },
  { id: 17, title: "黄仁勋:这会是一次非常成功的会晤", tag: "新" },
  { id: 18, title: "张雪机车公布补偿方案", tag: "热" },
  { id: 19, title: "新人花500元请司仪 要求对方随礼600", tag: null },
  { id: 20, title: "这是中美关系新定位", tag: "新" },
  { id: 21, title: "特朗普:美国大企业家都想来中国", tag: "热" },
  { id: 22, title: "中美建设性战略稳定关系", tag: null },
  { id: 23, title: "\"中美关系将会有史以来最好的\"", tag: null },
  { id: 24, title: "小孩1个月9次弄丢书包 妈妈发现真相", tag: null },
  { id: 25, title: "日本批量生成AI视频抹黑中国", tag: "热" },
  { id: 26, title: "男子钓40斤大鱼挂车窗炫耀被交警教育", tag: null },
  { id: 27, title: "应聘程序员岗位 被要求先养两个月猪", tag: null },
  { id: 28, title: "鲁比奥点赞人民大会堂中式装饰", tag: null },
  { id: 29, title: "警方通报河北火锅店发生刑案", tag: null },
  { id: 30, title: "中美元首会谈向世界传递哪些重要...", tag: "热" },
  { id: 31, title: "一桶食用油开封后到底能放多久", tag: null },
  { id: 32, title: "\"韩国赚大了 但大麻烦也来了\"", tag: null },
  { id: 33, title: "商务部:希望英国政府三思后行", tag: "新" },
  { id: 34, title: "点奶茶时尽量避开4个字眼", tag: null },
  { id: 35, title: "很久以前羊肉串致歉 退款超百万元", tag: null },
  { id: 36, title: "日本汽车巨头业绩\"爆雷\"", tag: null },
  { id: 37, title: "维护台海和平稳定是中美最大公约数", tag: "热" },
  { id: 38, title: "男生口臭2年险患癌体内发现罕见菌株", tag: null },
  { id: 39, title: "男子在楼顶斜坡种百盆菜 社区回应", tag: null },
  { id: 40, title: "巩立姣减重50斤", tag: null },
  { id: 41, title: "让袁隆平挠头的博士带来好消息", tag: null },
  { id: 42, title: "鲁比奥:中美关系非常有建设性", tag: "新" },
  { id: 43, title: "男童坐扶梯鞋头被咬 父亲迅速扯掉鞋", tag: null },
  { id: 44, title: "省委书记、省长一同调研这一工作", tag: null },
  { id: 45, title: "商务部:愿同美方一道拉长合作清单", tag: "新" },
  { id: 46, title: "哥哥代替去世父母送妹妹出嫁", tag: null },
  { id: 47, title: "这些年轻人为何选择\"逆向求学\"", tag: null },
  { id: 48, title: "朱雀二号改进型遥五运载火箭发射成功", tag: null },
  { id: 49, title: "员工借给公司128万致个人财产被...", tag: "新" }
];

const list = document.querySelector('.list');
const PAGE_SIZE = 10;
const TOTAL_PAGES = Math.ceil(data.length / PAGE_SIZE);
let currentPage = 0;

function render() {
  const start = currentPage * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, data.length);
  list.innerHTML = '';

  for (let i = start; i < end; i++) {
    let indClass = 'ind';
    let indContent = '';
    if (currentPage === 0 && data[i].id === 0) {
      indClass += ' top-icon';
      indContent = '<img src="top.svg" alt="">';
    } else if (currentPage === 0 && data[i].id <= 2) {
      indClass += ' top3';
      indContent = data[i].id;
    } else {
      indContent = data[i].id;
    }
    let tagClass = 'tag';
    const tagText = data[i].tag || '';
    if (data[i].tag === '热') {
      tagClass += ' tag-hot';
    } else if (data[i].tag === '新') {
      tagClass += ' tag-new';
    }
    list.innerHTML += `
    <a href="#">
      <span class="${indClass}">${indContent}</span>
      <span class="tex">${data[i].title}</span>
      <span class="${tagClass}">${tagText}</span>
    </a>
  `;
  }
}

// 初始渲染
render();

// 换一换
document.querySelector('.r').addEventListener('click', (e) => {
  e.preventDefault();
  currentPage = (currentPage + 1) % TOTAL_PAGES;
  render();
});