import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <>
        <header className='flex items-center justify-between bg-black text-white p-5'>
            <div className='logo'>
            <Link to="/"><h1 className='font-bold text-xl md:text-2xl lg:text-4xl'>Ryan's Blog</h1></Link>
            </div>

            <nav>
                <ul className='flex'>
                    <li className='mr-5 lg:text-lg'><button><Link to="/">Home</Link></button></li>
                    <li className='lg:text-lg'><button><Link to="/blog">Blog</Link></button></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
