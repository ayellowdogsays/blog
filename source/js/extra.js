var a_idx = 0;
var b_idx = 0;
$(document).ready(function($){

    /**
     * 富强民主文明和谐
     */
    $("body").click(function(e) {
        var a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善", "富强", "民主"];
        var b = ["#fe6673", "#2ae0c8", "#acf6ef", "#fad8be", "#bdf3d4"];
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": b[b_idx]
        });
        b_idx = (b_idx + 1) % b.length;
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
/* 烟花特效 */
(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["POWERMODE"]=factory();else root["POWERMODE"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){'use strict';var canvas=document.createElement('canvas');canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.cssText='position:fixed;top:0;left:0;pointer-events:none;z-index:999999';window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight});document.body.appendChild(canvas);var context=canvas.getContext('2d');var particles=[];var particlePointer=0;POWERMODE.shake=true;function getRandom(min,max){return Math.random()*(max-min)+min}function getColor(el){if(POWERMODE.colorful){var u=getRandom(0,360);return'hsla('+getRandom(u-10,u+10)+', 100%, '+getRandom(50,80)+'%, '+1+')'}else{return window.getComputedStyle(el).color}}function getCaret(){var el=document.activeElement;var bcr;if(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&el.getAttribute('type')==='text')){var offset=__webpack_require__(1)(el,el.selectionStart);bcr=el.getBoundingClientRect();return{x:offset.left+bcr.left,y:offset.top+bcr.top,color:getColor(el)}}var selection=window.getSelection();if(selection.rangeCount){var range=selection.getRangeAt(0);var startNode=range.startContainer;if(startNode.nodeType===document.TEXT_NODE){startNode=startNode.parentNode}bcr=range.getBoundingClientRect();return{x:bcr.left,y:bcr.top,color:getColor(startNode)}}return{x:0,y:0,color:'transparent'}}function createParticle(x,y,color){return{x:x,y:y,alpha:1,color:color,velocity:{x:-1+Math.random()*2,y:-3.5+Math.random()*2}}}function POWERMODE(){{var caret=getCaret();var numParticles=5+Math.round(Math.random()*10);while(numParticles--){particles[particlePointer]=createParticle(caret.x,caret.y,caret.color);particlePointer=(particlePointer+1)%500}}{if(POWERMODE.shake){var intensity=1+2*Math.random();var x=intensity*(Math.random()>0.5?-1:1);var y=intensity*(Math.random()>0.5?-1:1);document.body.style.marginLeft=x+'px';document.body.style.marginTop=y+'px';setTimeout(function(){document.body.style.marginLeft='';document.body.style.marginTop=''},75)}}};POWERMODE.colorful=false;function loop(){requestAnimationFrame(loop);context.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<particles.length;++i){var particle=particles[i];if(particle.alpha<=0.1)continue;particle.velocity.y+=0.075;particle.x+=particle.velocity.x;particle.y+=particle.velocity.y;particle.alpha*=0.96;context.globalAlpha=particle.alpha;context.fillStyle=particle.color;context.fillRect(Math.round(particle.x-1.5),Math.round(particle.y-1.5),3,3)}}requestAnimationFrame(loop);module.exports=POWERMODE},function(module,exports){(function(){var properties=['direction','boxSizing','width','height','overflowX','overflowY','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderStyle','paddingTop','paddingRight','paddingBottom','paddingLeft','fontStyle','fontVariant','fontWeight','fontStretch','fontSize','fontSizeAdjust','lineHeight','fontFamily','textAlign','textTransform','textIndent','textDecoration','letterSpacing','wordSpacing','tabSize','MozTabSize'];var isFirefox=window.mozInnerScreenX!=null;function getCaretCoordinates(element,position,options){var debug=options&&options.debug||false;if(debug){var el=document.querySelector('#input-textarea-caret-position-mirror-div');if(el){el.parentNode.removeChild(el)}}var div=document.createElement('div');div.id='input-textarea-caret-position-mirror-div';document.body.appendChild(div);var style=div.style;var computed=window.getComputedStyle?getComputedStyle(element):element.currentStyle;style.whiteSpace='pre-wrap';if(element.nodeName!=='INPUT')style.wordWrap='break-word';style.position='absolute';if(!debug)style.visibility='hidden';properties.forEach(function(prop){style[prop]=computed[prop]});if(isFirefox){if(element.scrollHeight>parseInt(computed.height))style.overflowY='scroll'}else{style.overflow='hidden'}div.textContent=element.value.substring(0,position);if(element.nodeName==='INPUT')div.textContent=div.textContent.replace(/\\s/g,"\\u00a0");var span=document.createElement('span');span.textContent=element.value.substring(position)||'.';div.appendChild(span);var coordinates={top:span.offsetTop+parseInt(computed['borderTopWidth']),left:span.offsetLeft+parseInt(computed['borderLeftWidth'])};if(debug){span.style.backgroundColor='#aaa'}else{document.body.removeChild(div)}return coordinates}if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=getCaretCoordinates}else{window.getCaretCoordinates=getCaretCoordinates}}())}])});
POWERMODE.colorful=true;POWERMODE.shake=false;document.body.addEventListener('input',POWERMODE);
/* 运行时间 */
// var now=new Date();function createtime(){var grt=new Date("07/8/2021 23:30:00");now.setTime(now.getTime()+250);days=(now-grt)/1000/60/60/24;dnum=Math.floor(days);hours=(now-grt)/1000/60/60-(24*dnum);hnum=Math.floor(hours);if(String(hnum).length==1){hnum="0"+hnum}minutes=(now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum=Math.floor(minutes);if(String(mnum).length==1){mnum="0"+mnum}seconds=(now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum=Math.round(seconds);if(String(snum).length==1){snum="0"+snum}document.getElementById("timeDate").innerHTML="已运行&nbsp"+dnum+"&nbsp天";document.getElementById("times").innerHTML=hnum+"&nbsp小时&nbsp"+mnum+"&nbsp分&nbsp"+snum+"&nbsp秒"}setInterval("createtime()",250);
//复制提醒
document.addEventListener('copy',function(){hud.toast("复制成功，转载请注明出处", 2500);})
// link-icon
document.addEventListener('DOMContentLoaded',function(){const links=document.querySelectorAll('article.md-text.content p a, footer.page-footer.footnote a:not(div.sitemap a)');links.forEach(function(link){const parentClasses=['tag-plugin.users-wrap','tag-plugin.sites-wrap','tag-plugin.ghcard','tag-plugin.link.dis-select','tag-plugin.colorful.note','social-wrap.dis-select'];let skip=false;parentClasses.forEach(pc=>{if(link.closest(`div.${pc}`)){skip=true}});if(!skip){const href=link.getAttribute('href');if(href&&(href.startsWith('http')||href.startsWith('/'))){link.innerHTML+=`<span style="white-space: nowrap;padding: 0px 5px 0 2px;" id="link-icon"><svg width=".7em"height=".7em"viewBox="0 0 21 21"xmlns="http://www.w3.org/2000/svg"><path d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z"fill="currentColor"/><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"fill="currentColor"></svg></span>`}}})});
// 插入字数统计
document.getElementById("all-posts-count").innerHTML = allpostscount;
document.getElementById("all-post-words").innerHTML = allpostswords;
// 过期提醒
if (upgrade_time_days > 180) {
    document.getElementById('expiration-reminder').innerHTML = `<div class="tag-plugin colorful note" color="orange"><div class="title"><strong>提醒</strong></div><div class="body"><p>本文最后更新于 ${upgrade_time_days} 天前，其中某些信息可能已经过时，请谨慎使用！<br>如果发现内容有误，请在评论区告知。</p></div></div>`;
}
// ©
// window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x61\\x64\\x64\\x45\\x76\\x65\\x6e\\x74\\x4c\\x69\\x73\\x74\\x65\\x6e\\x65\\x72']('\\x44\\x4f\\x4d\\x43\\x6f\\x6e\\x74\\x65\\x6e\\x74\\x4c\\x6f\\x61\\x64\\x65\\x64',function(){const host=window['\\x6c\\x6f\\x63\\x61\\x74\\x69\\x6f\\x6e']['\\x68\\x6f\\x73\\x74'];if(host!=='\\x62\\x6c\\x6f\\x67\\x2e\\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70'&&!host['\\x73\\x74\\x61\\x72\\x74\\x73\\x57\\x69\\x74\\x68']('\\x6c\\x6f\\x63\\x61\\x6c\\x68\\x6f\\x73\\x74')&&!host['\\x73\\x74\\x61\\x72\\x74\\x73\\x57\\x69\\x74\\x68']('\\x31\\x32\\x37\\x2e\\x30\\x2e\\x30\\x2e\\x31')){window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x62\\x6f\\x64\\x79']['\\x69\\x6e\\x6e\\x65\\x72\\x48\\x54\\x4d\\x4c']=['\\x3c\\x64\\x69\\x76 \\x73\\x74\\x79\\x6c\\x65\\x3d\\x22\\x6d\\x61\\x72\\x67\\x69\\x6e\\x3a \\x61\\x75\\x74\\x6f\\x3b\\x22\\x3e','\\x3c\\x68\\x31\\x3e\\u5f53\\u524d\\u9875\\u9762\\u5e76\\u975e\\u672c\\u6587\\u4f5c\\u8005\\u7684\\u4e3b\\u9875\\uff0c\\u5c06\\u5728\\u4e94\\u79d2\\u540e\\u8df3\\u8f6c\\u3002\\x3c\\x2f\\x68\\x31\\x3e','\\x3c\\x62\\x72 \\x2f\\x3e','\\x3c\\x68\\x31\\x3e\\u5982\\u6709\\u7591\\u60d1\\u8bf7\\u8054\\u7cfb\\uff1a\\x74\\x68\\x75\\x6e\\x38\\x38\\x38 \\x61\\x74 \\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70\\x3c\\x2f\\x68\\x31\\x3e','\\x3c\\x2f\\x64\\x69\\x76\\x3e',]['\\x6a\\x6f\\x69\\x6e']('');window["\\x64\\x6f\\x63\\x75\\x6d\\x65\\x6e\\x74"]['\\x62\\x6f\\x64\\x79']['\\x73\\x74\\x79\\x6c\\x65']=['\\x62\\x61\\x63\\x6b\\x67\\x72\\x6f\\x75\\x6e\\x64\\x2d\\x63\\x6f\\x6c\\x6f\\x72\\x3a \\x77\\x68\\x69\\x74\\x65\\x3b','\\x63\\x6f\\x6c\\x6f\\x72\\x3a \\x62\\x6c\\x61\\x63\\x6b\\x3b','\\x74\\x65\\x78\\x74\\x2d\\x61\\x6c\\x69\\x67\\x6e\\x3a \\x63\\x65\\x6e\\x74\\x65\\x72\\x3b','\\x66\\x6f\\x6e\\x74\\x2d\\x73\\x69\\x7a\\x65\\x3a \\x35\\x30\\x70\\x78\\x3b','\\x77\\x69\\x64\\x74\\x68\\x3a \\x31\\x30\\x30\\x76\\x77\\x3b','\\x68\\x65\\x69\\x67\\x68\\x74\\x3a \\x31\\x30\\x30\\x76\\x68\\x3b','\\x64\\x69\\x73\\x70\\x6c\\x61\\x79\\x3a \\x66\\x6c\\x65\\x78\\x3b',]['\\x6a\\x6f\\x69\\x6e']('');setTimeout(()=>{window['\\x6c\\x6f\\x63\\x61\\x74\\x69\\x6f\\x6e']['\\x68\\x72\\x65\\x66']='\\x68\\x74\\x74\\x70\\x73\\x3a\\x2f\\x2f\\x62\\x6c\\x6f\\x67\\x2e\\x68\\x7a\\x63\\x68\\x75\\x2e\\x74\\x6f\\x70'},5000)}});

