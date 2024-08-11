'use client'

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navbarLinks = [
    {
        id: 0,
        name: 'Home',
        href: '/'
    },
    {
        id: 1,
        name: 'UI',
        href: '#'
    },
    {
        id: 2,
        name: 'Templates',
        href: '#'
    },
    {
        id: 3,
        name: 'Icons',
        href: '#'
    }
]

export function NavbarLinks(){
    const location = usePathname();
    console.log(location)
    return (
        <div className="hidden md:flex justify-center items-center md:col-span-6 gap-x-2">
           {navbarLinks.map((items) => (
            <Link href={items.href} key={items.id} className={cn(
                location === items.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75',
                "group flex items-center px-2 py-2 font-medium rounded-md"
            )}>
               {items.name}
            </Link>
           )
        )} 
        </div>
    )
}