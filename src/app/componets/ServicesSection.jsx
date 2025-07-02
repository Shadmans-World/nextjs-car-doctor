import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services.json`,{
        cache:'no-store'
    })
    const data = await res.json()
  return (
    <div className='grid grid-cols-12'>
        {data.map((item)=>{
            return(
                <div className='col-span-12 md:col-span-6 lg:col-span-4' key={item._id}>
                    <Image src={item.img} width={314} height={208} alt={item.title} />
                </div>
            )
        })}
    </div>
  )
}
