(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(55)},35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=(n(35),n(4)),s=n.n(i),d=n(5),l=n(8),u=n(9),p=n(11),m=n(10),h=n(12),f=n(7),v=n(1),y=n(6),b=n.n(y),g=n(2);function k(){var e=Object(v.a)(["\ncolor: #aaa;\nfont-size:30px;\npadding-top:15px;\n"]);return k=function(){return e},e}function x(){var e=Object(v.a)(["\nbackground: "," ;\nwidth: 150px;\npadding: 10px;\nborder-radius: 10px;\ncolor: #aaa;\nmargin: 0 auto;\nmargin-top:10px;\n"]);return x=function(){return e},e}function w(){var e=Object(v.a)(["\ndisplay: flex;\njustify-content: center;\n@media (max-width: 768px) {\n    display: inline;\n    justify-content: center;\n  }\n  padding-bottom:25px;\n  padding-top:25px;\n"]);return w=function(){return e},e}var E=g.a.div(w()),j=g.a.div(x(),function(e){return e.dark?"#ff8c66":"#1f2427"}),O=g.a.header(k()),z=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.confirmed,n=e.recovered,a=e.deaths,o=e.title;return r.a.createElement("div",null,r.a.createElement(O,null,o),r.a.createElement(E,null,r.a.createElement(j,null,r.a.createElement("header",null,"Zara\u017ce\u0144"),r.a.createElement("span",{style:{color:"#b38f00"}},t)),r.a.createElement(j,null,r.a.createElement("header",null,"Wyzdrownie\u0144"),r.a.createElement("span",{style:{color:"#12aa23"}},n)),r.a.createElement(j,null,r.a.createElement("header",null,"Zgon\xf3w"),r.a.createElement("span",{style:{color:"#c11"}},a))))}}]),t}(a.Component);function C(){var e=Object(v.a)(["\n@media (max-width: 400px){\n  font-size: 15px;\n}\n"]);return C=function(){return e},e}function P(){var e=Object(v.a)(["\ncursor: pointer;\nmargin-top: -20px;\nmargin-bottom: 20px;\nfont-size: 15px;\n@media (max-width: 768px){\n  margin-top: 3px;\n}\n"]);return P=function(){return e},e}function S(){var e=Object(v.a)(["\nposition:absolute;\nright: 10px;\nbottom: 20px;\nborder-radius:10px;\npadding:10px;\nfont-size:16px;\nborder:0;\nfont-size: 15px;\nfont-family: 'Roboto Mono';\ncolor:"," ;\nbackground: "," ;\n@media (max-width: 600px){\n  font-size: 11px;\n  bottom: 5px;\n}\n"]);return S=function(){return e},e}function D(){var e=Object(v.a)(["\nfont-size: 15px;\ncolor: #000;\n@media (max-width: 600px){\n  font-size: 11px;\n}\n\n"]);return D=function(){return e},e}function U(){var e=Object(v.a)(["\npadding-top:5px;\npadding-bottom:5px;\n"]);return U=function(){return e},e}function _(){var e=Object(v.a)(["\nbackground: "," ;\nborder-style: dashed;\ncolor: #aaa;\nfont-size: 30px;\nborder-radius: 5px;\ntext-align-last: center;\n   text-align: center;\n   -ms-text-align-last: center;\n   -moz-text-align-last: center;\npadding-top:5px;\npadding-bottom:5px;\nwidth: 80%;\n"]);return _=function(){return e},e}function J(){var e=Object(v.a)(["\ncolor: #aaa;\nfont-size:30px;\npadding-top:15px;\n"]);return J=function(){return e},e}function M(){var e=Object(v.a)(["\nbackground: "," ;\nheight: 100%;\nmin-height: 100vh;\nwidth: inherit;\npadding-top: 4vh;\npadding-bottom: 4vh;\n"]);return M=function(){return e},e}function N(){var e=Object(v.a)(["\nbackground: "," ;\nwidth: 80%;\nborder-radius: 25px;\npadding: 20px;\npadding-top:20px;\nmax-width: 680px;\ntext-align:center;\nmargin: 0 auto;\n\njustify-content: center;\nfont-size: 20px;\nfont-family: 'Roboto Mono', monospace;\nposition: relative;\n"]);return N=function(){return e},e}var W=g.a.div(N(),function(e){return e.dark?"rgb(52, 55, 68)":"#eee"}),B=g.a.div(M(),function(e){return e.dark?"1f2427":"#aaa"}),L=g.a.header(J()),T=g.a.select(_(),function(e){return e.dark?"#343744":"#eee"}),A=g.a.option(U()),R=g.a.footer(D()),Z=g.a.button(S(),function(e){return e.dark?"#aaa":"#1f2427"},function(e){return e.dark?"#1f2427":"#aaa"}),G=g.a.div(P()),I=g.a.div(C()),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={confirmed:0,recovered:0,deaths:0,confirmedPoland:0,recoveredPoland:0,deathsPoland:0,confirmedCountry:0,recoveredCountry:0,deathsCountry:0,countries:[],lastUpdate:"",dark:!0,timelineitems:[],time:[],click:!1,error:!1},n.componentDidMount=function(){n.getData(),n.getDataPoland(),n.getCountry(),n.getTimeDataPoland()},n.changeMotyw=function(){n.setState({dark:!n.state.dark})},n.convertDate=function(e){var t=n.state.time[e].slice(0,1);return n.state.time[e].slice(2,4)+"-0"+t},n.getDetails=function(){n.setState({click:!n.state.click})},n.getCountryData=n.getCountryData.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getData",value:function(){var e=Object(d.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://covid19.mathdro.id/api");case 3:t=e.sent,n=t.data.lastUpdate,a=n.slice(0,10),r=n.slice(11,16),this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,deaths:t.data.deaths.value,lastUpdate:a+" "+r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({confirmed:"brak danych",recovered:"brak danych",deaths:"brak danych",lastUpdate:"brak danych"});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"getDataPoland",value:function(){var e=Object(d.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://covid19.mathdro.id/api/countries/PL");case 3:t=e.sent,this.setState({confirmedPoland:t.data.confirmed.value,recoveredPoland:t.data.recovered.value,deathsPoland:t.data.deaths.value}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({confirmedPoland:"brak danych",recoveredPoland:"brak danych",deathsPoland:"brak danych"});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"getTimeDataPoland",value:function(){var e=Object(d.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.thevirustracker.com/free-api?countryTimeline=PL");case 3:t=e.sent,n=JSON.parse(JSON.stringify(t.data.timelineitems[0])),a=Object.keys(t.data.timelineitems[0]),(r=Object.values(n)).pop(),this.setState({timelineitems:r,time:a}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({timelineitems:[],time:[],error:!0}),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"getCountry",value:function(){var e=Object(d.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://covid19.mathdro.id/api/countries");case 3:t=e.sent,n=JSON.parse(JSON.stringify(t.data.countries)),this.setState({countries:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({countries:[]});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"getCountryData",value:function(){var e=Object(d.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 3:n=e.sent,this.setState({confirmedCountry:n.data.confirmed.value,recoveredCountry:n.data.recovered.value,deathsCountry:n.data.deaths.value}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({confirmedCountry:"brak danych",recoveredCountry:"brak danych",deathsCountry:"brak danych"});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"selectCountry",value:function(){return this.state.countries.map(function(e,t){return r.a.createElement(A,{key:t},e.name)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.dark,a=t.click,o=t.error;return r.a.createElement(B,{dark:n},r.a.createElement(W,{dark:n},r.a.createElement(Z,{onClick:this.changeMotyw,dark:n},"Dark/Light"),r.a.createElement(L,null,"Statystyki koronawirusa"),r.a.createElement(z,{title:"\u015awiat",confirmed:this.state.confirmed,recovered:this.state.recovered,deaths:this.state.deaths}),r.a.createElement(z,{title:"Polska",confirmed:this.state.confirmedPoland,recovered:this.state.recoveredPoland,deaths:this.state.deathsPoland}),r.a.createElement(G,{onClick:this.getDetails},a?r.a.createElement("span",null,"Ukryj"):r.a.createElement("span",null,"Poka\u017c")," szczeg\xf3\u0142y"),r.a.createElement(I,null,a?r.a.createElement("div",null,this.state.timelineitems.map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("p",{style:{color:"#999"}},e.convertDate(n)),r.a.createElement("p",null," Nowe przypadki:",r.a.createElement("span",{style:{color:"#b38f00"}}," ",t.new_daily_cases),r.a.createElement("br",null),"Nowe zgony: ",r.a.createElement("span",{style:{color:"#c11"}},t.new_daily_deaths)," ",r.a.createElement("br",null),"Wszystkie przypadki: ",r.a.createElement("span",{style:{color:"#bb7733"}}," ",t.total_cases),r.a.createElement("br",null),"\u0141\u0105cznie zgon\xf3w: ",r.a.createElement("span",{style:{color:"#911"}},t.total_deaths)," ",r.a.createElement("br",null),"\u0141\u0105cznie wyzdrowie\u0144:",r.a.createElement("span",{style:{color:"#12aa23"}}," ",t.total_recoveries))," ")})," ",r.a.createElement("span",{style:{color:"#c11",fontSize:"14px"}},o?r.a.createElement("span",null,"Brak danych"):r.a.createElement("span",null,"UWAGA Dane szczeg\xf3\u0142owe dotycz\u0105ce wyzdrownie\u0144 pochodz\u0105 z innego \u017ar\xf3d\u0142a i mog\u0105 si\u0119 r\xf3\u017cni\u0107 od danych og\xf3lnych"))):r.a.createElement("div",null)),r.a.createElement(L,null,r.a.createElement(T,{dark:n,onChange:this.getCountryData},this.selectCountry())),r.a.createElement(z,{title:"",confirmed:this.state.confirmedCountry,recovered:this.state.recoveredCountry,deaths:this.state.deathsCountry}),r.a.createElement(R,{style:{color:"#000"}}," Ostatnia aktualizacja",r.a.createElement("br",null),this.state.lastUpdate)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[30,1,2]]]);
//# sourceMappingURL=main.3aeed908.chunk.js.map