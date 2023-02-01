import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {fetcher} from '../../lib/api';
const inter = Inter({ subsets: ['latin'] })

export  default async function Home() {

  let data = fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log('films:', data);
  
  return (
    <main className='bg-black h-[100vh]'>
      <header>
        <nav className='flex justify-between py-2 px-1'>
          <div className="logo">
               <h1 className='text-blue-400 font-bold text-lg'>Hello world</h1>
          </div>
          <ul className='w-1/2  px-2 flex text-white justify-evenly'>
            <li>Home</li>
            <li>Top</li>
            <li>farvorite</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    </main>
  )
}


