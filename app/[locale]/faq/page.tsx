import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const data = [
  {
    id: 'faq-1',
    question: 'What eco-friendly products does HB Boutique offer?',
    answer:
      'HB Boutique offers a range of eco-friendly products including rings, necklaces, bracelets, cufflinks, nail lacquer, nail art,  and gel nail polish.',
  },
  {
    id: 'faq-2',
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards (Visa, MasterCard, American Express)  PayPal, Apple Pay, and Google Pay for secure and convenient payments.',
  },
  {
    id: 'faq-3',
    question: 'How long will it take to receive my order?',
    answer:
      'Delivery times vary depending on your location and the shipping method selected. Typically, orders are processed and shipped within 1-3 business days. You can check estimated delivery times during checkout.',
  },
  {
    id: 'faq-4',
    question: 'Can I track my order?',
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your package's status.",
  },
  {
    id: 'faq-5',
    question: 'How do I cancel or change my order?',
    answer:
      'To cancel or make changes to your order, please contact our customer support team at customercare @ hbboutique.shop as soon as possible. We will do our best to accommodate your request if the order has not been shipped.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer international shipping?',
    answer:
      'We do not offer international shipping at this time. To receive updates on shipping locations, please sign up for our newsletter here.',
  },
  {
    id: 'faq-7',
    question: 'Are my personal and payment details secure?',
    answer:
      'Yes, we take data security seriously. Our website uses secure SSL encryption to protect your personal and payment information. For more details, please review our Privacy Policy.',
  },
  {
    id: 'faq-8',
    question: 'Do you offer discounts or promotions?',
    answer:
      'Yes, we run promotions and offer discounts to our customers. Stay updated by subscribing to our newsletter and following us on social media.',
  },
]

const FAQS = () => {
  return (
    <section className='py-32'>
      <div className='container space-y-16'>
        <div className='flex flex-col items-start text-left lg:items-center lg:text-center'>
          <h2 className='mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6'>
            Frequently asked questions
          </h2>
          {/* <p className='max-w-3xl text-muted-foreground lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis!
          </p> */}
        </div>
        <Accordion
          type='single'
          collapsible
          className='mx-auto w-full lg:max-w-3xl'
        >
          {data.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>
                <div className='font-medium sm:py-1 lg:py-2 lg:text-lg'>
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className='sm:mb-1 lg:mb-2'>
                <div className='text-muted-foreground lg:text-lg'>
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className='flex w-full flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8'>
          {/* <div className='relative'>
            <Avatar className='absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5'>
              <AvatarImage src='https://shadcnblocks.com/images/block/avatar-2.webp' />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className='absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5'>
              <AvatarImage src='https://shadcnblocks.com/images/block/avatar-3.webp' />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className='mb-4 size-16 border md:mb-5'>
              <AvatarImage src='https://shadcnblocks.com/images/block/avatar-1.webp' />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div> */}
          <h3 className='mb-2 max-w-3xl font-semibold lg:text-lg'>
            COULD&apos;NT FIND YOUR ANSWER?
          </h3>
          <p className='mb-8 max-w-3xl text-muted-foreground lg:text-lg'>
            We&apos;re here to help. If you couldn&apos;t find the information
            you were looking for, please reach out to use directly. Our team is
            eager to assist you.
          </p>
          <div className='flex w-full flex-col justify-center gap-2 sm:flex-row'>
            <Button className='w-full sm:w-auto'>CONTACT US</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQS
