import React from 'react'
import { useRouter } from 'next/router'
import Stairs from "@/components/stairs";

const Description = () => {
  const router  = useRouter();
  return (
    <Stairs>
      <h1 className='text-bold text-4xl'>{router.query.slug}</h1>
    </Stairs>
  )
}

export default Description