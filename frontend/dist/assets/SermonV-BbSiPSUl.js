import{r as a,R as e,m as p}from"./index-CZIwEXVn.js";import{a as v}from"./axios-upsvKRUO.js";const x="AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM",L="UCacNQvyF_C6X_dHkk0RBRgw",k=()=>{const[u,E]=a.useState([]),[N,w]=a.useState(!0),[h,S]=a.useState(""),[l,g]=a.useState(16),[n,y]=a.useState(16);a.useEffect(()=>{const t=()=>{window.innerWidth>=768&&window.innerWidth<1024?g(15):g(16)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),a.useEffect(()=>{y(t=>t<l?l:t)},[l]),a.useEffect(()=>{(async()=>{try{const C=(await v.get("https://www.googleapis.com/youtube/v3/playlists",{params:{part:"snippet",channelId:L,key:x,maxResults:50}})).data.items.map(o=>v.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet,contentDetails",playlistId:o.id,key:x,maxResults:50}}).then(d=>d.data.items.map(m=>({videoId:m.snippet.resourceId.videoId,title:m.snippet.title,publishedAt:m.contentDetails.videoPublishedAt,series:o.snippet.title}))));let f=(await Promise.all(C)).flat();f.sort((o,d)=>new Date(d.publishedAt)-new Date(o.publishedAt)),E(f),w(!1)}catch(i){console.error("Error fetching data from YouTube API:",i),w(!1)}})()},[]);const r=u[0],c=u.filter(t=>{const i=h.toLowerCase();return t.title.toLowerCase().includes(i)||t.series.toLowerCase().includes(i)}),s=c.some(t=>t.videoId===(r==null?void 0:r.videoId))?r:null,b=s?c.filter(t=>t.videoId!==s.videoId):c,I=b.slice(0,n),A=()=>{y(n+l)};return e.createElement("div",{className:"min-h-screen bg-white py-8 px-4"},e.createElement("div",{className:"max-w-7xl mx-auto"},e.createElement("div",{className:"mb-8"},e.createElement("input",{type:"text",value:h,onChange:t=>S(t.target.value),placeholder:"Search by video or series name...",className:"w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"})),e.createElement("div",{className:"flex justify-center mb-8"},e.createElement("a",{href:"/sermons",className:"px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"},"View Audio Sermons")),N?e.createElement("div",{className:"text-center text-gray-700"},"Loading sermons..."):e.createElement(e.Fragment,null,s&&e.createElement(p.div,{className:"mb-12 p-6 bg-purple-100 rounded-lg shadow-2xl",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.6}},e.createElement("h2",{className:"text-3xl font-extrabold text-purple-700 mb-4"},"Latest Sermon Video"),e.createElement("div",{className:"relative w-full pb-[56.25%] mb-4"},e.createElement("iframe",{className:"absolute top-0 left-0 w-full h-full rounded-md",src:`https://www.youtube.com/embed/${s.videoId}`,title:s.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),e.createElement("div",null,e.createElement("h3",{className:"text-2xl font-bold text-gray-800"},s.title),e.createElement("p",{className:"text-gray-600"},new Date(s.publishedAt).toLocaleDateString()," | Series:"," ",s.series))),e.createElement(p.div,{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.15}},hidden:{}}},I.map(t=>e.createElement(p.div,{key:t.videoId,className:"bg-purple-50 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow",whileHover:{scale:1.03},initial:{opacity:0},animate:{opacity:1},transition:{duration:.3}},e.createElement("div",{className:"mb-3"},e.createElement("iframe",{width:"100%",height:"200",src:`https://www.youtube.com/embed/${t.videoId}`,title:t.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"rounded-md"})),e.createElement("h3",{className:"text-xl font-semibold text-gray-800"},t.title),e.createElement("p",{className:"text-gray-600 text-sm"},new Date(t.publishedAt).toLocaleDateString()),e.createElement("p",{className:"text-gray-700 text-sm mt-1"},"Series: ",t.series)))),n<b.length&&e.createElement("div",{className:"mt-8 text-center"},e.createElement("button",{onClick:A,className:"px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"},"Read More")))))};export{k as default};
