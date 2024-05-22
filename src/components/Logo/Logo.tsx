import { ROUTES } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon/Icon'

export const Logo = () => {
  return (
	<Link href={ROUTES.HOME} className='cursor-pointer'>
		<Icon name = 'icons/logo' className='w-[134px] h-[50px]'/>
	</Link>
  )
}
