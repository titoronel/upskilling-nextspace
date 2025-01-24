'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
    const { data: session, status } = useSession();

    console.log(session, status)
    if (status === 'loading') {
        return <>Loading...</>
    }

    if (status === 'authenticated') {
        return (
            <div className="flex flex-row space-x-5">
                <Link href={'/dashboard'}>
                    <Image 
                        src={session.user?.image ?? ''}
                        alt="Your-name"
                        width={32}
                        height={32}
                    />
                </Link>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>          
        )
    }
    return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign Out</button>
}