import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
export default async function ServicesSection() {
  // const res = await fetch(
  //   `${
  //     process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  //   }/services.json`,
  //   {
  //     cache: "no-store",
  //   }
  // );

  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find().toArray();
  return (
    <div>
      <div className="grid grid-cols-12">
        {data.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 p-2  "
              key={item._id}
            >
              <div className="card bg-base-100 w-full shadow-xl">
                 {/* Responsive Image Container */}
                <div className="relative w-full  h-[208px] overflow-hidden rounded-t-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="flex justify-between text-orange-500 font-bold">
                    <p>Price: ${item.price}</p>
                    <Link href={`/services/${item._id}`} ><FaLongArrowAltRight className="text-2xl"/></Link>
                  </div>
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
