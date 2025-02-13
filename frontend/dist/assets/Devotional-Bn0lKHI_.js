import{r as l,R as e,m as r,A as u,f,h}from"./index-BeF0K1pZ.js";const s=()=>new Date().toISOString().slice(0,10),b=()=>{const[a,o]=l.useState(s()),[c,m]=l.useState([]);l.useEffect(()=>{fetch("/devotional/contents").then(t=>t.json()).then(t=>m(t)).catch(t=>console.error("Error fetching devotionals:",t))},[]);const i=()=>{const t=new Date(a);t.setDate(t.getDate()-1),o(t.toISOString().slice(0,10))},x=()=>{const t=new Date(a);t.setDate(t.getDate()+1),o(t.toISOString().slice(0,10))},n=c.find(t=>t.date.slice(0,10)===a),d={enter:{opacity:0,x:100},center:{opacity:1,x:0},exit:{opacity:0,x:-100}},p=s(),g=a===p?"Today":a;return e.createElement("div",{className:"min-h-screen bg-gray-100"},e.createElement("header",{className:"bg-purple-600 text-white p-4 text-center"},e.createElement("h1",{className:"text-3xl md:text-5xl font-bold"},"The Awakening Word"),e.createElement("p",{className:"text-lg md:text-2xl"},"The Men of Issachar Vision Inc.")),e.createElement("div",{className:"flex flex-col items-center justify-center p-4"},e.createElement("div",{className:"bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mt-8"},e.createElement("div",{className:"flex justify-between items-center mb-4"},e.createElement(r.button,{onClick:i,whileTap:{scale:.9},className:"text-blue-500 hover:text-blue-700 focus:outline-none text-2xl"},"←"),e.createElement("div",{className:"text-gray-600 text-sm md:text-base"},g),e.createElement(r.button,{onClick:x,whileTap:{scale:.9},className:"text-blue-500 hover:text-blue-700 focus:outline-none text-2xl"},"→")),e.createElement(u,{exitBeforeEnter:!0},e.createElement(r.div,{key:a,variants:d,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5}},n?e.createElement("div",null,e.createElement("h2",{className:"text-2xl md:text-4xl font-bold mb-2"},n.topic),e.createElement("p",{className:"text-gray-800 text-base md:text-lg mb-4"},"Anchor Scripture: ",n.speaker),e.createElement("div",{className:"text-gray-600 leading-relaxed text-base md:text-lg",dangerouslySetInnerHTML:{__html:n.content}})):e.createElement("div",{className:"text-center"},e.createElement("h2",{className:"text-2xl md:text-4xl font-bold mb-2"},"No Devotional Uploaded"),e.createElement("p",{className:"text-gray-600 text-base md:text-lg"},"Devotional content for"," ",e.createElement("span",{className:"font-medium"},a)," is not uploaded yet."))))),e.createElement("div",{className:"mt-8 flex flex-col md:flex-row items-center justify-center gap-4"},e.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.miv.devotional",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"},e.createElement(f,{size:24}),e.createElement("span",null,"Download Android App")),e.createElement("a",{href:"https://apps.apple.com/us/app/miv-devotional/id6502105645",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"},e.createElement(h,{size:24}),e.createElement("span",null,"Download iOS App")))))};export{b as default};
