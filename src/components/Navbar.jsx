import React from 'react';
import "./home.svg";

const Navbar = () => {
  return (
    <nav className='md:border-2  md:rounded-md md:hover:border-violet-800 flex items-stretch flex-row md:flex-row md:justify-between md:bg-orange-100 text-violet-800 md:py-3  py-1 md:w-full'>
        <div className="logo mb-4 md:mb-0">
            <span className="relative text-pink-600 font-bold font-serif mx-40 text-2xl md:text-3xl cursor-pointer transition duration-500 ease-in-out hover:before:font-bold hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-pink-600 hover:before:blur-sm hover:before:opacity-5 hover:break-words">
                MyDo:)
            </span>
        </div>
        <div className="usp text-lg md:text-xl flex flex-col md:flex-row gap-4 md:gap-20 tracking-widest text-rose-300 hover:text-pink-600 transition-all duration-70 mb-4 md:mb-0 hidden md:flex">
            <p>M  a  r  k</p> 
            <p>m  y</p>  
            <p>d  o's</p> 
        </div>
        <ul className='flex flex-row mx-16 md:flex-row gap-4 md:gap-12 text-lg md:text-xl'>
            <li className='cursor-pointer hover:font-bold transition-all duration-70 flex justify-center align-baseline'>
                <p>Home</p>
                <svg className='hover:fill-pink-600 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink" width="18px" height="18px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
            </li>
            <li className='cursor-pointer hover:font-bold transition-all duration-70 flex justify-center align-baseline'>
                <p>Todo</p>
                <svg className='hover:fill-pink-600 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="pink" width="17px" height="17px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5zm3-2h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V7H8v2z"/>
                </svg>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;
