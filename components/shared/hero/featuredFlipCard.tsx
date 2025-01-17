"use client";

import Image from "next/image";

const FeaturedFlipCard = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mx-auto mb-20 max-w-screen-md text-center">
          <h1 className="mb-6 text-4xl font-medium md:mb-11 md:text-7xl">
            Let&apos;s Make Your Space Beautiful
          </h1>
          <p className="font-medium md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nisi accusantium voluptate aspernatur minima.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto grid max-w-screen-lg gap-10 md:grid-cols-2">
          {/* Left Section - Static Image */}
          <div className="order-1 md:order-1 flex h-full items-center rounded-lg bg-muted">
            <Image
              src="https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hQZM4fVy0d4GfkU6O29vXml3JWCyEaLwYjNrb"
              alt="placeholder"
              className="aspect-video w-full object-cover rounded-lg"
              width={500}
              height={500}
            />
          </div>

          {/* Right Section - Flip Card */}
          <div className="order-2 md:order-2 group relative w-full max-w-md mx-auto perspective">
            {/* Card Container */}
            <div className="relative h-64 w-full rounded-lg bg-muted shadow-lg transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg backface-hidden bg-gray-200">
                <img
                  src="https://shadcnblocks.com/images/block/placeholder-dark-2.svg"
                  alt="placeholder"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col items-start justify-center p-6 bg-gray-300 rounded-lg backface-hidden rotate-y-180">
                <h3 className="mb-3 text-2xl font-medium md:mb-6">
                  Perfect for Any Space
                </h3>
                <p className="mb-6 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio maiores sint cupiditate ullam numquam similique vel
                  itaque.
                </p>
                <a href="#" className="font-medium text-primary hover:underline">
                  Learn how to get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlipCard;
