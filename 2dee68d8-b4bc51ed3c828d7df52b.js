"use strict";(self.webpackChunkcommerce_events=self.webpackChunkcommerce_events||[]).push([[206],{1515:function(e,t,n){var r=n(2982),i=n(4942),l=(n(8559),n(5007)),o=n(1597),a=n(4983),s=n(5223),d=n(6777),u=n(158),v=n(2075),c=n(3576),p=n(1695),m=n(6013),h=n(4149),f=n(8261),g=n(1160),b=n(1183),y=n(5553),x=n(7029),Z=n(8512),w=n(1931),P=n(1768);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){for(var t=e.childrenArray,n=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=t[0],s=0;Object.keys(P.a).forEach((function(d){var v;(null==e||null===(v=e.props)||void 0===v?void 0:v.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var n=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){d=d.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===n?"":r),t[d.length+i+1]]})))},i=0;i<n;i++)r(i)}(),d.length){s+=d.length;var v=Object.fromEntries(d);"Variant"===e.props.mdxType&&(v.query=n),"Hero"===e.props.mdxType&&r&&(v.width="calc("+u.Av+" - "+u.dP+");");var c=(0,l.cloneElement)(e,j({},v));"Hero"===e.props.mdxType?o=o||c:"Resources"===e.props.mdxType?a=a||c:i.push(c)}else i.push(e)}()})),0===s&&(s++,i.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},D={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"zjik7",styles:"display:flex"},z={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,i=e.pageContext,O=e.query,S=(0,l.useContext)(d.Z),M=S.hasSideNav,N=S.siteMetadata,E=S.location,T=S.allSitePage,L=S.allMdx,_=S.allGithub,B=S.allGithubContributors,X=void 0===i,G=l.Children.toArray(n);if(X||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){var H=C({childrenArray:(0,Z.L)(G),query:O,hasSideNav:M}).filteredChildren;return X?(0,s.tZ)(a.MDXProvider,null,H):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},H,(0,s.tZ)(v.$,{hasSideNav:M}))}var Y,J,K,R,$,I,V,F,Q,U,W,ee,te,ne,re,ie,le,oe,ae=(0,u.kR)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),se=(0,u.P4)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),de=(0,u.sl)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),ue=de.nextPage,ve=de.previousPage,ce=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.contributor_name,pe=null==i||null===(J=i.frontmatter)||void 0===J?void 0:J.contributor_link,me=null==i||null===(K=i.frontmatter)||void 0===K?void 0:K.edition,he=null==T?void 0:T.nodes.find((function(e){var t=e.path;return(0,o.dq)(t)===(null==E?void 0:E.pathname)})),fe=null!==(R=null==he?void 0:he.component)&&void 0!==R?R:"",ge=null==L?void 0:L.nodes.find((function(e){return e.fileAbsolutePath===fe})),be=null!==($=null==ge?void 0:ge.tableOfContents)&&void 0!==$?$:{},ye=null==_?void 0:_.nodes[0],xe=ye.repository,Ze=ye.default_branch,we=ye.root,Pe=null==B?void 0:B.nodes.find((function(e){return e.path===fe})),Oe=null!==(I=null==Pe?void 0:Pe.contributors)&&void 0!==I?I:[],je=fe.replace(/.*\/src\/pages\//g,""),Ce=void 0!==(null==i||null===(V=i.frontmatter)||void 0===V?void 0:V.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof Ce)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var qe=N.home,Ae=(0,u.A6)(E.pathname),De=(0,u.Gh)(null==N?void 0:N.pages),ke=(0,u.Yx)(Ae,De),ze=(0,u.xH)(Ae,ke),Se=(0,u.Lh)(null==E?void 0:E.pathname,null==N?void 0:N.subPages),Me=[];if(Se.length)for(var Ne=Se[Se.length-1].level+1,Ee=function(e){var t=Se.filter((function(t){return t.level===e}));t.length&&Me.push(t.pop())},Te=0;Te<Ne;Te++)Ee(Te);var Le=!1;null!=i&&null!==(F=i.frontmatter)&&void 0!==F&&F.jsDoc&&(Le=!0,G=(0,Z.L)(G));var _e=C({childrenArray:G,hasSideNav:M}),Be=_e.filteredChildren,Xe=_e.heroChild,Ge=_e.resourcesChild,He=null===Xe,Ye=null!==Xe&&(!Xe.props.variant||"default"===Xe.props.variant),Je=null!==Xe&&Xe.props.variant&&"default"!==Xe.props.variant,Ke=null==be||null===(Q=be.items)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.items,Re=!Xe&&(M||Le)&&Ke&&(Ke.length>1||1===Ke.length&&(null===(W=Ke[0])||void 0===W||null===(ee=W.items)||void 0===ee?void 0:ee.length)>1||(null===(te=Ke[0])||void 0===te?void 0:te.title)),$e=(null==ae?void 0:ae.pathname)===(null==se||null===(ne=se[0])||void 0===ne?void 0:ne.pathname),Ie=[];return Re&&Ie.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),M&&Ie.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:z},Xe&&Xe,(0,s.tZ)("div",{css:(0,s.iv)(Je?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Ye&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:k},(0,s.tZ)("div",{css:(0,s.iv)("width:",Je?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Ie),";@media screen and (max-width: ",u.Av,"){width:100%;}")},He&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!Ce&&ke&&(0,s.tZ)("div",{css:D},!0!==(null==qe?void 0:qe.hidden)&&null!=qe&&qe.title&&null!=qe&&qe.href?(0,s.tZ)(h.O,{pages:[u.JK,qe,j(j({},ke),{},{href:(0,o.dq)(ke.href)}),ze&&j(j({},ze),{},{href:(0,o.dq)(ze.href)})].concat((0,r.Z)(Me.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(h.O,{pages:[u.JK,j(j({},null==N||null===(re=N.pages)||void 0===re?void 0:re[0]),{},{href:(0,o.dq)(null==N||null===(ie=N.pages)||void 0===ie||null===(le=ie[0])||void 0===le?void 0:le.href)}),j(j({},ke),{},{href:(0,o.dq)(ke.href)}),ze&&j(j({},ze),{},{href:(0,o.dq)(ze.href)})].concat((0,r.Z)(Me.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:xe,branch:Ze,root:we,pagePath:je}))),(0,s.tZ)("div",{css:A},me&&(0,s.tZ)(g.c,{name:me}),pe&&(0,s.tZ)(f.x,{name:ce,link:pe})),Be,He&&$e&&(0,s.tZ)(y.x,{pages:se}),He&&(0,s.tZ)(x.m,{nextPage:ue,previousPage:ve}),!Je&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(c.T,{repository:xe,branch:Ze,root:we,pagePath:je,contributors:Oe,externalContributors:null==i||null===(oe=i.frontmatter)||void 0===oe?void 0:oe.contributors,date:Oe[0]?new Date(Oe[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(p.x,null)))),Re&&(0,s.tZ)(b.m,{tableOfContents:be}),Ge&&Ge)),(0,s.tZ)(v.$,{hasSideNav:M})))}}}]);
//# sourceMappingURL=2dee68d8-b4bc51ed3c828d7df52b.js.map