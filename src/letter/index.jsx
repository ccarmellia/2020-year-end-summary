import React, {useState} from "react"
import "./index.css"
const Letter = () => {
  let click = true
  const click1 = () => {
    document.getElementById("word1").style.display = "none"
    document.getElementById("word2").style.display = "none"
    document.getElementById("word3").style.display = "block"
    setTimeout(() => {
      document.getElementById("word3").style.color = "rgba(253, 245, 211, 0.45)"
      document.getElementById("word4").style.display = "block"
    }, 5000);
  }
  const click2 = () => {
    document.getElementById("word3").style.display = "none"
    document.getElementById("word4").style.display = "none"
    document.getElementById("word5").style.display = "block"
    setTimeout(() => {
      document.getElementById("word5").style.color = "rgba(253, 245, 211, 0.45)"
    }, 5000);
  }
  const click3 = () => {
    document.getElementById("word5").style.display = "none"
    document.getElementById("word6").style.display = "block"
    setTimeout(() => {
      document.getElementById("word6").style.color = "rgba(253, 245, 211, 0.45)"
      document.getElementById("word7").style.display = "block"
      setTimeout(() => {
        document.getElementById("word7").style.color = "rgba(253, 245, 211, 0.45)"
        document.getElementById("word8").style.display = "block"
      }, 5000);
    }, 5000);
  }
  window.addEventListener("click", function() {
    if(click) {
      document.getElementById("word1").style.display = "block"
      setTimeout(() => {
        document.getElementById("word1").style.color = "rgba(253, 245, 211, 0.45)"
        document.getElementById("word2").style.display = "block"
      }, 5000);
      click = false
    }
  })
  return (
    <div className="letter-container">
      <div className="letter-words">
        <div style={{paddingTop: "10vh"}} id="word1">
          <p>首先，</p>
          <p>感谢你随着扭蛋机的开合看到这里，</p>
          <p>捡起一个又一个生活碎片，</p> 
          <p>拼凑出你完整的2020图像。</p>
          <p>如果你愿意抽出一分钟的时间，</p>
          <p>听听小家园的2020，</p>
          <p>那就更好啦。</p>
        </div>
        <div id="word2">
          <p>年初，</p>
          <p>生活节奏被一场疫情意外打破，</p>
          <p>兜兜转转，</p>
          <p>我们才发现安定的平常生活</p>
          <p>其实是最大的不平常。</p>
          <p>3月1日，</p>
          <p>香樟祺应运而生并投入使用，</p>
          <p>实时跟进疫情数据，</p>
          <p>保障你的安全感；</p>
          <p>让“平平无奇”的幸福，</p>
          <p>早点与我们重逢。</p>
          <p className="letter-click" onClick={click1}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word3">
          <p>9月11日，</p>
          <p>新学期新气象，</p>
          <p>南大家园也升级至5.0版本。</p>
          <p>UI界面全新升级，</p>
          <p>习惯圈子功能更新，</p>
          <p>还没有在APP发过习惯打卡吗？</p>
          <p>不妨从现在开始试试吧！</p>
        </div>
        <div id="word4" style={{marginTop: "3vh"}}>
          <p>11月12日至12月2日，</p>
          <p>我们在APP的习惯#背单词#中</p>
          <p>展开了21天的</p>
          <p>“四六级背单词激励计划”。</p>
          <p>共有32位同学坚持成功，</p>
          <p>最终快乐水和单词双丰收。</p>
          <p className="letter-click" onClick={click2}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word5">
          <p>一年的分量大概太沉甸甸，</p>
          <p>只一封信太难总结出小家园所有的收获，</p>
          <p>更难表达完整小家园对你的感谢。</p>
          <br /><br />
          <p>截至2020年底，</p>
          <p>南大家园APP累积用户量共达163055人，</p>
          <p>微信公众平台粉丝量突破58000人。</p>
          <p>数据本来冰冷，</p>
          <p>是背后的你，</p>
          <p>让它的涨落变得牵动人心。</p>
          <p className="letter-click" onClick={click3}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word6">
          <p>新的一年，</p>
          <p>我们会继续折腾，</p>
          <p>继续头脑风暴，</p>
          <p>继续为你提供优质校园服务，</p>
          <p>继续朝着“全国一流的互联网学生团队”的目标向前冲。</p>
        </div>
        <div id="word7">
          <p>如果你也有什么新年flag，</p>
          <p>不妨就在看到这里时立下吧，</p>
          <p>和小家园一起立的flag绝不会倒掉！</p>
        </div>
        <div id="word8">
          <p style={{float: "right", paddingTop: "4vh"}}>爱你们的小家园</p>
          <p style={{float: "right", paddingTop: "2vh"}}>2021年1月29日</p>
        </div>
      </div>
    </div>
  )
}
export default Letter