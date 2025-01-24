// 'use client';
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// const HeroOne = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 200); // Delay for entry animation
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 px-6 md:flex-row">
//       {/* Left Section - Image */}
//       <div
//         className={`w-full md:w-1/2 flex justify-center transition-transform duration-700 bg-red-300 ${
//           visible ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <img
//           src="https://via.placeholder.com/400"
//           alt="Product"
//           className="rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Right Section - Description */}
//       <div
//         className={`w-full md:w-1/2 px-4 md:px-12 py-6 transition-transform duration-700 bg-bl ${
//           visible ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Amazing Product
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Discover the amazing features of this product. Perfect for all your
//           needs, it’s reliable, durable, and cost-effective.
//         </p>
//         <Button variant="outline" size="lg">
//           Buy Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HeroOne;

const HeroOne = () => {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='flex flex-col space-y-10 md:space-y-16'>
          <div className='lg:flex lg:gap-x-4'>
            <div className='lg:w-1/2'>
              <div className='mb-6 md:mb-8 lg:mb-0'>
                <Image
                  src='https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hv9Q0bfO53D1rOESV6nuJR9ylAZTozIsjgC2Y'
                  alt='placeholder hero'
                  className='aspect-[4/3] w-full rounded-md border border-border object-cover'
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className='lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32'>
              <div>
                <h3 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
                  Unique & Artistic
                </h3>
                <h3 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
                  The Line Ring
                </h3>
                <p className='text-muted-foreground lg:text-lg'>
                  Classic yet Modern Pieces THAT DEFINE YOUR UNIQUE STYLE
                </p>
                <Button>EXPLORE</Button>
              </div>
            </div>
          </div>
          <div className='flex-row-reverse lg:flex lg:gap-x-4'>
            <div className='lg:w-1/2'>
              <div className='mb-6 md:mb-8 lg:mb-0'>
                <Image
                  src='https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hVP1kFSYdrplz1RwuJQ3FW07kgDPsTShYvBUG'
                  alt='placeholder hero'
                  className='aspect-[4/3] w-full rounded-md border border-border object-cover'
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className='lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32'>
              <div>
                <h3 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
                  SMART GLASS NECKLACE
                </h3>
                <h3 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
                  TRANSFORMING DISCARDED GLASS INTO BEAUTIFUL ART
                </h3>
                <p className='text-muted-foreground lg:text-lg'>
                  FROM TRASH TO TREASURE
                </p>
                <Button>FIND YOUR TREASURE</Button>
              </div>
            </div>
          </div>
          <div className='lg:flex lg:gap-x-4'>
            <div className='lg:w-1/2'>
              <div className='mb-6 md:mb-8 lg:mb-0'>
                <Image
                  src='https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hgnvvfQU8XxMgNPkCIUfvn190LiQTAasVOpD4'
                  alt='placeholder hero'
                  className='aspect-[4/3] w-full rounded-md border border-border object-cover'
                  width={500}
                  height={500}
                />
                <Separator className='bg-red-800' />
                <h3 className='mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
                  FOR HIM
                </h3>
                <Button>DISCOVER</Button>
              </div>
            </div>
            {/* Right - Video */}
            <div className='lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32'>
              <div className='relative w-full aspect-w-16 aspect-h-9'>
                <video
                  controls
                  className='w-full rounded-md border border-border'
                  poster='https://via.placeholder.com/500x300'
                >
                  <source
                    src='https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOne
