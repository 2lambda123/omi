import{W as l,h as o,t as n,s as m,a as c}from"./index.ae6c1c22.js";import"./index.esm.7f436dff.js";import"./admin-docs.0ec4e320.js";import"./index.49eadd0e.js";import"./container.1acc37bf.js";import"./encode.47cdd865.js";var p=Object.defineProperty,x=Object.getOwnPropertyDescriptor,b=(i,a,u,r)=>{for(var e=r>1?void 0:r?x(a,u):a,t=i.length-1,d;t>=0;t--)(d=i[t])&&(e=(r?d(a,u,e):d(e))||e);return r&&e&&p(a,u,e),e};const f="radio-component";let s=class extends l{install(){}render(){return o("code-demo-container",null,o("code-demo",{title:"\u5355\u9009\u6846",describe:"\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A",code:`
\`\`\`jsx
<o-radio name="sex" checked={true} value="0">\u7537</o-radio>
<o-radio name="sex" value="1">\u5973</o-radio>

<o-radio disabled={true} name="sex-b">\u7537</o-radio>
<o-radio disabled={true} name="sex-b">\u5973</o-radio>
\`\`\`
          `},o("div",{slot:"demo",class:n`flex justify-around px-5 py-5`},o("o-radio",{name:"sex",checked:!0,value:"0"},"\u7537"),o("o-radio",{name:"sex",value:"1"},"\u5973"),o("o-radio",{disabled:!0,name:"sex-b"},"\u7537"),o("o-radio",{disabled:!0,name:"sex-b"},"\u5973"))))}};s.css=[m.target,"o-radio{margin-left:10px;}"];s=b([c(f)],s);export{s as default};
