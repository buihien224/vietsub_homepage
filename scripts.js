function znReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
window.znStorage = {
    _storage: new WeakMap,
    put: function(e, t, n) {
        this._storage.has(e) || this._storage.set(e, new Map), this._storage.get(e).set(t, n)
    },
    get: function(e, t) {
        return this._storage.get(e).get(t)
    },
    has: function(e, t) {
        return this._storage.has(e) && this._storage.get(e).has(t)
    },
    remove: function(e, t) {
        var n = this._storage.get(e).delete(t);
        return 0 === !this._storage.get(e).size && this._storage.delete(e), n
    }
};
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
});
window.znRespondToVisibility = function(e, t) {
    var n = {
            root: null,
            threshold: .01
        },
        i = new IntersectionObserver((function(e, n) {
            var i = e.map((function(e) {
                    return e.isIntersecting
                })),
                a = i.includes(!0);
            t(a)
        }), n);
    i.observe(e)
};
znReady(function() {
    (function() {
        (function() {
            var e = document.getElementById("znid-157939816564"),
                t = null != document.querySelector(".zn-container.editing");
            function n(e, t, n) {
                this.addEventListener("click", (function() {
                    i(e + encodeURIComponent(t), n)
                }))
            }
            function i(e, t) {
                var n = (screen.width - 640) / 2,
                    i = (screen.height - 640) / 2,
                    a = "menubar=no,toolbar=no,status=no,width=640,height=640,top=" + i + ",left=" + n;
                "_blank" == t ? window.open(e) : "_self" == t ? window.location = e : window.open(e, t, a)
            }
            t || e.querySelectorAll(".zn-social-share-item").forEach((function(e) {
                var t, i = "Share",
                    a = "current",
                    o = "custom" == a,
                    r = "",
                    s = "Check out my awesome shop!",
                    l = o && r ? r : document.URL,
                    c = !0,
                    p = e.getAttribute("ref-name");
                switch (p) {
                    case "facebook":
                        t = "https://www.facebook.com/sharer.php?quote=" + s + "&u=";
                        break;
                    case "twitter":
                        t = "https://twitter.com/intent/tweet?text=" + s + "&url=";
                        break;
                    case "pinterest":
                        t = "http://pinterest.com/pin/create/button/?description=" + s + "&url=";
                        break;
                    case "linkedin":
                        t = "https://www.linkedin.com/shareArticle?mini=true&url=";
                        break;
                    case "email":
                        var d = "mailto:?body=" + s + " " + l;
                        e.setAttribute("href", d), c = !1;
                        break
                }
                c && e && n.call(e, t, l, i)
            }))
        })();
    })();
    (function() {
        var e = "",
            t = null != document.querySelector(".zn-container.editing");
        e && !t && (window.fbAsyncInit = function() {
            FB.init({
                appId: "912333495590130",
                autoLogAppEvents: !0,
                xfbml: !0,
                version: "v2.11"
            })
        }, function(e, t, n) {
            var i, a = e.getElementsByTagName(t)[0];
            e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(i, a))
        }(document, "script", "facebook-jssdk"))
    })();
    (function() {
        var e = null != document.querySelector(".zn-container.editing"),
            t = document.body;
        p();
        var n = "false",
            i = "true",
            a = "false",
            o = "true",
            r = "false",
            s = "true" == n && (e || "true" != r || !localStorage.znHideAnnouncementBar);
        if (s) {
            var l = document.createElement("div");
            if (l.classList.add("zn-announcement-bar"), "true" == o && l.classList.add("pad-right"), l.innerHTML = '\n        <div class="zn-announcement-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n        '.concat("true" == i ? '\n          <a class="zn-announcement-button" href="" target="'.concat("true" == a ? "_blank" : "", '">\n            <button>Click me</button>\n          </a>\n        ') : "", "\n        ").concat("true" == o ? '<i class="material-icons-outlined zn-annoucement-close">close</i>' : "", "\n      "), t.prepend(l), !e && "true" == o) {
                var c = l.querySelector(".zn-annoucement-close");
                c.addEventListener("click", (function() {
                    p(), "true" == r && (localStorage.znHideAnnouncementBar = !0)
                }))
            }
        }
        function p() {
            var e = t.querySelector(".zn-announcement-bar");
            e && e.parentNode.removeChild(e)
        }
    })();
});