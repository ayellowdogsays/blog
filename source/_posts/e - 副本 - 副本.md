---
abbrlink: '55630'
categories:
- - 美化、动手
date: '2025-02-15T18:38:48.352541+08:00'
swiper_index: 2
tags:
- stellar
- 侧边栏
- 设置
- xaoxuu
- weekdaycare
title: stellar主题修改
top_img: https://img.picui.cn/free/2025/03/16/67d62e4e0aed9.png
updated: '2025-02-15T18:38:48.352541+08:00'
---
# 开头

也没想到我还能修改主题啊（毕竟看着一堆HTML乱码的经历还是有的，魔改不备份，博主两行泪）我反正先备后改😁

### 前言

最近也是用上了stellar主题哈！这个主题由xaoxuu开源，在 `theme/stellar/languages`中，我们可以看到有三个文件，修改zh-cn.yml文件就可以了，例子

```seach
search:
  search: 搜索
  tip: Power by 阿黄
  search_in: 在 %s 中搜索
  no_results: 空空如也，但不多
```

例如
![2](/png/code.png)

# 侧边栏美化

```
preconnect:
  - https://gcore.jsdelivr.net
  - https://unpkg.com
  - https://cdn.bootcdn.net

inject:
  head:
    - <link rel="apple-touch-icon" sizes="180x180" href="/assets/xaoxuu/favicon/apple-touch-icon.png">
    - <link rel="icon" type="image/png" sizes="32x32" href="/assets/xaoxuu/favicon/favicon-32x32.png">
    - <link rel="icon" type="image/png" sizes="16x16" href="/assets/xaoxuu/favicon/favicon-16x16.png">
    - <link rel="manifest" href="/assets/xaoxuu/favicon/site.webmanifest">
    - <link rel="shortcut icon" href="/assets/xaoxuu/favicon/favicon.ico">
    - <meta name="theme-color" content="#f8f8f8">
    - <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css" media="all" />
    - <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap" rel="stylesheet">

logo:
  icon:
  title: 阿黄说
  subtitle: '狗儿要听狗儿歌'
menubar:
  items: 
    - id: post
      title: 阿黄说
      url: /
    - id: topic
      title: 狗儿说
      url: /pro/
    - id: explore
      title: 狗随机
      url: /2025/01/13/e/
    - id: explore
      title: 阿黄友
      url: /friends/

site_tree:
  home:
    sidebar: starter, welcome, recent
  index_blog:
    sidebar: starter, welcome, recent
  index_topic:
    menu_id: topic
  topic:
    menu_id: topic

article:
  share: [wechat, weibo, email, link]


style:
  text-align: justify
  smooth_scroll: false
  codeblock:
    scrollbar: 0px
  font-size:
    body: 1rem
  font-family:
    logo: '"LXGW WenKai Screen", system-ui, "Microsoft Yahei", "Segoe UI", -apple-system, Roboto, Ubuntu, "Helvetica Neue", Arial, "WenQuanYi Micro Hei", sans-serif'
    body: '"Noto Serif SC","LXGW WenKai Screen", system-ui, "Microsoft Yahei", "Segoe UI", -apple-system, Roboto, Ubuntu, "Helvetica Neue", Arial, "WenQuanYi Micro Hei", sans-serif'
    code: '"LXGW WenKai Screen", Menlo, Monaco, Consolas, system-ui, "Courier New", monospace, sans-serif'
    codeblock: 'Menlo, Monaco, Consolas, system-ui, "Courier New", monospace, sans-serif'

```

只抄就行

# 危险地带-修改主题，请先备份

