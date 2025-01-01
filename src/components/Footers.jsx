import React from 'react'

export default function Footers() {
  return (
    <>
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 bg-black">
    <div className="border-t border-slate-900/5 py-10">
    
        <p className="mt-5 text-center text-lg font-semibold leading-6 text-gray-200">© AJ Mehta Diamonds. All rights reserved.</p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-gray-200"><a
                href="/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-slate-100"></div><a href="/changelog">Changelog</a>
        </div>
    </div>
</footer>
    </>
  )
}
