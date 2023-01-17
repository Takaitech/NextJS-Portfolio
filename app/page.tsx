"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    let bg = document.getElementById("mask")
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;
    
    document.body.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      
      bg.style.transform = `translate3d(0, -${(mouseY * mouseX) * 3}%, 0)`;
    });

  }, []);

  
  return (
    <main  className='bg-darkGrey'>
      <div className="flex h-screen w-screen">
        <div className='w-6/12'>
          <h1>Taylor Ward</h1>
          <nav>
            <li>
              Proffessional Work
            </li>
            <li>
              About Me
            </li>
            <li>
              Creations
            </li>
          </nav>
        </div>
        <div id="mask" className="w-[50vw] h-[125vh] absolute left-2/4 top-0  2-2vw mask grow-1 bg-[url('/background-gradient.png')] bg-cover ">
        </div>
        <img  src="/topograph-pattern-inverse.png" className='w-6/12 h-full absolute top-0 bottom-0 right-0 '></img>
      </div>
    </main>
  )
}
