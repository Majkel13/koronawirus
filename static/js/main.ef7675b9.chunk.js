(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(55)},35:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),c=(n(35),n(4)),d=n.n(c),u=n(6),s=n(5),l=n(9),p=n(10),f=n(13),h=n(11),m=n(14),v=n(2),g=n(7),x=n.n(g),b=n(3);function y(){var t=Object(v.a)(["\nposition:absolute;\nright: 10px;\nbottom: 20px;\nborder-radius:10px;\npadding:10px;\nfont-size:16px;\nborder:0;\nfont-size: 15px;\nfont-family: 'Roboto Mono';\ncolor:"," ;\nbackground: "," ;\n@media (max-width: 600px){\n  font-size: 11px;\n  bottom: 5px;\n}\n"]);return y=function(){return t},t}function k(){var t=Object(v.a)(["\nfont-size: 15px;\ncolor: #000;\n@media (max-width: 600px){\n  font-size: 11px;\n}\n\n"]);return k=function(){return t},t}function w(){var t=Object(v.a)(["\npadding-top:5px;\npadding-bottom:5px;\n"]);return w=function(){return t},t}function j(){var t=Object(v.a)(["\nbackground: #343744;\nborder-style: dashed;\ncolor: #aaa;\nfont-size: 30px;\nborder-radius: 5px;\ntext-align-last: center;\n   text-align: center;\n   -ms-text-align-last: center;\n   -moz-text-align-last: center;\npadding-top:5px;\npadding-bottom:5px;\nwidth: 80%;\n"]);return j=function(){return t},t}function O(){var t=Object(v.a)(["\ncolor: #aaa;\nfont-size:30px;\npadding-top:15px;\n"]);return O=function(){return t},t}function E(){var t=Object(v.a)(["\nbackground: "," ;\nwidth: 150px;\npadding: 10px;\nborder-radius: 10px;\ncolor: #aaa;\nmargin: 0 auto;\nmargin-top:10px;\n"]);return E=function(){return t},t}function C(){var t=Object(v.a)(["\ndisplay: flex;\njustify-content: center;\n@media (max-width: 768px) {\n    display: inline;\n    justify-content: center;\n  }\n  padding-bottom:25px;\n  padding-top:25px;\n"]);return C=function(){return t},t}function P(){var t=Object(v.a)(["\nbackground: "," ;\nheight: inherit;\nwidth: inherit;\npadding-top: 40px;\npadding-bottom: 40px;\n"]);return P=function(){return t},t}function z(){var t=Object(v.a)(["\nbackground: "," ;\nwidth: 80%;\nborder-radius: 25px;\npadding: 20px;\npadding-top:20px;\nmax-width: 680px;\ntext-align:center;\nmargin: 0 auto;\n\njustify-content: center;\nfont-size: 20px;\nfont-family: 'Roboto Mono', monospace;\nposition: relative;\n"]);return z=function(){return t},t}var D=b.a.div(z(),function(t){return t.dark?"rgb(52, 55, 68)":"#eee"}),S=b.a.div(P(),function(t){return t.dark?"1f2427":"#aaa"}),M=b.a.div(C()),J=b.a.div(E(),function(t){return t.dark?"#ff8c66":"#1f2427"}),U=b.a.header(O()),W=b.a.select(j()),B=b.a.option(w()),L=b.a.footer(k()),N=b.a.button(y(),function(t){return t.dark?"#aaa":"#1f2427"},function(t){return t.dark?"#1f2427":"#aaa"}),R=function(t){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props,e=t.confirmed,n=t.recovered,a=t.deaths,o=t.title;return r.a.createElement("div",null,r.a.createElement(U,null,o),r.a.createElement(M,null,r.a.createElement(J,null,r.a.createElement("header",null,"Zara\u017ce\u0144"),r.a.createElement("span",{style:{color:"#b38f00"}},e)),r.a.createElement(J,null,r.a.createElement("header",null,"Wyzdrownie\u0144"),r.a.createElement("span",{style:{color:"#12aa23"}},n)),r.a.createElement(J,null,r.a.createElement("header",null,"Zgon\xf3w"),r.a.createElement("span",{style:{color:"#c11"}},a))))}}]),e}(a.Component),Z=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(f.a)(this,Object(h.a)(e).call(this,t))).state={confirmed:0,recovered:0,deaths:0,confirmedPoland:0,recoveredPoland:0,deathsPoland:0,confirmedCountry:0,recoveredCountry:0,deathsCountry:0,countries:[],lastUpdate:"",dark:!1},n.componentDidMount=function(){n.getData(),n.getDataPoland(),n.getCountry()},n.changeMotyw=function(){n.setState({dark:!n.state.dark})},n.getCountryData=n.getCountryData.bind(Object(s.a)(Object(s.a)(n))),n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"getData",value:function(){var t=Object(u.a)(d.a.mark(function t(){var e,n,a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://covid19.mathdro.id/api");case 2:e=t.sent,n=e.data.lastUpdate,a=n.slice(0,10),r=n.slice(11,16),this.setState({confirmed:e.data.confirmed.value,recovered:e.data.recovered.value,deaths:e.data.deaths.value,lastUpdate:a+" "+r});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getDataPoland",value:function(){var t=Object(u.a)(d.a.mark(function t(){var e;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://covid19.mathdro.id/api/countries/PL");case 2:e=t.sent,this.setState({confirmedPoland:e.data.confirmed.value,recoveredPoland:e.data.recovered.value,deathsPoland:e.data.deaths.value});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getCountry",value:function(){var t=Object(u.a)(d.a.mark(function t(){var e,n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://covid19.mathdro.id/api/countries");case 2:e=t.sent,n=JSON.parse(JSON.stringify(e.data.countries)),this.setState({countries:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var t=Object(u.a)(d.a.mark(function t(e){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://covid19.mathdro.id/api/countries/".concat(e.target.value));case 2:n=t.sent,this.setState({confirmedCountry:n.data.confirmed.value,recoveredCountry:n.data.recovered.value,deathsCountry:n.data.deaths.value});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"selectCountry",value:function(){return this.state.countries.map(function(t,e){return r.a.createElement(B,{key:e},t.name)})}},{key:"render",value:function(){return r.a.createElement(S,{dark:this.state.dark},r.a.createElement(D,{dark:this.state.dark},r.a.createElement(N,{onClick:this.changeMotyw,dark:this.state.dark},"Dark/Light"),r.a.createElement(U,null,"Statystyki koronawirusa"),r.a.createElement(R,{title:"\u015awiat:",confirmed:this.state.confirmed,recovered:this.state.recovered,deaths:this.state.deaths}),r.a.createElement(R,{title:"Polska:",confirmed:this.state.confirmedPoland,recovered:this.state.recoveredPoland,deaths:this.state.deathsPoland}),r.a.createElement(U,null,r.a.createElement(W,{onChange:this.getCountryData},this.selectCountry())),r.a.createElement(R,{title:"",confirmed:this.state.confirmedCountry,recovered:this.state.recoveredCountry,deaths:this.state.deathsCountry}),r.a.createElement(L,{style:{color:"#000"}}," Ostatnia aktualizacja: ",r.a.createElement("br",null),this.state.lastUpdate)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){console.error(t.message)})}},[[30,1,2]]]);
//# sourceMappingURL=main.ef7675b9.chunk.js.map