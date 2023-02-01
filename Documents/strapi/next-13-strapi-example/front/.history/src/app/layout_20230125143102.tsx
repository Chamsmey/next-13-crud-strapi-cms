'use client'

import { userFetchUser } from 'lib/userContext'
import FormCom from './formCom';
import './globals.css'
import NavCom from './navCom';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})

{

  const {user,loading} = userFetchUser();
  console.log(loading);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavCom/>
        <FormCom/>
        
        {children}

        <footer>
          Movie
        </footer>
        
        
        </body>
    </html>
  )
}
