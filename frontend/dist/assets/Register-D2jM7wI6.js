import{u as x,i as g,r as t,j as e,L as b,o as f,k as j}from"./index-zlj08X_R.js";const v=()=>{var o,n;const i=x(),c=((n=(o=g().state)==null?void 0:o.from)==null?void 0:n.pathname)||"/admin",[r,d]=t.useState(""),[a,u]=t.useState(""),[l,m]=t.useState(""),h=async s=>{s.preventDefault();try{await f(j,r,a),i(c,{replace:!0})}catch(p){m(p.message)}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4",children:e.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[e.jsx("h2",{className:"text-3xl font-bold text-center mb-6",children:"Sign Up"}),l&&e.jsx("p",{className:"text-red-500 text-center mb-4",children:l}),e.jsxs("form",{onSubmit:h,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700",children:"Email"}),e.jsx("input",{type:"email",id:"email",value:r,placeholder:"Enter your email",onChange:s=>d(s.target.value),required:!0,className:"mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-gray-700",children:"Password"}),e.jsx("input",{type:"password",id:"password",value:a,placeholder:"Enter your password",onChange:s=>u(s.target.value),required:!0,className:"mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors",children:"Sign Up"})]}),e.jsxs("p",{className:"mt-6 text-center text-gray-600",children:["Already have an account?"," ",e.jsx(b,{to:"/login",className:"text-blue-500 hover:underline",children:"Login here"})]})]})})};export{v as default};
