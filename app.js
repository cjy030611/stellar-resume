const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
function showView(id) {
  views.forEach(view => view.classList.toggle('active', view.id === id));
  navItems.forEach(item => item.classList.toggle('active', item.dataset.view === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
navItems.forEach(item => item.addEventListener('click', () => showView(item.dataset.view)));
document.querySelectorAll('[data-goto]').forEach(item => item.addEventListener('click', () => showView(item.dataset.goto)));

const attributeCopy = {
  '会计与审计基础': '会计学本硕训练，并具备企业核算与审计实务经验。',
  '数据整理与分析': '使用 Excel、Python 与 QGIS 完成数据清洗、汇总和呈现。',
  '财务系统与测试': '熟悉用友资产、费用、应收应付模块及系统问题闭环。',
  '执行与沟通协作': '跨业务、法务、财务与开发团队推进合同、付款和系统事项。'
};
document.querySelectorAll('[data-attribute]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('attributeTip').textContent = attributeCopy[button.dataset.attribute];
}));

const education = {
  master: ['CURRENT ACADEMIC RECORD','会计学硕士 · 大数据与商务分析方向','主修商务统计分析、大数据与决策、管理经济学、管理信息系统、传媒运营与管理。',['商务统计分析','大数据与决策','管理信息系统']],
  bachelor: ['ACADEMIC RECORD · COMPLETE','会计学学士 · GPA 3.55 / 4.0','主修中高级财务会计、审计学、税法、基于 Excel 的财务决策分析、Python 程序设计基础及概率论与数理统计。',['财务会计','审计学','税法','Excel 财务分析','Python']]
};
document.querySelectorAll('.edu-entry').forEach(card => card.addEventListener('click', () => {
  document.querySelectorAll('.edu-entry').forEach(item => item.classList.remove('selected'));
  card.classList.add('selected');
  const data = education[card.dataset.edu];
  document.getElementById('eduCode').textContent = data[0];
  document.getElementById('eduTitle').textContent = data[1];
  document.getElementById('eduText').textContent = data[2];
  document.getElementById('eduTags').innerHTML = data[3].map(tag => `<span>${tag}</span>`).join('');
}));

const experiences = {
  maple: {code:'STORY QUEST · 04',title:'合同、结算与自动化提效',metrics:[['180','份合同/月'],['150','项付款/月'],['200','部作品'],['9h','月度提效']],list:['负责合同审批、验收付款及归档，核对合同、Invoice、验收材料和付款信息。','参与分成结算和供应商管理，累计发现并纠正 10 余处关键错误。','借助 AI 工具搭建合同信息自动提取应用，经抽检与迭代后投入使用。']},
  yonyou: {code:'STORY QUEST · 03',title:'财务系统需求与数据看板',metrics:[['10','个项目'],['45','件问题'],['6','个 POC'],['2','套看板']],list:['协助复现系统问题并完成根因分析，协调项目与开发团队推动闭环。','独立设计资产管理驾驶舱，梳理取数逻辑并编写需求规格说明书。','编制资产、费用、应收应付模块手册，参与采购报销流程测试。']},
  audit: {code:'STORY QUEST · 02',title:'年度审计与底稿协作',metrics:[['函证','往来'],['抽凭','盘点'],['底稿','附注'],['鼎信诺','Excel']],list:['参与某国有企业集团年度审计，对接被审计单位收集审计资料。','使用鼎信诺和 Excel 完成账表整理、询证函编制、抽凭及实地盘点。','协助编制货币资金、应付账款等审计工作底稿和报表附注。']},
  accounting: {code:'STORY QUEST · 01',title:'企业日常核算基础',metrics:[['凭证','填制'],['银行','日记账'],['单据','合规'],['现金','盘点']],list:['完成原始凭证取得、记账凭证填制、银行存款日记账登记及对账结账。','核对收支单据合规性，并定期盘点现金与物资。']}
};
document.querySelectorAll('.story-quest').forEach(card => card.addEventListener('click', () => {
  document.querySelectorAll('.story-quest').forEach(item => item.classList.remove('active'));
  card.classList.add('active');
  const data = experiences[card.dataset.exp];
  document.getElementById('expCode').textContent = data.code;
  document.getElementById('expTitle').textContent = data.title;
  document.getElementById('expMetrics').innerHTML = data.metrics.map(m => `<div><b>${m[0]}</b><span>${m[1]}</span></div>`).join('');
  document.getElementById('expList').innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
}));

const talents = {
  excel:['TALENT · EXCEL','表格与数据整理','掌握 XLOOKUP、SUMIFS、数据透视表和基础图表，可完成业务数据查找、汇总与可视化呈现。','86%'],
  python:['TALENT · PYTHON','基础数据处理','能够使用 Python 进行基础数据清洗与处理，为重复性工作提供自动化思路。','58%'],
  finance:['TALENT · FINANCE SYSTEM','财务系统应用','熟悉用友资产管理、费用、应收应付模块，理解常见财务流程与系统测试。','80%'],
  tools:['TALENT · WORKFLOW','审计与协作工具','能够使用鼎信诺、合同管理系统、飞书和钉钉，适应审计及跨团队协作。','78%'],
  certs:['TALENT · CERTIFICATES','专业认证','持有初级会计专业技术资格证书、全国计算机二级证书及大学英语四、六级证书。','88%']
};
document.querySelectorAll('.talent-node').forEach(node => node.addEventListener('click', () => {
  document.querySelectorAll('.talent-node').forEach(item => item.classList.remove('active'));
  node.classList.add('active');
  const data = talents[node.dataset.talent];
  document.getElementById('talentCode').textContent = data[0];
  document.getElementById('talentTitle').textContent = data[1];
  document.getElementById('talentText').textContent = data[2];
  document.getElementById('talentLevel').textContent = data[3];
  document.getElementById('talentBar').style.width = data[3];
}));

const modal = document.getElementById('contactModal');
document.getElementById('contactBtn').addEventListener('click', () => {modal.classList.add('show');modal.setAttribute('aria-hidden','false')});
document.querySelector('.close').addEventListener('click', closeModal);
modal.addEventListener('click', event => {if(event.target === modal) closeModal()});
document.addEventListener('keydown', event => {if(event.key === 'Escape') closeModal()});
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
