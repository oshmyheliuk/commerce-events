"use strict";(self.webpackChunkcommerce_events=self.webpackChunkcommerce_events||[]).push([[891],{6335:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(5007),a(4983)),o=a(1515),s=["components"],c={},p={_frontmatter:c},m=o.Z;function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.mdx)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"adobe-io-events-for-adobe-commerce-overview"},"Adobe I/O Events for Adobe Commerce Overview"),(0,i.mdx)("p",null,"With ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/events/docs/"},"Adobe I/O Events"),", developers can create event-driven applications that take action when a shopper performs an action on an Adobe product. These capabilities are now available in Adobe Commerce and, as a result, Commerce can now make all transactional data available to applications created with ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/first_app/"},"Adobe App Builder"),"."),(0,i.mdx)("p",null,"The following architectural diagram provides an overview of how Adobe I/O Events for Adobe Commerce works."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"651px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/5530d/event-architecture.webp 320w","/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/0c8fb/event-architecture.webp 640w","/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/60c7d/event-architecture.webp 651w"],sizes:"(max-width: 651px) 100vw, 651px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/dd4a7/event-architecture.png 320w","/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/0f09e/event-architecture.png 640w","/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/b7e05/event-architecture.png 651w"],sizes:"(max-width: 651px) 100vw, 651px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-events/static/2eac165fb9119ef79cae8b8644eb4f2b/b7e05/event-architecture.png",alt:"Architectural diagram",title:"Architectural diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"Imagine that you want to build an extension that notifies a third-party Enterprise Resource Planning (ERP) system every time a shopper places an order. In your Commerce module, you register the ",(0,i.mdx)("inlineCode",{parentName:"p"},"plugin.magento.sales.api.order_management.place")," event and possibly related events. When a shopper places an order, Commerce sends the event to Adobe I/O Events, which then routes the events to the appropriate App Builder application."),(0,i.mdx)("p",null,"Your App Builder application uses any applicable details provided with the event to construct a REST or GraphQL request (pull) to Commerce to gather details about the transaction. It then pushes that information to the ERP system. The ERP system responds to the request, and then the App Builder application pushes any new data to Commerce."),(0,i.mdx)("p",null,"This architecture helps merchants efficiently customize processes and integrate systems while maintaining SaaS-like upgradeability. Before event-driven applications, developers had to use API polling to determine if something had occurred. Lags in polling could result in merchants missing realtime activities, which could prevent shoppers from having an optimal experience."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-index-md-057bfc2873adb5265701.js.map