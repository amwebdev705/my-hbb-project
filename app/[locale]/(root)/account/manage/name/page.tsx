import { Metadata } from 'next';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const PAGE_TITLE = 'Login & Security';

export const metadata: Metadata = {
  title: PAGE_TITLE,
};

export default async function ProfilePage() {
  // Fetch user session using KindeAuth
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = isUserAuthenticated ? await getUser() : null;

  // Handle unauthenticated state
  if (!isUserAuthenticated || !user) {
    // Redirect unauthenticated users to the login page
    return (
      <div className="flex justify-center items-center h-screen">
        <p>You need to sign in to access this page.</p>
        <Link href="/sign-in">
          <Button className="ml-4">Sign In</Button>
        </Link>
      </div>
    );
  }

  // User details
  const userName = `${user.given_name || ''} ${user.family_name || ''}`.trim() || 'User';
  const userEmail = user.email || 'Not available';

  return (
    <div className="mb-24">
      <div className="flex gap-2">
        <Link href="/account">Your Account</Link>
        <span>›</span>
        <span>{PAGE_TITLE}</span>
      </div>
      <h1 className="h1-bold py-4">{PAGE_TITLE}</h1>
      <Card className="max-w-2xl">
        <CardContent className="p-4 flex justify-between flex-wrap">
          <div>
            <h3 className="font-bold">Name</h3>
            <p>{userName}</p>
          </div>
          <div>
            <Link href="/account/manage/name">
              <Button className="rounded-full w-32" variant="outline">
                Edit
              </Button>
            </Link>
          </div>
        </CardContent>
        <Separator />
        <CardContent className="p-4 flex justify-between flex-wrap">
          <div>
            <h3 className="font-bold">Email</h3>
            <p>{userEmail}</p>
            <p>will be implemented in the next version</p>
          </div>
          <div>
            <Link href="#">
              <Button
                disabled
                className="rounded-full w-32"
                variant="outline"
              >
                Edit
              </Button>
            </Link>
          </div>
        </CardContent>
        <Separator />
        <CardContent className="p-4 flex justify-between flex-wrap">
          <div>
            <h3 className="font-bold">Password</h3>
            <p>************</p>
            <p>will be implemented in the next version</p>
          </div>
          <div>
            <Link href="#">
              <Button
                disabled
                className="rounded-full w-32"
                variant="outline"
              >
                Edit
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