document.addEventListener('DOMContentLoaded', function() {
    // 从页面中提取第一个AVIF图片链接
    // function getFirstPictureUrl(type) {
    //   const images = document.querySelectorAll('img');
    //   for (let img of images) {
    //     if (img.getAttribute("data-src") && img.getAttribute("data-src").includes('fmt=',type)) {
    //       return img.getAttribute("data-src");
    //     }
    //   }
    //   return null;
    // }
  
    // 检测浏览器是否支持AVIF格式
    function supportCheck(type, url) {
      return new Promise(resolve => {
        // 先从localStorage中获取结果
        const result = localStorage.getItem("support_" + type);
        if (result !== null) {
          // 如果结果存在，就直接返回
          console.log(type, "support status loaded from localStorage:", result === "true");
          resolve(result === "true");
        } else {
          // 如果结果不存在，就进行检测
          const image = new Image();
          image.src = url;
          image.onload = () => {
            console.log(type, "supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "true");
            resolve(true);
          };
          image.onerror = () => {
            console.log(type, "not supported");
            // 将结果保存到localStorage
            localStorage.setItem("support_" + type, "false");
            // 显示提示消息
            hud.toast(`当前浏览器不支持使用${type}，已降级为使用其他格式`, 2500);
            resolve(false);
          };
        }
      });
    }
    
  
    // 替换图片URL中的avif为webp
    function replacepicture(from, to) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        let attr = img.src.startsWith('data') ? 'data-src' : 'src';
        if (img.getAttribute(attr) && img.getAttribute(attr).includes('fmt=' + from)) {
          if (to == "") {
            console.log("Replacing ", from, " with origin ext for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, ''));
          } else {
            console.log("Replacing ", from, " with ", to, " for image:", img.getAttribute(attr));
            img.setAttribute(attr, img.getAttribute(attr).replace('fmt=' + from, 'fmt=' + to));
          }
        }
      });
    }
    

  const firstAvifUrl = "/img/check/status.avif"; // 获取第一个AVIF图片链接
  // 使用第一个AVIF图片链接进行检测
  supportCheck("AVIF", firstAvifUrl).then(supported => {
    if (!supported) {
      replacepicture("avif", "webp");
      const firstWebpUrl = "/img/check/status.webp"; // 获取第一个WEBP图片链接
      supportCheck("WEBP", firstWebpUrl).then(supported => {
        if (!supported) {
          // hud.toast("当前浏览器不支持使用webp，已降级为使用原始图片", 2500);
          // replacepicture("webp","");
          replacepicture("webp", "png");
        } else {
          console.log("Webp images will be used.");
        }
      });
    } else {
      console.log("AVIF images will be used.");
    }
  });

  selectFastNode();
  });

  // 看看哪个节点快
  function selectFastNode(force) {
    console.log('[ONEP,selectFastNode] Running...');
    const selectdisabled = localStorage.getItem('onep.cdn.select.disabled');
    if (selectdisabled) {
      console.log('[ONEP,selectFastNode] Skipping due to select disabled.');
      return;
    }
    const storedData = localStorage.getItem('onep.cdn.nodelist');
    if (storedData) {
      const data = JSON.parse(storedData);
      const now = new Date();
      if (data.link === null && now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        console.log('[ONEP,selectFastNode] Skipping due to recent failure to fetch nodes.');
        return;
      } else if (now.getTime() - data.time < 5 * 60 * 1000 && !force) {
        replaceImageSource(data.link);
        return;
      }
    }
  
    const formData = new FormData();
    formData.append('token', 'hzchu.top');
  
    fetch('https://onep.hzchu.top/_api/nodeslist', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.nodes && Object.keys(data.nodes).length > 0) {
        const nodes = Object.values(data.nodes);
        let fastestNode = null;
        let fastestTime = Infinity;

        const promises = nodes.map(node => {
          const startTime = performance.now();
          // 添加随机查询参数以避免缓存
          const url = `${node}/mount/watermask.png?cache_buster=${Math.random()}`;
          return fetch(url)
            .then(() => {
              const endTime = performance.now();
              const duration = endTime - startTime;
              if (duration < fastestTime) {
                fastestTime = duration;
                fastestNode = node;
              }
            })
            .catch(error => {
              console.error('[ONEP,selectFastNode] Error pinging node:', node, error);
            });
        });

        Promise.all(promises).then(() => {
          if (fastestNode) {
            replaceImageSource(fastestNode);
            localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
              link: fastestNode,
              time: new Date().getTime()
            }));
            console.log('[ONEP,selectFastNode] Selected fastest node:', fastestNode);
          } else {
            console.log('[ONEP,selectFastNode] No nodes responded successfully.');
          }
        });
      } else {
        console.log('[ONEP,selectFastNode] Failed to fetch nodes, will skip checks for the next 5 minutes.');
        localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
          link: null,
          time: new Date().getTime()
        }));
      }
    })
    .catch(error => {
      console.error('[ONEP,selectFastNode] Error:', error);
      localStorage.setItem('onep.cdn.nodelist', JSON.stringify({
        link: null,
        time: new Date().getTime()
      }));
    });
    console.log('[ONEP,selectFastNode] Testing nodes...');
    return true;
  }
  
  function replaceImageSource(newLink) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      let attr = img.src.startsWith('data') ? 'data-src' : 'src';
      if (img.getAttribute(attr) && img.getAttribute(attr).startsWith('https://onep.hzchu.top')) {
        console.log("[ONEP,selectFastNode] Replacing ", img.getAttribute(attr), " with ", newLink);
        img.setAttribute(attr, img.getAttribute(attr).replace('https://onep.hzchu.top', newLink));
      }
    });
  }

