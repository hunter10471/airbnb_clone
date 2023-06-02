'use client';
import Image from 'next/image'
import React from 'react'



const Avatar = () => {
  return (
    <Image alt='avatar' height={30} width={30} src={'/images/placeholder.jpg'} className='rounded-full' />
  )
}

export default Avatar