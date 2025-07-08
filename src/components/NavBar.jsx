import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function NavBar() {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/blogs', text: 'Blogs' },
    { href: '/contacts', text: 'Contacts' },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href}>{link.text}</Link></li>
            ))}
            <div className='lg:hidden'>
                <li className='mt-2'><Link className='btn btn-outline btn-secondary w-full' href={'/signIn'}>Sign in</Link></li>
                <li className='mt-2'><Link className='btn btn-outline btn-secondary w-full' href={'/register'}>Register</Link></li>
                <li className='mt-2'><button className="btn btn-outline btn-secondary w-full">Appointment</button></li>
            </div>
          </ul>
        </div>
        <Link href={'/'} className=" text-xl">
          <Image src={'/assets/logo.svg'} width={107} height={87} alt='logo' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map(link => (
            <li key={link.href}><Link href={link.href}>{link.text}</Link></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className='hidden lg:flex gap-2'>
            <Link className='btn btn-outline btn-secondary' href={'/signIn'}>Sign in</Link>
            <Link className='btn btn-outline btn-secondary' href={'/register'}>Register</Link>
            <button className="btn  btn-outline btn-secondary">Appointment</button>
        </div>
        <MdOutlineShoppingBag className='text-2xl'/>
        <CiSearch className='text-2xl'/>
      </div>
    </div>
  )
}
