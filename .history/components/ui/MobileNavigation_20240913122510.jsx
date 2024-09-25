import React from 'react'

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import Nav from './Nav';
import { AlignJustify } from 'lucide-react';

const MobileNavigation = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent>
            <div>
                <div>
                    <div>Yogendra designer</div>
                    <Nav containerStyles='flex flex-col items-center gap-y-2' linkStyles='text-1xl font-semibold'/>
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation
