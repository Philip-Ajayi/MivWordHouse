import{G as d,r as m,R as e,m as h}from"./index-Z0RLeiA5.js";function u(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function x(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function g(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(a)}const b="/assets/FLASK-CabQENni.png",p=[{id:1,name:"Hood",price:"#11,000",category:"Apparel",description:"A cozy and stylish hooded design that provides warmth and comfort, perfect for casual wear.",images:["https://i.ibb.co/DP5WBCPF/Hoodie-WORD-HOUSE-124901.png","https://i.ibb.co/Vp5hhvFb/Word-House-Hoodie-1-Mockup-123217.png","https://i.ibb.co/MDNQysfy/Hoodie-greay-WORD-HOUSE-124002.png"]},{id:2,name:"Round Neck Wear",price:"#10,000",category:"Apparel",description:"A classic blue denim jacket that pairs well with any outfit. Durable and timeless design.",images:["https://i.ibb.co/GQBfhgbZ/Word-House-T-shirt-Mockup-122332.png"]},{id:3,name:"Flask",price:"#5,000",category:"Household",description:"A portable container designed to keep beverages hot or cold for extended periods, making it ideal for travel, work, or outdoor activities.",images:[b]}],f="https://via.placeholder.com/300?text=No+Image",y=({product:a})=>{const{name:l,price:o,description:i,images:r}=a,[c,t]=m.useState(r&&r.length>0?r[0]:f);return e.createElement(h.div,{className:"bg-white rounded-lg shadow-md p-4 flex flex-col",whileHover:{scale:1.03},transition:{type:"spring",stiffness:300}},e.createElement("div",{className:"relative"},e.createElement("img",{src:c,alt:l,className:"w-full h-64 object-cover rounded-lg"}),e.createElement("button",{className:"absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"},e.createElement(u,{className:"text-red-500",size:20}))),e.createElement("div",{className:"mt-4 flex-1"},e.createElement("h3",{className:"text-lg font-bold text-gray-800"},l),e.createElement("p",{className:"text-gray-600 mt-2"},i)),e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement("span",{className:"text-xl font-semibold text-gray-800"},o),e.createElement("button",{className:"flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"},e.createElement(g,{size:20}),e.createElement("span",null,"Add to Cart"))),r&&r.length>1&&e.createElement("div",{className:"mt-4 flex space-x-2 overflow-x-auto"},r.map((s,n)=>e.createElement("img",{key:n,src:s,alt:`${l} ${n+1}`,className:`w-16 h-16 object-cover rounded-lg cursor-pointer border ${c===s?"border-blue-500":"border-transparent"}`,onClick:()=>t(s)}))))},E=()=>{const[a,l]=m.useState(""),[o,i]=m.useState(""),r=[...new Set(p.map(t=>t.category))],c=p.filter(t=>{const s=t.name.toLowerCase().includes(a.toLowerCase())||t.description.toLowerCase().includes(a.toLowerCase()),n=o?t.category===o:!0;return s&&n});return e.createElement("div",{className:"bg-white min-h-screen"},e.createElement("header",{className:"bg-white py-4 shadow-md"},e.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"},e.createElement("h1",{className:"text-2xl font-bold text-gray-900"},"Word House Store"),e.createElement("div",{className:"flex items-center space-x-4"},e.createElement("button",{className:"relative"},e.createElement(u,{className:"text-red-500",size:24})),e.createElement("button",{className:"relative"},e.createElement(g,{className:"text-blue-500",size:24}))))),e.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"},e.createElement("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"},e.createElement("div",{className:"flex items-center w-full sm:w-1/2 border border-gray-300 rounded-md px-3 py-2"},e.createElement(x,{className:"text-gray-500 mr-2"}),e.createElement("input",{type:"text",placeholder:"Search products...",className:"w-full outline-none",value:a,onChange:t=>l(t.target.value)})),e.createElement("div",{className:"w-full sm:w-1/4"},e.createElement("select",{className:"w-full border border-gray-300 rounded-md px-3 py-2 outline-none",value:o,onChange:t=>i(t.target.value)},e.createElement("option",{value:""},"All Categories"),r.map((t,s)=>e.createElement("option",{key:s,value:t},t)))))),e.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"},e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},c.map(t=>e.createElement(y,{key:t.id,product:t})),c.length===0&&e.createElement("div",{className:"col-span-full text-center text-gray-500"},"No products found."))))};export{E as default};
