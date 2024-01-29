// import React from 'react'
"use client"
import { PRODUCT_CATEGORIES } from "@/constants"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/useOnclickOutside"


const NavItems = () => {

  const [activeIndex, setActiveIndex] = useState<null | number >(null)

  const isAnyOpen = activeIndex !== null;

  useEffect(() => {
      const handler = (e: KeyboardEvent) => {
          if(e.key === 'Escape') {
            setActiveIndex(null)
          }
      }

      document.addEventListener('keydown', handler)

      return () => {
        document.removeEventListener('keydown',handler)
      }

  }, [])

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full" ref={navRef} >
      {PRODUCT_CATEGORIES.map((category, i) => {

        const handleOpen = () => {
          if(activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const isOpen = i === activeIndex

        return (
          <NavItem
          category={category}
          isOpen={isOpen}
          handleOpen={handleOpen}
          isAnyOpen={isAnyOpen}
          key={category.value}
           />
        )
      })}
    </div>
  )
}

export default NavItems