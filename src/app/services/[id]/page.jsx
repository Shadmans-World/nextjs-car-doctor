import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="space-y-[150px]">
      {/* Banner */}
      <section className="flex justify-center ">
        <figure className="relative w-full h-[300px]">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            alt="CheckoutBannerImage"
            fill
          />
          {/* Transparent Layer */}
          <div className="overlay-bg absolute w-full h-full  rounded-xl top-0">
            <div className=" w-full h-full flex items-center ps-16 font-bold text-4xl ">
              <div>
                <h1 className="text-white">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>

      {/* Details */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <figure className="w-full h-auto">
              <Image
                src={data.img}
                width={896}
                height={400}
                alt={data.title}
                className="rounded-xl w-full h-auto"
              />
            </figure>

            <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>

            <p className="text-gray-500 text-base">{data.description}</p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1 bg-gray-100 p-6 rounded-xl flex flex-col gap-4 h-fit">
            
            {/* You can map through services here if needed */}
            <div className="bg-orange-500 text-white text-center py-4 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
            </div>
            <h3 className="font-bold text-xl md:text-2xl text-center">
              Price: ${data.price}
            </h3>
          </div>
        </div>
      </section>

      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
