import{r as c,R as e,m as i}from"./index-BeF0K1pZ.js";const f="/assets/sreetchurch-CpqnhOnL.jpg",b=()=>{const t={flier:"https://i.ibb.co/6HYMSwh/IMG-2746.jpg",venue:"Downtown Convention Center",dateTime:"2025-01-01T18:00:00Z",registrationLink:"https://example.com/register",televisedUrl:"https://example.com/watch"},[a,l]=c.useState({});c.useEffect(()=>{const r=new Date(t.dateTime),n=setInterval(()=>{const o=r-new Date;if(o<-15*3600*1e3){clearInterval(n),l(null);return}if(o<=0)l({days:0,hours:0,minutes:0,seconds:0}),clearInterval(n);else{const u=Math.floor(o/864e5),h=Math.floor(o/(1e3*60*60)%24),p=Math.floor(o/(1e3*60)%60),g=Math.floor(o/1e3%60);l({days:u,hours:h,minutes:p,seconds:g})}},1e3);return()=>clearInterval(n)},[t.dateTime]);const m=a!==null,d=[{header:"A Going Church",text:"We are passionate about sharing the life-transforming message of Jesus Christ with everyone in our community. Our ministry is dedicated to reaching out to people from all walks of life, regardless of their background. Through intentional acts of kindness, genuine relationships, and the proclamation of the gospel, we strive to make a positive impact and bring hope to those in our community.",bgColor:"bg-purple-100"},{header:"Our Mission and Vision",text:"Our mission in Community Outreach and Evangelism is to demonstrate the love of Christ through our actions and boldly proclaim His message of salvation. We believe that every person is valuable and deserving of God's grace and forgiveness. Our vision is to see lives transformed by the power of the gospel, bringing about spiritual renewal, reconciliation, and a thriving community where people experience the abundant life found in Jesus.",bgColor:"bg-white"},{header:"Reaching the Community",text:"In our Community Outreach and Evangelism efforts, we actively engage with our community to build meaningful connections and share the good news of Jesus Christ. We are committed to fostering a sense of belonging, acceptance, and love within our community, allowing the light of Christ to shine brightly through us.",bgColor:"bg-gray-100"},{header:"Empowered to Make a Difference",text:"Our Community Outreach and Evangelism ministry is driven by a team of passionate individuals who are empowered by the Holy Spirit to make a difference in the lives of others. We provide training, support, and resources to equip our team members to effectively communicate the gospel and engage in authentic conversations. We believe in the power of prayer and rely on God's guidance as we seek to impact our community. Join us as we strive to share God's love, bring hope to the hurting, and extend the invitation to experience the life-changing power of Jesus Christ. Together, let us be a beacon of light in our community!",bgColor:"bg-purple-50"}];return e.createElement("div",{className:"flex flex-col items-center justify-center"},e.createElement("section",{className:"w-full",style:{backgroundImage:`url(${f})`,backgroundSize:"cover",backgroundPosition:"center"}},e.createElement("div",{className:"bg-black bg-opacity-50 p-8 md:p-16 flex flex-col justify-center",style:{height:"400px"}},e.createElement(i.h1,{className:"text-4xl md:text-6xl font-bold text-white",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:1}},"Street Church"),e.createElement(i.p,{className:"mt-4 text-xl md:text-3xl text-gray-200",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1}},"Taking the Gospel to the Streets, One Soul at a Time."))),d.map((r,n)=>{const s=n%2===0;return e.createElement("section",{key:n,className:`w-full py-12 ${r.bgColor}`},e.createElement("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"},e.createElement("div",{className:`${s?"md:order-1":"md:order-2"} md:w-1/2`},e.createElement(i.h2,{className:"text-3xl md:text-5xl font-bold text-purple-900",initial:{opacity:0,x:s?-50:50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0}},r.header)),e.createElement("div",{className:`${s?"md:order-2":"md:order-1"} md:w-1/2`},e.createElement(i.p,{className:"text-lg md:text-xl text-gray-800",initial:{opacity:0,x:s?50:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0}},r.text))))}),m&&e.createElement("section",{className:"w-full py-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"},e.createElement("div",{className:"container mx-auto px-4"},e.createElement(i.div,{className:"grid md:grid-cols-2 gap-8 items-center",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},viewport:{once:!0}},e.createElement("div",null,e.createElement("img",{src:t.flier,alt:"Event Flier",className:"rounded-lg shadow-lg"})),e.createElement("div",null,e.createElement("h2",{className:"text-3xl font-bold mb-4"},"Upcoming Event"),e.createElement("p",{className:"mb-2"},e.createElement("strong",null,"Venue:")," ",t.venue),e.createElement("p",{className:"mb-2"},e.createElement("strong",null,"Date & Time:")," ",new Date(t.dateTime).toLocaleString()),a&&e.createElement("div",{className:"mt-4 grid grid-cols-4 gap-4"},e.createElement("div",{className:"text-center"},e.createElement("span",{className:"block text-2xl font-bold"},a.days),e.createElement("span",{className:"block text-sm"},"Days")),e.createElement("div",{className:"text-center"},e.createElement("span",{className:"block text-2xl font-bold"},a.hours),e.createElement("span",{className:"block text-sm"},"Hrs")),e.createElement("div",{className:"text-center"},e.createElement("span",{className:"block text-2xl font-bold"},a.minutes),e.createElement("span",{className:"block text-sm"},"Min")),e.createElement("div",{className:"text-center"},e.createElement("span",{className:"block text-2xl font-bold"},a.seconds),e.createElement("span",{className:"block text-sm"},"Sec"))),e.createElement("a",{href:t.registrationLink,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block bg-white text-purple-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition"},"Register Now"),e.createElement("a",{href:t.televisedUrl,target:"_blank",rel:"noopener noreferrer",className:"mt-4 ml-4 inline-block bg-white text-purple-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition"},"Watch Live"))))),e.createElement("section",{className:"w-full py-12 bg-white"},e.createElement("div",{className:"container mx-auto px-4 flex flex-col items-center justify-center gap-8 text-center"},e.createElement("div",{className:"flex-shrink-0"},e.createElement("img",{src:"https://i.ibb.co/NgV9qNYD/img-20230131-072810-334-506x675.png",alt:"Coordinator Ayobami Adeagbo",className:"w-48 h-48 rounded-full object-cover shadow-lg"})),e.createElement("div",null,e.createElement(i.h2,{className:"text-3xl md:text-4xl font-bold text-purple-900",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},viewport:{once:!0}},"Ayobami Adeagbo")))))};export{b as default};
