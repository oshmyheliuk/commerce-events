"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[505],{8466:function(e,t,n){n.d(t,{o:function(){return Q}});var r=n(2982),i=n(5861),s=n(4687),a=n.n(s),o=n(5007),l=n(4958),c=n(4539),u=n(2199),m=n(4129),d=n(2026),f=n(158),p=n(5900),h=n.n(p),g=n(2222),v=n(8870);var y="688px",b="keywords",w=function(e){return e.replace(/[\u00A0-\u9999<>\&]/g,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>")},x=function(e,t){var n=new URLSearchParams(window.location.search);n.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+n)},Z=function(e){return e.map((function(e){return Object.keys(e)[0]}))},k=function(){var e=(0,i.Z)(a().mark((function e(t,n,i,s){var o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],"all"===Object.keys(i[0])[0]?i=s:(l=Z(i).filter((function(e){return"all"!==e})),i=[].concat((0,r.Z)(l),(0,r.Z)(s.filter((function(e){return!l.includes(e)}))))),i.forEach((function(e){o.push({indexName:e,query:n,params:{hitsPerPage:Math.ceil(50/i.length),attributesToRetrieve:["objectID","url","title","description"]}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)(a().mark((function e(t,n,r,i,s){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],(r="all"===r?i:[r]).forEach((function(e){o.push({indexName:e,query:n,params:{facets:[b],attributesToRetrieve:["objectID","url"],hitsPerPage:Math.ceil(100/r.length),filters:s.map((function(e){return'keywords:"'+e+'"'})).join(" AND ")}})})),e.next=5,t.multipleQueries(o);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),z=function(e,t){e.forEach((function(e){var n=e.objectID,r=e.url,i=e._highlightResult;(0,f.Bm)(r)||t.find((function(e){return e.url===r}))||t.push({objectID:n,url:r,_highlightResult:i})}))},A=function(e,t){e.keywords&&Object.keys(e.keywords).forEach((function(n){var r,i=t.find((function(e){return Object.keys(e)[0]===n}));i?i[n]+=e.keywords[n]:t.push(((r={})[n]=e.keywords[n],r))}))},_={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},E={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},R={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},q={name:"1jwcxx3",styles:"font-style:italic"},j={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},N={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},H={name:"13udsys",styles:"height:100%"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},L={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},B={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},I={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},O={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},C={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},D={name:"a4hmbt",styles:"position:absolute"},T={name:"11qpleq",styles:"min-width:auto;width:100%"},P={name:"1d3w5wq",styles:"width:100%"},Q=function(e){var t=e.algolia,n=e.searchIndex,s=e.indexAll,p=e.showSearch,b=e.setShowSearch,Q=e.searchButtonId,V=e.isIFramed,F=(0,o.useState)(""),U=F[0],J=F[1],K=(0,o.useState)(Z(n)[0]),X=K[0],G=K[1],W=(0,o.useState)([]),Y=W[0],$=W[1],ee=(0,o.useState)(!1),te=ee[0],ne=ee[1],re=(0,o.useState)(!1),ie=re[0],se=re[1],ae=(0,o.useState)(!1),oe=ae[0],le=ae[1],ce=(0,o.useRef)(null),ue=(0,o.useRef)(null),me=(0,o.useRef)(null),de=(0,o.useRef)(null),fe=(0,o.useState)([]),pe=fe[0],he=fe[1],ge=(0,o.useState)([]),ve=ge[0],ye=ge[1],be=(0,o.useState)([]),we=be[0],xe=be[1],Ze=(0,o.useState)(!1),ke=Ze[0],Se=Ze[1],ze=(0,o.useState)(!1),Ae=ze[0],_e=ze[1],Ee=(0,o.useRef)(null),Re=(0,o.useState)(!1),qe=Re[0],je=Re[1],Ne=function(e){var t;void 0===e&&(e=n[Z(n).indexOf(X)].tabRef),te&&null!==(t=e)&&void 0!==t&&t.current&&((0,u.Rp)(Ee,qe),(0,u.BA)(Ee,e))},He=function(){var e=(0,i.Z)(a().mark((function e(){var n,r,i,o,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U.length){e.next=16;break}return Se(!1),x(f.AQ.query,U),x(f.AQ.keywords,Y),x(f.AQ.index,X),V&&(r=JSON.stringify({query:U,keywords:Y,index:X}),a=void 0,a=document.referrer,(i=(a.indexOf("localhost")>=0||a.indexOf("developer-stage.adobe")>=0||a.indexOf("hlx.page")>=0||a.indexOf("hlx.live")>=0||a.indexOf("developer.adobe")>=0)&&a)&&parent.postMessage(r,i)),Ne(),ne(!0),e.next=10,S(t,U,X,s,Y);case 10:o=e.sent,l=[],c=[],null!=o&&null!==(n=o.results)&&void 0!==n&&n.length&&o.results.forEach((function(e){var t=e.hits,n=e.facets;z(t,l),A(n,c)})),ye(l),xe(c);case 16:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(p){var e=new URL(window.location).searchParams,t=e.get(f.AQ.query),n=e.get(f.AQ.keywords),r=e.get(f.AQ.index);r&&G(r),n&&$(n.split(",")),null!=t&&t.length&&(J(t),le(!0),_e(!0)),null!=me&&me.current&&me.current.focus()}}),[p]),(0,o.useEffect)((function(){He()}),[X,Y]),(0,o.useEffect)((function(){Ae&&(_e(!1),He())}),[Ae,_e]),(0,o.useEffect)((function(){null!=de&&de.current&&(de.current.scrollTop=0)}),[ve]),(0,o.useEffect)((function(){te?(Ne(),je(!0)):je(!1)}),[te]),(0,o.useEffect)((function(){var e=function(e){var t=e.target;Se(!1),ce.current&&!ce.current.contains(t)&&t.id!==Q&&b(!1)};return document.addEventListener("click",e,!0),function(){document.removeEventListener("click",e,!0)}}),[Se,te,b,ce]),(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&b(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[b]),V&&((0,o.useEffect)((function(){ue&&pe.length>0&&ue.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[pe]),(0,o.useEffect)((function(){de&&ve.length>0&&de.current.querySelectorAll("a").forEach((function(e){e.target="_top"}))}),[ve])),(0,l.tZ)(o.default.Fragment,null,(0,l.tZ)("div",{ref:ce,css:(0,l.iv)("position:fixed;top:",V?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",te&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",f.q9,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,l.tZ)("div",{css:(0,l.iv)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,l.tZ)("form",{css:P,className:"spectrum-Search",onSubmit:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,He();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(0,l.tZ)("div",{className:h()("spectrum-Textfield",{"is-focused":ie}),css:T},(0,l.tZ)(g.Magnify,{className:"spectrum-Textfield-icon"}),(0,l.tZ)("input",{ref:me,value:U,onFocus:function(){se(!0)},onBlur:function(){se(!1)},onKeyDown:function(e){var t=e.key;null!=ue&&ue.current&&("ArrowDown"===t?ue.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&ue.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:function(){var e=(0,i.Z)(a().mark((function e(r){var i,o,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.target.value,J(i),!i.length||ve.length){e.next=11;break}return le(!0),e.next=6,k(t,i,n,s);case 6:null!=(l=e.sent)&&null!==(o=l.results)&&void 0!==o&&o.length?(c=[],l.results.forEach((function(e){var t=e.hits;z(t,c)})),he(c),ve.length||ne(!1)):he([]),Se(!0),e.next=13;break;case 11:le(!1),Se(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),oe&&(0,l.tZ)("button",{css:D,tabIndex:"-1","aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:function(){J(""),me.current.focus()}},(0,l.tZ)(g.Cross,null))),(0,l.tZ)(d.J,{isOpen:ke,css:(0,l.iv)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",y,";@media screen and (max-width: ",f.q9,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},pe.length>0?(0,l.tZ)(m.v2,{ref:ue,onKeyDown:function(e){var t=e.key;if(null!=ue&&ue.current&&ue.current.contains(document.activeElement))if("ArrowDown"===t){var n=document.activeElement.nextElementSibling;n?n.focus():ue.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){var r=document.activeElement.previousElementSibling;r?r.focus():ue.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},pe.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,l.tZ)(m.ck,{key:e.objectID,href:r},(0,l.tZ)("div",{css:C},(0,l.tZ)("strong",{dangerouslySetInnerHTML:{__html:w(i)}}),(0,l.tZ)("div",{css:O},r),(0,l.tZ)("div",{dangerouslySetInnerHTML:{__html:w(s)}})))}))):(0,l.tZ)("div",{css:I},(0,l.tZ)("div",{css:B},(0,l.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:L},"No Results Found"),(0,l.tZ)("em",null,"Try another search term"))))),te&&(0,l.tZ)("div",{css:(0,l.iv)("display:flex;max-width:",f.Av,";margin:auto;height:100%;@media screen and (max-width: ",f.q9,"){overflow:auto;flex-wrap:wrap;}","")},(0,l.tZ)("div",{css:(0,l.iv)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);min-width:",f.dP,";","")},(0,l.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:M},"Filter by"),(0,l.tZ)("div",{css:(0,l.iv)("margin-top:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-1200);display:flex;flex-direction:column;overflow:auto;@media screen and (max-width: ",f.q9,"){margin-bottom:0;}","")},we.length>0?we.map((function(e,t){var n=Object.keys(e)[0];return(0,l.tZ)(v.X,{key:t,isSelected:Y.includes(n),value:n,onChange:function(e){$(e?function(e){return[].concat((0,r.Z)(e),[n])}:Y.filter((function(e){return e!==n})))}},(0,l.tZ)("span",null,n),(0,l.tZ)("em",null," (",e[n],")"))})):(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,l.tZ)("div",{css:H},(0,l.tZ)(u.mQ,{onFontsReady:function(){Ne()}},n.map((function(e,t){var n=Object.keys(e)[0],r=e[n];return(0,l.tZ)(u.ck,{key:t,ref:function(t){e.tabRef={current:t}},selected:X===n,tabIndex:0,onClick:(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$([]),G(n);case 2:case"end":return e.stop()}}),e)})))},(0,l.tZ)(u.__,null,r))})),(0,l.tZ)(u.NN,{ref:Ee})),ve.length>0?(0,l.tZ)("div",{ref:de,css:(0,l.iv)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",f.q9,"){height:auto;overflow:inherit;}","")},ve.map((function(e){var t,n,r=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",s=null!==(n=e._highlightResult.content)&&void 0!==n&&n.value?e._highlightResult.content.value:"";return(0,l.tZ)("div",{css:N},(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:j},(0,l.tZ)(c.P,{to:r},(0,l.tZ)("span",{dangerouslySetInnerHTML:{__html:w(i)}}))),(0,l.tZ)("div",{css:q},(0,l.tZ)(c.P,{variant:"secondary",to:r},r)),(0,l.tZ)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:R,dangerouslySetInnerHTML:{__html:w(s)}}))}))):(0,l.tZ)("div",{css:(0,l.iv)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",f.q9,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:E},(0,l.tZ)("g",null,(0,l.tZ)("g",null,(0,l.tZ)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,l.tZ)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,l.tZ)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,l.tZ)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,l.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,l.tZ)("strong",null,U)),(0,l.tZ)("p",{className:"spectrum-Body spectrum-Body--S",css:_},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!te&&(0,l.tZ)("div",{css:(0,l.iv)("position:fixed;z-index:1;top:",V?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-9a92832021ae9fda41cc.js.map