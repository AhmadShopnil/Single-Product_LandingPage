"use client"

import Link from "next/link"
import { useState, useEffect } from "react"




export default function Home() {
 

  return (
    <main className="min-h-screen ">
      <div className="flex justify-center items-center py-20">
        <Link
      href="/demo1"
      className=" px-4 py-3 bg-black rounded-md text-white"
      >Demo1</Link>
      </div>
    </main>
  )
}
