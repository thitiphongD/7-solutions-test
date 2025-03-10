"use client";

import React from 'react'
import { MenuType } from '../type/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menusItems: MenuType[] = [
    {
        name: 'Exam 1',
        href: '/'
    },
    {
        name: 'Exam 2',
        href: '/assignment-2'
    }
]

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="flex items-center py-4 gap-4">
            {menusItems.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className={`font-semibold hover:text-blue-600 [&.active]:text-blue-600 ${pathname === item.href ? "active" : ""
                        }`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default Navbar