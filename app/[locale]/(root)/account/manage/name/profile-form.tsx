'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { updateUserName } from '@/lib/actions/user.actions'
import { useKindeSession } from '@/hooks/use-kinde-session'
import { UserNameSchema } from '@/lib/validator'

// Define schema for validation
// const UserNameSchema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
// })

export const ProfileForm = () => {
  const router = useRouter()
  const { session, updateSession } = useKindeSession()
  const form = useForm<z.infer<typeof UserNameSchema>>({
    resolver: zodResolver(UserNameSchema),
    defaultValues: {
      firstName: session?.user?.firstName || '',
      lastName: session?.user?.lastName || '',
    },
  })
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof UserNameSchema>) {
    const res = await updateUserName(values)
    if (!res.success) {
      return toast({
        variant: 'destructive',
        description: res.message,
      })
    }

    const { data, message } = res
    const updatedSession = {
      ...session,
      user: {
        ...session?.user,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    }
    updateSession(updatedSession) // Update session in KindeAuth
    toast({
      description: message,
    })
    router.push('/account/manage')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-5'
      >
        <div className='flex flex-col gap-5'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='First Name'
                    {...field}
                    className='input-field'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-bold'>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Last Name'
                    {...field}
                    className='input-field'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type='submit'
          size='lg'
          disabled={form.formState.isSubmitting}
          className='button col-span-2 w-full'
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Save Changes'}
        </Button>
      </form>
    </Form>
  )
}
