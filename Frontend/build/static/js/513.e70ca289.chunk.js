"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[513],{6513:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(2791),r=n(2207),l=n(9639),i=n(885),s=n(975),o=n(1815),c=n(1886),d=n(2426),u=n(184),h=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],l=(0,a.useState)(!0),h=(0,i.Z)(l,2),g=h[0],f=h[1];return(0,a.useEffect)((function(){(0,s.Y)("/api/getData").then((function(e){console.log(e.WhaleHoldingsOne);var t=[{Data:[(0,d.t)(e.WhaleHoldingsOne),(0,d.t)(e.WhaleHoldingsTwo),(0,d.t)(e.WhaleHoldingsThree)]},{Data:[parseFloat(e.WhaleHoldingsOne/e.Supply*100).toFixed(2).toString()+" %",parseFloat(e.WhaleHoldingsTwo/e.Supply*100).toFixed(2).toString()+" %",parseFloat(e.WhaleHoldingsThree/e.Supply*100).toFixed(2).toString()+" %"]},{Data:[(0,u.jsx)("p",{className:parseFloat(e.WhaleHoldingsOneChangePercent).toFixed(3)>=0?"Positiv__text":"Negativ__text",children:parseFloat(e.WhaleHoldingsOneChangePercent).toFixed(3).toString()+" %"}),(0,u.jsx)("p",{className:parseFloat(e.WhaleHoldingsTwoChangePercent).toFixed(3)>=0?"Positiv__text":"Negativ__text",children:parseFloat(e.WhaleHoldingsTwoChangePercent).toFixed(3).toString()+" %"}),(0,u.jsx)("p",{className:parseFloat(e.WhaleHoldingsThreeChangePercent).toFixed(3)>=0?"Positiv__text":"Negativ__text",children:parseFloat(e.WhaleHoldingsThreeChangePercent).toFixed(3).toString()+" %"})]}];r((function(e){return t})),f((function(e){return!e}))}))}),[]),(0,u.jsx)("div",{className:"padding-small",children:g?(0,u.jsx)(c.Z,{}):(0,u.jsx)(o.Z,{TableID:"Whales",Headers:["Top 10","Top 25","Top 100"],TableData:n,TableStyle:"Horizontal"})})},g=n(7762),f=n(1656),x=function(){var e=(0,a.useState)(!0),t=(0,i.Z)(e,2),n=t[0],r=t[1],l=(0,a.useState)([]),o=(0,i.Z)(l,2),c=o[0],h=o[1];return(0,a.useEffect)((function(){(0,s.Y)("/api/getWhales").then((function(e){var t,n=[],a=(0,g.Z)(e);try{for(a.s();!(t=a.n()).done;){var l,i=t.value;l=parseInt(i.ChangeWeek/1e3)>2200?"Positiv":parseInt(i.ChangeWeek/1e3)<0?"Negativ":"",n.push({Data:[i.num_row,i.Adress,(0,d.t)(i.Amount),(0,d.t)(i.Change),(0,d.t)(i.ChangeWeek)],Link:"/Holders/"+i.Adress,NewPage:!1,Style:l})}}catch(s){a.e(s)}finally{a.f()}h((function(e){return n})),r(!1)}))}),[]),(0,u.jsxs)("div",{className:"u-margin-top-small",children:[(0,u.jsx)("h2",{children:"Top 100 whales"}),!n&&(0,u.jsx)(f.Z,{TableID:"WhalesTable",Headers:["#","Hash","Balance","24H","7D"],TableData:c,TableStyle:"Horizontal"})]})},p=function(e){var t=(0,a.useState)(!0),n=(0,i.Z)(t,2),r=n[0],l=n[1],o=(0,a.useState)([]),c=(0,i.Z)(o,2),h=c[0],x=c[1],p=(0,a.useState)([]),m=(0,i.Z)(p,2),b=m[0],T=m[1];return(0,a.useEffect)((function(){(0,s.Y)("/api/getTransactions").then((function(e){console.log(e);var t,n=[],a=(0,g.Z)(e[1]);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push({Data:[(0,d.t)(r.Amount),parseInt(r.createdAt)+" Min"],Link:"https://bscscan.com/tx/"+r.Hash})}}catch(u){a.e(u)}finally{a.f()}T(n);var i,s=[],o=(0,g.Z)(e[0]);try{for(o.s();!(i=o.n()).done;){var c=i.value;s.push({Data:[(0,d.t)(c.Amount),parseInt(c.createdAt)+" Min"],Link:"https://bscscan.com/tx/"+c.Hash})}}catch(u){o.e(u)}finally{o.f()}x(s),l(!1)}))}),[]),(0,u.jsxs)("div",{className:"big-container padding-small flex flex-standard-wrap",children:[(0,u.jsxs)("div",{className:"half-container padding-small",children:[(0,u.jsx)("h2",{children:"Buys"}),!r&&(0,u.jsx)(f.Z,{TableID:"BuyTransactions",Headers:["Amount","Time"],TableData:b,TableStyle:"Horizontal"})]}),(0,u.jsxs)("div",{className:"half-container padding-small",children:[(0,u.jsx)("h2",{children:"Sells"}),!r&&(0,u.jsx)(f.Z,{TableID:"SellTransactions",Headers:["Amount","Time"],TableData:h,TableStyle:"Horizontal"})]})]})},m=function(){return(0,u.jsx)(r.Z,{children:(0,u.jsx)(l.Z,{GridBox:"full",children:(0,u.jsxs)("div",{className:"flex-standard__wrap",children:[(0,u.jsx)("div",{className:"small-container align-center",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Dominance"}),(0,u.jsx)(h,{})]})}),(0,u.jsxs)("div",{className:"medium-container flex flex-column u-margin-top-small",children:[(0,u.jsx)("h2",{children:"Transactions"}),(0,u.jsx)(p,{})]}),(0,u.jsx)("div",{className:"big-container",children:(0,u.jsx)(x,{})})]})})})}},2426:function(e,t,n){n.d(t,{t:function(){return a}});var a=function(e){return e.toString().length>3&&e.toString().length<7?e=parseFloat(e/1e3).toFixed(2).toString()+" K":e.toString().length>6&&e.toString().length<10?e=parseFloat(e/1e6).toFixed(2).toString()+" M":e.toString().length>=10&&(e=parseFloat(e/1e9).toFixed(2).toString()+" B"),e}},1815:function(e,t,n){var a=n(5861),r=n(7757),l=n.n(r),i=n(2791),s=n(4164),o=n(4376),c=n.n(o),d=n(5498),u=n.n(d),h=n(184);t.Z=function(e){(0,i.useEffect)((function(){console.log(e),"Horizontal"===e.TableStyle&&e.TableData?n(e.TableID):"Vertical"===e.TableStyle&&e.TableData&&r(e.TableID)}),[e.TableID,e.TableStyle,e.TableData,e.TableDataVertical]);var t=(0,i.useCallback)((0,a.Z)(l().mark((function t(){var n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()(document.getElementById(e.TableID));case 2:n=t.sent,a=n.toDataURL("image/png"),c()(a,e.TableID+"-"+(new Date).getTime().toString()+".png","image/png");case 5:case"end":return t.stop()}}),t)}))),[]),n=function(n){var a=(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:e.Headers.map((function(e,n){return(0,h.jsx)("th",{className:"clickable",onClick:t,children:e},n)}))})}),r=(0,h.jsx)("tbody",{children:e.TableData.map((function(t,n){return(0,h.jsx)("tr",{children:t.Data.map((function(n,a){return(0,h.jsx)("td",{colSpan:t.Data.length<e.Headers.length?parseInt(e.Headers.length/t.Data.length):"",children:n},a)}))},n)}))});s.render([a,r],document.getElementById(n))},r=function(t){var n=(0,h.jsx)("tbody",{children:e.TableData.map((function(t,n){return(0,h.jsx)("tr",{children:t.Data.map((function(n,a){return(0,h.jsx)("td",{colSpan:t.Data.length<e.Headers.length?parseInt(e.Headers.length/t.Data.length):"",children:n},a)}))},n)}))});s.render([n],document.getElementById(t))};return(0,h.jsx)("div",{className:"border-radius overflow-hidden shadow",children:(0,h.jsx)("table",{className:"NewTable",id:e.TableID})})}},1656:function(e,t,n){var a=n(5861),r=n(7757),l=n.n(r),i=n(2791),s=n(4164),o=n(4376),c=n.n(o),d=n(5498),u=n.n(d),h=n(184);t.Z=function(e){(0,i.useEffect)((function(){console.log(e),"Horizontal"===e.TableStyle?n(e.TableID):"Vertical"===e.TableStyle&&r(e.TableID)}),[e.TableID,e.TableStyle,e.TableData,e.TableDataVertical]);var t=(0,i.useCallback)((0,a.Z)(l().mark((function t(){var n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()(document.getElementById(e.TableID));case 2:n=t.sent,a=n.toDataURL("image/png"),c()(a,e.TableID+"-"+(new Date).getTime().toString()+".png","image/png");case 5:case"end":return t.stop()}}),t)}))),[]),n=function(n){var a=(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:e.Headers.map((function(e,n){return(0,h.jsx)("th",{className:"clickable",onClick:t,children:e},n)}))})}),r=(0,h.jsx)("tbody",{children:e.TableData.map((function(t,n){return(0,h.jsx)("tr",{className:t.Style,children:t.Data.map((function(n,a){return(0,h.jsx)("td",{colSpan:t.Data.length<e.Headers.length?parseInt(e.Headers.length/t.Data.length):"",children:(0,h.jsx)("a",{href:t.Link,target:t.NewPage&&"_blank",rel:"noreferrer",children:n})},a)}))},n)}))});s.render([a,r],document.getElementById(n))},r=function(t){var n=(0,h.jsx)("tbody",{children:e.TableData.map((function(t,n){return(0,h.jsx)("tr",{children:t.Data.map((function(n,a){return(0,h.jsx)("td",{colSpan:t.Data.length<e.Headers.length?parseInt(e.Headers.length/t.Data.length):"",children:(0,h.jsx)("a",{href:t.Link,target:t.NewPage&&"_blank",rel:"noreferrer",children:n})},a)}))},n)}))});s.render([n],document.getElementById(t))};return(0,h.jsx)("div",{className:"border-radius overflow-hidden shadow",children:(0,h.jsx)("table",{className:"NewTable",id:e.TableID})})}},7762:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(181);function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,a.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}}}]);
//# sourceMappingURL=513.e70ca289.chunk.js.map