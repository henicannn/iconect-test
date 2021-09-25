(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{23:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(17),a=n.n(c),o=(n(23),n(0));function s(){return Object(o.jsxs)("div",{className:"FilesUploader",children:[Object(o.jsx)("p",{className:"FilesUploader__title",children:"React Drag and Drop Image Upload"}),Object(o.jsx)("div",{className:"FilesUploader__content"})]})}var l,i=n(3),u=n(5),d=["title","titleId"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function j(e,t){var n=e.title,c=e.titleId,a=p(e,d);return r.createElement("svg",f({width:1792,height:1792,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,l||(l=r.createElement("path",{d:"M1216 864q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zm640 288q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z"})))}var b=r.forwardRef(j),O=(n.p,n(18)),h=n.n(O);n(44);function x(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),l=s[0],d=(s[1],Object(r.useState)([])),f=Object(u.a)(d,2),p=f[0],j=f[1],O=Object(r.useState)([]),x=Object(u.a)(O,2),v=x[0],m=x[1],g=Object(r.useRef)(),_=Object(r.useRef)(),D=Object(r.useRef)(),B=Object(r.useRef)(),y=function(e){for(var t=function(t){c((function(n){return[].concat(Object(i.a)(n),[e[t]])}))},n=0;n<e.length;n++)t(n)},N=function(e){if(0===e)return"0 Bytes";var t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][t]},w=function(e){var t=p.findIndex((function(t){return t.name===e})),r=n.findIndex((function(t){return t.name===e})),a=v.findIndex((function(t){return t.name===e}));p.splice(t,1),n.splice(r,1),j(Object(i.a)(p)),c(Object(i.a)(n)),-1!==a&&(v.splice(a,1),m(Object(i.a)(v)))};Object(r.useEffect)((function(){var e=n.reduce((function(e,t){return e.find((function(e){return e.name===t.name}))?e:e.concat([t])}),[]);j(Object(i.a)(e))}),[n]);return Object(o.jsxs)("div",{className:"DropBox",children:[0===v.length&&p.length?Object(o.jsx)("button",{className:"DropBox-btn",onClick:function(){return function(){_.current.style.display="block",D.current.innerHTML="File(s) Uploading...";for(var e=0;e<p.length;e++){var t=new FormData;t.append("file",p[e]),h.a.post("//localhost:8000/upload",t,{onUploadProgress:function(e){var t=Math.floor(e.loaded/e.total*100);B.current.innerHTML="".concat(t,"%"),B.current.style.width="".concat(t,"%"),100===t&&(D.current.innerHTML="File(s) Uploaded",p.length=0,j(Object(i.a)(p)),c(Object(i.a)(p)),m(Object(i.a)(p)),setTimeout(_.current.style.display="none",3e3))}}).then((function(e){console.log("Success")})).catch((function(e){console.log("Error",e),D.current.innerHTML='<span class="error">Error Uploading File(s)</span>'}))}}()},children:"Upload"}):"",v.length?Object(o.jsx)("p",{children:"Please remove all unsupported files."}):"",Object(o.jsxs)("div",{className:"DropBox__container",onDragOver:function(e){e.preventDefault()},onDragEnter:function(e){e.preventDefault()},onDragLeave:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.files;t.length&&y(t)},onClick:function(){g.current.click()},children:[Object(o.jsxs)("div",{className:"DropBox__container-message",children:[Object(o.jsx)(b,{className:"DropBox__container-message-icon"}),Object(o.jsx)("p",{children:"Drag & Drop files here or click to upload"})]}),Object(o.jsx)("input",{ref:g,className:"DropBox__container-input",type:"file",multiple:!0,onChange:function(){g.current.files.length&&y(g.current.files)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"DropBox__file",children:p.map((function(e,t){return Object(o.jsxs)("div",{className:"DropBox__file-status",children:[Object(o.jsxs)("div",{onClick:e.invalid?function(){return w(e.name)}:function(){return openImageModal(e)},children:[Object(o.jsx)("div",{className:"DropBox__file-type",children:(n=e.name,n.substring(n.lastIndexOf(".")+1,n.length)||n)}),Object(o.jsx)("span",{className:"DropBox__file-name ".concat(e.invalid?"file-error":""),children:e.name}),Object(o.jsxs)("span",{className:"DropBox__file-size",children:["(",N(e.size),")"]}),e.invalid&&Object(o.jsxs)("span",{className:"DropBox__file-error-message",children:["(",l,")"]})]}),Object(o.jsx)("div",{className:"DropBox__file-remove",onClick:function(){return w(e.name)},children:"X"})]},t);var n}))})}),Object(o.jsxs)("div",{className:"DropBox__upload-modal",ref:_,children:[Object(o.jsx)("div",{className:"DropBox__upload-overlay"}),Object(o.jsxs)("div",{className:"DropBox__upload-progress-container",children:[Object(o.jsx)("span",{ref:D}),Object(o.jsx)("div",{className:"DropBox__progress",children:Object(o.jsx)("div",{className:"DropBox__upload-progress-bar",ref:B})})]})]})]})}n(45);function v(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(x,{})]})}a.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e9d162a1.chunk.js.map