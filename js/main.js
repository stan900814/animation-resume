var css2 = `
`
var css1 = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */
/* 我需要一张白纸 */
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
    padding:16px;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    border:1px solid #aaa;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper>#content{
    background:white;
    height:100%;
    width:100%;
    font-size:21px;
    padding:16px;
}
/* 于是我就可以在白纸上写字了，请看右边 */
`
var md = `
# 自我介绍

我叫 xxx
1990 年 1 月出生
xxx 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript Css

#项目介绍

1. xxx 轮播
2. xxx 简历
3. xxx 画板

# 联系方式

QQ xxxxxxxxxxxx
手机 xxxxxxxxxxxx
`
writeCode('', css1, (
    () => {
        createPaper(
            () => {
                writeCode(css1, css2, (() => {
                    writeMarkdown(md)
                }))
            })
    }
))

function writeCode(preStr, str, fn) {
    let n = 0
    let code = document.getElementById('code')
    let style = document.getElementById('style')
    let id = setInterval(() => {
        n += 1
        code.innerHTML = Prism.highlight(preStr + str.substring(0, n), Prism.languages.css, 'css');
        style.innerHTML = preStr + str.substring(0, n)
        if (n >= str.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)

}

function createPaper(fn) {
    let content = document.createElement('pre')
    content.id = 'content'
    let paper = document.createElement('div')
    paper.id = 'paper'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function writeMarkdown(markdown, fn) {
    let n = 0
    let id = setInterval(() => {
        n += 1
        content.innerHTML = Prism.highlight(markdown.substring(0, n), Prism.languages.markdown, 'markdown')
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)
}