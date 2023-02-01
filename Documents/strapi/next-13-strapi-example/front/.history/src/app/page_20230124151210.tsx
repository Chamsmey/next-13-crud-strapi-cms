import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {fetcher} from '../../lib/api';
const inter = Inter({ subsets: ['latin'] })

export  default async function Home() {
// fetch films from Strapi
  let data =await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log('films:', data.data);
  
  return (
    <main className='bg-black h-[100vh]'>
      <header>
        <nav className='flex justify-between py-2 px-1'>
          <div className="logo">
               <h1 className='text-blue-400 font-bold text-lg'>PNC Film</h1>
          </div>
          <ul className='px-2 flex text-white'>
            <li className='mr-5'>Home</li>
            <li className='mr-5'>Top</li>
            <li className='mr-5'>farvorite</li>
            <li className='mr-5'>Login</li>
          </ul>
        </nav>
      </header>
    </main>
  )
}


