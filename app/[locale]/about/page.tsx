
import Image from 'next/image'

const About = () => {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='flex flex-col items-center justify-start gap-6 lg:flex-row ml-20 mr-20'>
          <div className='flex w-full flex-col items-start justify-start gap-24 lg:w-1/2'>
            <div className='pr-6'>
              <h1 className='mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl'>
                About Us
              </h1>
              <p className='mb-9 lg:text-xl'>
                At HB Boutique, we believe you can have it all—style,
                sustainability, and self-expression. Our online boutique
                features eco-friendly nail products and sustainable jewelry that
                let you express your unique style while caring for the planet.
              </p>
              <p className='text-muted-foreground'>
                Our nail products boast clean formulations that are vegan,
                cruelty-free, and free from harmful chemicals. We partner
                exclusively with brands that use at least a 5-free formula,
                meaning they&apos;re free from five harmful chemicals such as
                formaldehyde, formaldehyde resin, dibutyl phthalate, toluene.
                and camphor.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
              <Image
                src='https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hZNSQFUeEfGXzDQ9bqnL415vZOYgRPAicywH0'
                alt='about 1'
                className='aspect-[0.7] w-full rounded-lg object-cover md:w-1/2'
                width={500}
                height={500}
              />

              <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                {/* <Image
                  src='https://du9gmflrz1.ufs.sh/f/HowwugeXmS3hZNSQFUeEfGXzDQ9bqnL415vZOYgRPAicywH0'
                  alt='about 2'
                  className='aspect-[1.1] rounded-lg object-cover'
                /> */}

                {/* <Image
                  src='https://shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg'
                  alt='about 3'
                  className='aspect-[0.7] rounded-lg object-cover'
                /> */}

                <div className='px-8'>
                  <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                    Our commitment to sustainability
                  </h1>
                  <p className='mb-9 lg:text-xl'>
                    At HB Boutique, sustainability isn’t just a trend—it’s at
                    the heart of everything we do. We carefully select our
                    materials and partner with brands that share our dedication
                    to ethical production and transparency. At HB Boutique, you
                    can shop with confidence, knowing each purchase supports a
                    more sustainable future.
                  </p>
                  <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                    Express your unique style
                  </h1>
                  <p className='text-muted-foreground'>
                    We celebrate individuality and believe fashion should be
                    personal and meaningful. Our collections offer a unique
                    blend of glamour and responsibility, perfect for those who
                    want more than mainstream fashion. From statement jewelry
                    pieces to eco-friendly nail products, we have everything you
                    need to feel confident and beautiful. Plus, our monthly
                    newsletter, The Eco-Chic Insider, is packed with styling
                    tips and inspiration to help you stay on trend sustainably.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48'>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
              <Image
                src='https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg'
                alt='about 4'
                className='aspect-[0.9] w-full rounded-lg object-cover md:w-1/2'
                width={500}
                height={500}
              />

              <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                <Image
                  src='https://shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg'
                  alt='about 5'
                  className='aspect-[0.8] rounded-lg object-cover'
                  width={500}
                  height={500}
                />
                <Image
                  src='https://shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg'
                  alt='about 6'
                  className='aspect-[0.9] rounded-lg object-cover'
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className='px-8'>
              <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                Our jewelry selection includes….
              </h1>
              <p className='mb-9 lg:text-xl'>
                beautiful pieces made from recycled glass and responsibly
                sourced metals like stainless steel, silver, brass, and gold,
                alongside other natural materials.
              </p>
              <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                Discover our favorites
              </h1>
              <p className='text-muted-foreground mb-20'>
                Looking for inspiration? Check out our HBB Faves page, where we
                showcase our top picks in sustainable jewelry and vegan nail
                products from our partner brands and our own collections.
                Whether you need a standout piece or the perfect nail polish,
                you’ll find it here. Our newsletter also offers fashion matchups
                and stories behind our boutique’s beautiful pieces, helping you
                stay stylish while staying true to your values.
              </p>
              <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                Our Mission{' '}
              </h1>
              <p className='text-muted-foreground'>
                We invite you to explore our collections and join us in our
                mission to make the world a more stylish and sustainable place.
                Every purchase at HB Boutique is a step toward a more beautiful,
                responsible future. Glamour with a Conscience—because you
                deserve to shine without compromise.
              </p>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col items-center justify-center'>
          <Separator className='mt-20' />

          <h1 className='mt-20 mb-8 text-2xl font-semibold lg:mb-6'>
            MEET THE FOUNDER
          </h1>

          <p className='text-muted-foreground ml-40 mr-40 '>
            Harla founded HB Boutique after transitioning from the corporate
            world to entrepreneurship, fueled by her passion for fashion and
            sustainability. She created HB Boutique to blend her love for
            stylish accessories with her commitment to eco-friendly practices.
            Her mission is to position HB Boutique as a leader in eco-friendly
            fashion, offering chic, sustainable products that enhance personal
            well-being and promote natural beauty. Harla is committed to proving
            that glamour and sustainability can go hand in hand.
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default About
