import React from "react";
import Stats from "./Stats";

const Layout = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row'>
      <div className='grid p-16 h-Screen card bg-base-300 rounded-box place-items-center'>
        <iframe src='/video.mp4' className='h-full' frameborder='0'></iframe>
      </div>
      <div className='divider lg:divider-horizontal'></div>
      <div className='grid flex-grow  h-screen bg-base-300 rounded-box p-8 gap-64'>
        <Stats />
        <Stats />
      </div>
    </div>
  );
};

export default Layout;
