import{l as c}from"./logo.cb2765cc.js";import{A as _,s as m}from"./client.73e92879.js";import{_ as p,r as u,o as h,c as g,a as o,e as n,v as l,b as f,w as v,d as a}from"./index.0c036e0e.js";const w={name:"LoginPage",data(){return{logoImage:c,form:{email:"",password:""}}},methods:{async submit(){const{data:r}=await _.login(this.form);m(r.token),await this.$router.replace("/dash")}}},x={class:"LoginPage"},b={class:"cover"},k={class:"header"},y=["src"],L=o("h1",{class:"text-2xl text-center opacity-60"},[o("span",{class:""},"Login to"),a(" Todo App ")],-1),P={class:"form"},V={class:"form-group"},A=o("label",{for:"email"},"Email",-1),N={class:"form-group"},T=o("label",{for:"password"},"Password",-1),B={class:"msg opacity-75"},C=a(" New here? "),E=a("Register Here");function I(r,e,U,j,s,i){const d=u("router-link");return h(),g("div",x,[o("div",b,[o("div",k,[o("img",{src:s.logoImage,width:"120",height:"120"},null,8,y),L]),o("div",P,[o("div",V,[A,n(o("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=t=>s.form.email=t),name:"email",placeholder:"john@doe.com"},null,512),[[l,s.form.email]])]),o("div",N,[T,n(o("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s.form.password=t),type:"password",placeholder:"secure password"},null,512),[[l,s.form.password]])]),o("button",{class:"",onClick:e[2]||(e[2]=(...t)=>i.submit&&i.submit(...t))},"Sign in")]),o("div",B,[o("p",null,[C,f(d,{class:"text-blue-700 font-bold",to:"/register"},{default:v(()=>[E]),_:1})])])])])}var R=p(w,[["render",I]]);export{R as default};