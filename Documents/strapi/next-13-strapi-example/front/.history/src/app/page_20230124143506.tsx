import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-black h-[100vh]'>
      <header>
        <nav className='flex justify-between'>
          <div className="logo">
               <h1 className='text-blue-400 font-bold text-lg'>Hello world</h1>
          </div>
          <ul className='w-1/2  flex text-white justify-between'>
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
