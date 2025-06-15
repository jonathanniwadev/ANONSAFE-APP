'use client'
import Link from "next/link"
import { useState } from "react"
//import MobileMenu

export default function Navbar(){
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return(
    <>
     <nav className="fixed top-0 left-0 border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
       <div className="mx-auto max-w7xl px-6">
         <div className="flex h-16 items-center justify-between">
            {/* logo and brand */}
              <div className="flex items-center space-x-3">
                <Link href={'/'} className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                    {/* Logo here exactly */}
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                     >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4c1.66 0 3 1.34 3 3v2.25c0 .41.34.75.75.75H18c.55 0 1 .45 1 1V14a6 6 0 01-12 0v-3c0-.55.45-1 1-1h2.25c.41 0 .75-.34.75-.75V7c0-1.66 1.34-3 3-3z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-wrap">
                    AnonSafe
                  </span>
                </Link>


                
              </div>
              {/* Main Navigation */}
              <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/send-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Send Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How AnonSafe Works
              </Link>
              <Link
                href="/resources"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Help & Resources
              </Link>
            </div>
         </div>
       </div>
     </nav>
    </>
  )
}