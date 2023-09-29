import React from 'react'
import {Link} from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const Header = () => {
  
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  return (
    <>
    
     <div className='bg-slate-200 p-2'>
           <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                 <Link to="/"> <h1 className='font-bold'>Basic Auth</h1> </Link>

                  <ul className='flex gap-4'>
                  <Link to="/"> <li>Home</li> </Link>
                  <Link to="/about"><li>About</li> </Link>
                  <Link to="/sign-in"><li>Sign In</li> </Link>
                      
                      
                  </ul>
           </div>
     </div>

 



     </>
  )
}
