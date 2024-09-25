import React from 'react'

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import Nav from './Nav';
import { AlignJustify } from 'lucide-react';

const MobileNavigation = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify/>
        </SheetTrigger>
    </Sheet>
  )
}

export default MobileNavigation