// sw
navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
.then(function(registration) {
    // 注册成功
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
})
.catch(function(err) {
    // 注册失败
    console.log('ServiceWorker registration failed: ', err);
});
  
// 删除模式
let deleteMode = false;

function toggleDeleteMode() {
    deleteMode = !deleteMode;
    if (deleteMode) {
      hud.toast("已开启删除模式", 2500);
      document.addEventListener('click', deleteElement, true);
    } else {
      hud.toast("已关闭删除模式", 2500);
      document.removeEventListener('click', deleteElement, true);
    }
}

function deleteElement(event) {
  if (deleteMode && event.target !== document.body && !event.target.closest('.delmode-btn') && !event.target.closest('.float-panel')) {
    event.preventDefault(); // 阻止默认行为
    event.target.remove();
  }
}


// 给超长代码块增加滚动条 @Summer
document.addEventListener("DOMContentLoaded", function() {
  // 选择所有的.md-text元素
  var codeBlocks = document.querySelectorAll('.md-text');
  // 遍历每个.md-text元素
  codeBlocks.forEach(function(block) {
    // 检查是否包含.highlight类的子元素，且父元素高度超过500px
    var highlightBlocks = block.querySelectorAll('.highlight');
    highlightBlocks.forEach(function(highlightBlock) {
      if (highlightBlock.clientHeight > 500) {
        highlightBlock.style.maxHeight = '500px';
        highlightBlock.style.overflow = 'auto';
      }
    });
  });
});


function generatePoints(w, h, n, maxd, mind, circle_radius, maxAttempts = 1000) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    // 先随机一个中心，让圆都能在边界内
    let cx = randRange(circle_radius, w - circle_radius);
    let cy = randRange(circle_radius, h - circle_radius);
    let clusterR = maxd / 2;

    // 极坐标生成 n 个点
    let pts = [];
    for (let i = 0; i < n; i++) {
      let theta = Math.random() * 2 * Math.PI;
      let r = clusterR * Math.sqrt(Math.random());
      let x = cx + r * Math.cos(theta);
      let y = cy + r * Math.sin(theta);
      pts.push({x, y});
    }

    // 检查两两距离约束
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = pts[i].x - pts[j].x;
        let dy = pts[i].y - pts[j].y;
        let d = Math.hypot(dx, dy);
        if (d < mind || d > maxd) {
          ok = false;
          break;
        }
      }
    }

    if (ok) {
      // 再附加检查：每个点离边界 ≥ circle_radius
      let inBounds = pts.every(p => p.x >= circle_radius && p.x <= w - circle_radius && p.y >= circle_radius && p.y <= h - circle_radius);
      if (inBounds) return pts;
    }
  }
  return null;
}

// 获取 [min, max] 随机浮点
function randRange(min, max) {
  return min + Math.random() * (max - min);
}

// 主画图函数
function drawClouds(status) {
  const W = document.querySelector('.sidebg').getBoundingClientRect().width
  const H = document.querySelector('.sidebg').getBoundingClientRect().height
  const pointCount = 5
  const minDist = 10
  const maxDist = 40
  const circle_radius = 25

  const cloudCanvas = document.getElementById("cloud-canvas");
  cloudCanvas.width = W; 
  cloudCanvas.height = H;
  const ctx = cloudCanvas.getContext("2d");

  // localStorage 的 key
  const keyW    = 'clouds-canvas-width';
  const keyH    = 'clouds-canvas-height';
  const keyData = 'clouds-canvas-data';
  const keyCacheTime = 'clouds-canvas-cache-time';
  // 尝试读取缓存
  const cachedW    = localStorage.getItem(keyW);
  const cachedH    = localStorage.getItem(keyH);
  const cachedImg = localStorage.getItem(keyData);
  const cachedCacheTime = localStorage.getItem(keyCacheTime);
  const currentTime = new Date().getTime();

  if (cachedImg && +cachedW === W && +cachedH === H && (currentTime - cachedCacheTime < 10 * 60 * 1000) && !status) {
    // 如果缓存存在且尺寸一致，就直接绘制缓存图
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, 0, 0);
      console.log('[DrawClouds]背景从缓存中加载');
    };
    img.src = cachedImg;
    return;
  }

  console.log('[DrawClouds]开始重新绘制背景');
  fetch("https://generate-cloud-image.hzchu.top/v1/image?format=json")
  .then(res => res.json())
  .then(data => {
    const cloudCount = data.cloud_count
    const color = data.color
    // 透明背景
    ctx.clearRect(0, 0, W, H);
  
    for (let ci = 0; ci < cloudCount; ci++) {
      const pts = generatePoints(W, H, pointCount, maxDist, minDist, circle_radius);
      if (!pts) {
        console.log(`[drawClouds] 第 ${ci+1} 朵云生成失败！`);
        return;
      }
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let p of pts) {
        ctx.moveTo(p.x + circle_radius, p.y);
        ctx.arc(p.x, p.y, circle_radius, 0, 2 * Math.PI);
      }
      ctx.fill();
    }
    try {
      const dataURL = cloudCanvas.toDataURL('image/png');
      localStorage.setItem(keyW, W);
      localStorage.setItem(keyH, H);
      localStorage.setItem(keyData, dataURL);
      localStorage.setItem(keyCacheTime, currentTime);
      console.log('[DrawClouds]背景已缓存');
    } catch (err) {
      console.warn('[DrawClouds]缓存到 localStorage 失败:', err);
    }
    })
    .catch(error => {
      console.error('[DrawClouds] 获取云朵数据失败:', error);
    });
}

!function(){"use strict";var r=.5*(Math.sqrt(3)-1),e=(3-Math.sqrt(3))/6,t=1/3,a=1/6,o=(Math.sqrt(5)-1)/4,i=(5-Math.sqrt(5))/20;function n(r){var e;e="function"==typeof r?r:r?function(){var r=0,e=0,t=0,a=1,o=(i=4022871197,function(r){r=r.toString();for(var e=0;e<r.length;e++){var t=.02519603282416938*(i+=r.charCodeAt(e));t-=i=t>>>0,i=(t*=i)>>>0,i+=4294967296*(t-=i)}return 2.3283064365386963e-10*(i>>>0)});var i;r=o(" "),e=o(" "),t=o(" ");for(var n=0;n<arguments.length;n++)(r-=o(arguments[n]))<0&&(r+=1),(e-=o(arguments[n]))<0&&(e+=1),(t-=o(arguments[n]))<0&&(t+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*a;return r=e,e=t,t=o-(a=0|o)}}(r):Math.random,this.p=f(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}function f(r){var e,t=new Uint8Array(256);for(e=0;e<256;e++)t[e]=e;for(e=0;e<255;e++){var a=e+~~(r()*(256-e)),o=t[e];t[e]=t[a],t[a]=o}return t}n.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,a){var o,i,n=this.permMod12,f=this.perm,s=this.grad3,v=0,h=0,l=0,u=(t+a)*r,d=Math.floor(t+u),p=Math.floor(a+u),M=(d+p)*e,m=t-(d-M),c=a-(p-M);m>c?(o=1,i=0):(o=0,i=1);var y=m-o+e,w=c-i+e,g=m-1+2*e,A=c-1+2*e,x=255&d,q=255&p,D=.5-m*m-c*c;if(D>=0){var S=3*n[x+f[q]];v=(D*=D)*D*(s[S]*m+s[S+1]*c)}var U=.5-y*y-w*w;if(U>=0){var b=3*n[x+o+f[q+i]];h=(U*=U)*U*(s[b]*y+s[b+1]*w)}var F=.5-g*g-A*A;if(F>=0){var N=3*n[x+1+f[q+1]];l=(F*=F)*F*(s[N]*g+s[N+1]*A)}return 70*(v+h+l)},noise3D:function(r,e,o){var i,n,f,s,v,h,l,u,d,p,M=this.permMod12,m=this.perm,c=this.grad3,y=(r+e+o)*t,w=Math.floor(r+y),g=Math.floor(e+y),A=Math.floor(o+y),x=(w+g+A)*a,q=r-(w-x),D=e-(g-x),S=o-(A-x);q>=D?D>=S?(v=1,h=0,l=0,u=1,d=1,p=0):q>=S?(v=1,h=0,l=0,u=1,d=0,p=1):(v=0,h=0,l=1,u=1,d=0,p=1):D<S?(v=0,h=0,l=1,u=0,d=1,p=1):q<S?(v=0,h=1,l=0,u=0,d=1,p=1):(v=0,h=1,l=0,u=1,d=1,p=0);var U=q-v+a,b=D-h+a,F=S-l+a,N=q-u+2*a,C=D-d+2*a,P=S-p+2*a,T=q-1+.5,_=D-1+.5,j=S-1+.5,k=255&w,z=255&g,B=255&A,E=.6-q*q-D*D-S*S;if(E<0)i=0;else{var G=3*M[k+m[z+m[B]]];i=(E*=E)*E*(c[G]*q+c[G+1]*D+c[G+2]*S)}var H=.6-U*U-b*b-F*F;if(H<0)n=0;else{var I=3*M[k+v+m[z+h+m[B+l]]];n=(H*=H)*H*(c[I]*U+c[I+1]*b+c[I+2]*F)}var J=.6-N*N-C*C-P*P;if(J<0)f=0;else{var K=3*M[k+u+m[z+d+m[B+p]]];f=(J*=J)*J*(c[K]*N+c[K+1]*C+c[K+2]*P)}var L=.6-T*T-_*_-j*j;if(L<0)s=0;else{var O=3*M[k+1+m[z+1+m[B+1]]];s=(L*=L)*L*(c[O]*T+c[O+1]*_+c[O+2]*j)}return 32*(i+n+f+s)},noise4D:function(r,e,t,a){var n,f,s,v,h,l,u,d,p,M,m,c,y,w,g,A,x,q=this.perm,D=this.grad4,S=(r+e+t+a)*o,U=Math.floor(r+S),b=Math.floor(e+S),F=Math.floor(t+S),N=Math.floor(a+S),C=(U+b+F+N)*i,P=r-(U-C),T=e-(b-C),_=t-(F-C),j=a-(N-C),k=0,z=0,B=0,E=0;P>T?k++:z++,P>_?k++:B++,P>j?k++:E++,T>_?z++:B++,T>j?z++:E++,_>j?B++:E++;var G=P-(l=k>=3?1:0)+i,H=T-(u=z>=3?1:0)+i,I=_-(d=B>=3?1:0)+i,J=j-(p=E>=3?1:0)+i,K=P-(M=k>=2?1:0)+2*i,L=T-(m=z>=2?1:0)+2*i,O=_-(c=B>=2?1:0)+2*i,Q=j-(y=E>=2?1:0)+2*i,R=P-(w=k>=1?1:0)+3*i,V=T-(g=z>=1?1:0)+3*i,W=_-(A=B>=1?1:0)+3*i,X=j-(x=E>=1?1:0)+3*i,Y=P-1+4*i,Z=T-1+4*i,$=_-1+4*i,rr=j-1+4*i,er=255&U,tr=255&b,ar=255&F,or=255&N,ir=.6-P*P-T*T-_*_-j*j;if(ir<0)n=0;else{var nr=q[er+q[tr+q[ar+q[or]]]]%32*4;n=(ir*=ir)*ir*(D[nr]*P+D[nr+1]*T+D[nr+2]*_+D[nr+3]*j)}var fr=.6-G*G-H*H-I*I-J*J;if(fr<0)f=0;else{var sr=q[er+l+q[tr+u+q[ar+d+q[or+p]]]]%32*4;f=(fr*=fr)*fr*(D[sr]*G+D[sr+1]*H+D[sr+2]*I+D[sr+3]*J)}var vr=.6-K*K-L*L-O*O-Q*Q;if(vr<0)s=0;else{var hr=q[er+M+q[tr+m+q[ar+c+q[or+y]]]]%32*4;s=(vr*=vr)*vr*(D[hr]*K+D[hr+1]*L+D[hr+2]*O+D[hr+3]*Q)}var lr=.6-R*R-V*V-W*W-X*X;if(lr<0)v=0;else{var ur=q[er+w+q[tr+g+q[ar+A+q[or+x]]]]%32*4;v=(lr*=lr)*lr*(D[ur]*R+D[ur+1]*V+D[ur+2]*W+D[ur+3]*X)}var dr=.6-Y*Y-Z*Z-$*$-rr*rr;if(dr<0)h=0;else{var pr=q[er+1+q[tr+1+q[ar+1+q[or+1]]]]%32*4;h=(dr*=dr)*dr*(D[pr]*Y+D[pr+1]*Z+D[pr+2]*$+D[pr+3]*rr)}return 27*(n+f+s+v+h)}},n._buildPermutationTable=f,"undefined"!=typeof define&&define.amd&&define((function(){return n})),"undefined"!=typeof exports?exports.SimplexNoise=n:"undefined"!=typeof window&&(window.SimplexNoise=n),"undefined"!=typeof module&&(module.exports=n)}();

