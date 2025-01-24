"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SignInButton, SignOutButton } from '@/components/buttons';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-row justify-between p-10 bg-blue-600 items-center'>
        <Link href={'/'}>
            <h1 className='text-[50px] font-bold'>MySpace</h1>
        </Link>
        <ul className='flex flex-row items-end space-x-5 text-2xl'>
            <li>
                <Link href={'/about'} className={clsx(
                    {
                        'bg-blue-700 p-2 rounded-xl' : pathname === '/about'
                    }
                )}>About</Link>
            </li>
            <li>
                <Link href={'/blog'} className={clsx(
                    {
                        'bg-blue-700 p-2 rounded-xl' : pathname === '/blog'
                    }
                )}>Blog</Link>
            </li>
            <li>
                <Link href={'/users'} className={clsx(
                    {
                        'bg-blue-700 p-2 rounded-xl' : pathname === '/users'
                    }
                )}>Users</Link>
            </li>
            <li>
                <SignInButton />
                
            </li>
        </ul>
    </div>

  )
}

export default Navbar