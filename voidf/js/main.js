! function(e) {
    var t = {};

    function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/h5/music_box/", n(n.s = 3)
}([function(e, t) { e.exports = function(e) { return e && e.__esModule ? e : { default: e } } }, function(e, t) { e.exports = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, r) { return t && n(e.prototype, t), r && n(e, r), e }
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    n(4);
    var i = r(n(5));
    window.onload = function() { new i.default }
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var i = r(n(1)),
        o = r(n(2)),
        u = r(n(6)),
        s = r(n(8)),
        a = function() {
            function e() {
                (0, i.default)(this, e), this.initMusicText = [], this.oTitle = document.querySelector(".title"), this.aMusicType = document.querySelectorAll(".type input"), this.oMusicType = document.querySelector(".type input:checked"), this.musicTextBox = document.getElementById("music-text"), this.oMusicName = document.querySelector(".music-name"), this.oSpeed = document.getElementById("speed"), this.oSpeedValue = document.getElementById("speed-value"), this.musicTypes = ["sine", "square", "triangle", "sawtooth"], this.curType = Number(this.oMusicType.value), this.musicType = this.musicTypes[this.curType], this.music = this.playMusic(), this.paused = !0, this.curMusic = -1, this.speed = Number(this.oSpeed.value), this.init()
            }
            return (0, o.default)(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    document.querySelector(".bg").src = n(13)("./bg_".concat(Math.ceil(4 * Math.random()), ".jpg")), this.help(), this.showMusicList();
                    for (var t = 0; t < this.aMusicType.length; t++) this.aMusicType[t].addEventListener("change", function(t) { t.target.checked && e.setMusicType(t.target.value) });
                    document.addEventListener("keyup", function(t) {
                        if (13 === t.keyCode) {
                            var n = e.musicTextBox.value;
                            n ? (e.music.pauseMusic(), e.music = e.playMusic(n)) : alert("请输入乐谱！")
                        }
                    }), this.setMusicSpeed(this.oSpeed.value), this.oSpeed.addEventListener("input", function() { e.setMusicSpeed(e.oSpeed.value) }), document.addEventListener("keydown", function(t) {
                        if ("textarea" !== document.activeElement.nodeName.toLowerCase()) {
                            var n = Number(e.oSpeed.step),
                                r = Number(e.oSpeed.min),
                                i = Number(e.oSpeed.max),
                                o = e.aMusicType.length;
                            switch (t.keyCode) {
                                case 32:
                                    -1 === e.curMusic && (e.curMusic = 0), e.paused ? (e.chooseMusic(e.curMusic), e.paused = !1) : (e.pauseMusic(), e.paused = !0);
                                    break;
                                case 189:
                                    e.speed > r && (e.speed -= n), e.setMusicSpeed(e.speed);
                                    break;
                                case 187:
                                    e.speed < i && (e.speed += n), e.setMusicSpeed(e.speed);
                                    break;
                                case 37:
                                    e.curType = (e.curType + o - 1) % o, e.setMusicType(e.curType);
                                    break;
                                case 39:
                                    e.curType = (e.curType + 1) % o, e.setMusicType(e.curType);
                                    break;
                                case 38:
                                    e.initMusicText.length && (e.curMusic = (e.curMusic + e.initMusicText.length - 1) % e.initMusicText.length, e.chooseMusic(e.curMusic));
                                    break;
                                case 40:
                                    e.initMusicText.length && (e.curMusic = (e.curMusic + 1) % e.initMusicText.length, e.chooseMusic(e.curMusic))
                            }
                        }
                    })
                }
            }, { key: "help", value: function() { document.querySelector(".help .icon").addEventListener("click", function() { document.querySelector(".popop").classList.add("show") }), document.querySelector(".help .close").addEventListener("click", function() { document.querySelector(".popop").classList.remove("show") }) } }, { key: "setMusicType", value: function(e) { this.aMusicType[e].checked = !0, this.musicType = this.musicTypes[e], this.music.setMusicType(this.musicType) } }, {
                key: "showMusicList",
                value: function() {
                    var e = this,
                        t = "";
                    (0, u.default)({ url: "https://www.zhanhu56.com/api/music/index.php?type=musicList", dataType: "json", data: { page: 0 }, success: function(n) { if (200 === n.code) { e.initMusicText = n.data.list, e.initMusicText.forEach(function(e) { t += '<div class="btn"><span>'.concat(e.name, "</span></div>") }), e.oMusicName.innerHTML = t, e.aMusicName = document.querySelectorAll(".music-name .btn"); for (var r = function(t) { e.aMusicName[t].addEventListener("click", function(n) { e.curMusic = t, e.chooseMusic(t) }) }, i = 0; i < e.aMusicName.length; i++) r(i) } else console.log(n.msg) } })
                }
            }, { key: "playMusic", value: function(e) { var t = !!e && Number(this.oSpeed.value); return new s.default(".music-box", { loop: !0, musicText: decodeURIComponent(e), autoplay: t, type: this.musicType, duration: 3, mixing: !0 }) } }, { key: "setMusicSpeed", value: function(e) { this.oSpeed.value = e, this.oSpeedValue.innerHTML = e, this.oSpeed.style.backgroundSize = 100 * (e - 60) / 60 + "% 100%", this.music.setPlaySpeed(e), this.chord && this.chord.setPlaySpeed(e) } }, {
                key: "chooseMusic",
                value: function(e) {
                    for (var t = this.initMusicText[e].melody, n = this.initMusicText[e].chord, r = 0; r < this.aMusicName.length; r++) this.aMusicName[r].classList.remove("cur");
                    this.aMusicName[e].classList.add("cur"), this.paused = !1, this.musicTextBox.value = decodeURIComponent(t), this.music.pauseMusic(), this.music = this.playMusic(t), this.chord && this.chord.pauseMusic(), n && (this.chord = new s.default(".chord", { loop: !0, musicText: decodeURIComponent(n), autoplay: this.oSpeed.value, duration: 3, volume: .2 })), this.oTitle.innerHTML = this.initMusicText[e].name, document.title = this.oTitle.innerHTML
                }
            }, { key: "pauseMusic", value: function() { this.music.pauseMusic(), this.chord && this.chord.pauseMusic() } }]), e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function() {
        var e = { type: arguments[0].type || "GET", url: arguments[0].url || "", async: arguments[0].async || "true", data: arguments[0].data || null, dataType: arguments[0].dataType || "text", contentType: arguments[0].contentType || "application/x-www-form-urlencoded", beforeSend: arguments[0].beforeSend || function() {}, success: arguments[0].success || function() {}, error: arguments[0].error || function() {}, complete: arguments[0].complete || function() {} };
        e.beforeSend();
        var t = function() { if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP"); if (window.XMLHttpRequest) return new XMLHttpRequest }();
        t.responseType = e.dataType, t.open(e.type, e.url, e.async), t.setRequestHeader("Content-Type", e.contentType), t.send(function(e) { if ("object" === (0, i.default)(e)) { var t = ""; for (var n in e) t += n + "=" + e[n] + "&"; return t = t.substring(0, t.length - 1) } return e }(e.data)), t.onreadystatechange = function() { 4 == t.readyState && (200 == t.status ? e.success(t.response) : e.error(), e.complete()) }
    };
    var i = r(n(7))
}, function(e, t) {
    function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

    function r(t) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function(e) { return n(e) } : e.exports = r = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e) }, r(t) }
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var i = r(n(9)),
        o = r(n(12)),
        u = r(n(1)),
        s = r(n(2)),
        a = function() {
            function e(t, n) {
                (0, u.default)(this, e);
                this.selector = t, this.opts = Object.assign({ loop: !1, musicText: "", autoplay: 60, type: "sine", duration: 2, volume: 1, mixing: !1, keyboard: !0 }, n), this.audioCtx = new(window.AudioContext || window.webkitAudioContext), this.arrFrequency = [{ id: -7, value: 131 }, { id: -6, value: 147 }, { id: -5, value: 165 }, { id: -4, value: 175 }, { id: -3, value: 196 }, { id: -2, value: 220 }, { id: -1, value: 247 }, { id: 0, value: 262 }, { id: 1, value: 294 }, { id: 2, value: 330 }, { id: 3, value: 349 }, { id: 4, value: 392 }, { id: 5, value: 440 }, { id: 6, value: 494 }, { id: 7, value: 523 }, { id: 8, value: 587 }, { id: 9, value: 659 }, { id: 10, value: 698 }, { id: 11, value: 784 }, { id: 12, value: 880 }, { id: 13, value: 988 }, { id: 14, value: 1047 }, { id: 15, value: 1175 }, { id: 16, value: 1319 }, { id: 17, value: 1397 }, { id: 18, value: 1568 }, { id: 19, value: 1760 }, { id: 20, value: 1967 }, { id: 21, value: 2089 }, { id: 22, value: 2288 }, { id: 23, value: 2565 }, { id: 24, value: 2716 }, { id: 25, value: 3047 }, { id: 26, value: 3417 }, { id: 27, value: 3832 }], this.arrNotes = ["c", "d", "e", "f", "g", "a", "b", "1", "2", "3", "4", "5", "6", "7", "C", "D", "E", "F", "G", "A", "B"], this.keyCodes = [65, 83, 68, 70, 71, 72, 74, 81, 87, 69, 82, 84, 89, 85, 49, 50, 51, 52, 53, 54, 55], this.draw(), this.speed = 60, this.paused = !1, this.opts.autoplay && (this.speed = !0 === this.opts.autoplay ? this.speed : this.opts.autoplay, this.playMusic(this.opts.musicText))
            }
            return (0, s.default)(e, [{
                key: "createSound",
                value: function(e) {
                    var t = this.audioCtx.createOscillator(),
                        n = this.audioCtx.createGain();
                    t.connect(n), n.connect(this.audioCtx.destination), t.type = this.opts.type, t.frequency.value = e, n.gain.setValueAtTime(0, this.audioCtx.currentTime), n.gain.linearRampToValueAtTime(this.opts.volume, this.audioCtx.currentTime + .01), t.start(this.audioCtx.currentTime), n.gain.exponentialRampToValueAtTime(.001, this.audioCtx.currentTime + this.opts.duration), t.stop(this.audioCtx.currentTime + this.opts.duration)
                }
            }, {
                key: "createMusic",
                value: function(e) {
                    var t = this.arrNotes.indexOf(e),
                        n = 0;
                    this.opts.mixing && (n = 7), -1 !== t && (this.createSound(this.arrFrequency.find(function(e) { return e.id === t - n }).value), this.createSound(this.arrFrequency.find(function(e) { return e.id === t }).value), this.createSound(this.arrFrequency.find(function(e) { return e.id === t + n }).value))
                }
            }, {
                key: "draw",
                value: function() {
                    var e = this;
                    this.musicBtn = null;
                    for (var t = document.querySelector(this.selector), n = "", r = { c: 1, d: 2, e: 3, f: 4, g: 5, a: 6, b: 7 }, i = 0; i < this.arrNotes.length; i++) n += '<li><span></span><i class="' + (this.arrNotes[i] >= "a" && this.arrNotes[i] <= "g" ? "low" : this.arrNotes[i] >= "A" && this.arrNotes[i] <= "G" ? "high" : "") + '">' + (r[this.arrNotes[i].toLowerCase()] || this.arrNotes[i]) + "</i></li>";
                    t.innerHTML = "<ul>" + n + "</ul>", this.musicBtn = t.querySelectorAll("li");
                    for (var o = function(t) { e.musicBtn[t].addEventListener("mousedown", function(n) { e.pressBtn(t) }) }, u = 0; u < this.arrNotes.length; u++) o(u);
                    document.addEventListener("mouseup", function() { for (var t = 0; t < e.arrNotes.length; t++) e.musicBtn[t].className = "" }), this.opts.keyboard && document.addEventListener("keydown", function(t) { "textarea" !== document.activeElement.nodeName.toLowerCase() && -1 !== e.keyCodes.indexOf(t.keyCode) && e.pressBtn(e.keyCodes.indexOf(t.keyCode)) })
                }
            }, {
                key: "pressBtn",
                value: function(e) {
                    var t = this;
                    this.musicBtn[e].className = "cur", this.createMusic(this.arrNotes[e]), setTimeout(function() { t.musicBtn[e].className = "" }, 300)
                }
            }, {
                key: "playMusic",
                value: function(e) {
                    var t = this,
                        n = e.split("");
                    (0, o.default)(i.default.mark(function e() {
                        var r, o;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, r = 0;
                                case 2:
                                    if (t.paused) { e.next = 30; break }
                                    if (!(r >= n.length)) { e.next = 9; break }
                                    if (!t.opts.loop) { e.next = 8; break }
                                    r = 0, e.next = 9;
                                    break;
                                case 8:
                                    return e.abrupt("break", 30);
                                case 9:
                                    if (-1 === (o = t.arrNotes.indexOf(n[r]))) { e.next = 14; break }
                                    t.pressBtn(o), e.next = 27;
                                    break;
                                case 14:
                                    e.t0 = n[r], e.next = "0" === e.t0 ? 17 : "-" === e.t0 ? 18 : "=" === e.t0 ? 21 : 24;
                                    break;
                                case 17:
                                    return e.abrupt("break", 27);
                                case 18:
                                    return e.next = 20, c(6e4 / (2 * t.speed));
                                case 20:
                                    return e.abrupt("break", 27);
                                case 21:
                                    return e.next = 23, c(6e4 / (4 * t.speed));
                                case 23:
                                    return e.abrupt("break", 27);
                                case 24:
                                    return e.next = 26, c(6e4 / t.speed);
                                case 26:
                                    return e.abrupt("break", 27);
                                case 27:
                                    r++, e.next = 2;
                                    break;
                                case 30:
                                    e.next = 35;
                                    break;
                                case 32:
                                    e.prev = 32, e.t1 = e.catch(0), location.reload();
                                case 35:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this, [
                            [0, 32]
                        ])
                    }))()
                }
            }, { key: "pauseMusic", value: function() { this.paused = !0 } }, { key: "setMusicType", value: function(e) { this.opts.type = e } }, { key: "setPlaySpeed", value: function(e) { this.speed = e } }]), e
        }();

    function c(e) { return new Promise(function(t) { setTimeout(t, e) }) }
    window.MusicBox = a;
    var l = a;
    t.default = l
}, function(e, t, n) { e.exports = n(10) }, function(e, t, n) {
    var r = function() { return this || "object" == typeof self && self }() || Function("return this")(),
        i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        o = i && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(11), i) r.regeneratorRuntime = o;
    else try { delete r.regeneratorRuntime } catch (e) { r.regeneratorRuntime = void 0 }
}, function(e, t) {
    ! function(t) {
        "use strict";
        var n, r = Object.prototype,
            i = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            u = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            a = o.toStringTag || "@@toStringTag",
            c = "object" == typeof e,
            l = t.regeneratorRuntime;
        if (l) c && (e.exports = l);
        else {
            (l = t.regeneratorRuntime = c ? e.exports : {}).wrap = b;
            var p = "suspendedStart",
                d = "suspendedYield",
                h = "executing",
                f = "completed",
                y = {},
                v = {};
            v[u] = function() { return this };
            var m = Object.getPrototypeOf,
                g = m && m(m(O([])));
            g && g !== r && i.call(g, u) && (v = g);
            var x = k.prototype = M.prototype = Object.create(v);
            T.prototype = x.constructor = k, k.constructor = T, k[a] = T.displayName = "GeneratorFunction", l.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === T || "GeneratorFunction" === (t.displayName || t.name)) }, l.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(x), e }, l.awrap = function(e) { return { __await: e } }, S(L.prototype), L.prototype[s] = function() { return this }, l.AsyncIterator = L, l.async = function(e, t, n, r) { var i = new L(b(e, t, n, r)); return l.isGeneratorFunction(t) ? i : i.next().then(function(e) { return e.done ? e.value : i.next() }) }, S(x), x[a] = "Generator", x[u] = function() { return this }, x.toString = function() { return "[object Generator]" }, l.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() { for (; t.length;) { var r = t.pop(); if (r in e) return n.value = r, n.done = !1, n } return n.done = !0, n }
            }, l.values = O, j.prototype = {
                constructor: j,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(_), !e)
                        for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(r, i) { return s.type = "throw", s.arg = e, t.next = r, i && (t.method = "next", t.arg = n), !!i }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var u = this.tryEntries[o],
                            s = u.completion;
                        if ("root" === u.tryLoc) return r("end");
                        if (u.tryLoc <= this.prev) {
                            var a = i.call(u, "catchLoc"),
                                c = i.call(u, "finallyLoc");
                            if (a && c) { if (this.prev < u.catchLoc) return r(u.catchLoc, !0); if (this.prev < u.finallyLoc) return r(u.finallyLoc) } else if (a) { if (this.prev < u.catchLoc) return r(u.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < u.finallyLoc) return r(u.finallyLoc) }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var o = r; break } }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var u = o ? o.completion : {};
                    return u.type = e, u.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(u)
                },
                complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y },
                finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), y } },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                _(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) { return this.delegate = { iterator: O(e), resultName: t, nextLoc: r }, "next" === this.method && (this.arg = n), y }
            }
        }

        function b(e, t, n, r) {
            var i = t && t.prototype instanceof M ? t : M,
                o = Object.create(i.prototype),
                u = new j(r || []);
            return o._invoke = function(e, t, n) {
                var r = p;
                return function(i, o) {
                    if (r === h) throw new Error("Generator is already running");
                    if (r === f) { if ("throw" === i) throw o; return C() }
                    for (n.method = i, n.arg = o;;) {
                        var u = n.delegate;
                        if (u) { var s = E(u, n); if (s) { if (s === y) continue; return s } }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === p) throw r = f, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = h;
                        var a = w(e, t, n);
                        if ("normal" === a.type) { if (r = n.done ? f : d, a.arg === y) continue; return { value: a.arg, done: n.done } }
                        "throw" === a.type && (r = f, n.method = "throw", n.arg = a.arg)
                    }
                }
            }(e, n, u), o
        }

        function w(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

        function M() {}

        function T() {}

        function k() {}

        function S(e) {
            ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) { return this._invoke(t, e) } })
        }

        function L(e) {
            var t;
            this._invoke = function(n, r) {
                function o() {
                    return new Promise(function(t, o) {
                        ! function t(n, r, o, u) {
                            var s = w(e[n], e, r);
                            if ("throw" !== s.type) {
                                var a = s.arg,
                                    c = a.value;
                                return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) { t("next", e, o, u) }, function(e) { t("throw", e, o, u) }) : Promise.resolve(c).then(function(e) { a.value = e, o(a) }, function(e) { return t("throw", e, o, u) })
                            }
                            u(s.arg)
                        }(n, r, t, o)
                    })
                }
                return t = t ? t.then(o, o) : o()
            }
        }

        function E(e, t) {
            var r = e.iterator[t.method];
            if (r === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = n, E(e, t), "throw" === t.method)) return y;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var i = w(r, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, y;
            var o = i.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, y) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
        }

        function N(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function _(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function j(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(N, this), this.reset(!0) }

        function O(e) {
            if (e) {
                var t = e[u];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var r = -1,
                        o = function t() {
                            for (; ++r < e.length;)
                                if (i.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                    return o.next = o
                }
            }
            return { next: C }
        }

        function C() { return { value: n, done: !0 } }
    }(function() { return this || "object" == typeof self && self }() || Function("return this")())
}, function(e, t) {
    function n(e, t, n, r, i, o, u) {
        try {
            var s = e[o](u),
                a = s.value
        } catch (e) { return void n(e) }
        s.done ? t(a) : Promise.resolve(a).then(r, i)
    }
    e.exports = function(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(i, o) {
                var u = e.apply(t, r);

                function s(e) { n(u, i, o, s, a, "next", e) }

                function a(e) { n(u, i, o, s, a, "throw", e) }
                s(void 0)
            })
        }
    }
}, function(e, t, n) {
    var r = { "./bg_1.jpg": 14, "./bg_2.jpg": 15, "./bg_3.jpg": 16, "./bg_4.jpg": 17 };

    function i(e) { return n(o(e)) }

    function o(e) { var t = r[e]; if (!(t + 1)) throw new Error("Cannot find module '" + e + "'."); return t }
    i.keys = function() { return Object.keys(r) }, i.resolve = o, e.exports = i, i.id = 13
}, function(e, t, n) { e.exports = n.p + "images/bg_1_b137c3a3.jpg" }, function(e, t, n) { e.exports = n.p + "images/bg_2_2a081e1d.jpg" }, function(e, t, n) { e.exports = n.p + "images/bg_3_befd1c35.jpg" }, function(e, t, n) { e.exports = n.p + "images/bg_4_5458cca5.jpg" }]);