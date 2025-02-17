import{r,R as e,A as P,m as S}from"./index-CZIwEXVn.js";import{R as B}from"./quill.snow-DEUsWJib.js";import{a as Q}from"./axios-upsvKRUO.js";const D={toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike"],[{script:"sub"},{script:"super"}],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{align:[]}],["clean"]]},T=["header","bold","italic","underline","strike","script","blockquote","list","bullet","indent","align"],G=()=>{const[o,i]=r.useState("create"),[n,m]=r.useState({title:"",image:"",category:"",body:"",author:"",date:""}),[b,p]=r.useState([]),[l,h]=r.useState([]),[A,L]=r.useState([]),[f,N]=r.useState(""),[y,v]=r.useState(""),[q,x]=r.useState(!1),[s,d]=r.useState(null),[k,C]=r.useState(!1);r.useEffect(()=>{j(),F()},[]),r.useEffect(()=>{o==="list"&&w()},[o]);const j=async()=>{try{const a=await(await fetch("/blog/categories")).json();p(a)}catch(t){console.error("Error fetching categories:",t)}},F=async()=>{try{const a=await(await fetch("/blog/authors")).json();h(a)}catch(t){console.error("Error fetching authors:",t)}},w=async()=>{try{const a=await(await fetch("/blog/blogs")).json();L(a)}catch(t){console.error("Error fetching blogs:",t)}},u=t=>{const{name:a,value:c}=t.target;m(E=>({...E,[a]:c}))},R=t=>{m(a=>({...a,body:t}))},O=async t=>{t.preventDefault(),C(!0);try{const a=await fetch("/blog/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw new Error("Failed to create blog");await a.json(),alert("Blog created successfully!"),m({title:"",image:"",category:"",body:"",author:"",date:""})}catch(a){console.error(a),alert("Error creating blog")}C(!1)},I=async t=>{if(window.confirm("Are you sure you want to delete this blog post?"))try{if(!(await fetch(`/blog/blogs/${t}`,{method:"DELETE"})).ok)throw new Error("Failed to delete blog");w()}catch(a){console.error(a),alert("Error deleting blog")}},$=t=>{d(t),x(!0)},g=t=>{const{name:a,value:c}=t.target;d(E=>({...E,[a]:c}))},M=t=>{d(a=>({...a,body:t}))},U=async t=>{t.preventDefault();try{const a=await fetch(`/blog/blogs/${s._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!a.ok)throw new Error("Failed to update blog");await a.json(),alert("Blog updated successfully!"),x(!1),d(null),w()}catch(a){console.error(a),alert("Error updating blog")}},_=A.filter(t=>{let a=!0,c=!0;return f&&(a=new Date(t.date).toISOString().split("T")[0]===f),y&&(c=t.title.toLowerCase().includes(y.toLowerCase())||t.body&&t.body.toLowerCase().includes(y.toLowerCase())),a&&c});return e.createElement("div",{className:"container mx-auto p-4"},e.createElement("div",{className:"mb-4 border-b"},e.createElement("nav",{className:"flex"},e.createElement("button",{onClick:()=>i("create"),className:`px-4 py-2 focus:outline-none ${o==="create"?"border-b-2 border-blue-500 font-semibold":"text-gray-600"}`},"Create Blog"),e.createElement("button",{onClick:()=>i("list"),className:`px-4 py-2 focus:outline-none ${o==="list"?"border-b-2 border-blue-500 font-semibold":"text-gray-600"}`},"List Blogs"),e.createElement("button",{onClick:()=>i("rss"),className:`px-4 py-2 focus:outline-none ${o==="rss"?"border-b-2 border-blue-500 font-semibold":"text-gray-600"}`},"RSS Admin"))),o==="create"&&e.createElement("div",null,e.createElement("form",{onSubmit:O,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Title"),e.createElement("input",{type:"text",name:"title",value:n.title,onChange:u,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Image URL"),e.createElement("input",{type:"text",name:"image",value:n.image,onChange:u,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Category"),e.createElement("input",{list:"categorySuggestions",type:"text",name:"category",value:n.category,onChange:u,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"}),e.createElement("datalist",{id:"categorySuggestions"},b.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Body"),e.createElement(B,{theme:"snow",value:n.body,onChange:R,modules:D,formats:T,className:"mt-1"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Author"),e.createElement("input",{list:"authorSuggestions",type:"text",name:"author",value:n.author,onChange:u,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"}),e.createElement("datalist",{id:"authorSuggestions"},l.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Date"),e.createElement("input",{type:"date",name:"date",value:n.date,onChange:u,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("button",{type:"submit",disabled:k,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"},k?"Submitting...":"Create Blog"))),o==="list"&&e.createElement("div",null,e.createElement("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4"},e.createElement("div",{className:"flex space-x-4"},e.createElement("input",{type:"date",value:f,onChange:t=>N(t.target.value),className:"border border-gray-300 rounded-md p-2",placeholder:"Filter by Date"}),e.createElement("input",{type:"text",value:y,onChange:t=>v(t.target.value),className:"border border-gray-300 rounded-md p-2",placeholder:"Search by keyword"})),e.createElement("button",{onClick:()=>{N(""),v("")},className:"text-blue-500 underline"},"Clear Filters")),e.createElement("div",{className:"overflow-x-auto"},e.createElement("table",{className:"min-w-full divide-y divide-gray-200"},e.createElement("thead",{className:"bg-gray-50"},e.createElement("tr",null,e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Title"),e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Date"),e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Actions"))),e.createElement("tbody",{className:"bg-white divide-y divide-gray-200"},_.map(t=>e.createElement("tr",{key:t._id},e.createElement("td",{className:"px-6 py-4 whitespace-nowrap"},t.title),e.createElement("td",{className:"px-6 py-4 whitespace-nowrap"},new Date(t.date).toLocaleDateString()),e.createElement("td",{className:"px-6 py-4 whitespace-nowrap space-x-2"},e.createElement("button",{onClick:()=>$(t),className:"text-indigo-600 hover:text-indigo-900"},"Edit"),e.createElement("button",{onClick:()=>I(t._id),className:"text-red-600 hover:text-red-900"},"Delete")))))))),o==="rss"&&e.createElement(J,null),e.createElement(P,null,q&&s&&e.createElement(S.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},e.createElement(S.div,{initial:{y:"-100vh"},animate:{y:0},exit:{y:"100vh"},transition:{type:"spring",stiffness:100},className:"bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-full overflow-y-auto p-6"},e.createElement("h2",{className:"text-xl font-semibold mb-4"},"Edit Blog"),e.createElement("form",{onSubmit:U,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Title"),e.createElement("input",{type:"text",name:"title",value:s.title,onChange:g,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Image URL"),e.createElement("input",{type:"text",name:"image",value:s.image,onChange:g,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Category"),e.createElement("input",{list:"categorySuggestions",type:"text",name:"category",value:s.category,onChange:g,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"}),e.createElement("datalist",{id:"categorySuggestions"},b.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Body"),e.createElement(B,{theme:"snow",value:s.body,onChange:M,modules:D,formats:T,className:"mt-1"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Author"),e.createElement("input",{list:"authorSuggestions",type:"text",name:"author",value:s.author,onChange:g,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"}),e.createElement("datalist",{id:"authorSuggestions"},l.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium"},"Date"),e.createElement("input",{type:"date",name:"date",value:s.date?s.date.split("T")[0]:"",onChange:g,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md p-2"})),e.createElement("div",{className:"flex justify-end space-x-4"},e.createElement("button",{type:"button",onClick:()=>{x(!1),d(null)},className:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"},"Cancel"),e.createElement("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"},"Update Blog")))))))},J=()=>{const[o,i]=r.useState([]),[n,m]=r.useState("");r.useEffect(()=>{b()},[]);const b=async()=>{try{const l=await Q.get("http://localhost:5000/blogs");i(l.data)}catch(l){console.error("Error fetching blogs:",l)}},p=o.filter(l=>{const h=n.toLowerCase();return l.title.toLowerCase().includes(h)});return e.createElement("div",{className:"container mx-auto p-4"},e.createElement("div",{className:"mb-4"},e.createElement("input",{type:"text",placeholder:"Search by keyword...",value:n,onChange:l=>m(l.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"})),e.createElement("div",{className:"overflow-x-auto"},e.createElement("table",{className:"min-w-full divide-y divide-gray-200 shadow-lg"},e.createElement("thead",{className:"bg-gray-50"},e.createElement("tr",null,e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Title"),e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Date"),e.createElement("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Views"))),e.createElement("tbody",{className:"bg-white divide-y divide-gray-200"},p.map(l=>e.createElement("tr",{key:l._id},e.createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},l.title),e.createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},new Date(l.date).toLocaleDateString()),e.createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},l.uniqueIps?l.uniqueIps.length:0))),p.length===0&&e.createElement("tr",null,e.createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",colSpan:"3"},"No blogs found."))))))};export{G as default};
