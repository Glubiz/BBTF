"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[16],{9016:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});var r=t(885),c=t(2791),n=t(9271),d=t(2207),s=t(9639),f=t(9859),i=t(6779),l=t(9908),o=t(7762),b=t(975),u=t(1656),T=t(1886),m=t(2426),p=t(1399),x=t(184),S=function(e){var a=(0,c.useState)(!0),t=(0,r.Z)(a,2),n=t[0],d=t[1],s=(0,c.useState)([]),f=(0,r.Z)(s,2),i=f[0],l=f[1],S=(0,c.useState)(e.page),g=(0,r.Z)(S,2),h=g[0],y=g[1];(0,c.useEffect)((function(){h>0&&(0,b.Y)("/api/PaginatedHolders",{page:h}).then((function(e){var a,t=[],r=(0,o.Z)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.Balance=(0,m.t)(c.Balance);var n="";c.Address!==v(c.Address)&&(n="Positiv"),t.push({Data:[c.num_row,v(c.Address),c.Balance],Link:"/Holders/"+c.Address,NewPage:!1,Style:n})}}catch(s){r.e(s)}finally{r.f()}l(t),d(!1)}))}),[h]);var v=function(e){for(var a in p.o.walletNames)if(p.o.walletNames[a].includes(e))return a;return e};return(0,x.jsxs)("div",{className:"big-container",children:[(0,x.jsx)("h2",{children:"Holders"}),n?(0,x.jsx)(T.Z,{}):(0,x.jsx)(u.Z,{TableID:"Holders",Headers:["#","Hash","Balance"],TableData:i,TableStyle:"Horizontal"}),(0,x.jsxs)("div",{className:"pageNav",children:[(0,x.jsx)("div",{className:"pageNav-button",onClick:function(){var e=(parseInt(h)-1).toString();d(!0),y(e)},children:"\u2190"}),(0,x.jsx)("div",{children:(0,x.jsx)("input",{type:"number",id:"page",min:"1",value:h,step:"1",onChange:function(){d(!0),y(document.querySelector("#page").value)},required:!0})}),(0,x.jsx)("div",{className:"pageNav-button",onClick:function(){var e=(parseInt(h)+1).toString();d(!0),y(e)},children:"\u2192"})]})]})},g=t(1815),h=function(){var e=(0,c.useState)([]),a=(0,r.Z)(e,2),t=a[0],d=a[1],s=(0,n.TH)().pathname.split("/");(0,c.useEffect)((function(){var e;(0,b.Y)("/api/HolderData",{Address:s[2]}).then((function(a){console.log(a),e=a.Position[0]?{Data:["Position",a.Position[0].num_row.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" / "+a.TotalHolders.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}:{Data:["Wallet Type",f(s[2])]},d((function(t){return[{Data:[(0,x.jsx)("a",{href:"/Holders/",rel:"noreferrer",children:"Back To Holders"})]},{Data:["Address",s[2]]},{Data:["Balance",a.Balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" SFM"]},e,{Data:[(0,x.jsx)("a",{href:"https://bscscan.com/address/"+s[2],target:"_blank",rel:"noreferrer",children:"To BSCScan"})]}]}))}))}),[]);var f=function(e){for(var a in p.o.walletNames)if(p.o.walletNames[a].includes(e))return a;return e};return(0,x.jsx)("div",{children:t.length>0?(0,x.jsx)(g.Z,{TableID:s[2],Headers:["",""],TableData:t,TableStyle:"Horizontal"}):(0,x.jsx)(T.Z,{})})},y=t(2982),v=t(5861),D=t(7757),B=t.n(D),j=function(){var e=(0,c.useState)(!0),a=(0,r.Z)(e,2),t=a[0],d=a[1],s=(0,c.useState)([]),f=(0,r.Z)(s,2),i=f[0],l=f[1],p=(0,c.useState)([]),S=(0,r.Z)(p,2),g=S[0],h=S[1],D=(0,c.useState)([]),j=(0,r.Z)(D,2),F=j[0],N=j[1],Z=(0,n.TH)().pathname.split("/");(0,c.useEffect)((function(){(0,b.Y)("/api/HolderTransactions",{Address:Z[2]}).then(function(){var e=(0,v.Z)(B().mark((function e(a){var t;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={Buys:[],Sells:[],Transfers:[]},e.next=3,A(a.V1).then((function(e){console.log(e),t.Buys=[].concat((0,y.Z)(t.Buys),(0,y.Z)(e.Buys)),t.Sells=[].concat((0,y.Z)(t.Sells),(0,y.Z)(e.Sells)),t.Transfers=[].concat((0,y.Z)(t.Transfers),(0,y.Z)(e.Transfers))}));case 3:return e.next=5,w(a.V2).then((function(e){console.log(e),t.Buys=[].concat((0,y.Z)(t.Buys),(0,y.Z)(e.Buys)),t.Sells=[].concat((0,y.Z)(t.Sells),(0,y.Z)(e.Sells)),t.Transfers=[].concat((0,y.Z)(t.Transfers),(0,y.Z)(e.Transfers))}));case 5:J(t);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}),[]);var H=function(e){var a={Direction:"",Type:""};return(e=JSON.parse(e)).To===Z[2].toLowerCase()?(a.Direction="In","0x328130164d0f2b9d7a52edc73b3632e713ff0ec6"===e.From||"0x33eac50b7faf4b8842a621d0475335693f5d21fe"===e.From||"0x0d0707963952f2fba59dd06f2b425ace40b492fe"===e.From||"0xc7029e939075f48fa2d5953381660c7d01570171"===e.From||"0x4982085c9e2f89f2ecb8131eca71afad896e89cb"===e.From||"0xc7029e939075f48fa2d5953381660c7d01570171"===e.From||"0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67"===e.From||"0x8894e0a0c962cb723c1976a4421c95949be2d4e3"===e.From||"0x3fdf750fb555583374b26a5ff476abbd7f6e6fb5"===e.From||"0x87067ddcfddf4c6790207132848cfbbe5cd6f939"===e.From||"0x124d9bf2fecbc16b54ec4accdb14d44c2144f012"===e.From||"0x8af8f4df5c463db7ab24ec66cee7546c9a310f56"===e.From||"0x3a723e58c4808dde4591543282adc7d6b378715b"===e.From||"0x2c6cc8e98adc0b3f3505c29d63fcdd76ac0e2ba4"===e.From||"0x7d7fc48fc930552957dc585726d9628f5319c038"===e.From?a.Type="CEX":"0x8c128dba2cb66399341aa877315be1054be75da8"===e.From||"0xff3dd404afba451328de089424c74685bf0a43c9"===e.From||"0x79c4af7c43f500b9ccba9396d079cc03dfcafda1"===e.From||"0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2"===e.From||"0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a"===e.From||"0xd11616e66b128c0b756b91cc13466defaae67d07"===e.From||"0x856a1c95bef293de7367b908df2b63ba30fbdd59"===e.From||"0xe804f3c3e6dda8159055428848fe6f2a91c2b9af"===e.From||"0xa8736b9585a01d6dcc1b6e2fc9dc208552c34b58"===e.From||"0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4"===e.From||"0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0"===e.From||"0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c"===e.From||"0xe2f99ab0a62b72773b6eac227f9b9c161494e8a9"===e.From||"0x29e99847a4f968372cf573a7965e2ad954cb0cbc"===e.From||"0xef967e3da982ecc1c84bbe6053fd61af2a65bb9a"===e.From||"0x2ad2c5314028897aecfcf37fd923c079beeb2c56"===e.From?a.Type="Buy":"0x678ee23173dce625a90ed651e91ca5138149f590"===e.From?a.Type="Migration":a.Type="Transfer"):(a.Direction="Out","0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6"===e.To?a.Type="Growth Fund":"0x42981d0bfbaf196529376ee702f2a9eb9092fcb5"===e.To&&"V2"===e.State?a.Type="LP":"0x0000000000000000000000000000000000000001"===e.To?a.Type="Burn":"0x328130164d0f2b9d7a52edc73b3632e713ff0ec6"===e.To||"0x33eac50b7faf4b8842a621d0475335693f5d21fe"===e.To||"0x0d0707963952f2fba59dd06f2b425ace40b492fe"===e.To||"0xc7029e939075f48fa2d5953381660c7d01570171"===e.To||"0x4982085c9e2f89f2ecb8131eca71afad896e89cb"===e.To||"0xc7029e939075f48fa2d5953381660c7d01570171"===e.To||"0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67"===e.To||"0x8894e0a0c962cb723c1976a4421c95949be2d4e3"===e.To||"0x3fdf750fb555583374b26a5ff476abbd7f6e6fb5"===e.To||"0x87067ddcfddf4c6790207132848cfbbe5cd6f939"===e.To||"0x124d9bf2fecbc16b54ec4accdb14d44c2144f012"===e.To||"0x8af8f4df5c463db7ab24ec66cee7546c9a310f56"===e.To||"0x3a723e58c4808dde4591543282adc7d6b378715b"===e.To||"0x2c6cc8e98adc0b3f3505c29d63fcdd76ac0e2ba4"===e.To||"0x7d7fc48fc930552957dc585726d9628f5319c038"===e.To?a.Type="CEX":"0x8c128dba2cb66399341aa877315be1054be75da8"===e.To||"0xff3dd404afba451328de089424c74685bf0a43c9"===e.To||"0x79c4af7c43f500b9ccba9396d079cc03dfcafda1"===e.To||"0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2"===e.To||"0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a"===e.To||"0xd11616e66b128c0b756b91cc13466defaae67d07"===e.To||"0x856a1c95bef293de7367b908df2b63ba30fbdd59"===e.To||"0xe804f3c3e6dda8159055428848fe6f2a91c2b9af"===e.To||"0xa8736b9585a01d6dcc1b6e2fc9dc208552c34b58"===e.To||"0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4"===e.To||"0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0"===e.To||"0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c"===e.To||"0xe2f99ab0a62b72773b6eac227f9b9c161494e8a9"===e.To||"0x29e99847a4f968372cf573a7965e2ad954cb0cbc"===e.To||"0xef967e3da982ecc1c84bbe6053fd61af2a65bb9a"===e.To||"0x2ad2c5314028897aecfcf37fd923c079beeb2c56"===e.To?a.Type="Sell":"0x42981d0bfbaf196529376ee702f2a9eb9092fcb5"===e.To||"0x9d50518de14f89836f2b9b9ac05f177de7bf521a"===e.To?a.Type="Migration":a.Type="Transfer"),a},A=function(e){console.log(e);var a,t={Buys:[],Transfers:[],Sells:[]},r=(0,o.Z)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value,n=parseInt(c.value/1e12),d=new Date(1e3*c.timeStamp);d=d.toLocaleDateString();var s={Hash:c.hash,dateTime:d,Amount:n,Type:0,From:c.from,To:c.to},f=H(JSON.stringify({To:c.to,From:c.from,State:"V1"}));s.Type=f,console.log(s),"Transfer"===f.Type||"Migration"===f.Type||"Growth Fund"===f.Type||"Burn"===f.Type||"LP"===f.Type||"CEX"===f.Type?("Migration"===f.Type&&(s.Amount=parseInt(n/90*100)),t.Transfers.push(s)):"Buy"===f.Type?t.Buys.push(s):"Sell"===f.Type&&(s.Amount=parseInt(n/90*100),t.Sells.push(s))}}catch(i){r.e(i)}finally{r.f()}return new Promise((function(e){e(t)}))},w=function(e){var a,t={Buys:[],Transfers:[],Sells:[]},r=(0,o.Z)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value,n=parseInt(c.value/1e9),d=new Date(1e3*c.timeStamp);d=d.toLocaleDateString();var s={Hash:c.hash,dateTime:d,Amount:n,Type:0,From:c.from,To:c.to},f=H(JSON.stringify({To:c.to,From:c.from,State:"V2"}));s.Type=f,"Transfer"===f.Type||"Migration"===f.Type||"Growth Fund"===f.Type||"Burn"===f.Type||"LP"===f.Type||"CEX"===f.Type?t.Transfers.push(s):"Buy"===f.Type?t.Buys.push(s):"Sell"===f.Type&&t.Sells.push(s)}}catch(i){r.e(i)}finally{r.f()}return new Promise((function(e){e(t)}))},J=function(e){console.log(e);for(var a=[],t="",r="",c=e.Buys.length-1;c>=0;c--){if(e.Buys[c].dateTime.toString().includes(".")){if(e.Buys[c].dateTime.toString().split(".")[1]!==t){var n=void 0;"1"===(t=e.Buys[c].dateTime.toString().split(".")[1])?n="January":"2"===t?n="February":"3"===t?n="March":"4"===t?n="April":"5"===t?n="May":"6"===t?n="June":"7"===t?n="July":"8"===t?n="August":"9"===t?n="September":"10"===t?n="October":"11"===t?n="November":"12"===t&&(n="December"),a.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:n+" "+e.Buys[c].dateTime.toString().split(".")[2]})]})}}else if(e.Buys[c].dateTime.toString().split(" ")[1]!==r){"Jan"===e.Buys[c].dateTime.toString().split(" ")[1]?t="1":"Feb"===e.Buys[c].dateTime.toString().split(" ")[1]?t="2":"Mar"===e.Buys[c].dateTime.toString().split(" ")[1]?t="3":"Apr"===e.Buys[c].dateTime.toString().split(" ")[1]?t="4":"May"===e.Buys[c].dateTime.toString().split(" ")[1]?t="5":"Jun"===e.Buys[c].dateTime.toString().split(" ")[1]?t="6":"Jul"===e.Buys[c].dateTime.toString().split(" ")[1]?t="7":"Aug"===e.Buys[c].dateTime.toString().split(" ")[1]?t="8":"Sep"===e.Buys[c].dateTime.toString().split(" ")[1]?t="9":"Oct"===e.Buys[c].dateTime.toString().split(" ")[1]?t="10":"Nov"===e.Buys[c].dateTime.toString().split(" ")[1]?t="11":"Dec"===e.Buys[c].dateTime.toString().split(" ")[1]&&(t="12"),r=e.Buys[c].dateTime.toString().split(" ")[1];var s=void 0;"1"===t?s="January":"2"===t?s="February":"3"===t?s="March":"4"===t?s="April":"5"===t?s="May":"6"===t?s="June":"7"===t?s="July":"8"===t?s="August":"9"===t?s="September":"10"===t?s="October":"11"===t?s="November":"12"===t&&(s="December"),a.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:s+" "+e.Buys[c].dateTime.toString().split(" ")[3]})]})}a.push({Data:[e.Buys[c].From.substring(0,6)+"...",e.Buys[c].To.substring(0,6)+"...",(0,m.t)(e.Buys[c].Amount),e.Buys[c].dateTime],Link:"https://bscscan.com/tx/"+e.Buys[c].Hash})}l((function(e){return a}));var f=[];t="",r="";for(var i=e.Sells.length-1;i>=0;i--){if(e.Sells[i].dateTime.toString().includes(".")){if(e.Sells[i].dateTime.toString().split(".")[1]!==t){var o=void 0;"1"===(t=e.Sells[i].dateTime.toString().split(".")[1])?o="January":"2"===t?o="February":"3"===t?o="March":"4"===t?o="April":"5"===t?o="May":"6"===t?o="June":"7"===t?o="July":"8"===t?o="August":"9"===t?o="September":"10"===t?o="October":"11"===t?o="November":"12"===t&&(o="December"),f.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:o+" "+e.Sells[i].dateTime.toString().split(".")[2]})]})}}else if(e.Sells[i].dateTime.toString().split(" ")[1]!==r){"Jan"===e.Sells[i].dateTime.toString().split(" ")[1]?t="1":"Feb"===e.Sells[i].dateTime.toString().split(" ")[1]?t="2":"Mar"===e.Sells[i].dateTime.toString().split(" ")[1]?t="3":"Apr"===e.Sells[i].dateTime.toString().split(" ")[1]?t="4":"May"===e.Sells[i].dateTime.toString().split(" ")[1]?t="5":"Jun"===e.Sells[i].dateTime.toString().split(" ")[1]?t="6":"Jul"===e.Sells[i].dateTime.toString().split(" ")[1]?t="7":"Aug"===e.Sells[i].dateTime.toString().split(" ")[1]?t="8":"Sep"===e.Sells[i].dateTime.toString().split(" ")[1]?t="9":"Oct"===e.Sells[i].dateTime.toString().split(" ")[1]?t="10":"Nov"===e.Sells[i].dateTime.toString().split(" ")[1]?t="11":"Dec"===e.Sells[i].dateTime.toString().split(" ")[1]&&(t="12"),r=e.Sells[i].dateTime.toString().split(" ")[1];var b=void 0;"1"===t?b="January":"2"===t?b="February":"3"===t?b="March":"4"===t?b="April":"5"===t?b="May":"6"===t?b="June":"7"===t?b="July":"8"===t?b="August":"9"===t?b="September":"10"===t?b="October":"11"===t?b="November":"12"===t&&(b="December"),f.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:b+" "+e.Sells[i].dateTime.toString().split(" ")[3]})]})}f.push({Data:[e.Sells[i].From.substring(0,6)+"...",e.Sells[i].To.substring(0,6)+"...",(0,m.t)(e.Sells[i].Amount),e.Sells[i].dateTime],Link:"https://bscscan.com/tx/"+e.Sells[i].Hash})}h((function(e){return f}));var u=[];t="",r="";for(var T=e.Transfers.length-1;T>=0;T--){if(e.Transfers[T].dateTime.toString().includes(".")){if(e.Transfers[T].dateTime.toString().split(".")[1]!==t){var p=void 0;"1"===(t=e.Transfers[T].dateTime.toString().split(".")[1])?p="January":"2"===t?p="February":"3"===t?p="March":"4"===t?p="April":"5"===t?p="May":"6"===t?p="June":"7"===t?p="July":"8"===t?p="August":"9"===t?p="September":"10"===t?p="October":"11"===t?p="November":"12"===t&&(p="December"),u.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:p+" "+e.Transfers[T].dateTime.toString().split(".")[2]})]})}}else if(e.Transfers[T].dateTime.toString().split(" ")[1]!==r){"Jan"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="1":"Feb"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="2":"Mar"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="3":"Apr"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="4":"May"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="5":"Jun"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="6":"Jul"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="7":"Aug"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="8":"Sep"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="9":"Oct"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="10":"Nov"===e.Transfers[T].dateTime.toString().split(" ")[1]?t="11":"Dec"===e.Transfers[T].dateTime.toString().split(" ")[1]&&(t="12"),r=e.Transfers[T].dateTime.toString().split(" ")[1];var S=void 0;"1"===t?S="January":"2"===t?S="February":"3"===t?S="March":"4"===t?S="April":"5"===t?S="May":"6"===t?S="June":"7"===t?S="July":"8"===t?S="August":"9"===t?S="September":"10"===t?S="October":"11"===t?S="November":"12"===t&&(S="December"),u.push({Data:[(0,x.jsx)("h2",{className:"table__data__header",children:S+" "+e.Transfers[T].dateTime.toString().split(" ")[3]})]})}var g;g="0x42981d0bfbaf196529376ee702f2a9eb9092fcb5"===e.Transfers[T].To||"0x0000000000000000000000000000000000000001"===e.Transfers[T].To||"0xefecd68f9549d47cbeca0a2fd9bd09cf4ec6a5d6"===e.Transfers[T].To?"Passive":"0x678ee23173dce625a90ed651e91ca5138149f590"===e.Transfers[T].From?"Positiv":"",u.push({Data:[e.Transfers[T].From.substring(0,6)+"...",e.Transfers[T].To.substring(0,6)+"...",(0,m.t)(e.Transfers[T].Amount),e.Transfers[T].dateTime],Link:"https://bscscan.com/tx/"+e.Transfers[T].Hash,Style:g})}N((function(e){return u})),d((function(e){return!1}))};return(0,x.jsxs)("div",{children:[!t&&(0,x.jsx)("h2",{className:"u-margin-top-small",children:"Buys"}),!t&&i.length>0&&(0,x.jsx)(u.Z,{TableID:"Buys",Headers:["From","To","Quantity","Date"],TableData:i,TableStyle:"Horizontal"}),!t&&g&&(0,x.jsx)("h2",{className:"u-margin-top-small",children:"Sells"}),!t&&g.length>0&&(0,x.jsx)(u.Z,{TableID:"Sells",Headers:["From","To","Quantity","Date"],TableData:g,TableStyle:"Horizontal"}),!t&&F&&(0,x.jsx)("h2",{className:"u-margin-top-small",children:"Transfers"}),!t&&F.length>0&&(0,x.jsx)(u.Z,{TableID:"Transfers",Headers:["From","To","Quantity","Date"],TableData:F,TableStyle:"Horizontal"}),t&&(0,x.jsx)(T.Z,{})]})},F=function(e){var a=(0,c.useState)(!0),t=(0,r.Z)(a,2),o=t[0],b=t[1],u=(0,n.TH)().pathname.split("/");return(0,x.jsxs)(d.Z,{children:[!u[2]&&(0,x.jsxs)(s.Z,{GridBox:"full",children:[(0,x.jsxs)("div",{className:"flex flex-column align-center",children:[(0,x.jsx)("h2",{className:"clickable border-radius padding",onClick:function(){b((function(e){return!e}))},children:o?"Holder Distribution":"Supply Distribution"}),(0,x.jsx)("h4",{children:"(Holders only)"}),o&&(0,x.jsx)(l.Z,{}),!o&&(0,x.jsx)(i.Z,{}),(0,x.jsx)(f.Z,{})]}),(0,x.jsx)("div",{children:(0,x.jsx)(S,{page:"1"})})]}),u[2]&&(0,x.jsxs)(s.Z,{GridBox:"full",children:[(0,x.jsx)("div",{className:"flex flex-column align-center",children:(0,x.jsx)(h,{})}),function(e){var a=!1;return"0x328130164d0f2b9d7a52edc73b3632e713ff0ec6"!==e&&"0x33eac50b7faf4b8842a621d0475335693f5d21fe"!==e&&"0x0d0707963952f2fba59dd06f2b425ace40b492fe"!==e&&"0xc7029e939075f48fa2d5953381660c7d01570171"!==e&&"0x4982085c9e2f89f2ecb8131eca71afad896e89cb"!==e&&"0xc7029e939075f48fa2d5953381660c7d01570171"!==e&&"0x868f027a5e3bd1cd29606a6681c3ddb7d3dd9b67"!==e&&"0x8894e0a0c962cb723c1976a4421c95949be2d4e3"!==e&&"0x3fdf750fb555583374b26a5ff476abbd7f6e6fb5"!==e&&"0x87067ddcfddf4c6790207132848cfbbe5cd6f939"!==e&&"0x124d9bf2fecbc16b54ec4accdb14d44c2144f012"!==e&&"0x8af8f4df5c463db7ab24ec66cee7546c9a310f56"!==e&&"0x3a723e58c4808dde4591543282adc7d6b378715b"!==e&&"0x2c6cc8e98adc0b3f3505c29d63fcdd76ac0e2ba4"!==e&&"0x7d7fc48fc930552957dc585726d9628f5319c038"!==e&&"0x8c128dba2cb66399341aa877315be1054be75da8"!==e&&"0xff3dd404afba451328de089424c74685bf0a43c9"!==e&&"0x79c4af7c43f500b9ccba9396d079cc03dfcafda1"!==e&&"0x9eca52d3b9ec0cc2f2d62c0dba155952ae6d57d2"!==e&&"0x391c9d82af4edd7d3ec23cefabf9a35b630b3a7a"!==e&&"0xd11616e66b128c0b756b91cc13466defaae67d07"!==e&&"0x856a1c95bef293de7367b908df2b63ba30fbdd59"!==e&&"0xe804f3c3e6dda8159055428848fe6f2a91c2b9af"!==e&&"0xa8736b9585a01d6dcc1b6e2fc9dc208552c34b58"!==e&&"0x8fb9bbfd97fff7bba69c0162a9632c9503b29cd4"!==e&&"0x9adc6fb78cefa07e13e9294f150c1e8c1dd566c0"!==e&&"0x87d7fd8c446cb5d3da3ca23f429e7b7504d1931c"!==e&&"0xe2f99ab0a62b72773b6eac227f9b9c161494e8a9"!==e&&"0x29e99847a4f968372cf573a7965e2ad954cb0cbc"!==e&&"0xef967e3da982ecc1c84bbe6053fd61af2a65bb9a"!==e&&"0x2ad2c5314028897aecfcf37fd923c079beeb2c56"!==e&&"0x678ee23173dce625a90ed651e91ca5138149f590"!==e||(a=!0),a}(u[2])?(0,x.jsx)("div",{className:"flex flex-column align-center",children:(0,x.jsx)("h2",{children:"Too Many Transactions"})}):(0,x.jsx)("div",{className:"flex flex-standard-wrap align-center",children:(0,x.jsx)(j,{})})]})]})}},1656:function(e,a,t){var r=t(5861),c=t(7757),n=t.n(c),d=t(2791),s=t(4164),f=t(4376),i=t.n(f),l=t(5498),o=t.n(l),b=t(184);a.Z=function(e){(0,d.useEffect)((function(){console.log(e),"Horizontal"===e.TableStyle?t(e.TableID):"Vertical"===e.TableStyle&&c(e.TableID)}),[e.TableID,e.TableStyle,e.TableData,e.TableDataVertical]);var a=(0,d.useCallback)((0,r.Z)(n().mark((function a(){var t,r;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o()(document.getElementById(e.TableID));case 2:t=a.sent,r=t.toDataURL("image/png"),i()(r,e.TableID+"-"+(new Date).getTime().toString()+".png","image/png");case 5:case"end":return a.stop()}}),a)}))),[]),t=function(t){var r=(0,b.jsx)("thead",{children:(0,b.jsx)("tr",{children:e.Headers.map((function(e,t){return(0,b.jsx)("th",{className:"clickable",onClick:a,children:e},t)}))})}),c=(0,b.jsx)("tbody",{children:e.TableData.map((function(a,t){return(0,b.jsx)("tr",{className:a.Style,children:a.Data.map((function(t,r){return(0,b.jsx)("td",{colSpan:a.Data.length<e.Headers.length?parseInt(e.Headers.length/a.Data.length):"",children:(0,b.jsx)("a",{href:a.Link,target:a.NewPage&&"_blank",rel:"noreferrer",children:t})},r)}))},t)}))});s.render([r,c],document.getElementById(t))},c=function(a){var t=(0,b.jsx)("tbody",{children:e.TableData.map((function(a,t){return(0,b.jsx)("tr",{children:a.Data.map((function(t,r){return(0,b.jsx)("td",{colSpan:a.Data.length<e.Headers.length?parseInt(e.Headers.length/a.Data.length):"",children:(0,b.jsx)("a",{href:a.Link,target:a.NewPage&&"_blank",rel:"noreferrer",children:t})},r)}))},t)}))});s.render([t],document.getElementById(a))};return(0,b.jsx)("div",{className:"border-radius overflow-hidden shadow",children:(0,b.jsx)("table",{className:"NewTable",id:e.TableID})})}},7762:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(181);function c(e,a){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var c=0,n=function(){};return{s:n,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,s=!0,f=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){f=!0,d=e},f:function(){try{s||null==t.return||t.return()}finally{if(f)throw d}}}}}}]);
//# sourceMappingURL=16.a3a6770d.chunk.js.map