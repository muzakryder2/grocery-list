'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HomeIcon, ListIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { lists } from '@/data'

export default function Header() {
  const [currentLists, setCurrentLists] = useState(lists)
  const [text, setText] = useState('')
  const router = useRouter()

  function addList() {
    const newList = {
      id: crypto.randomUUID(),
      name: text,
      items: [],
    }

    setCurrentLists((prevData) => [...prevData, newList])
    router.push('/lists')
  }

  return (
    <header className='bg-green-700 text-slate-200 w-screen shadow-sm'>
      <div className='container mx-auto py-3 px-2  flex items-center justify-between'>
        <h1 className='text-3xl tracking-tighter font-semibold cursor-pointer hover:text-white'>
          Grocery List
        </h1>
        <ul className='flex items-center justify-end gap-3'>
          <li>
            <Link href='/' className='hover:text-white'>
              <HomeIcon size={38} />
            </Link>
          </li>
          <li>
            <Link
              href='/lists'
              className='flex bg-slate-200 text-black ring-2 ring-slate-200 rounded-lg p-2 hover:bg-white hover:ring-white'
            >
              <ListIcon />
              <span className='hidden md:block ml-2 mr-1'>View Lists</span>
            </Link>
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className='flex bg-slate-200 text-black ring-2 ring-slate-200 rounded-lg p-2 hover:bg-white hover:ring-white'
                  onClick={addList}
                >
                  <PlusIcon />
                  <span className='hidden md:block ml-2 mr-1'>Create List</span>
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Add List</DialogTitle>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      List Name
                    </Label>
                    <Input
                      id='name'
                      className='col-span-3'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Add List</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
    </header>
  )
}
