import{r as s,R as e,A as S,m as b}from"./index-CZIwEXVn.js";const R=()=>{const[d,x]=s.useState("create"),[g,w]=s.useState([]),[k,C]=s.useState([]),[F,D]=s.useState([]),[l,E]=s.useState({name:"",date:"",speaker:"",series:"",thumbnail:null,audioFile:null}),[N,v]=s.useState(!1),[u,L]=s.useState(""),[y,q]=s.useState(""),[T,f]=s.useState(!1),[A,j]=s.useState(null),[n,h]=s.useState({name:"",date:"",speaker:"",series:"",thumbnail:null,audioFile:null});s.useEffect(()=>{fetch("/sermon/speakers").then(t=>t.json()).then(t=>w(t)).catch(t=>console.error("Error fetching speakers:",t)),fetch("/sermon/series").then(t=>t.json()).then(t=>C(t)).catch(t=>console.error("Error fetching series:",t)),p()},[]);const p=()=>{fetch("/sermon/items").then(t=>t.json()).then(t=>D(t)).catch(t=>console.error("Error fetching sermons:",t))},o=t=>{const{name:a,value:r,files:i}=t.target;E(i?m=>({...m,[a]:i[0]}):m=>({...m,[a]:r}))},I=async t=>{t.preventDefault(),v(!0);const a=new FormData;a.append("name",l.name),a.append("date",l.date),a.append("speaker",l.speaker),a.append("series",l.series),l.thumbnail&&a.append("thumbnail",l.thumbnail),l.audioFile&&a.append("audioFile",l.audioFile);try{if(!(await fetch("/sermon/upload",{method:"POST",body:a})).ok)throw new Error("Failed to create sermon");alert("Sermon created successfully!"),E({name:"",date:"",speaker:"",series:"",thumbnail:null,audioFile:null}),p()}catch(r){console.error(r),alert(r.message)}v(!1)},O=async t=>{if(window.confirm("Are you sure you want to delete this sermon?"))try{if(!(await fetch(`/sermon/items/${t}`,{method:"DELETE"})).ok)throw new Error("Failed to delete sermon");alert("Sermon deleted successfully!"),p()}catch(a){console.error(a),alert(a.message)}},M=t=>{j(t),h({name:t.name,date:new Date(t.date).toISOString().substring(0,10),speaker:t.speaker,series:t.series,thumbnail:null,audioFile:null}),f(!0)},c=t=>{const{name:a,value:r,files:i}=t.target;h(i?m=>({...m,[a]:i[0]}):m=>({...m,[a]:r}))},$=async t=>{t.preventDefault();const a=new FormData;a.append("name",n.name),a.append("date",n.date),a.append("speaker",n.speaker),a.append("series",n.series),n.thumbnail&&a.append("thumbnail",n.thumbnail),n.audioFile&&a.append("audioFile",n.audioFile);try{if(!(await fetch(`/sermon/edit/${A._id}`,{method:"PUT",body:a})).ok)throw new Error("Failed to update sermon");alert("Sermon updated successfully!"),f(!1),p()}catch(r){console.error(r),alert(r.message)}},P=F.filter(t=>{const a=t.name.toLowerCase().includes(u.toLowerCase())||t.series.toLowerCase().includes(u.toLowerCase())||t.speaker.toLowerCase().includes(u.toLowerCase()),r=y?new Date(t.date).toISOString().substring(0,10)===y:!0;return a&&r});return e.createElement("div",{className:"container mx-auto p-4"},e.createElement("div",{className:"mb-4 flex border-b"},e.createElement("button",{className:`px-4 py-2 -mb-px font-semibold ${d==="create"?"border-b-2 border-blue-500 text-blue-500":"text-gray-500"}`,onClick:()=>x("create")},"Create Sermon"),e.createElement("button",{className:`px-4 py-2 -mb-px font-semibold ${d==="list"?"border-b-2 border-blue-500 text-blue-500":"text-gray-500"}`,onClick:()=>x("list")},"Manage Sermons")),e.createElement(S,{exitBeforeEnter:!0},d==="create"&&e.createElement(b.div,{key:"create",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20}},e.createElement("form",{onSubmit:I,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Name"),e.createElement("input",{type:"text",name:"name",value:l.name,onChange:o,className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Date"),e.createElement("input",{type:"date",name:"date",value:l.date,onChange:o,className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Speaker"),e.createElement("input",{type:"text",name:"speaker",value:l.speaker,onChange:o,list:"speakersList",className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0}),e.createElement("datalist",{id:"speakersList"},g.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Series"),e.createElement("input",{type:"text",name:"series",value:l.series,onChange:o,list:"seriesList",className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0}),e.createElement("datalist",{id:"seriesList"},k.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Thumbnail"),e.createElement("input",{type:"file",name:"thumbnail",onChange:o,className:"mt-1 block w-full",accept:"image/*",required:!0})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Audio File"),e.createElement("input",{type:"file",name:"audioFile",onChange:o,className:"mt-1 block w-full",accept:"audio/*",required:!0})),e.createElement("button",{type:"submit",disabled:N,className:"bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"},N?"Submitting...":"Submit Sermon"))),d==="list"&&e.createElement(b.div,{key:"list",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20}},e.createElement("div",{className:"flex flex-col md:flex-row items-start md:items-center gap-4 mb-4"},e.createElement("input",{type:"text",placeholder:"Search by name, series, speaker",value:u,onChange:t=>L(t.target.value),className:"border border-gray-300 rounded p-2 flex-1"}),e.createElement("input",{type:"date",value:y,onChange:t=>q(t.target.value),className:"border border-gray-300 rounded p-2"})),e.createElement("div",{className:"overflow-x-auto"},e.createElement("table",{className:"min-w-full bg-white border"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"px-4 py-2 border"},"Name"),e.createElement("th",{className:"px-4 py-2 border"},"Series"),e.createElement("th",{className:"px-4 py-2 border"},"Date"),e.createElement("th",{className:"px-4 py-2 border"},"Actions"))),e.createElement("tbody",null,P.map(t=>e.createElement("tr",{key:t._id},e.createElement("td",{className:"px-4 py-2 border"},t.name),e.createElement("td",{className:"px-4 py-2 border"},t.series),e.createElement("td",{className:"px-4 py-2 border"},new Date(t.date).toLocaleDateString()),e.createElement("td",{className:"px-4 py-2 border space-x-2"},e.createElement("button",{onClick:()=>M(t),className:"bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"},"Edit"),e.createElement("button",{onClick:()=>O(t._id),className:"bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"},"Delete"))))))))),e.createElement(S,null,T&&e.createElement(b.div,{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(b.div,{className:"bg-white rounded-lg w-full max-w-lg mx-4 overflow-y-auto max-h-full p-6",initial:{scale:.8},animate:{scale:1},exit:{scale:.8}},e.createElement("h3",{className:"text-xl font-bold mb-4"},"Edit Sermon"),e.createElement("form",{onSubmit:$,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Name"),e.createElement("input",{type:"text",name:"name",value:n.name,onChange:c,className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Date"),e.createElement("input",{type:"date",name:"date",value:n.date,onChange:c,className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Speaker"),e.createElement("input",{type:"text",name:"speaker",value:n.speaker,onChange:c,list:"editSpeakersList",className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0}),e.createElement("datalist",{id:"editSpeakersList"},g.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Series"),e.createElement("input",{type:"text",name:"series",value:n.series,onChange:c,list:"editSeriesList",className:"mt-1 block w-full border border-gray-300 rounded-md p-2",required:!0}),e.createElement("datalist",{id:"editSeriesList"},k.map((t,a)=>e.createElement("option",{key:a,value:t})))),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Thumbnail"),e.createElement("input",{type:"file",name:"thumbnail",onChange:c,className:"mt-1 block w-full",accept:"image/*"})),e.createElement("div",null,e.createElement("label",{className:"block text-sm font-medium text-gray-700"},"Audio File"),e.createElement("input",{type:"file",name:"audioFile",onChange:c,className:"mt-1 block w-full",accept:"audio/*"})),e.createElement("div",{className:"flex justify-end space-x-2"},e.createElement("button",{type:"button",onClick:()=>f(!1),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"},"Cancel"),e.createElement("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"},"Save Changes")))))))};export{R as default};