新建dogs文件夹在source文件夹中，代码来源[阿黄说穿梭](https://sfzhang.top/blog/2023/10/12/blog-progress/)

# 再新建一个css和js文件夹，在CSS中命名一个叫DOGEE.css的文件，放入

```
.pace {
	-webkit-pointer-events: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	    user-select: none;
	z-index: 2000;
	position: fixed;
	margin: auto;
	top: 10px;
	left: 0;
	right: 0;
	height: 8px;
	border-radius: 8px;
	width: 4rem;
	background: #eaecf2;
	border: 1px #e3e8f7;
	overflow: hidden;
  }
  
  .pace-inactive .pace-progress {
	opacity: 0;
	transition: 0.3s ease-in;
  }
  
  .pace .pace-progress {
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	transform: translate3d(0, 0, 0);
	max-width: 200px;
	position: absolute;
	z-index: 2000;
	display: block;
	top: 0;
	right: 100%;
	height: 100%;
	width: 100%;
	background: #78c2ff;
	/*background: linear-gradient(-45deg, #F4511E, #7E57C2, #23d5ab);*/
	-webkit-animation: gradient 1.5s ease infinite;
	        animation: gradient 1.5s ease infinite;
	background-size: 200%;
  }
  
  .pace.pace-inactive {
	opacity: 0;
	transition: 0.3s;
	top: -8px;
  }
  @-webkit-keyframes gradient {
	0% {
	  background-position: 0% 50%;
	}
	50% {
	  background-position: 100% 50%;
	}
	100% {
	  background-position: 0% 50%;
	}
  }
  @keyframes gradient {
	0% {
	  background-position: 0% 50%;
	}
	50% {
	  background-position: 100% 50%;
	}
	100% {
	  background-position: 0% 50%;
	}
  }

```

# 再次进入js中，名为dogee.js

```
/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
! function () {
	function o(t, e) {
		return function () {
			return t.apply(e, arguments)
		}
	}
	var u, c, i, s, n, y, t, l, v, r, a, p, e, h, w, b, f, g, d, m, k, S, q, L, x, P, T, R, j, O, E, M, A, C, N, _, F, U, W, X, D, H, I, z, G, B, J = [].slice,
		K = {}.hasOwnProperty,
		Q = function (t, e) {
			for (var n in e) K.call(e, n) && (t[n] = e[n]);

			function r() {
				this.constructor = t
			}
			return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
		},
		V = [].indexOf || function (t) {
			for (var e = 0, n = this.length; e < n; e++)
				if (e in this && this[e] === t) return e;
			return -1
		};

	function Y() {}
	for (g = {
			className: "",
			catchupTime: 100,
			initialRate: .03,
			minTime: 250,
			ghostTime: 100,
			maxProgressPerFrame: 20,
			easeFactor: 1.25,
			startOnPageLoad: !0,
			restartOnPushState: !0,
			restartOnRequestAfter: 500,
			target: "body",
			elements: {
				checkInterval: 100,
				selectors: ["body"]
			},
			eventLag: {
				minSamples: 10,
				sampleCount: 3,
				lagThreshold: 3
			},
			ajax: {
				trackMethods: ["GET"],
				trackWebSockets: !0,
				ignoreURLs: []
			}
		}, P = function () {
			var t;
			return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
		}, R = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, f = window.cancelAnimationFrame || window.mozCancelAnimationFrame, p = function (t, e, n) {
			if ("function" == typeof t.addEventListener) return t.addEventListener(e, n, !1);
			var r;
			"function" != typeof t["on" + e] || "object" != typeof t["on" + e].eventListeners ? (r = new s, "function" == typeof t["on" + e] && r.on(e, t["on" + e]), t["on" + e] = function (t) {
				return r.trigger(e, t)
			}, t["on" + e].eventListeners = r) : r = t["on" + e].eventListeners, r.on(e, n)
		}, null == R && (R = function (t) {
			return setTimeout(t, 50)
		}, f = function (t) {
			return clearTimeout(t)
		}), O = function (e) {
			var n = P(),
				r = function () {
					var t = P() - n;
					return 33 <= t ? (n = P(), e(t, function () {
						return R(r)
					})) : setTimeout(r, 33 - t)
				};
			return r()
		}, j = function () {
			var t = arguments[0],
				e = arguments[1],
				n = 3 <= arguments.length ? J.call(arguments, 2) : [];
			return "function" == typeof t[e] ? t[e].apply(t, n) : t[e]
		}, d = function () {
			for (var t, e, n, r = arguments[0], s = 2 <= arguments.length ? J.call(arguments, 1) : [], o = 0, i = s.length; o < i; o++)
				if (e = s[o])
					for (t in e) K.call(e, t) && (n = e[t], null != r[t] && "object" == typeof r[t] && null != n && "object" == typeof n ? d(r[t], n) : r[t] = n);
			return r
		}, h = function (t) {
			for (var e, n, r = e = 0, s = 0, o = t.length; s < o; s++) n = t[s], r += Math.abs(n), e++;
			return r / e
		}, k = function (t, e) {
			var n, r;
			if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
				if (n = r.getAttribute("data-pace-" + t), !e) return n;
				try {
					return JSON.parse(n)
				} catch (t) {
					return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0
				}
			}
		}, Y.prototype.on = function (t, e, n, r) {
			var s;
			return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
				handler: e,
				ctx: n,
				once: r
			})
		}, Y.prototype.once = function (t, e, n) {
			return this.on(t, e, n, !0)
		}, Y.prototype.off = function (t, e) {
			var n, r, s;
			if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
				if (null == e) return delete this.bindings[t];
				for (n = 0, s = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
				return s
			}
		}, Y.prototype.trigger = function () {
			var t, e, n, r, s, o, i = arguments[0],
				a = 2 <= arguments.length ? J.call(arguments, 1) : [];
			if (null != (r = this.bindings) && r[i]) {
				for (n = 0, o = []; n < this.bindings[i].length;) e = (s = this.bindings[i][n]).handler, t = s.ctx, s = s.once, e.apply(null != t ? t : this, a), s ? o.push(this.bindings[i].splice(n, 1)) : o.push(n++);
				return o
			}
		}, B = Y, y = window.Pace || {}, window.Pace = y, d(y, B.prototype), T = y.options = d({}, g, window.paceOptions, k()), X = 0, H = (z = ["ajax", "document", "eventLag", "elements"]).length; X < H; X++) !0 === T[C = z[X]] && (T[C] = g[C]);

	function Z() {
		return Z.__super__.constructor.apply(this, arguments)
	}

	function $() {
		this.progress = 0
	}

	function tt() {
		this.bindings = {}
	}

	function et() {
		var e, o = this;
		et.__super__.constructor.apply(this, arguments), e = function (r) {
			var s = r.open;
			return r.open = function (t, e, n) {
				return A(t) && o.trigger("request", {
					type: t,
					url: e,
					request: r
				}), s.apply(r, arguments)
			}
		}, window.XMLHttpRequest = function (t) {
			t = new W(t);
			return e(t), t
		};
		try {
			m(window.XMLHttpRequest, W)
		} catch (t) {}
		if (null != U) {
			window.XDomainRequest = function () {
				var t = new U;
				return e(t), t
			};
			try {
				m(window.XDomainRequest, U)
			} catch (t) {}
		}
		if (null != F && T.ajax.trackWebSockets) {
			window.WebSocket = function (t, e) {
				var n = null != e ? new F(t, e) : new F(t);
				return A("socket") && o.trigger("request", {
					type: "socket",
					url: t,
					protocols: e,
					request: n
				}), n
			};
			try {
				m(window.WebSocket, F)
			} catch (t) {}
		}
	}

	function nt() {
		this.complete = o(this.complete, this);
		var t = this;
		this.elements = [], S().on("request", function () {
			return t.watch.apply(t, arguments)
		})
	}

	function rt(t) {
		var e, n, r, s;
		for (null == t && (t = {}), this.complete = o(this.complete, this), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (s = t.selectors).length; n < r; n++) e = s[n], this.elements.push(new i(e, this.complete))
	}

	function st(t, e) {
		this.selector = t, this.completeCallback = e, this.progress = 0, this.check()
	}

	function ot() {
		var t, e, n = this;
		this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
			return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
		}
	}

	function it(t) {
		this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = T.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = j(this.source, "progress"))
	}
	B = Error, Q(Z, B), n = Z, $.prototype.getElement = function () {
		var t;
		if (null == this.el) {
			if (!(t = document.querySelector(T.target))) throw new n;
			this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");
			var e = "" !== T.className ? " " + T.className : "";
			this.el.innerHTML = '<div class="pace-progress' + e + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
		}
		return this.el
	}, $.prototype.finish = function () {
		var t = this.getElement();
		return t.className = t.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ")
	}, $.prototype.update = function (t) {
		return this.progress = t, y.trigger("progress", t), this.render()
	}, $.prototype.destroy = function () {
		try {
			this.getElement().parentNode.removeChild(this.getElement())
		} catch (t) {
			n = t
		}
		return this.el = void 0
	}, $.prototype.render = function () {
		var t, e, n, r, s, o, i;
		if (null == document.querySelector(T.target)) return !1;
		for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (i = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) e = i[s], t.children[0].style[e] = r;
		return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), y.trigger("change", this.progress), this.lastRenderedProgress = this.progress
	}, $.prototype.done = function () {
		return 100 <= this.progress
	}, c = $, tt.prototype.trigger = function (t, e) {
		var n, r, s, o, i;
		if (null != this.bindings[t]) {
			for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) n = o[r], i.push(n.call(this, e));
			return i
		}
	}, tt.prototype.on = function (t, e) {
		var n;
		return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
	}, s = tt, W = window.XMLHttpRequest, U = window.XDomainRequest, F = window.WebSocket, m = function (t, e) {
		var n, r = [];
		for (n in e.prototype) try {
			null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, n, {
				get: function (t) {
					return function () {
						return e.prototype[t]
					}
				}(n),
				configurable: !0,
				enumerable: !0
			})) : r.push(t[n] = e.prototype[n]) : r.push(void 0)
		} catch (t) {
			0
		}
		return r
	}, L = [], y.ignore = function () {
		var t = arguments[0],
			e = 2 <= arguments.length ? J.call(arguments, 1) : [];
		return L.unshift("ignore"), e = t.apply(null, e), L.shift(), e
	}, y.track = function () {
		var t = arguments[0],
			e = 2 <= arguments.length ? J.call(arguments, 1) : [];
		return L.unshift("track"), e = t.apply(null, e), L.shift(), e
	}, A = function (t) {
		if (null == t && (t = "GET"), "track" === L[0]) return "force";
		if (!L.length && T.ajax) {
			if ("socket" === t && T.ajax.trackWebSockets) return !0;
			if (t = t.toUpperCase(), 0 <= V.call(T.ajax.trackMethods, t)) return !0
		}
		return !1
	}, Q(et, s), t = et, D = null, M = function (t) {
		for (var e, n = T.ajax.ignoreURLs, r = 0, s = n.length; r < s; r++)
			if ("string" == typeof (e = n[r])) {
				if (-1 !== t.indexOf(e)) return !0
			} else if (e.test(t)) return !0;
		return !1
	}, (S = function () {
		return D = null == D ? new t : D
	})().on("request", function (t) {
		var o, i = t.type,
			a = t.request,
			e = t.url;
		if (!M(e)) return y.running || !1 === T.restartOnRequestAfter && "force" !== A(i) ? void 0 : (o = arguments, "boolean" == typeof (e = T.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {
			var t, e, n, r, s = "socket" === i ? a.readyState < 1 : 0 < (s = a.readyState) && s < 4;
			if (s) {
				for (y.restart(), r = [], t = 0, e = (n = y.sources).length; t < e; t++) {
					if ((C = n[t]) instanceof u) {
						C.watch.apply(C, o);
						break
					}
					r.push(void 0)
				}
				return r
			}
		}, e))
	}), nt.prototype.watch = function (t) {
		var e = t.type,
			n = t.request,
			t = t.url;
		if (!M(t)) return n = new("socket" === e ? r : a)(n, this.complete), this.elements.push(n)
	}, nt.prototype.complete = function (e) {
		return this.elements = this.elements.filter(function (t) {
			return t !== e
		})
	}, u = nt, a = function (e, n) {
		var t, r, s, o, i = this;
		if (this.progress = 0, null != window.ProgressEvent)
			for (p(e, "progress", function (t) {
					return t.lengthComputable ? i.progress = 100 * t.loaded / t.total : i.progress = i.progress + (100 - i.progress) / 2
				}), t = 0, r = (o = ["load", "abort", "timeout", "error"]).length; t < r; t++) p(e, o[t], function () {
				return n(i), i.progress = 100
			});
		else s = e.onreadystatechange, e.onreadystatechange = function () {
			var t;
			return 0 === (t = e.readyState) || 4 === t ? (n(i), i.progress = 100) : 3 === e.readyState && (i.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0
		}
	}, r = function (t, e) {
		for (var n, r = this, s = this.progress = 0, o = (n = ["error", "open"]).length; s < o; s++) p(t, n[s], function () {
			return e(r), r.progress = 100
		})
	}, rt.prototype.complete = function (e) {
		return this.elements = this.elements.filter(function (t) {
			return t !== e
		})
	}, k = rt, st.prototype.check = function () {
		var t = this;
		return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
			return t.check()
		}, T.elements.checkInterval)
	}, st.prototype.done = function () {
		return this.completeCallback(this), this.completeCallback = null, this.progress = 100
	}, i = st, ot.prototype.states = {
		loading: 0,
		interactive: 50,
		complete: 100
	}, B = ot, Q = function () {
		var e, n, r, s, o, i = this;
		this.progress = 0, o = [], s = 0, r = P(), n = setInterval(function () {
			var t = P() - r - 50;
			return r = P(), o.push(t), o.length > T.eventLag.sampleCount && o.shift(), e = h(o), ++s >= T.eventLag.minSamples && e < T.eventLag.lagThreshold ? (i.progress = 100, clearInterval(n)) : i.progress = 3 / (e + 3) * 100
		}, 50)
	}, it.prototype.tick = function (t, e) {
		return 100 <= (e = null == e ? j(this.source, "progress") : e) && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / T.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), e = 1 - Math.pow(this.progress / 100, T.easeFactor), this.progress += e * this.rate * t, this.progress = Math.min(this.lastProgress + T.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
	}, v = it, b = e = _ = w = E = N = null, y.running = !1, q = function () {
		if (T.restartOnPushState) return y.restart()
	}, null != window.history.pushState && (I = window.history.pushState, window.history.pushState = function () {
		return q(), I.apply(window.history, arguments)
	}), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {
		return q(), G.apply(window.history, arguments)
	}), l = {
		ajax: u,
		elements: k,
		document: B,
		eventLag: Q
	}, (x = function () {
		var t, e, n, r, s, o, i, a;
		for (y.sources = N = [], e = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; e < r; e++) !1 !== T[t = o[e]] && N.push(new l[t](T[t]));
		for (n = 0, s = (a = null != (i = T.extraSources) ? i : []).length; n < s; n++) C = a[n], N.push(new C(T));
		return y.bar = w = new c, E = [], _ = new v
	})(), y.stop = function () {
		return y.trigger("stop"), y.running = !1, w.destroy(), b = !0, null != e && ("function" == typeof f && f(e), e = null), x()
	}, y.restart = function () {
		return y.trigger("restart"), y.stop(), y.start()
	}, y.go = function () {
		var m;
		return y.running = !0, w.render(), m = P(), b = !1, e = O(function (t, e) {
			w.progress;
			for (var n, r, s, o, i, a, u, c, l, p, h = a = 0, f = !0, g = u = 0, d = N.length; u < d; g = ++u)
				for (C = N[g], i = null != E[g] ? E[g] : E[g] = [], s = c = 0, l = (r = null != (p = C.elements) ? p : [C]).length; c < l; s = ++c) o = r[s], f &= (o = null != i[s] ? i[s] : i[s] = new v(o)).done, o.done || (h++, a += o.tick(t));
			return n = a / h, w.update(_.tick(t, n)), w.done() || f || b ? (w.update(100), y.trigger("done"), setTimeout(function () {
				return w.finish(), y.running = !1, y.trigger("hide")
			}, Math.max(T.ghostTime, Math.max(T.minTime - (P() - m), 0)))) : e()
		})
	}, y.start = function (t) {
		d(T, t), y.running = !0;
		try {
			w.render()
		} catch (t) {
			n = t
		}
		return document.querySelector(".pace") ? (y.trigger("start"), y.go()) : setTimeout(y.start, 50)
	}, "function" == typeof define && define.amd ? define(function () {
		return y
	}) : "object" == typeof exports ? module.exports = y : T.startOnPageLoad && y.start()
}.call(this);

```

最后在主题配置文件中引入

```
# 自定义引入css,js
inject:
  head:
    - <link rel="stylesheet" href="/dogs/css/DOGEE.css"> # 网站进度条加载
  script:
    - <script type="text/javascript" src="/dogs/js/DOGEE.js"></script> # 网站进度条加载

```

# 首页轮播

[点我去语佬的文章](https://weekdaycare.cn/posts/home-swiper/)

# footer&sitemap

```把#删了补上空格
footer:
  social:
    # github:
    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/08a41b181ce68.svg"/>'
    #   url: /
    # music:
    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/3845874.svg"/>'
    #   url: /
    # unsplash:
    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/3616429.svg"/>'
    #   url: /
    # comments:
    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/942ebbf1a4b91.svg"/>'
    #   url: /about/#comments
  sitemap:
    # '博客':
    #   - '[近期](/)'
    #   - '[分类](/categories/)'
    #   - '[标签](/tags/)'
    #   - '[归档](/archives/)'
    # '项目':
    #   - '[开源库](/)'
    # '社交':
    #   - '[友链](/)'
    #   - '[留言板](/)'
    # '更多':
    #   - '[关于本站](/)'
    #   - '[GitHub](/)'
  content: | # 支持 Markdown 格式
    本站由 [{author.name}](/) 使用 [{theme.name} {theme.version}]({theme.tree}) 主题创建。
    本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议，转载请注明出处。
    <span class="jinrishici-sentence"></span>
    <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
  # 主题用户越多，开发者维护和更新的积极性就越高，如果您喜欢本主题，请在适当的位置显示主题信息和仓库链接以表支持。


```

# 添加鼠标光粒

在 `theme/stellar/source/js/xxx.js`下写

```js
class Circle {
    constructor({ origin, speed, color, angle, context }) {
      this.origin = origin
      this.position = { ...this.origin }
      this.color = color
      this.speed = speed
      this.angle = angle
      this.context = context
      this.renderCount = 0
    }
  
    draw() {
      this.context.fillStyle = this.color
      this.context.beginPath()
      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
      this.context.fill()
    }
  
    move() {
      this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x
      this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)
      this.renderCount++
    }
  }
  
  class Boom {
    constructor ({ origin, context, circleCount = 10, area }) {
      this.origin = origin
      this.context = context
      this.circleCount = circleCount
      this.area = area
      this.stop = false
      this.circles = []
    }
  
    randomArray(range) {
      const length = range.length
      const randomIndex = Math.floor(length * Math.random())
      return range[randomIndex]
    }
  
    randomColor() {
      const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)
    }
  
    randomRange(start, end) {
      return (end - start) * Math.random() + start
    }
  
    init() {
      for(let i = 0; i < this.circleCount; i++) {
        const circle = new Circle({
          context: this.context,
          origin: this.origin,
          color: this.randomColor(),
          angle: this.randomRange(Math.PI - 1, Math.PI + 1),
          speed: this.randomRange(1, 6)
        })
        this.circles.push(circle)
      }
    }
  
    move() {
      this.circles.forEach((circle, index) => {
        if (circle.position.x > this.area.width || circle.position.y > this.area.height) {
          return this.circles.splice(index, 1)
        }
        circle.move()
      })
      if (this.circles.length == 0) {
        this.stop = true
      }
    }
  
    draw() {
      this.circles.forEach(circle => circle.draw())
    }
  }
  
  class CursorSpecialEffects {
    constructor() {
      this.computerCanvas = document.createElement('canvas')
      this.renderCanvas = document.createElement('canvas')
  
      this.computerContext = this.computerCanvas.getContext('2d')
      this.renderContext = this.renderCanvas.getContext('2d')
  
      this.globalWidth = window.innerWidth
      this.globalHeight = window.innerHeight
  
      this.booms = []
      this.running = false
    }
  
    handleMouseDown(e) {
      const boom = new Boom({
        origin: { x: e.clientX, y: e.clientY },
        context: this.computerContext,
        area: {
          width: this.globalWidth,
          height: this.globalHeight
        }
      })
      boom.init()
      this.booms.push(boom)
      this.running || this.run()
    }
  
    handlePageHide() {
      this.booms = []
      this.running = false
    }
  
    init() {
      const style = this.renderCanvas.style
      style.position = 'fixed'
      style.top = style.left = 0
      style.zIndex = '999999999999999999999999999999999999999999'
      style.pointerEvents = 'none'
  
      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth
      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight
  
      document.body.append(this.renderCanvas)
  
      window.addEventListener('mousedown', this.handleMouseDown.bind(this))
      window.addEventListener('pagehide', this.handlePageHide.bind(this))
    }
  
    run() {
      this.running = true
      if (this.booms.length == 0) {
        return this.running = false
      }
  
      requestAnimationFrame(this.run.bind(this))
  
      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
  
      this.booms.forEach((boom, index) => {
        if (boom.stop) {
          return this.booms.splice(index, 1)
        }
        boom.move()
        boom.draw()
      })
      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)
    }
  }
  
document.addEventListener('DOMContentLoaded', function() {
    const cursorSpecialEffects = new CursorSpecialEffects();
    cursorSpecialEffects.init();
});

  
```

然后引入

# 每日热点

新建new/index.html,把这个图片![https://api.szfx.top/morning-paper](https://api.szfx.top/morning-paper)放入，例如

```markdown
!(1)[https://api.szfx.top/morning-paper]
```

后记

本文将持续更新，别着急哦！
