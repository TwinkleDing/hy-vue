import{n as _,u as y,q as C,r as f,o as k,e as v,f as o,g as a,t as n,C as s,h as z,i as r,v as w,y as g,F as h,x as S,j as B,w as T}from"./vendor.50f13812.js";import{_ as V}from"./index.eefcd4a6.js";const D=_({props:["attr"],setup(t){const p=y(),i=C(t.attr),x=f(!1),u=f(0),c=p.getters.themeColor,l=()=>{x.value=!x.value},d=e=>{p.commit("CHANGE_SHOW_BUTTON",{name:e.name,value:e.preset[e.value]})};return k(()=>{}),{box:i,unfold:x,value:u,color:c,onChange:d,titleClick:l}}}),N={class:"set-box"},$={key:1},j={class:"content"},A={class:"content-item"},F={class:"item-slider"},L={class:"custom-button"},R={key:0,class:"content-item",style:{"overflow-x":"auto","overflow-y":"hidden"}},U={key:1,class:"content-item",style:{"overflow-x":"auto","overflow-y":"hidden"}},W={key:0,class:"box-desc"};function E(t,p,i,x,u,c){const l=v("van-icon"),d=v("van-slider");return o(),a("div",N,[n("div",{style:w({backgroundColor:t.color}),class:g(["title",t.unfold?"title-unfold":""]),onClick:p[0]||(p[0]=(...e)=>t.titleClick&&t.titleClick(...e))},[n("span",null,s(t.box.name),1),t.unfold?r("",!0):(o(),z(l,{key:0,name:"arrow"})),t.unfold?(o(),a("span",$,s(t.box.zh),1)):r("",!0)],6),n("div",{class:g(["right",t.unfold?"right-unfold":""])},[n("div",j,[(o(!0),a(h,null,S(t.box.children,(e,b)=>(o(),a(h,{key:b},[n("div",A,[n("div",null,s(e.text),1),n("div",F,[B(d,{min:0,step:1,max:e.preset.length-1,modelValue:e.value,"onUpdate:modelValue":[m=>e.value=m,m=>t.onChange(e)],"active-color":"#6200ee"},{button:T(()=>[n("div",L,s(e.preset[e.value]),1)]),_:2},1032,["max","modelValue","onUpdate:modelValue"])])]),e.presetDesc?(o(),a("div",R,s(e.presetDesc[e.value]),1)):r("",!0),e.desc?(o(),a("i",U,s(e.desc),1)):r("",!0)],64))),128))]),t.box.desc&&t.unfold?(o(),a("div",W,s(t.box.desc),1)):r("",!0)],2)])}var O=V(D,[["render",E],["__scopeId","data-v-4bcc67ca"]]);const q=[{name:"box",zh:"\u76D2\u6A21\u578B",children:[{name:"width",preset:["88px","44px","128px","168px","328px","648px"],value:0,text:"width"},{name:"height",preset:["44px","88px","128px","168px","328px","648px"],value:0,text:"height"},{name:"boxSizing",preset:["content-box","border-box","inherit"],presetDesc:["\u9ED8\u8BA4\u76D2\u6A21\u578B\uFF0C\u5BBD\u9AD8\u4E0D\u5305\u542Bpadding\u3001border","\u5BBD\u9AD8\u5305\u542Bpadding\u3001border","\u7EE7\u627F"],value:0,text:"box-sizing"}]},{name:"padding",zh:"\u586B\u5145",children:[{name:"padding",preset:["0","3px","7px","11px","17px","29px"],desc:"\u5C5E\u6027\u53EF\u8BBE\u7F6E\u56DB\u4E2A\u65B9\u5411\uFF0C\u9075\u4ECE\u4E0A\u53F3\u4E0B\u5DE6",value:0,text:"padding"},{name:"paddingTop",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"padding-top"},{name:"paddingRight",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"padding-right"},{name:"paddingBottom",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"padding-bottom"},{name:"paddingLeft",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"padding-left"}]},{name:"margin",zh:"\u95F4\u8DDD",desc:"\u4E0E\u5176\u5B83box\u7684\u95F4\u8DDD\uFF0C\u7528\u6CD5\u57FA\u672C\u540Cpadding",children:[{name:"margin",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"margin"},{name:"marginTop",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"margin-top"},{name:"marginRight",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"margin-right"},{name:"marginBottom",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"margin-bottom"},{name:"marginLeft",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"margin-left"}]},{name:"border",zh:"\u8FB9\u6846",desc:"\u53EF\u5206\u522B\u8BBE\u7F6E\u56DB\u4E2A\u65B9\u5411",children:[{name:"borderWidth",preset:["0","1px","2px","3px","4px","5px"],value:0,text:"border-width"},{name:"borderStyle",preset:["dashed","dotted","solid","double","groove","ridge","inset","outset","none"],value:0,text:"border-style"},{name:"borderColor",preset:["#000","#00f","#0f0","#0ff","#f00","#f0f","#ff0","#fff"],value:0,text:"border-color"},{name:"borderRadius",preset:["0","10%","20%","30%","40%","50%"],value:0,text:"border-radius"}]},{name:"position",zh:"\u4F4D\u7F6E",desc:"top\u548Cleft\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8Ebottom\u548Cright",children:[{name:"position",preset:["relative","absolute","fixed","sticky"],presetDesc:["\u76F8\u5BF9\u81EA\u8EAB\u5B9A\u4F4D","\u76F8\u5BF9\u4E0A\u4E00\u4E2A\u975Estatic\uFF08\u9ED8\u8BA4\uFF09\u5B9A\u4F4D","\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7A97\u53E3\u5B9A\u4F4D","\u7C98\u6027\u5E03\u5C40\u53EA\u5728\u5176\u7236\u5143\u7D20\u7A7A\u95F4\u5185\u751F\u6548"],value:0,text:"position"},{name:"top",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"top"},{name:"left",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"left"},{name:"bottom",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"bottom"},{name:"right",preset:["0","3px","7px","11px","17px","29px"],value:0,text:"right"}]},{name:"font",zh:"\u6587\u5B57",children:[{name:"fontSize",preset:["12px","16px","28px","40px","60px"],value:0,text:"font-size"},{name:"fontWeight",preset:["100","200","300","400","500","600","700","800","900"],value:0,text:"font-weight"},{name:"FontFamily",preset:["\u5FAE\u8F6F\u96C5\u9ED1","\u5B8B\u4F53","auto","fangsong","cursive","emoji","fantasy","math","monospace","none","sans-serif","serif","system-ui"],value:0,text:"font-family"},{name:"color",preset:["#000","#00f","#0f0","#0ff","#f00","#f0f","#ff0","#fff"],value:0,text:"color"},{name:"textAlign",preset:["start","left","center","right","end"],value:0,text:"text-align"}]}];export{q as A,O as S};
