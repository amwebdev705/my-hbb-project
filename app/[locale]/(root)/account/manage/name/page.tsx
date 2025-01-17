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

// Normalize the claim to always return a string
function normalizeClaim(claim: string | { name: string; value: string } | null): string {
  if (typeof claim === 'string') {
    return claim;
  }
  if (claim && typeof claim === 'object' && claim.value) {
    return claim.value;
  }
  return 'Unknown'; // Fallback if the claim is null or invalid
}

export default async function ProfilePage() {
  // Fetch session on the server
  const session = getKindeServerSession();

  if (!session) {
    // Redirect or display a message if the session is not found
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>You are not authenticated. Please log in to access this page.</p>
      </div>
    );
  }

  // Resolve the claims and normalize them
  const nameClaim = session.getClaim('name');
  const emailClaim = session.getClaim('email');

  const [nameRaw, emailRaw] = await Promise.all([nameClaim, emailClaim]);

  const user = {
    name: normalizeClaim(nameRaw),
    email: normalizeClaim(emailRaw),
  };

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
            <p>{user.name}</p>
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
            <p>{user.email}</p>
            <p>will be implemented in the next version</p>
          </div>
          <div>
            <Link href="#">
              <Button disabled className="rounded-full w-32" variant="outline">
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
              <Button disabled className="rounded-full w-32" variant="outline">
                Edit
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
