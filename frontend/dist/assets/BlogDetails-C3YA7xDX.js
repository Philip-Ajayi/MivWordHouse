import{u as y,r as l,R as e,L as i}from"./index-CZIwEXVn.js";import{a as d}from"./axios-upsvKRUO.js";const h=(s,t=100)=>{const c=s.replace(/<[^>]+>/g,"");return c.length>t?c.substring(0,t)+"...":c},S=()=>{const{id:s}=y(),[t,c]=l.useState(null),[x,n]=l.useState(!0),[m,b]=l.useState(null),[o,u]=l.useState([]),[E,g]=l.useState(!0);return l.useEffect(()=>{(async()=>{try{const r=await d.get(`/blog/blogs/${s}`);c(r.data.blog||r.data),n(!1)}catch{b("Failed to fetch blog details."),n(!1)}})()},[s]),l.useEffect(()=>{(async()=>{try{const f=(await d.get("/blog/blogs")).data.filter(N=>String(N._id)!==String(s));u(f.slice(0,3)),g(!1)}catch(r){console.error("Failed to fetch posts",r),g(!1)}})()},[s]),x?e.createElement("div",{className:"flex items-center justify-center min-h-screen bg-gray-100"},e.createElement("div",{className:"text-gray-600 text-lg lg:text-xl"},"Loading...")):m?e.createElement("div",{className:"flex items-center justify-center min-h-screen bg-gray-100"},e.createElement("div",{className:"text-red-600 text-lg lg:text-xl"},m)):t?e.createElement("div",{className:"min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8"},e.createElement("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"},e.createElement("div",{className:"lg:col-span-2"},e.createElement("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden"},t.image&&e.createElement("img",{src:t.image,alt:t.title,className:"w-full h-64 sm:h-80 md:h-96 object-cover"}),e.createElement("div",{className:"p-6 sm:p-8"},e.createElement("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"},t.title),e.createElement("div",{className:"mb-4"},e.createElement("span",{className:"inline-block bg-blue-200 text-blue-800 text-xs lg:text-sm px-2 py-1 rounded-full"},t.category)),e.createElement("div",{className:"text-sm lg:text-base text-gray-500 mb-6"},e.createElement("span",null,"By ",e.createElement("span",{className:"font-medium"},t.author)),e.createElement("span",{className:"mx-2"},"|"),e.createElement("span",null,new Date(t.date).toLocaleDateString())),e.createElement("div",{className:"text-gray-700 text-base lg:text-lg leading-relaxed"},e.createElement("div",{className:"ql-editor",dangerouslySetInnerHTML:{__html:t.body}}))))),e.createElement("div",{className:"lg:col-span-1"},e.createElement("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden"},e.createElement("div",{className:"p-6 sm:p-8"},e.createElement("h2",{className:"text-xl lg:text-2xl font-bold text-gray-800 mb-4"},"Recent Posts"),E?e.createElement("p",{className:"text-gray-600 text-base lg:text-lg"},"Loading recent posts..."):o.length>0?o.map(a=>e.createElement("div",{key:a._id,className:"mb-6"},e.createElement("div",{className:"flex items-center"},a.image&&e.createElement("img",{src:a.image,alt:a.title,className:"w-16 h-16 object-cover rounded mr-4"}),e.createElement("div",null,e.createElement(i,{to:`/blogs/${a._id}`,className:"text-lg lg:text-xl font-semibold text-gray-800 hover:underline"},a.title),e.createElement("div",{className:"text-sm lg:text-base text-gray-500"},new Date(a.date).toLocaleDateString()))),e.createElement("p",{className:"mt-2 text-gray-700 text-sm lg:text-base"},h(a.body,100)),e.createElement(i,{to:`/blog/${a._id}`,className:"text-blue-500 hover:underline text-sm lg:text-base mt-1 inline-block"},"See More"))):e.createElement("p",{className:"text-gray-600 text-base lg:text-lg"},"No recent posts available.")))))):e.createElement("div",{className:"flex items-center justify-center min-h-screen bg-gray-100"},e.createElement("div",{className:"text-gray-600 text-lg lg:text-xl"},"Blog not found."))};export{S as default};
