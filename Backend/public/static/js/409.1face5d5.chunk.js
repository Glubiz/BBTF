"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[409],{8409:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(885),r=n(2791),l=n(975),s=n(2207),i=n(184),o=function(e){(0,r.useEffect)((function(){document.getElementById(e.Identifier).checked=e.StateToggle}),[]);return(0,i.jsxs)("div",{className:e.SetClasses+" toggle__container container__calculator",children:[e.ToggleText,(0,i.jsxs)("div",{className:"toggle",onClick:function(t){document.getElementById(e.Identifier).checked=!e.StateToggle,e.Update(t.target.value)},children:[(0,i.jsx)("input",{type:"checkbox",id:e.Identifier}),(0,i.jsx)("div",{className:"toggle__ball"})]})]})},u=n(8370),c=n(7997),d=function(e){return(0,i.jsxs)(u.Z,{setClass:e.SetClasses,children:[(0,i.jsx)("div",{children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h3",{children:e.Title}),(0,i.jsx)("p",{className:"table__subtext",children:e.Metric})]})}),(0,i.jsxs)("div",{className:e.Select?"input-select":"input",children:[(0,i.jsx)("input",{type:e.Type,id:e.Title.toString().replace(" ",""),step:e.Increment,min:e.Minimum,max:e.Maximim,defaultValue:e.Data,onChange:function(t){e.onChangeFunction(t.target.value)}}),e.Select&&(0,i.jsx)("select",{id:e.Select,defaultValue:e.SelectedValue,onChange:function(t){e.onChangeSelect(t.target.value)},children:e.SelectFields.map((function(e){return(0,i.jsx)("option",{value:e.Value,children:e.Value},e.Value)}))})]},e.Update)]})},S=function(e){return(0,i.jsxs)(u.Z,{setClass:"align-center",children:[(0,i.jsx)("div",{children:(0,i.jsxs)(c.Z,{SetClasses:"flex-row",children:[(0,i.jsx)("h3",{className:"result-title",children:e.Title}),(0,i.jsx)("p",{className:"table__subtext",id:e.Title.toString()+"__likelyhood",children:e.Likelyhood})]})}),e.Burn&&(0,i.jsx)("div",{children:(0,i.jsxs)(c.Z,{SetClasses:"flex-row",children:[(0,i.jsx)("h5",{className:"result-title",children:"Reflections"}),(0,i.jsx)("p",{className:"table__subtext",id:e.Title.toString()+"__likelyhood",children:e.Likelyhood})]})}),(0,i.jsxs)("div",{className:"result-container__output",children:[e.Safemoon&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Safemoon"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Safemoon",children:e.Safemoon.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),e.USD&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Value"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__USD",children:e.USD.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),e.Percentage&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Gain %"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Gain",children:e.Percentage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]}),e.Burn&&(0,i.jsx)("div",{children:(0,i.jsxs)(c.Z,{SetClasses:"flex-row",children:[(0,i.jsx)("h5",{className:"result-title result-container__fill",children:"Burn / Price"}),(0,i.jsx)("p",{className:"table__subtext",id:e.Title.toString()+"__likelyhood",children:e.Likelyhood})]})}),(0,i.jsxs)("div",{className:"result-container__output",children:[e.Burn&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Burn"}),(0,i.jsx)("div",{className:"result-container__value",children:e.Burn.replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),e.BurnPercentage&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Burn %"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__BurnPercent",children:e.BurnPercentage.replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),e.Supply&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Supply"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Supply",children:parseFloat(e.Supply/1e9).toFixed(2).toString()+" B SFM"})]}),e.Price&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Price"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Supply",children:parseFloat(e.Price).toFixed(5).toString()})]}),e.Value&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Value"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Safemoon",children:e.Value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),e.DaysLeft&&(0,i.jsxs)("div",{className:"result-container flex-column",children:[(0,i.jsx)("div",{className:"result-container__header",children:"Days till 50B"}),(0,i.jsx)("div",{className:"result-container__value",id:e.Title.toString()+"__Supply",children:e.DaysLeft.toString()})]})]})]},e.Safemoon)},p=function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"grid-container-wide",children:(0,i.jsx)(S,{Title:"General",Value:e.Value,DaysLeft:e.DaysLeft})}),(0,i.jsx)(S,{Title:"Day",Safemoon:e.DaySafemoon,USD:e.DayUSD,Percentage:e.DayGain,Burn:e.DayBurn,BurnPercentage:e.DayBurnPercent,Supply:e.DaySupply,Price:e.DayPrice}),(0,i.jsx)(S,{Title:"Week",Safemoon:e.WeekSafemoon,USD:e.WeekUSD,Percentage:e.WeekGain,Burn:e.WeekBurn,BurnPercentage:e.WeekBurnPercent,Supply:e.WeekSupply,Price:e.WeekPrice}),(0,i.jsx)(S,{Title:"Month",Safemoon:e.MonthSafemoon,USD:e.MonthUSD,Percentage:e.MonthGain,Burn:e.MonthBurn,BurnPercentage:e.MonthBurnPercent,Supply:e.MonthSupply,Price:e.MonthPrice}),(0,i.jsx)(S,{Title:"Year",Safemoon:e.YearSafemoon,USD:e.YearUSD,Percentage:e.YearGain,Burn:e.YearBurn,BurnPercentage:e.YearBurnPercent,Supply:e.YearSupply,Price:e.YearPrice})]})},x=n(2426),f=function(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],S=(0,r.useState)(1),f=(0,a.Z)(S,2),h=f[0],m=f[1],F=(0,r.useState)("M"),g=(0,a.Z)(F,2),y=g[0],C=g[1],j=(0,r.useState)(1),M=(0,a.Z)(j,2),v=M[0],_=M[1],D=(0,r.useState)(1),B=(0,a.Z)(D,2),T=B[0],Z=B[1],N=(0,r.useState)("M"),P=(0,a.Z)(N,2),k=P[0],I=P[1],V=(0,r.useState)(0),U=(0,a.Z)(V,2),b=U[0],W=U[1],Y=(0,r.useState)("M"),G=(0,a.Z)(Y,2),K=G[0],R=G[1],w=(0,r.useState)(1),L=(0,a.Z)(w,2),O=L[0],J=L[1],E=(0,r.useState)("B"),A=(0,a.Z)(E,2),q=A[0],z=A[1],H=(0,r.useState)(1),Q=(0,a.Z)(H,2),X=Q[0],$=Q[1],ee=(0,r.useState)(1),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],re=(0,r.useState)("M"),le=(0,a.Z)(re,2),se=le[0],ie=le[1],oe=(0,r.useState)(4),ue=(0,a.Z)(oe,2),ce=ue[0],de=ue[1],Se=(0,r.useState)(2),pe=(0,a.Z)(Se,2),xe=pe[0],fe=pe[1],he=(0,r.useState)(!1),me=(0,a.Z)(he,2),Fe=me[0],ge=me[1],ye=(0,r.useState)(!0),Ce=(0,a.Z)(ye,2),je=Ce[0],Me=Ce[1],ve=(0,r.useState)(!1),_e=(0,a.Z)(ve,2),De=_e[0],Be=_e[1],Te=(0,r.useState)(!1),Ze=(0,a.Z)(Te,2),Ne=Ze[0],Pe=Ze[1],ke=(0,r.useState)(!0),Ie=(0,a.Z)(ke,2),Ve=Ie[0],Ue=Ie[1],be=(0,r.useState)(!1),We=(0,a.Z)(be,2),Ye=We[0],Ge=We[1],Ke=(0,r.useState)(!1),Re=(0,a.Z)(Ke,2),we=Re[0],Le=Re[1],Oe=(0,r.useState)(!1),Je=(0,a.Z)(Oe,2),Ee=Je[0],Ae=Je[1],qe=(0,r.useState)(!1),ze=(0,a.Z)(qe,2),He=ze[0],Qe=ze[1],Xe=(0,r.useState)(!1),$e=(0,a.Z)(Xe,2),et=$e[0],tt=$e[1],nt=(0,r.useState)(!1),at=(0,a.Z)(nt,2),rt=at[0],lt=at[1],st=(0,r.useState)(!1),it=(0,a.Z)(st,2),ot=it[0],ut=it[1],ct=(0,r.useState)(!1),dt=(0,a.Z)(ct,2),St=dt[0],pt=dt[1],xt=(0,r.useState)(!1),ft=(0,a.Z)(xt,2),ht=ft[0],mt=ft[1],Ft=(0,r.useState)(!1),gt=(0,a.Z)(Ft,2),yt=gt[0],Ct=gt[1],jt=(0,r.useState)(!1),Mt=(0,a.Z)(jt,2),vt=Mt[0],_t=Mt[1],Dt=(0,r.useState)(!1),Bt=(0,a.Z)(Dt,2),Tt=Bt[0],Zt=Bt[1],Nt=(0,r.useState)(!1),Pt=(0,a.Z)(Nt,2),kt=Pt[0],It=Pt[1],Vt=(0,r.useState)(!1),Ut=(0,a.Z)(Vt,2),bt=Ut[0],Wt=Ut[1],Yt=(0,r.useState)(!1),Gt=(0,a.Z)(Yt,2),Kt=Gt[0],Rt=Gt[1],wt=(0,r.useState)(!1),Lt=(0,a.Z)(wt,2),Ot=Lt[0],Jt=Lt[1],Et=(0,r.useState)(!1),At=(0,a.Z)(Et,2),qt=At[0],zt=At[1],Ht=(0,r.useState)(!1),Qt=(0,a.Z)(Ht,2),Xt=Qt[0],$t=Qt[1],en=(0,r.useState)(!1),tn=(0,a.Z)(en,2),nn=tn[0],an=tn[1],rn=(0,r.useState)(!1),ln=(0,a.Z)(rn,2),sn=ln[0],on=ln[1],un=(0,r.useState)(!1),cn=(0,a.Z)(un,2),dn=cn[0],Sn=cn[1],pn=(0,r.useState)(!1),xn=(0,a.Z)(pn,2),fn=xn[0],hn=xn[1],mn=(0,r.useState)(1),Fn=(0,a.Z)(mn,2),gn=Fn[0],yn=Fn[1],Cn=(0,r.useState)(1),jn=(0,a.Z)(Cn,2),Mn=jn[0],vn=jn[1],_n=(0,r.useState)(1),Dn=(0,a.Z)(_n,2),Bn=Dn[0],Tn=Dn[1],Zn=(0,r.useState)(1),Nn=(0,a.Z)(Zn,2),Pn=Nn[0],kn=Nn[1],In=(0,r.useState)(1),Vn=(0,a.Z)(In,2),Un=Vn[0],bn=Vn[1],Wn=(0,r.useState)(1),Yn=(0,a.Z)(Wn,2),Gn=Yn[0],Kn=Yn[1],Rn=(0,r.useState)(1),wn=(0,a.Z)(Rn,2),Ln=wn[0],On=wn[1],Jn=(0,r.useState)(1),En=(0,a.Z)(Jn,2),An=En[0],qn=En[1];(0,r.useEffect)((function(){JSON.parse(localStorage.getItem("Currency"))||localStorage.setItem("Currency",JSON.stringify([{Currency:"USD",Rate:1}]));var e=JSON.parse(localStorage.getItem("Currency"))[0];if(c((function(t){return e})),(0,l.Y)("/api/getData").then((function(t){t.PressureTokenSell=parseInt(t.PressureTokenSell),t.PressureTokenBuy=parseInt(t.PressureTokenBuy),console.log(t),Hn(parseFloat(t.Price*e.Rate).toFixed(5)),Qn(parseFloat(t.Volume*e.Rate/1e6).toFixed(3)),Xn(parseFloat((t.PressureTokenSell+t.PressureTokenBuy)/1e6).toFixed(3)),ea(parseFloat(t.Transfer*e.Rate/1e6).toFixed(3)),na(parseFloat(t.CSupply/1e9).toFixed(3)),ra(4),la(parseFloat(t.Price*e.Rate*t.CSupply/1e6).toFixed(3)),ia(2),ge((function(e){return!e}))})),JSON.parse(localStorage.getItem("Wallet"))){var t=JSON.parse(localStorage.getItem("Wallet"));m((function(e){return parseFloat(t.Balance/1e6).toFixed(3)}))}Me(!je)}),[]);var zn=function(){ge((function(e){return!e}));var e,t=!1,n=parseFloat(v).toFixed(3),a=k,r=parseFloat(b).toFixed(3),l=K,s=parseFloat(h).toFixed(3),i=y,o=parseFloat(O).toFixed(3),u=q,c=parseFloat(ne).toFixed(3),d=se,S=parseFloat(X).toFixed(5),p=parseFloat(ce).toFixed(2),f=parseFloat(xe).toFixed(2),m=0;n*="K"===a?1e3:"M"===a?1e6:1e9,r*="K"===l?1e3:"M"===l?1e6:1e9;var F=s*="K"===i?1e3:"M"===i?1e6:1e9,g=o*="K"===u?1e3:"M"===u?1e6:1e9,C=1e6*parseFloat(S*o/1e6).toFixed(3),j=(c*="K"===d?1e3:"M"===d?1e6:1e9)-C;0===j?j=0:j/=365,p=100/p,f/=100,Ge(parseFloat(s*S).toFixed(2));for(var M=0;M<1e3;M++){if(o-=(n*f+.002*r)/S,C<c&&(C=parseInt(C+j)),S=parseFloat(C/o).toFixed(5),M<365)if(m+=(e=n*s/(p*o))+r*s/(250*o),s+=e/S,0===M){var _=(0,x.t)(parseInt(m/S)),D=(0,x.t)(parseInt(m)),B=parseFloat(m/S/F*100).toFixed(2),T=(0,x.t)(parseInt(g-o)),Z=parseFloat((o-g)/g*-100).toFixed(2).toString();Ae(S),ut(_),_t(D),Rt(B),an(T),yn(Z),bn(o)}else if(6===M){var N=(0,x.t)(parseInt(m/S)),P=(0,x.t)(parseInt(m)),I=parseFloat(m/S/F*100).toFixed(2),V=(0,x.t)(parseInt(g-o)),U=parseFloat((o-g)/g*-100).toFixed(2).toString();Qe(S),pt(N),Zt(P),Jt(I),on(V),vn(U),Kn(o)}else if(29===M){var W=(0,x.t)(parseInt(m/S)),Y=(0,x.t)(parseInt(m)),G=parseFloat(m/S/F*100).toFixed(2),R=(0,x.t)(parseInt(g-o)),w=parseFloat((o-g)/g*-100).toFixed(2).toString();tt(S),mt(W),It(Y),zt(G),Sn(R),Tn(w),On(o)}else if(364===M){var L=(0,x.t)(parseInt(m/S)),J=(0,x.t)(parseInt(m)),E=parseFloat(m/S/F*100).toFixed(2),A=(0,x.t)(parseInt(g-o)),z=parseFloat((o-g)/g*-100).toFixed(2).toString();lt(S),Ct(L),Wt(J),$t(E),hn(A),kn(z),qn(o)}if(o<=5e10&&!t){if(Le(M+1),t=!0,M>=364)break}else 999!==M||t||Le("999+")}Pe(!0)},Hn=function(e){$((function(t){return e}))},Qn=function(e){_((function(t){return e}))},Xn=function(e){Z((function(t){return e}))},$n=function(e){I((function(t){return e}))},ea=function(e){W((function(t){return e}))},ta=function(e){R((function(t){return e}))},na=function(e){J((function(t){return e}))},aa=function(e){z((function(t){return e}))},ra=function(e){de((function(t){return e}))},la=function(e){ae((function(t){return e}))},sa=function(e){ie((function(t){return e}))},ia=function(e){fe((function(t){return e}))};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("div",{className:Ne?"grid-container-high":"grid-container-full align-center",children:(0,i.jsxs)("div",{className:Ne?"flex flex-vertical":"flex flex-standard__wrap",children:[(0,i.jsx)(o,{ToggleText:Ve?"Currency":"Token",StateToggle:Ve,Update:function(){console.log(T),Ue((function(e){return!e}))},Identifier:"CalculatorToggle",SetClasses:Ne?"":"small-container"}),(0,i.jsx)(o,{ToggleText:De?"Advanced On":"Advanced Off",StateToggle:De,Update:function(){Be((function(e){return!e}))},Identifier:"AdvancedToggle",SetClasses:Ne?"":"small-container"}),!je&&Ve&&(0,i.jsx)(d,{Title:"Price",Metric:n.Currency,Type:"number",Data:X||0,Increment:"0.00001",Minimum:"0",onChangeFunction:Hn,Update:Fe,SetClasses:Ne?"":"small-container"}),!je&&Ve&&(0,i.jsx)(d,{Title:"Volume",Metric:n.Currency,Type:"number",Data:v,Increment:"0.001",Minimum:"0",Select:"VolumeState",SelectedValue:k,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!0},{Value:"B",ChosenDefault:!1}],onChangeFunction:Qn,onChangeSelect:$n,Update:Fe,SetClasses:Ne?"":"small-container"}),!je&&!Ve&&(0,i.jsx)(d,{Title:"Volume",Metric:"SFM",Type:"number",Data:T,Increment:"0.001",Minimum:"0",Select:"VolumeState",SelectedValue:k,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!0},{Value:"B",ChosenDefault:!1}],onChangeFunction:Qn,onChangeSelect:$n,Update:Fe,SetClasses:Ne?"":"small-container"}),!je&&(0,i.jsx)(d,{Title:"Balance",Metric:"SFM",Type:"number",Data:h||0,Increment:"0.001",Minimum:"0",Select:"BalanceState",SelectedValue:y,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!0},{Value:"B",ChosenDefault:!1}],onChangeFunction:function(e){m((function(t){return e}))},onChangeSelect:function(e){C((function(t){return e}))},Update:Fe,SetClasses:Ne?"":"small-container"}),!je&&(0,i.jsx)(d,{Title:"Supply",Metric:"SFM",Type:"number",Data:O||0,Increment:"0.001",Minimum:"0",Select:"SupplyState",SelectedValue:q,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!1},{Value:"B",ChosenDefault:!0}],onChangeFunction:na,onChangeSelect:aa,Update:Fe,SetClasses:Ne?"":"small-container"}),De&&(0,i.jsx)(d,{Title:"Distribution",Metric:"%",Type:"number",Data:ce||0,Increment:"0.01",Minimum:"0",Maximum:"100",onChangeFunction:ra,Update:Fe,SetClasses:Ne?"":"small-container"}),De&&(0,i.jsx)(d,{Title:"Burn",Metric:"%",Type:"number",Data:xe||0,Increment:"0.01",Minimum:"0",Maximum:"100",onChangeFunction:ra,Update:Fe,SetClasses:Ne?"":"small-container"}),De&&!je&&Ve&&(0,i.jsx)(d,{Title:"Card Volume",Metric:n.Currency,Type:"number",Data:b||0,Increment:"0.001",Minimum:"0",Select:"VolumeState",SelectedValue:K,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!0},{Value:"B",ChosenDefault:!1}],onChangeFunction:ea,onChangeSelect:ta,Update:Fe,SetClasses:Ne?"":"small-container"}),De&&Ve&&(0,i.jsx)(d,{Title:"Market Cap",Metric:"365 day Target",Type:"number",Data:ne,Increment:"0.01",Minimum:ne,onChangeFunction:la,Select:"MarketCapState",SelectedValue:se,SelectFields:[{Value:"K",ChosenDefault:!1},{Value:"M",ChosenDefault:!1},{Value:"B",ChosenDefault:!0}],onChangeSelect:sa,Update:Fe,SetClasses:Ne?"":"small-container"}),(0,i.jsx)(u.Z,{setClass:Ne?"":"small-container",children:(0,i.jsxs)("div",{className:"input",children:[(0,i.jsx)("button",{className:"margin-bottom-small",onClick:function(){(0,l.Y)("/api/getData").then((function(e){Hn(parseFloat(e.Price*n.Rate).toFixed(5)),Qn(parseFloat(e.Volume*n.Rate/1e6).toFixed(3)),na(parseFloat(e.CSupply/1e9).toFixed(3)),ea(parseFloat(e.Transfer*n.Rate/1e6).toFixed(3)),$n("M"),ta("M"),aa("B"),ra(4),la(parseFloat(e.Price*n.Rate*e.CSupply/1e6).toFixed(3)),sa("M"),ia(2),zn()}))},children:"Reset"}),(0,i.jsx)("button",{className:"notice-me",onClick:Ve?zn:function(){ge((function(e){return!e}));var e,t=!1,n=parseFloat(v).toFixed(3),a=k,r=parseFloat(h).toFixed(3),l=y,s=parseFloat(O).toFixed(3),i=q,o=parseFloat(ce).toFixed(2),u=parseFloat(xe).toFixed(2),c=0;n*="K"===a?1e3:"M"===a?1e6:1e9;var d=r*="K"===l?1e3:"M"===l?1e6:1e9,S=s*="K"===i?1e3:"M"===i?1e6:1e9;o=100/o,u/=100;for(var p=0;p<1e3;p++){if(s-=n*u,p<365)if(c+=e=n*r/(o*s),r+=e,0===p){var f=(0,x.t)(parseInt(c)),m=parseFloat(c/d*100).toFixed(2),F=(0,x.t)(parseInt(S-s)),g=parseFloat((s-S)/S*-100).toFixed(2).toString();ut(f),Rt(m),an(F),yn(g),bn(s)}else if(6===p){var C=(0,x.t)(parseInt(c)),j=parseFloat(c/d*100).toFixed(2),M=(0,x.t)(parseInt(S-s)),_=parseFloat((s-S)/S*-100).toFixed(2).toString();pt(C),Jt(j),on(M),vn(_),Kn(s)}else if(29===p){var D=(0,x.t)(parseInt(c)),B=parseFloat(c/d*100).toFixed(2),T=(0,x.t)(parseInt(S-s)),Z=parseFloat((s-S)/S*-100).toFixed(2).toString();mt(D),zt(B),Sn(T),Tn(Z),On(s)}else if(364===p){var N=(0,x.t)(parseInt(c)),P=parseFloat(c/d*100).toFixed(2),I=(0,x.t)(parseInt(S-s)),V=parseFloat((s-S)/S*-100).toFixed(2).toString();Ct(N),$t(P),hn(I),kn(V),qn(s)}if(s<=5e10&&!t){if(Le(p+1),t=!0,p>=364)break}else 999!==p||t||Le("999+")}Pe(!0)},children:"Calculate"})]})})]})}),Ne&&Ve&&(0,i.jsx)("div",{className:"grid-container-wide-and-high",children:(0,i.jsx)("div",{children:ot&&(0,i.jsx)(p,{Value:Ye+" "+n.Currency,DaysLeft:we,DayPrice:Ee+" "+n.Currency,DaySafemoon:ot+" SFM",DayUSD:vt+" "+n.Currency,DayGain:Kt+" %",DayBurn:nn+" SFM",DayBurnPercent:gn+" %",DaySupply:Un,WeekPrice:He+" "+n.Currency,WeekSafemoon:St+" SFM",WeekUSD:Tt+" "+n.Currency,WeekGain:Ot+" %",WeekBurn:sn+" SFM",WeekBurnPercent:Mn+" %",WeekSupply:Gn,MonthPrice:et+" "+n.Currency,MonthSafemoon:ht+" SFM",MonthUSD:kt+" "+n.Currency,MonthGain:qt+" %",MonthBurn:dn+" SFM",MonthBurnPercent:Bn+" %",MonthSupply:Ln,YearPrice:rt+" "+n.Currency,YearSafemoon:yt+" SFM",YearUSD:bt+" "+n.Currency,YearGain:Xt+" %",YearBurn:fn+" SFM",YearBurnPercent:Pn+" %",YearSupply:An})},ot)}),Ne&&!Ve&&(0,i.jsx)("div",{className:"grid-container-wide-and-high",children:(0,i.jsx)("div",{children:ot&&(0,i.jsx)(p,{DaysLeft:we,DaySafemoon:ot+" SFM",DayGain:Kt+" %",DayBurn:nn+" SFM",DayBurnPercent:gn+" %",DaySupply:Un,WeekSafemoon:St+" SFM",WeekGain:Ot+" %",WeekBurn:sn+" SFM",WeekBurnPercent:Mn+" %",WeekSupply:Gn,MonthSafemoon:ht+" SFM",MonthGain:qt+" %",MonthBurn:dn+" SFM",MonthBurnPercent:Bn+" %",MonthSupply:Ln,YearSafemoon:yt+" SFM",YearGain:Xt+" %",YearBurn:fn+" SFM",YearBurnPercent:Pn+" %",YearSupply:An})},ot)})]})}},8370:function(e,t,n){n(2791);var a=n(184);t.Z=function(e){return(0,a.jsx)("div",{className:e.setClass+" container__calculator flex-column",children:e.children})}},2426:function(e,t,n){n.d(t,{t:function(){return a}});var a=function(e){return e.toString().length>3&&e.toString().length<7?e=parseFloat(e/1e3).toFixed(2).toString()+" K":e.toString().length>6&&e.toString().length<10?e=parseFloat(e/1e6).toFixed(2).toString()+" M":e.toString().length>=10&&(e=parseFloat(e/1e9).toFixed(2).toString()+" B"),e}}}]);
//# sourceMappingURL=409.1face5d5.chunk.js.map