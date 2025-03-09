import{R as e,m as o,r as i}from"./index-Z0RLeiA5.js";const c="/assets/metro-D5NfQN1E.jpg",m=[{header:"Empowering Young Minds",text:"Metro Meet is a dynamic gathering designed to engage, educate, and empower young people through meaningful discussions on various topics affecting their lives. From career growth to mental health, relationships, and social impact, we create a space where young minds can connect, learn, and inspire each other.",image:"https://i.ibb.co/6HYMSwh/IMG-2742.jpg",bgColor:"bg-purple-100",textColor:"text-purple-900"},{header:"What is Metro Meet?",text:"Metro Meet is more than just an event; it’s a movement dedicated to addressing real-life challenges and opportunities that young people face. Through interactive sessions, expert insights, and open conversations, we provide a platform for growth, networking, and transformation.",image:"https://i.ibb.co/rGHRKP3/IMG-2727.jpg",bgColor:"bg-blue-100",textColor:"text-blue-900"},{header:"Our Mission",text:"Our mission is to create a safe, engaging, and impactful space where young people can explore ideas, challenge norms, and develop solutions to the issues that shape their world. We believe in equipping youth with knowledge, confidence, and connections to help them thrive in all aspects of life.",image:"https://i.ibb.co/6HYMSwh/IMG-2742.jpg",bgColor:"bg-green-100",textColor:"text-green-900"},{header:"Be Part of the Conversation!",text:"Metro Meet is your space to share, learn, and grow. Whether you're looking for guidance, inspiration, or a community that understands your journey, we invite you to join us for the next gathering. Let’s discuss, connect, and make an impact together!",image:"https://i.ibb.co/Yp5DCxn/IMG-2520.jpg",bgColor:"bg-yellow-100",textColor:"text-yellow-900"}],d=({targetDate:a})=>{const n=()=>{const t=+new Date(a)-+new Date;return t>0?{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}:null},[s,l]=i.useState(n());return i.useEffect(()=>{const t=setInterval(()=>{const r=n();r?l(r):(l(null),clearInterval(t))},1e3);return()=>clearInterval(t)},[a]),s?e.createElement("div",{className:"flex space-x-6"},Object.entries(s).map(([t,r])=>e.createElement("div",{key:t,className:"text-center"},e.createElement("p",{className:"text-3xl font-extrabold"},r),e.createElement("p",{className:"uppercase text-xs"},t)))):e.createElement("span",{className:"text-lg"},"Event Started!")},g=()=>{const a={dateTime:"2025-01-01T12:00:00Z",venue:"Futuristic Convention Center, Metropolis",registrationLink:"https://example.com/register",televisedUrl:"https://example.com/live",flyer:"https://i.ibb.co/6HYMSwh/IMG-2746.jpg"},n=new Date(a.dateTime),l=new Date-n<15*60*60*1e3;return e.createElement("div",{className:"font-sans antialiased"},e.createElement(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"relative w-full h-[60vh] md:h-screen",style:{backgroundImage:`url(${c})`,backgroundSize:"cover",backgroundPosition:"center"}},e.createElement("div",{className:"absolute inset-0 bg-black opacity-50"}),e.createElement("div",{className:"relative z-10 flex flex-col justify-center items-center h-full text-center px-4"},e.createElement("h1",{className:"text-white text-4xl md:text-6xl font-bold"},"Metro Meet"),e.createElement("p",{className:"text-white text-lg md:text-2xl mt-4"},"Empowering Young Minds for a Futuristic Tomorrow"))),m.map((t,r)=>e.createElement(o.section,{key:r,initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:r*.2},className:`${t.bgColor} py-12 px-4 md:px-16`},e.createElement("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"},r%2===0?e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("h2",{className:`text-3xl md:text-4xl font-bold mb-4 ${t.textColor}`},t.header),e.createElement("p",{className:`text-base md:text-lg ${t.textColor}`},t.text)),e.createElement("div",null,e.createElement("img",{src:t.image,alt:t.header,className:"w-full rounded-lg shadow-lg"}))):e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("img",{src:t.image,alt:t.header,className:"w-full rounded-lg shadow-lg"})),e.createElement("div",null,e.createElement("h2",{className:`text-3xl md:text-4xl font-bold mb-4 ${t.textColor}`},t.header),e.createElement("p",{className:`text-base md:text-lg ${t.textColor}`},t.text)))))),l&&e.createElement(o.section,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1},className:"bg-gray-900 text-white py-12 px-4 md:px-16"},e.createElement("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"},e.createElement("div",null,e.createElement("img",{src:a.flyer,alt:"Event Flyer",className:"w-full rounded-lg shadow-lg"})),e.createElement("div",null,e.createElement("h2",{className:"text-3xl md:text-4xl font-bold mb-4"},"Upcoming Event"),e.createElement("p",{className:"mb-2"},e.createElement("span",{className:"font-semibold"},"Venue:")," ",a.venue),e.createElement("p",{className:"mb-4"},e.createElement("span",{className:"font-semibold"},"Date & Time:")," ",new Date(a.dateTime).toLocaleString()),e.createElement(d,{targetDate:a.dateTime}),e.createElement("div",{className:"mt-4 flex flex-col space-y-3"},e.createElement("a",{href:a.registrationLink,target:"_blank",rel:"noopener noreferrer",className:"bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"},"Register Now"),e.createElement("a",{href:a.televisedUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"},"Watch Live"))))),e.createElement(o.section,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8},className:"bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 px-4 md:px-16"},e.createElement("div",{className:"max-w-4xl mx-auto flex flex-col items-center space-y-4"},e.createElement("img",{src:"https://i.ibb.co/Fqgqr77N/pgs18200618485544-409x416.png",alt:"Coordinator",className:"w-48 h-48 rounded-full border-4 border-white shadow-lg"}),e.createElement("h2",{className:"text-3xl md:text-4xl font-bold"},"Philip Ajayi"),e.createElement("p",{className:"text-sm md:text-base"},"Coordinator"))))};export{g as default};
