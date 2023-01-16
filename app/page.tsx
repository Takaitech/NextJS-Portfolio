import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='bg-darkGrey'>
      <div className="flex h-screen w-screen">
        <div className='flex-1'>
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
        <div className=" mask flex-1 w-full h-full bg-[url('/background-gradient.jpg')] bg-cover ">
       
        </div>
      </div>
    </main>
  )
}
