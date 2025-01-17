'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { updateUser } from '@/lib/actions/user.actions';
import { IUser } from '@/lib/db/models/user.model';
import { UserUpdateSchema } from '@/lib/validator';

const UserEditForm = ({ user }: { user: IUser }) => {
  const router = useRouter();
  const { toast } = useToast();

  const defaultValues = {
    name: `${user.firstName || ''} ${user.lastName || ''}`, // Combine firstName and lastName
    email: user.email || '',
  };

  const form = useForm<z.infer<typeof UserUpdateSchema>>({
    resolver: zodResolver(UserUpdateSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof UserUpdateSchema>) {
    try {
      const [firstName, ...lastNameParts] = values.name.split(' ');
      const lastName = lastNameParts.join(' ');

      const res = await updateUser({
        _id: user._id,
        firstName,
        lastName,
        email: values.email,
      });

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        });
        return;
      }

      toast({ description: 'User updated successfully!' });
      router.push(`/admin/users`);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          description: error.message || 'An unexpected error occurred',
        });
      } else {
        toast({
          variant: 'destructive',
          description: 'An unexpected error occurred',
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Update User'}
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push(`/admin/users`)}
          >
            Back
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserEditForm;
