import{_ as y,P as v}from"./index.eefcd4a6.js";import{S as g,A as $}from"./attrList.9e75b34b.js";import{n as m,p as x,u as T,r as h,q as b,s as B,o as C,e as I,f as d,g as f,t as s,v as z,F as L,x as k,y as A,z as M,A as O,h as j}from"./vendor.50f13812.js";const E=m({components:{SetBox:g},setup(){const{proxy:e}=x(),t=T(),p=h(t.getters.themeColor),l=h(0),n=h(0),a=h(0),u=h(null),r=b($),i=B(()=>{const o=t.getters.orientation;return console.log(o),o}),_=o=>{i.value===v?(e.$refs.learnShow.style.width="100%",e.$refs.learnSet.style.width="100%",l.value=e.$refs.learnShow.clientHeight,n.value=e.$refs.learnSet.clientHeight,a.value=o.targetTouches[0].clientY):(e.$refs.learnShow.style.height="100%",e.$refs.learnSet.style.height="100%",l.value=e.$refs.learnShow.clientWidth,n.value=e.$refs.learnSet.clientWidth,a.value=o.targetTouches[0].clientX)},w=o=>{if(i.value===v){e.$refs.learnShow.style.width="100%",e.$refs.learnSet.style.width="100%";let c=o.targetTouches[0].clientY;e.$refs.learnShow.style.height=l.value+(c-a.value)+"px",e.$refs.learnSet.style.height=n.value-(c-a.value)+"px"}else{e.$refs.learnShow.style.height="100%",e.$refs.learnSet.style.height="100%";let c=o.targetTouches[0].clientX;e.$refs.learnShow.style.width=l.value+(c-a.value)+"px",e.$refs.learnSet.style.width=n.value-(c-a.value)+"px"}};return C(()=>{u.value=e.$refs.showButton,t.commit("SET_SHOW_BUTTON",u)}),{store:t,getOrientation:i,lineStart:_,lineMove:w,attrList:r,color:p}}}),S=e=>(M("data-v-5a765ec4"),e=e(),O(),e),H={ref:"learnShow",class:"learn-show"},R={class:"learn-show-box1"},W=S(()=>s("div",{style:{position:"absolute",left:"0",top:"-24px"}}," \u7956\u7236\u5143\u7D20 ",-1)),F={class:"learn-show-box2"},N=S(()=>s("div",{style:{position:"absolute",left:"50px",top:"28px"}}," \u7236\u5143\u7D20 ",-1)),P={ref:"learnSet",class:"learn-set"},X={class:"overflow-y"};function Y(e,t,p,l,n,a){const u=I("set-box");return d(),f("div",{class:A(["learn",[e.store.getters.orientation=="portrait"?"learn-portrait":"learn-landscape"]])},[s("div",H,[s("div",R,[W,s("div",F,[N,s("div",{ref:"showButton",class:"learn-show-box3",style:z({backgroundColor:e.color})}," \u5C55\u793A\u6309\u94AE ",4)])])],512),s("span",{ref:"learnLine",class:"learn-line",onTouchstart:t[0]||(t[0]=(...r)=>e.lineStart&&e.lineStart(...r)),onTouchmove:t[1]||(t[1]=(...r)=>e.lineMove&&e.lineMove(...r))},null,544),s("div",P,[s("div",X,[(d(!0),f(L,null,k(e.attrList,(r,i)=>(d(),j(u,{class:"set-box",attr:r,key:i},null,8,["attr"]))),128))])],512)],2)}var D=y(E,[["render",Y],["__scopeId","data-v-5a765ec4"]]);export{D as default};