(this["webpackJsonpkelan-website"]=this["webpackJsonpkelan-website"]||[]).push([[0],{11:function(e,t,n){e.exports={contactPage:"Contact_contactPage__2Oknj",messageForm:"Contact_messageForm__Fvdkn",messageField:"Contact_messageField__NDbAk",submitBtn:"Contact_submitBtn__1mXCg",sentNotice:"Contact_sentNotice__1QhDw",contactDetails:"Contact_contactDetails__3gxj6",greenSquare:"Contact_greenSquare__1mNrz","yes-animation":"Contact_yes-animation__db3NE",checkIcon:"Contact_checkIcon__2UbS1"}},13:function(e,t,n){e.exports={Navbar:"Navigationbar_Navbar__1SEba",navbarLinks:"Navigationbar_navbarLinks__1jLed",svgNavs:"Navigationbar_svgNavs__eq5nI",menuButton:"Navigationbar_menuButton__1FacZ",menuButtonLayer:"Navigationbar_menuButtonLayer__3WOVP","login-admin":"Navigationbar_login-admin__2WAye"}},14:function(e,t,n){e.exports={loginModal:"Login_loginModal__2Ygnx",loginInput:"Login_loginInput__RHkxF",loginButton:"Login_loginButton__brhfq",closeModal:"Login_closeModal__2hi88"}},15:function(e,t,n){e.exports={"about-section":"About_about-section__1acYc",aboutMe:"About_aboutMe__16LWQ",aboutNavBar:"About_aboutNavBar__1m5cq"}},18:function(e,t,n){},19:function(e,t,n){e.exports={homePage:"Home_homePage__3JKtH",presentationContent:"Home_presentationContent__2zbda",name:"Home_name__2ROo5",jobTitle:"Home_jobTitle__2crpa",contactMeBtn:"Home_contactMeBtn__2gMOH",buttonFade:"Home_buttonFade__1mUsK"}},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(24),o=n.n(c),s=(n(34),n(18),n(12)),l=n(14),r=n.n(l),d=n(2);function u(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),l=o[0],u=o[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),m=h[0],g=h[1];return Object(a.useEffect)((function(){var e=window.localStorage.getItem("uname"),t=window.localStorage.getItem("pswrd");i(e),u(t),"kelan-admin"===e&&"Qatarairways92!"===t&&g(!0)}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("uname",n),window.localStorage.setItem("pswrd",l)})),Object(d.jsx)("div",{id:r.a.loginModal,children:m?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Admin is logged in"}),Object(d.jsx)("span",{className:r.a.closeModal,onClick:j,children:"\xd7"}),Object(d.jsx)("button",{className:r.a.loginButton,onClick:function(){g(!1),i(""),u(""),window.localStorage.removeItem("uname"),window.localStorage.removeItem("pswrd"),window.location.reload()},children:"Log out"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Admin Login"}),Object(d.jsx)("span",{className:r.a.closeModal,onClick:j,children:"\xd7"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{id:"username",className:r.a.loginInput,type:"text",placeholder:"Enter Username",onChange:function(e){return i(e.target.value)},required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"password",className:r.a.loginInput,type:"password",placeholder:"Enter Password",onChange:function(e){return u(e.target.value)},required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:r.a.loginButton,type:"submit",onClick:function(e){"kelan-admin"!==n||"Qatarairways92!"!==l?alert("Wrong username or password!"):(alert("Logged in"),g(!0),window.location.reload()),e.preventDefault()},children:"Log in"})]})]})})}function j(){document.getElementById(r.a.loginModal).style.display="none"}function b(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}function h(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}function m(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-box-arrow-in-right",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]})}function g(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})}var p=n(13),x=n.n(p);function O(){console.log(window.location.pathname);var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],c=function(){var e=window.localStorage.getItem("uname"),t=window.localStorage.getItem("pswrd");return"kelan-admin"===e&&"Qatarairways92!"===t?Object(d.jsx)(g,{}):Object(d.jsx)(m,{})},o=function(){i(!0),document.getElementsByClassName(x.a.Navbar)[0].style.height="500px"},l=function(){i(!1),document.getElementsByClassName(x.a.Navbar)[0].style.height="55px"};return window.addEventListener("resize",(function(){window.innerWidth>700&&l()})),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:x.a.Navbar,children:[Object(d.jsxs)("ul",{id:x.a.navbarLinks,className:x.a.navbarLinks,children:[Object(d.jsx)("a",{href:"/portfolio",children:"HOME"}),Object(d.jsx)("a",{href:"#about",children:"ABOUT"}),Object(d.jsx)("a",{href:"#blog",children:"BLOG"}),Object(d.jsx)("a",{href:"#projects",children:"PROJECTS"}),Object(d.jsx)("a",{href:"#contact",children:"CONTACT"}),Object(d.jsx)("a",{className:x.a.svgNavs,href:function(){return console.log("Admin panel opened")},onClick:function(){return document.getElementById(r.a.loginModal).style.display="block"},children:c()}),Object(d.jsx)("a",{className:x.a.svgNavs,href:"https://www.linkedin.com/in/kevin-lane-884950a7/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(b,{})}),Object(d.jsx)("a",{className:x.a.svgNavs,href:"https://github.com/kevin-lane",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(h,{})})]}),n?Object(d.jsx)("span",{className:"close-modal",onClick:l,children:"\xd7"}):Object(d.jsxs)("div",{onClick:o,id:x.a.menuButton,className:x.a.menuButton,children:[Object(d.jsx)("div",{className:x.a.menuButtonLayer}),Object(d.jsx)("div",{className:x.a.menuButtonLayer}),Object(d.jsx)("div",{className:x.a.menuButtonLayer})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{})})]})}function v(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})})}var f=n.p+"static/media/stockholm.6ecc953f.jpg";function w(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-envelope-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})})}function y(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-telephone-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})})}var _=n(19),N=n.n(_);function k(){var e=Object(a.useState)([Object(d.jsx)(w,{}),Object(d.jsx)(y,{})]),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){document.body.style.backgroundImage="url(".concat(f,")"),document.body.style.backgroundAttachment="fixed";var e=0;setInterval((function(){e=(e+1)%n.length,i(n[e])}),2e3)}),[]),Object(d.jsxs)("div",{id:N.a.homePage,children:[Object(d.jsxs)("div",{className:N.a.presentationContent,children:[Object(d.jsx)("h1",{id:N.a.name,children:"KEVIN LANE"}),Object(d.jsx)("h3",{id:N.a.jobTitle,children:"JavaScript & Office365 Developer"}),Object(d.jsx)(v,{}),Object(d.jsx)("h2",{children:"STOCKHOLM"})]}),Object(d.jsx)("a",{className:N.a.contactMeBtn,href:"#contact",children:n})]})}var B=n(15),I=n.n(B);function C(){return Object(d.jsxs)("article",{className:I.a.aboutMe,children:[Object(d.jsx)("h1",{children:"About me"}),Object(d.jsx)("p",{children:"I am a certified SharePoint Developer with focus and passion on Frontend-development."}),Object(d.jsx)("p",{children:"My ambition is to succeed within the IT-field with the goal to make our digital world more user-friendly for anybody."}),Object(d.jsx)("p",{children:"During my freetime, I enjoy being out in the nature and capturing beautiful photos."})]})}function S(){return Object(d.jsxs)("article",{className:I.a.aboutMe,children:[Object(d.jsx)("h1",{children:"Career"}),Object(d.jsx)("h3",{children:" Office365/SharePoint Developer - Enfo  (Oct. 2019 - Feb. 2020) "}),Object(d.jsx)("p",{children:"At Enfo I worked in the Modern Workplace Team mainly developing applications for SharePoint with SharePoint Framework using mainly JavaScript, TypeScript and React. While working here I also learnt about Microsoft Power Platform where I even got a chance to make a configuration in MS Flow for one of Enfos clients. Since we worked with an agile approach with Scrum using Azure DevOps and Daily meetings I have found an interest in this approach. I also got to learn the basics of Azure."}),Object(d.jsx)("h3",{children:" SharePoint Developer Trainee(LIA) - Altran  (March 2019 - May 2019) "}),Object(d.jsx)("p",{children:"During my internship at Altran, I was involved in building a Process Management web part in SharePoint Framework (SPFx) in where the user can document their processes when for example working in a project. The webpart was built with TypeScript and React as a framework."})]})}function E(){return Object(d.jsxs)("article",{className:I.a.aboutMe,children:[Object(d.jsx)("h1",{children:"Education"}),Object(d.jsx)("h3",{children:"SharePoint Developer - Higher Vocational Education/Yrkesh\xf6gskoleexamen - EC Utbildning (2017 - 2019)"}),Object(d.jsx)("p",{children:"This programs aim is to make you a certified SharePoint Developer. Courses included in this program are mainly about administration and building applications in SharePoint. Frontend and Backend development are also included here."}),Object(d.jsx)("h3",{children:"B.SC in Computer Engineering - Royal Institute of Technology(KTH) (2012 - 2017)"}),Object(d.jsx)("p",{children:"This program includes a huge range of fundamental knowledge and skills within the ICT area such as Computer Engineering, mathematics, electronics, programming and networking. Computer Engineering program also allows you to customise your education depending on individual interests."})]})}function M(){return Object(d.jsxs)("article",{className:I.a.aboutMe,children:[Object(d.jsx)("h1",{children:"Skills"}),Object(d.jsx)("p",{children:"HTML, CSS, JavaScript, jQuery, TypeScript, React, .NET, C#, SQL"})]})}var P=n.p+"static/media/sunsetsrilanka.b1177c99.jpg";function L(e){var t=Object(a.useState)(Object(d.jsx)(C,{})),n=Object(s.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){document.body.style.backgroundImage="url(".concat(P,")"),document.body.style.backgroundAttachment="fixed"})),Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{className:I.a.aboutNavBar,children:[Object(d.jsx)("li",{children:Object(d.jsx)("span",{onClick:function(){return c(Object(d.jsx)(C,{}))},children:"ABOUT ME"})}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{onClick:function(){return c(Object(d.jsx)(M,{}))},children:"SKILLS"})}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{onClick:function(){return c(Object(d.jsx)(S,{}))},children:"CAREER"})}),Object(d.jsx)("li",{children:Object(d.jsx)("span",{onClick:function(){return c(Object(d.jsx)(E,{}))},children:"EDUCATION"})})]}),i]})}var A=n(25),z=n(26),D=n(16),F=n(29),T=n(28),H=n(27).a.initializeApp({apiKey:"AIzaSyBQtVVWIl0ZwiJ73vYCUcDfESCSrSkeL34",authDomain:"kelan-website.firebaseapp.com",projectId:"kelan-website",storageBucket:"AIzaSyBQtVVWIl0ZwiJ73vYCUcDfESCSrSkeL34",messagingSenderId:"938472367424",appId:"1:938472367424:web:5a883eeed9fe93a99d46a5"}).firestore(),V=n.p+"static/media/palmsky.466f747a.jpg",q=n(11),J=n.n(q),Q=function(e){Object(F.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(A.a)(this,n),(a=t.call(this,e)).state={name:"",subject:"",email:"",message:""},a.handleName=a.handleName.bind(Object(D.a)(a)),a.handleSubject=a.handleSubject.bind(Object(D.a)(a)),a.handleEmail=a.handleEmail.bind(Object(D.a)(a)),a.handleMessage=a.handleMessage.bind(Object(D.a)(a)),a.sendMessage=a.sendMessage.bind(Object(D.a)(a)),a}return Object(z.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="url(".concat(V,")"),document.body.style.backgroundAttachment="fixed"}},{key:"render",value:function(){return Object(d.jsxs)("div",{id:J.a.contactPage,children:[Object(d.jsx)("p",{style:{color:"white"},children:"If you want to come in contact with me, please do write a message to me and I will get back to you as soon as I can :)"}),Object(d.jsxs)("div",{id:J.a.messageForm,className:J.a.messageForm,children:[Object(d.jsx)("div",{id:J.a.greenSquare,children:Object(d.jsx)("div",{className:J.a.checkIcon})}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{id:"userName",className:"formContent",type:"text",value:this.state.name,onChange:this.handleName,placeholder:"Name",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"subject",className:"formContent",type:"text",onChange:this.handleSubject,placeholder:"Subject",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"email",className:"formContent",type:"email",onChange:this.handleEmail,placeholder:"Email"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:J.a.messageField,className:"formContent",type:"text",onChange:this.handleMessage,placeholder:"Write your message here..",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{id:"requiredNotice",style:{color:"red",display:"none"},children:"All fields are required"}),Object(d.jsx)("p",{id:"emailNotice",style:{color:"red",display:"none"},children:"Invalid Email format, use name@domain.xx or name@domain.xx.yy"}),Object(d.jsxs)("p",{id:J.a.sentNotice,style:{display:"none"},children:["Thank you ",this.state.name," for your message."]}),Object(d.jsx)("button",{id:J.a.submitBtn,className:"formContent",type:"submit",onClick:this.sendMessage,children:"Send message"})]})]}),Object(d.jsxs)("div",{className:J.a.contactDetails,children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(v,{}),Object(d.jsx)("br",{})," Stockholm, Sweden"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)(w,{}),Object(d.jsx)("br",{}),"kevinlane3@hotmail.com"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)(y,{}),Object(d.jsx)("br",{}),"+46 73 907 64 61"]})]})]})}},{key:"handleName",value:function(e){document.getElementById("requiredNotice").style.display="none",this.setState({name:e.target.value})}},{key:"handleSubject",value:function(e){document.getElementById("requiredNotice").style.display="none",this.setState({subject:e.target.value})}},{key:"handleEmail",value:function(e){document.getElementById("requiredNotice").style.display="none",document.getElementById("emailNotice").style.display="none",this.setState({email:e.target.value})}},{key:"handleMessage",value:function(e){document.getElementById("requiredNotice").style.display="none",this.setState({message:e.target.value})}},{key:"addZero",value:function(e){return e<10?"0".concat(e):e}},{key:"sendMessage",value:function(e){var t=document.getElementById("userName").value,n=document.getElementById("subject").value,a=document.getElementById("email").value,i=document.getElementById(J.a.messageField).value,c=new Date,o=document.getElementsByClassName("formContent"),s=/^([a-z0-9._%+-])+@([a-z0-9.-])+\.([a-z]{2,})$/;console.log(s.test(this.state.email)),0===t.length||0===n.length||0===a.length||0===i.length?document.getElementById("requiredNotice").style.display="block":s.test(this.state.email)?H.collection("messages").add({name:this.state.name,subject:this.state.subject,email:this.state.email,message:this.state.message,Time:c.getFullYear()+"-"+this.addZero(c.getMonth()+1)+"-"+this.addZero(c.getDate())+" "+this.addZero(c.getHours())+":"+this.addZero(c.getMinutes())}).then((function(){for(var e=0;e<o.length;e++)o[e].style.visibility="hidden";document.getElementById("requiredNotice").style.display="none",document.getElementById(J.a.greenSquare).style.display="block",document.getElementById(J.a.sentNotice).style.display="block",setTimeout((function(){document.getElementById(J.a.greenSquare).style.display="none",document.getElementById(J.a.sentNotice).style.display="none";for(var e=0;e<o.length;e++)o[e].style.visibility="visible","input"!==o[e].localName&&"textarea"!==o[e].localName||(o[e].value="")}),5e3)})).catch((function(e){alert(e.message)})):document.getElementById("emailNotice").style.display="block",e.preventDefault()}}]),n}(a.Component),R=n(9),U=n.n(R);function W(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)})),Object(d.jsxs)("div",{id:e.id,className:"blog-post",children:[Object(d.jsx)("span",{className:U.a.returnBackBtn,onClick:e.goBack,children:"Back"}),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:e.heading})}),Object(d.jsx)("div",{className:U.a.postImage,children:Object(d.jsx)("img",{src:e.image,alt:"imaginem",width:"800",height:"400"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:e.date})}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:e.introduction})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:e.entry})})]})}var K=n.p+"static/media/bench.b9ac6003.jpg";function Y(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",fill:"gray",class:"bi bi-clock-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"})})}function Z(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})}function G(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})})}var X=window.localStorage.getItem("uname"),$=window.localStorage.getItem("pswrd");function ee(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),r=l[0],u=l[1],j=Object(a.useState)(!1),b=Object(s.a)(j,2),h=b[0],m=b[1];return Object(a.useEffect)((function(){var e=H.collection("blogposts");e.get().then((function(t){var n=[];t.docs.forEach((function(t){e.doc(t.id).set({id:t.id,date:t.data().date,entry:t.data().entry,heading:t.data().heading,introduction:t.data().introduction}),n.push(t.data())})),u(n)})),"kelan-admin"===X&&"Qatarairways92!"===$&&m(!0)}),[]),Object(d.jsxs)("div",{className:U.a.blogPage,children:[h?Object(d.jsxs)("div",{children:[Object(d.jsxs)("button",{className:U.a.createBlogPostButton,onClick:function(){return document.getElementById(U.a.blogPostModal).style.display="block"},children:[Object(d.jsx)(G,{})," Create Blog Post"]}),Object(d.jsxs)("div",{id:U.a.blogPostModal,children:[Object(d.jsx)("span",{className:"close-modal",onClick:function(){return document.getElementById(U.a.blogPostModal).style.display="none"},children:"\xd7"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("input",{className:U.a.blogPostInput,type:"text",placeholder:"Heading",id:"blog-post-heading-field",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{className:U.a.blogPostInput,type:"text",placeholder:"Introduction",name:"introduction",id:"blog-post-introduction-field"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:U.a.blogPostInput,name:"entry",placeholder:"Entry",id:U.a.blogPostEntryField,required:!0,cols:"30",rows:"10"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:U.a.blogPostSubmitButton,type:"submit",onClick:te,children:"Submit post"})]})]})]}):null,r.map((function(e){switch(i){case e.id:return console.log(e.id),Object(d.jsx)(W,{goBack:function(){return c(null)},id:e.id,date:e.date,heading:e.heading,introduction:e.introduction,entry:e.entry});case null:return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"blog-posts",children:Object(d.jsxs)("li",{id:e.id,className:U.a.blogPostItem,onClick:function(){return c(e.id)},children:[Object(d.jsx)("img",{src:K,alt:"Girl in a jacket",width:"400",height:"200"}),Object(d.jsx)("h1",{id:"blog-post-heading",children:e.heading}),h?Object(d.jsxs)("button",{onClick:function(t){return function(e,t){e.stopPropagation(),alert("Item with id ".concat(t," has been deleted")),H.collection("blogposts").doc(t).delete(),window.location.reload()}(t,e.id)},children:[Object(d.jsx)(Z,{})," "]}):null,Object(d.jsx)("div",{className:U.a.timeStamp,children:Object(d.jsxs)("p",{id:U.a.publishDate,children:[Object(d.jsx)(Y,{})," ",Object(d.jsx)("time",{dateTime:e.date,children:e.date})]})})]})})});default:return null}}))]})}function te(e){var t=document.getElementById("blog-post-heading-field").value,n=document.getElementById("blog-post-introduction-field").value,a=document.getElementById(U.a.blogPostEntryField).value;e.preventDefault(),""===t||/^\s/.test(t)||""===a||/^\s/.test(a)?alert("Heading and entry are required. No empty white space allowed."):H.collection("blogposts").add({id:"",date:"".concat(ne()),heading:t,introduction:n,entry:a}).then((function(e){alert("Blog post added"),document.getElementById(U.a.blogPostModal).style.display="none",window.location.reload()}))}function ne(e,t,n,a,i){var c=new Date;function o(e){return e<10?"0".concat(e):e}var s=c.getFullYear(),l=o(c.getMonth()+1),r=o(c.getDate()),d="".concat(s,"-").concat(l,"-").concat(r),u=o(c.getHours()),j=o(c.getMinutes());return d+" "+"".concat(u,":").concat(j)}function ae(){return Object(d.jsx)("div",{style:{margin:"4rem"},children:Object(d.jsx)("h1",{children:"Posts will come soon"})})}var ie=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{className:"Navbar"}),function(){switch(window.onhashchange=function(){window.location.reload()},window.location.hash){case"#about":return Object(d.jsx)(L,{});case"#blog":return Object(d.jsx)(ee,{});case"#contact":return Object(d.jsx)(Q,{});case"#projects":return Object(d.jsx)(ae,{});default:return Object(d.jsx)(k,{})}}(),Object(d.jsx)("footer",{children:Object(d.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Copyright: Kevin Lane"]})})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root")),ce()},9:function(e,t,n){e.exports={blogPage:"Blog_blogPage__3t0tc",returnBackBtn:"Blog_returnBackBtn__3JIYV",blogPostItem:"Blog_blogPostItem__2L06d",createBlogPostButton:"Blog_createBlogPostButton__3EF9M",blogPostModal:"Blog_blogPostModal__10GbH",blogPostInput:"Blog_blogPostInput__2HTBv",blogPostEntryField:"Blog_blogPostEntryField__i2OzX",blogPostSubmitButton:"Blog_blogPostSubmitButton__1lb4U",postImage:"Blog_postImage__msdvK",timeStamp:"Blog_timeStamp__29mmR",publishDate:"Blog_publishDate__22wx8"}}},[[41,1,2]]]);
//# sourceMappingURL=main.1e261eb3.chunk.js.map