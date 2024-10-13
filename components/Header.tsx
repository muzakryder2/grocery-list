import { HomeIcon, ListIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-green-700 text-slate-200 w-screen shadow-sm'>
      <div className='container mx-auto py-3 px-2  flex items-center justify-between'>
        <h1 className='text-3xl tracking-tighter font-semibold'>
          Grocery List
        </h1>
        <ul className='flex items-center justify-end gap-3'>
          <li>
            <Link href='/'>
              <HomeIcon size={38} />
            </Link>
          </li>
          <li>
            <Link
              href='/lists'
              className='flex bg-slate-200 text-black ring-2 ring-slate-200 rounded-lg p-2'
            >
              <ListIcon />
              <span className='hidden md:block ml-2 mr-1'>View Lists</span>
            </Link>
          </li>
          <li>
            <Link
              href='/create'
              className='flex bg-slate-200 text-black ring-2 ring-slate-200 rounded-lg p-2'
            >
              <PlusIcon />
              <span className='hidden md:block ml-2 mr-1'>Create List</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
