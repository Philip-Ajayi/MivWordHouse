import{k as v,l as y,r as a,R as e,L as N,n as L,p as g,q as P,t as k}from"./index-DRH_EJsh.js";const q=()=>{var i,u,d;const r=v(),s=y(),l=((u=(i=s.state)==null?void 0:i.from)==null?void 0:u.pathname)||"/admin",p=((d=s.state)==null?void 0:d.error)||"",[n,b]=a.useState(""),[o,h]=a.useState(""),[E,c]=a.useState(""),m=E||p,w=async t=>{t.preventDefault();try{await L(g,n,o),r(l,{replace:!0})}catch(x){c(x.message)}},f=async()=>{try{const t=new P;await k(g,t),r(l,{replace:!0})}catch(t){c(t.message)}};return e.createElement("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"},e.createElement("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md"},e.createElement("h2",{className:"text-2xl font-bold mb-6 text-center"},"Login"),m&&e.createElement("p",{className:"mb-4 text-red-500 text-center"},m),e.createElement("form",{onSubmit:w,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{htmlFor:"email",className:"block text-gray-700"},"Email"),e.createElement("input",{type:"email",id:"email",placeholder:"Email",value:n,onChange:t=>b(t.target.value),required:!0,className:"mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"})),e.createElement("div",null,e.createElement("label",{htmlFor:"password",className:"block text-gray-700"},"Password"),e.createElement("input",{type:"password",id:"password",placeholder:"Password",value:o,onChange:t=>h(t.target.value),required:!0,className:"mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"})),e.createElement("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"},"Login with Email")),e.createElement("div",{className:"mt-6 text-center"},e.createElement("p",{className:"text-gray-600"},"Or"),e.createElement("button",{onClick:f,className:"mt-4 flex items-center justify-center w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"},"Login with Google")),e.createElement("div",{className:"mt-6 text-center"},e.createElement("p",{className:"text-gray-600"},"Don't have an account?"," ",e.createElement(N,{to:"/signup",className:"text-blue-500 hover:underline"},"Sign up here")))))};export{q as default};
