import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import React from 'react'
const links = [
  { href: "/home", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
];
export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar links={links}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}