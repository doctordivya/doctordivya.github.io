(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{200:function(e,n,t){"use strict";t.d(n,"d",function(){return a}),t.d(n,"c",function(){return r}),t.d(n,"a",function(){return u}),t.d(n,"b",function(){return o});var a={dashboard:"/patient"},r={dashboard:"/doctor"},u={dashboard:"/authorization",signIn:"/sign-in",signUp:"/sign-up"},o={dashboard:"/",blog:"/blog",publications:"/publications",notFound:"/not_found"}},218:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a="doctor",r="patient"},479:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(22),o=t(209),c=t(42),i=t(271),l=t.n(i),d=t(272),m=t(230),s=function(e){return function(n){var t=Object(a.useState)(null),u=Object(m.a)(t,2),o=u[0],c=u[1],i=Object(a.useState)(!0),s=Object(m.a)(i,2),b=s[0],f=s[1],p=function(){var t=Object(d.a)(l.a.mark(function t(a){var u,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:u=t.sent,o=u.default,a&&(c(r.a.createElement(o,n)),f(!1));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)(function(){var e=!0;return p(e),function(){e=!1}},[]),b?r.a.createElement("div",null,"Loading..."):o||r.a.createElement("div",null)}},b=t(218),f=t(466),p=function(e){var n=e.component,t=e.authorisation,a=e.userType,u=Object(f.a)(e,["component","authorisation","userType"]);return r.a.createElement(o.b,Object.assign({},u,{render:function(e){return t===a?r.a.createElement(n,e):r.a.createElement(o.a,{to:{pathname:F.b.notFound,state:{from:e.location}}})}}))},h=t(219),E=function(e){return{authorisation:e.tokenUpdate.token}},v=function(e){var n=e.url;return r.a.createElement(o.c,null,r.a.createElement(o.b,{exact:!0,path:n,component:s(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4)]).then(t.bind(null,477))})}),r.a.createElement(o.b,{render:function(){return r.a.createElement(o.a,{to:{pathname:F.b.notFound}})}}))},j=function(e){var n=e.match.url;return r.a.createElement("div",null,r.a.createElement(v,{url:n}))},O=function(e){var n=e.url;return r.a.createElement(o.c,null,r.a.createElement(o.b,{exact:!0,path:n,component:s(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4)]).then(t.bind(null,477))})}),r.a.createElement(o.b,{render:function(){return r.a.createElement(o.a,{to:{pathname:F.b.notFound}})}}))},y=function(e){var n=e.match.url;return r.a.createElement("div",null,r.a.createElement(O,{url:n}))},g=function(e){e.url;return r.a.createElement(o.c,null,r.a.createElement(o.b,{render:function(){return r.a.createElement(o.a,{to:{pathname:F.b.notFound}})}}))},w=function(e){var n=e.match.url;return r.a.createElement("div",null,r.a.createElement(g,{url:n}))},F=t(200),x=r.a.lazy(function(){return Promise.all([t.e(1),t.e(15),t.e(30)]).then(t.bind(null,481))});n.default=Object(u.c)(function(){var e=Object(h.a)([E],function(e){return e});return function(n,t){return e(n,t)}})(function(e){var n=e.authorisation,a=e.history;return r.a.createElement(c.a,{history:a},r.a.createElement(x,null,r.a.createElement(o.c,null,r.a.createElement(o.b,{exact:!0,path:F.b.dashboard,component:s(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(4)]).then(t.bind(null,477))})}),r.a.createElement(o.b,{exact:!0,path:F.b.notFound,component:s(function(){return t.e(23).then(t.bind(null,483))})}),r.a.createElement(p,{path:F.d.dashboard,component:j,authorisation:n,userType:b.b}),r.a.createElement(p,{path:F.c.dashboard,component:y,authorisation:n,userType:b.a}),r.a.createElement(p,{path:F.a.dashboard,component:w,authorisation:n,userType:void 0}),r.a.createElement(o.b,{render:function(){return r.a.createElement(o.a,{to:{pathname:F.b.notFound}})}}))))})}}]);