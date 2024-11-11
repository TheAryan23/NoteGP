import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
   <>  
      
       <Navbar/>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10 min-h-screen'>
        <div className='order-1 md:order-1 w-full mt-12 md:w-1/2 '>
         <div className='space-y-12'>
         <h1 className='text-4xl font-bold'>
       <span className='text-blue-400 text-6xl'>Welcome</span> Students
     </h1>
       <p className='text-2xl'>
       Your go-to online resource for GPM. We provide comprehensive study materials, including detailed notes, question papers, and interactive experiments to help you excel in your studies. Whether you're preparing for exams or looking to enhance your understanding of complex concepts, we've got you covered.
       </p>

         </div>
         

        </div>
        <div className='order-2 w-full md:w-1/2 flex justify-center items-center' >
        <div className='min-h-screen flex flex-wrap justify-center '>
        <div>
        
        <div className='text-4xl mb-8 mt-14'>DEVELOPED BY</div>
      <div className="flex items-center w-[400px] h-[100px] bg-white shadow-lg rounded-lg overflow-hidden my-2">
         <img  src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1731241442~exp=1731245042~hmac=dc5c1f5727c8b39636ea9dee0b34e4a7c749efc6176911ef2cceba081154f261&w=900"  
         alt="Profile"  className="w-[100px] h-full object-cover"/>
          <div className="flex flex-col justify-center ml-4">
             <h2 className="text-lg font-semibold text-gray-800">Prashil Belapurkar</h2>
              <a className="text-sm text-gray-600" >FS22IF032</a>
              <div className="flex mt-2 space-x-3">
      <a  href="https://www.instagram.com/prashill._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank"  rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
        <svg  className="w-5 h-5 text-black"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 3.166 5.784 2.894 7.15 2.832 8.416 2.774 8.796 2.762 12 2.762zM12 0C8.741 0 8.332.012 7.052.07 5.769.128 4.653.41 3.678 1.386 2.704 2.36 2.422 3.476 2.364 4.759 2.306 6.039 2.294 6.448 2.294 12s.012 5.961.07 7.241c.058 1.283.34 2.399 1.314 3.373.975.975 2.091 1.257 3.374 1.314 1.28.058 1.689.07 7.241.07s5.961-.012 7.241-.07c1.283-.058 2.399-.34 3.373-1.314.975-.975 1.257-2.091 1.314-3.374.058-1.28.07-1.689.07-7.241s-.012-5.961-.07-7.241c-.058-1.283-.34-2.399-1.314-3.373C19.961.41 18.845.128 17.562.07 16.283.012 15.874 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.167a4.005 4.005 0 1 1 0-8.01 4.005 4.005 0 0 1 0 8.01zm6.406-11.845a1.44 1.44 0 1 0 0-2.879 1.44 1.44 0 0 0 0 2.879z"/>
        </svg>
      </a>
      <a  href="https://github.com"  target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900" >
        <svg className="w-5 h-5"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.911.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.092.39-1.986 1.029-2.684-.104-.253-.447-1.273.098-2.654 0 0 .841-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.704.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.547 1.381.203 2.401.1 2.654.64.698 1.028 1.592 1.028 2.684 0 3.841-2.339 4.687-4.566 4.937.36.309.682.923.682 1.861 0 1.343-.012 2.426-.012 2.754 0 .269.18.58.688.482C19.136 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
    </div>
         </div>
       </div>
       <div className="flex items-center w-[400px] h-[100px] bg-white shadow-lg rounded-lg overflow-hidden my-2">
         <img  src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148086221.jpg?t=st=1731268093~exp=1731271693~hmac=b22c306f8999b40fe0556a828892c698e38a078a7874964907659792165a4ab0&w=740"  
         alt="Profile"  className="w-[100px] h-full object-cover"/>
          <div className="flex flex-col justify-center ml-4">
             <h2 className="text-lg font-semibold text-gray-800">Pratik Tonde</h2>
              <p className="text-sm text-gray-600">FS22IF037</p>
              <div className="flex mt-2 space-x-3">
      <a  href="https://www.instagram.com/pratikk_tonde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank"  rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
        <svg  className="w-5 h-5 text-black"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 3.166 5.784 2.894 7.15 2.832 8.416 2.774 8.796 2.762 12 2.762zM12 0C8.741 0 8.332.012 7.052.07 5.769.128 4.653.41 3.678 1.386 2.704 2.36 2.422 3.476 2.364 4.759 2.306 6.039 2.294 6.448 2.294 12s.012 5.961.07 7.241c.058 1.283.34 2.399 1.314 3.373.975.975 2.091 1.257 3.374 1.314 1.28.058 1.689.07 7.241.07s5.961-.012 7.241-.07c1.283-.058 2.399-.34 3.373-1.314.975-.975 1.257-2.091 1.314-3.374.058-1.28.07-1.689.07-7.241s-.012-5.961-.07-7.241c-.058-1.283-.34-2.399-1.314-3.373C19.961.41 18.845.128 17.562.07 16.283.012 15.874 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.167a4.005 4.005 0 1 1 0-8.01 4.005 4.005 0 0 1 0 8.01zm6.406-11.845a1.44 1.44 0 1 0 0-2.879 1.44 1.44 0 0 0 0 2.879z"/>
        </svg>
      </a>
      <a  href="https://github.com"  target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900" >
        <svg className="w-5 h-5"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.911.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.092.39-1.986 1.029-2.684-.104-.253-.447-1.273.098-2.654 0 0 .841-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.704.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.547 1.381.203 2.401.1 2.654.64.698 1.028 1.592 1.028 2.684 0 3.841-2.339 4.687-4.566 4.937.36.309.682.923.682 1.861 0 1.343-.012 2.426-.012 2.754 0 .269.18.58.688.482C19.136 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
    </div>
         </div>
       </div>
       <div className="flex items-center w-[400px] h-[100px] bg-white shadow-lg rounded-lg overflow-hidden my-2">
         <img  src="https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6195.jpg?t=st=1731268150~exp=1731271750~hmac=159fa1a3fd995f452c8565a5df6f9fbbdbd302495bdd7d75314a3dccd704659c&w=740"  
         alt="Profile"  className="w-[100px] h-full object-cover"/>
          <div className="flex flex-col justify-center ml-4">
             <h2 className="text-lg font-semibold text-gray-800">Aryan Warange</h2>
              <p className="text-sm text-gray-600">FS22IF046</p>
              <div className="flex mt-2 space-x-3">
      <a  href="https://www.instagram.com/aryann._w?igsh=MThjNmpwZmR6enZvZg=="  target="_blank"  rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
        <svg  className="w-5 h-5 text-black"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 3.166 5.784 2.894 7.15 2.832 8.416 2.774 8.796 2.762 12 2.762zM12 0C8.741 0 8.332.012 7.052.07 5.769.128 4.653.41 3.678 1.386 2.704 2.36 2.422 3.476 2.364 4.759 2.306 6.039 2.294 6.448 2.294 12s.012 5.961.07 7.241c.058 1.283.34 2.399 1.314 3.373.975.975 2.091 1.257 3.374 1.314 1.28.058 1.689.07 7.241.07s5.961-.012 7.241-.07c1.283-.058 2.399-.34 3.373-1.314.975-.975 1.257-2.091 1.314-3.374.058-1.28.07-1.689.07-7.241s-.012-5.961-.07-7.241c-.058-1.283-.34-2.399-1.314-3.373C19.961.41 18.845.128 17.562.07 16.283.012 15.874 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.167a4.005 4.005 0 1 1 0-8.01 4.005 4.005 0 0 1 0 8.01zm6.406-11.845a1.44 1.44 0 1 0 0-2.879 1.44 1.44 0 0 0 0 2.879z"/>
        </svg>
      </a>
      <a  href="https://github.com/TheAryan23"  target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900" >
        <svg className="w-5 h-5"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.911.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.092.39-1.986 1.029-2.684-.104-.253-.447-1.273.098-2.654 0 0 .841-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.704.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.547 1.381.203 2.401.1 2.654.64.698 1.028 1.592 1.028 2.684 0 3.841-2.339 4.687-4.566 4.937.36.309.682.923.682 1.861 0 1.343-.012 2.426-.012 2.754 0 .269.18.58.688.482C19.136 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
    </div>
         </div>
       </div>
       <div className="flex items-center w-[400px] h-[100px] bg-white shadow-lg rounded-lg overflow-hidden my-2">
         <img  src="https://img.freepik.com/free-vector/gradient-top-view-laptop-technology-background_52683-4697.jpg?t=st=1731268268~exp=1731271868~hmac=99eb844bd00375cb3f007e83a320b62e6599ab7af2cd6974ae48ab9d39f2ae70&w=740"  
         alt="Profile"  className="w-[100px] h-full object-cover"/>
          <div className="flex flex-col justify-center ml-4">
             <h2 className="text-lg font-semibold text-gray-800">Amey Dange</h2>
              <p className="text-sm text-gray-600">FS22IF053</p>
              <div className="flex mt-2 space-x-3">
      <a  href="https://www.instagram.com/__ameyyyyy__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank"  rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
        <svg  className="w-5 h-5 text-black"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 3.166 5.784 2.894 7.15 2.832 8.416 2.774 8.796 2.762 12 2.762zM12 0C8.741 0 8.332.012 7.052.07 5.769.128 4.653.41 3.678 1.386 2.704 2.36 2.422 3.476 2.364 4.759 2.306 6.039 2.294 6.448 2.294 12s.012 5.961.07 7.241c.058 1.283.34 2.399 1.314 3.373.975.975 2.091 1.257 3.374 1.314 1.28.058 1.689.07 7.241.07s5.961-.012 7.241-.07c1.283-.058 2.399-.34 3.373-1.314.975-.975 1.257-2.091 1.314-3.374.058-1.28.07-1.689.07-7.241s-.012-5.961-.07-7.241c-.058-1.283-.34-2.399-1.314-3.373C19.961.41 18.845.128 17.562.07 16.283.012 15.874 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.167a4.005 4.005 0 1 1 0-8.01 4.005 4.005 0 0 1 0 8.01zm6.406-11.845a1.44 1.44 0 1 0 0-2.879 1.44 1.44 0 0 0 0 2.879z"/>
        </svg>
      </a>
      <a  href="https://github.com"  target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900" >
        <svg className="w-5 h-5"  fill="currentColor"  viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.911.831.092-.646.35-1.087.636-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.092.39-1.986 1.029-2.684-.104-.253-.447-1.273.098-2.654 0 0 .841-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.704.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.547 1.381.203 2.401.1 2.654.64.698 1.028 1.592 1.028 2.684 0 3.841-2.339 4.687-4.566 4.937.36.309.682.923.682 1.861 0 1.343-.012 2.426-.012 2.754 0 .269.18.58.688.482C19.136 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
    </div>
         </div>
       </div>
       </div>
       </div>
        
        
        
        
        
        
        
        </div>

       </div>
   
   
   
   
   </>
  )
}

export default About
