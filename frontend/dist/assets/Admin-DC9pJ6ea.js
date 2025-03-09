import{R as e,m as a,L as n}from"./index-Z0RLeiA5.js";const l=[{title:"Radio",description:"Manage your radio station settings and playlists.",bgColor:"bg-blue-500",link:"/admin/radio"},{title:"Calendar",description:"Organize events, schedules, and community gatherings.",bgColor:"bg-green-500",link:"/admin/calendar"},{title:"Devotional",description:"Update daily devotionals and inspirational messages.",bgColor:"bg-yellow-500",link:"/admin/devotional"},{title:"Sermon Audio",description:"Upload and manage sermon audio files.",bgColor:"bg-purple-500",link:"/admin/sermon-audio"},{title:"Contacts",description:"Keep your contacts organized and up to date.",bgColor:"bg-red-500",link:"/admin/contacts"},{title:"Blog",description:"Create and manage your blog posts.",bgColor:"bg-indigo-500",link:"/admin/blog"}],s=()=>e.createElement("div",{className:"min-h-screen bg-gray-100 p-4"},e.createElement("div",{className:"container mx-auto"},e.createElement("h1",{className:"text-4xl font-bold text-center mb-8 text-purple-700"},"Admin Panel"),e.createElement("div",{className:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"},l.map((t,i)=>e.createElement(a.div,{key:i,className:`rounded-lg shadow-lg p-6 ${t.bgColor} text-white flex flex-col justify-between`,whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:300}},e.createElement("div",null,e.createElement("h2",{className:"text-2xl font-bold mb-2"},t.title),e.createElement("p",{className:"text-sm"},t.description)),e.createElement(a.div,{whileHover:{scale:1.1}},e.createElement(n,{to:t.link,className:"mt-4 bg-white text-black font-semibold py-2 px-4 rounded inline-block text-center"},"Manage ",t.title)))))));export{s as default};