function drawBackground(status) {
  const canvas = document.getElementById('background-canvas');
  const ctx = canvas.getContext('2d');

  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width  = W;
  canvas.height = H;

  const keyW    = 'background-canvas-width';
  const keyH    = 'background-canvas-height';
  const keyData = 'background-canvas-data';
  const keyCacheTime = 'background-canvas-cache-time';
  // 尝试读取缓存
  const cachedW    = localStorage.getItem(keyW);
  const cachedH    = localStorage.getItem(keyH);
  const cachedImg = localStorage.getItem(keyData);
  const cachedCacheTime = localStorage.getItem(keyCacheTime);
  const currentTime = new Date().getTime();

  if (cachedImg && +cachedW === W && +cachedH === H && (currentTime - cachedCacheTime < 10 * 60 * 1000) && !status) {
    // 如果缓存存在且尺寸一致，就直接绘制缓存图
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(img, 0, 0);
      console.log('[Background]背景从缓存中加载');
    };
    img.src = cachedImg;
    return;
  }

  console.log('[background]开始重新绘制背景');
  const simplex = new SimplexNoise();

  // 设置参数
  const cols   = W;
  const rows   = H;
  const cellSize     = Math.min(W / cols, H / rows);
  const contourLevels = 12;

  // 生成高度图
  const heightMap = [];
  for (let y = 0; y <= rows; y++) {
    heightMap[y] = [];
    for (let x = 0; x <= cols; x++) {
      const nx = x / cols;
      const ny = y / rows;
      heightMap[y][x] = simplex.noise2D(nx * 3, ny * 3);
    }
  }

  // 绘制多层等高线
  for (let i = 0; i < contourLevels; i++) {
    const level = -1 + (2 * i) / contourLevels;
    drawContour(ctx, cellSize, cols, rows, heightMap, level);
  }

  try {
    const dataURL = canvas.toDataURL('image/png');
    localStorage.setItem(keyW, W);
    localStorage.setItem(keyH, H);
    localStorage.setItem(keyData, dataURL);
    localStorage.setItem(keyCacheTime, currentTime);
    console.log('[Background]背景已缓存');
  } catch (err) {
    console.warn('[Background]缓存到 localStorage 失败:', err);
  }
}

// 窗口尺寸变化时重绘
// window.addEventListener('resize', () => {
//   localStorage.removeItem('background-canvas-data');
//   localStorage.removeItem('background-canvas-width');
//   localStorage.removeItem('background-canvas-height');
//   drawBackground();
// });

// 平滑曲线插值（用于点集）
function drawSmoothLine(ctx, points) {
  if (points.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length - 2; i++) {
    const xc = (points[i][0] + points[i + 1][0]) / 2;
    const yc = (points[i][1] + points[i + 1][1]) / 2;
    ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
  }
  // 结尾
  const n = points.length;
  ctx.quadraticCurveTo(points[n - 2][0], points[n - 2][1], points[n - 1][0], points[n - 1][1]);
  ctx.stroke();
}

// 等高线轮廓生成（采样+插值）
function drawContour(ctx, cellSize, cols, rows, heightMap, level) {
  ctx.strokeStyle = 'rgba(0,0,0,0.05)';
  ctx.lineWidth = 1;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tl = heightMap[y][x];
      const tr = heightMap[y][x + 1];
      const br = heightMap[y + 1][x + 1];
      const bl = heightMap[y + 1][x];

      const sx = x * cellSize;
      const sy = y * cellSize;

      const interpolate = (v1, v2, p1, p2) => {
        const t = (level - v1) / (v2 - v1);
        return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
      };

      const points = [];

      if ((tl - level) * (tr - level) < 0)
        points.push(interpolate(tl, tr, [sx, sy], [sx + cellSize, sy]));
      if ((tr - level) * (br - level) < 0)
        points.push(interpolate(tr, br, [sx + cellSize, sy], [sx + cellSize, sy + cellSize]));
      if ((br - level) * (bl - level) < 0)
        points.push(interpolate(br, bl, [sx + cellSize, sy + cellSize], [sx, sy + cellSize]));
      if ((bl - level) * (tl - level) < 0)
        points.push(interpolate(bl, tl, [sx, sy + cellSize], [sx, sy]));

      if (points.length >= 2) {
        drawSmoothLine(ctx, points);
      }
    }
  }
}

drawClouds()
drawBackground()



