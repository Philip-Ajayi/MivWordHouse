import{r as a,b as y,o as U,R as e,m as n,A as H,d as f,s as Y,c as q,e as P}from"./index-BeF0K1pZ.js";import{a as c}from"./axios-upsvKRUO.js";const F="/assets/xlogo-D7jQRCoH.png",_=()=>{const R="https://stream-175.zeno.fm/qqgdtv5o3isuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJxcWdkdHY1bzNpc3V2IiwiaG9zdCI6InN0cmVhbS0xNzUuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkMtU1lkY2dQUmphVllwRlhHSDBrbnciLCJpYXQiOjE3MzkyNTQyNzAsImV4cCI6MTczOTI1NDMzMH0.jC0UwgRTNlkcWPDofZQmtP3HftoqunVxEd3EjGF9l9w",[i,p]=a.useState(!1),u=a.useRef(null),[b,E]=a.useState(null),[v,N]=a.useState(null),[k,w]=a.useState([]),[r,S]=a.useState(null),[D,g]=a.useState([]),[o,x]=a.useState({userName:"",comment:""}),[z,T]=a.useState(0),[h]=a.useState(()=>Math.random().toString(36).substring(2,15)),A=async()=>{try{const t=await c.get("/radio/schedule/now");E(t.data)}catch(t){console.error("Error fetching now playing:",t),E(null)}},C=async()=>{try{const t=await c.get("/radio/schedule/next");N(t.data)}catch(t){console.error("Error fetching next playing:",t),N(null)}},I=async()=>{try{const t=await c.get("/radio/schedule/future");w(Array.isArray(t.data)?t.data:[])}catch(t){console.error("Error fetching schedule:",t),w([])}},j=async()=>{try{let s=(await c.get("/radio/chatsession/all")).data;Array.isArray(s)||(s=Object.values(s));const l=new Date,m=s.find(d=>{const O=new Date(d.startTime),M=new Date(d.endTime);return O<=l&&M>=l});S(m)}catch(t){console.error("Error fetching active chat session:",t),S(null)}},L=async()=>{if(!r){g([]);return}try{const t=await c.get(`/radio/chatsession/${r._id}/comments`);g(Array.isArray(t.data)?t.data:[])}catch(t){console.error("Error fetching chat messages:",t),g([])}};a.useEffect(()=>{A(),C(),I(),j();const t=setInterval(()=>{A(),C(),I(),j()},1e4);return()=>clearInterval(t)},[]),a.useEffect(()=>{L()},[r]),a.useEffect(()=>{const t=y(f,"activeListeners"),s=U(t,l=>{const m=l.val(),d=m?Object.keys(m).length:0;T(d)});return()=>s()},[]);const V=()=>{const t=y(f,`activeListeners/${h}`);i?(u.current.pause(),p(!1),P(t)):(u.current.play(),p(!0),Y(t,!0),q(t).remove())};a.useEffect(()=>{const t=()=>{i&&P(y(f,`activeListeners/${h}`))};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[i,h]);const J=async t=>{if(t.preventDefault(),!!r)try{await c.post(`/radio/chatsession/${r._id}/comment`,{name:o.userName,comment:o.comment}),x({userName:"",comment:""}),L()}catch(s){console.error("Error sending chat message:",s)}};return e.createElement("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4"},e.createElement("div",{className:"max-w-6xl mx-auto"},e.createElement(n.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},className:"flex flex-col items-center mb-12"},e.createElement("img",{src:F,alt:"Radio Logo",className:"h-28 w-auto mb-4"}),e.createElement("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-800 text-center"},"Expression Radio"),e.createElement("p",{className:"mt-2 text-lg md:text-xl text-gray-600 text-center max-w-2xl"},"Strong in Sound! Vigorous in Vibe! Victorious in Voice!")),e.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-12"},e.createElement("div",{className:"flex flex-col items-center"},e.createElement("audio",{ref:u,src:R,preload:"none"}),e.createElement(n.button,{onClick:V,whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},className:"mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white p-4 rounded-full focus:outline-none transition duration-300 shadow-lg"},e.createElement("svg",{width:"50",height:"50",viewBox:"0 0 50 50"},e.createElement(H,{exitBeforeEnter:!0,initial:!1},i?e.createElement(n.g,{key:"pause",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.3}},e.createElement("rect",{x:"12",y:"10",width:"8",height:"30",fill:"#fff",rx:"2"}),e.createElement("rect",{x:"30",y:"10",width:"8",height:"30",fill:"#fff",rx:"2"})):e.createElement(n.polygon,{key:"play",points:"15,10 40,25 15,40",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.3},fill:"#fff"})))),e.createElement("div",{className:"text-center"},e.createElement(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"text-2xl font-semibold text-gray-800"},"Now Playing: ",e.createElement("span",{className:"text-indigo-600"},b?b.name:"N/A")),e.createElement(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2},className:"text-lg text-gray-600 mt-1"},"Next Playing: ",e.createElement("span",{className:"text-indigo-500"},v?v.name:"N/A")),e.createElement("div",{className:"mt-4 text-gray-600 text-sm"},"Active Listeners: ",z)))),e.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-12"},e.createElement("div",{className:"flex flex-col md:flex-row items-center"},e.createElement("div",{className:"md:w-1/2 flex justify-center mb-6 md:mb-0"},e.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rYejO4FtGX9dlJ1_hFCFJs26RCrbr7A0jA&s",alt:"About Us",className:"rounded-xl shadow-lg w-64 h-64 object-cover"})),e.createElement("div",{className:"md:w-1/2 md:pl-8"},e.createElement("h2",{className:"text-3xl font-bold text-gray-800 mb-4"},"About Us"),e.createElement("p",{className:"text-gray-700 mb-3 text-base md:text-lg",style:{textAlign:"justify"}},"Expression Radio is more than just an online station—it’s a movement. Created as an extension of our church’s vision, Expression Radio is a platform where faith, creativity, and culture collide."),e.createElement("p",{className:"text-gray-700 mb-3 text-base md:text-lg",style:{textAlign:"justify"}},"Our mission is to inspire, uplift, and connect people through powerful messages, dynamic worship, and engaging discussions on topics that matter."),e.createElement("p",{className:"text-gray-700 text-base md:text-lg",style:{textAlign:"justify"}},"Whether you’re tuning in for live worship sessions or thoughtful conversations, you’re an essential part of our community. Let your spirit soar with every beat and every word.")))),e.createElement("div",{className:"mb-12"},e.createElement("h2",{className:"text-3xl font-bold text-gray-800 text-center mb-6"},"Our Schedule"),e.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},k.map(t=>e.createElement(n.div,{key:t._id,whileHover:{scale:1.03},className:"bg-white rounded-xl shadow-md p-5 transition transform hover:shadow-xl"},e.createElement("h3",{className:"text-2xl font-semibold text-gray-800 mb-2"},t.name),e.createElement("p",{className:"text-gray-600 text-sm mb-2"},new Date(t.scheduleTime).toLocaleDateString()," at"," ",new Date(t.scheduleTime).toLocaleTimeString()),e.createElement("p",{className:"text-gray-700"},t.description))))),e.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},e.createElement("h2",{className:"text-3xl font-bold text-gray-800 text-center mb-6"},"Chat"),r?e.createElement("div",{className:"flex flex-col"},e.createElement("div",{className:"h-64 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4"},D.map(t=>e.createElement("div",{key:t._id,className:"mb-3"},e.createElement("p",{className:"text-base md:text-lg"},e.createElement("span",{className:"font-bold text-indigo-600"},t.name,":")," ",t.comment),e.createElement("p",{className:"text-sm md:text-base text-gray-500"},new Date(t.createdAt).toLocaleTimeString())))),e.createElement("form",{onSubmit:J,className:"flex flex-col sm:flex-row gap-4"},e.createElement("input",{type:"text",placeholder:"Your name",value:o.userName,onChange:t=>x({...o,userName:t.target.value}),className:"flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400",required:!0}),e.createElement("input",{type:"text",placeholder:"Your comment",value:o.comment,onChange:t=>x({...o,comment:t.target.value}),className:"flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400",required:!0}),e.createElement("button",{type:"submit",className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"},"Send"))):e.createElement("div",{className:"bg-gray-100 p-6 rounded-lg text-center"},e.createElement("p",{className:"text-gray-700"},"Chat is currently closed. Please check back later.")))))};export{_ as default};
