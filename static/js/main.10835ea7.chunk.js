(this.webpackJsonpreactportfolio_15102021=this.webpackJsonpreactportfolio_15102021||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(6),n=s.n(a),r=s(3),l=(s(16),s(43)),j=s(44),d=s(0);function o(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Biomedical Engineer"}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(l.a,{className:"icon"}),Object(d.jsx)("span",{children:"+57 310 728 2535"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:"camilo.castrillon@uao.edu.co"})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}s(22);function m(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#works",children:"Works"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(23);var b=s(8);function h(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Software developer","Medical image specialist","Freelance","Physical trainer"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/yo.jpeg",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi there, I'm"}),Object(d.jsx)("h1",{children:"Camilo Castrill\xf3n"}),Object(d.jsxs)("h3",{children:["I'm just not Biomedical engineer and",Object(d.jsx)("br",{})," I'm just not...",Object(d.jsx)("span",{ref:e,children:"   "})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(24);function p(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(d.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}s(25);var O=[{id:1,title:"T1 weighted scan",img:"assets/mrit1.jpeg"},{id:2,title:"T2 weighted scan",img:"assets/mrit2.jpeg"},{id:3,title:"DTI scan",img:"assets/dti.jpeg"},{id:4,title:"Flair scan",img:"assets/flair.jpg"},{id:5,title:"NIfTI format",img:"assets/nifti.png"},{id:6,title:"DICOM format",img:"assets/dicom.png"}],g=[{id:1,title:"Original image",img:"assets/t1.png"},{id:2,title:"Brain mask image",img:"assets/bm.png"},{id:3,title:"Cortical segmentation",img:"assets/aseg.png"},{id:4,title:"white matter mask",img:"assets/wm.png"},{id:5,title:"Hippocampus patch",img:"assets/patch.png"},{id:6,title:"fully processed",img:"assets/whole.png"}],u=[{id:1,title:"python",img:"assets/python.png"},{id:2,title:"Nipype",img:"assets/nipype.png"},{id:3,title:"Nibabel",img:"assets/nipypee.png"},{id:4,title:"TensorFlow-Keras",img:"assets/tf.jpg"}],x=[{id:1,title:"Linux OS",img:"assets/linux.jpg"},{id:2,title:"Slicer",img:"assets/slicer.png"},{id:3,title:"Neuroimage interfaces",img:"assets/fsl.jpg"},{id:4,title:"Shell script",img:"assets/lishell.png"},{id:5,title:"Radiomics",img:"assets/slicer3d.jpg"},{id:6,title:"Data Structures",img:"assets/ds.png"}];function f(){var e=Object(i.useState)("mri"),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),l=n[0],j=n[1];return Object(i.useEffect)((function(){switch(s){case"mri":j(O);break;default:j(g);break;case"mt":j(x);break;case"python":j(u)}}),[s]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"mri",title:"MRI"},{id:"freesurfer",title:"Freesurfer"},{id:"python",title:"Python"},{id:"mt",title:"More Tools"}].map((function(e){return Object(d.jsx)(p,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:l.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})}))})]})}s(26);function v(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],a=[{id:1,icon:"assets/medimg.jpg",title:"Medical Images",desc:"lorem ipsum chupakbezaaaa",img:"assets/medimg.jpg"},{id:2,icon:"assets/ml.jpg",title:"Software development",desc:"lorem ipsum chupakbezaaaa",img:"assets/ml.jpg"},{id:3,icon:"assets/fstk.png",title:"Full stack development",desc:"lorem ipsum chupakbezaaaa",img:"assets/fstk.png"}],n=function(e){c("left"===e?s>0?s-1:2:s<a.length-1?s+1:0)};return Object(d.jsxs)("div",{className:"works",id:"works",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:a.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.desc}),Object(d.jsx)("span",{children:"Projects"})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:"assets/medimg.jpg",alt:""})})]})})}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return n("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return n("right")}})]})}s(27);function N(){var e=Object(i.useState)(0),t=Object(r.a)(e,2);t[0],t[1];return Object(d.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(d.jsx)("h1",{children:"Testimonials"}),Object(d.jsx)("div",{className:"container",children:[{id:1,icon:"assets/ig.png",img:"assets/yan.jpg",title:"Biomedical engineer",desc:"calibration and metrology specialist, a really freaky nigga aka 'la carpa'",name:"Yan"},{id:2,icon:"assets/in.png",img:"assets/luis.png",title:"Biomedical engineer",desc:"Nanomedicine specialist and color lover, he also have got the best perez ever",name:"Luis",featured:!0},{id:3,icon:"assets/youtube.png",img:"assets/she.png",title:"Biomedical engineer",desc:"Yan's girlfriend, she looks like a palm but she's pretty smart",name:"Vanessa"}].map((function(e){return Object(d.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("img",{src:"assets/right_arrow.png",className:"left",alt:""}),Object(d.jsx)("img",{className:"user",src:e.img,alt:""}),Object(d.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(d.jsx)("div",{className:"center",children:e.desc}),Object(d.jsxs)("div",{className:"bottom",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("h4",{children:e.title})]})]})}))})]})}s(28);function k(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/wa.png",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("textarea",{placeholder:"Message"}),Object(d.jsx)("button",{type:"submit",children:"Send"}),s&&Object(d.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(29);var w=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o,{menuOpen:s,setMenuOpen:c}),Object(d.jsx)(m,{menuOpen:s,setMenuOpen:c}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(h,{}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{}),Object(d.jsx)(N,{}),Object(d.jsx)(k,{})]})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.10835ea7.chunk.js.map