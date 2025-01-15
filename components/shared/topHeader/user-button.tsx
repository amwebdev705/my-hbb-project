import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { cn } from '@/lib/utils';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ChevronDownIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function UserButton() {
  const t = await getTranslations();

  // Fetch authentication state and user details
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = isUserAuthenticated ? await getUser() : null;

  // Gracefully handle unauthenticated users
  if (!isUserAuthenticated || !user) {
    return (
      <Button>
        <Link href="/sign-in">{t('Header.Sign in')}</Link>
      </Button>
    );
  }

  // Safely handle the user properties
  const userName = `${user.given_name || ''} ${user.family_name || ''}`.trim() || 'User';
  const userEmail = user.email || '';

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="header-button" asChild>
          <div className="flex items-center">
            <div className="flex flex-col text-xs text-left">
              <span>
                {t('Header.Hello')}, {userName}
              </span>
              <span className="font-bold">{t('Header.Account & Orders')}</span>
            </div>
            <ChevronDownIcon />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <Link className="w-full" href="/account">
              <DropdownMenuItem>{t('Header.Your account')}</DropdownMenuItem>
            </Link>
            <Link className="w-full" href="/account/orders">
              <DropdownMenuItem>{t('Header.Your orders')}</DropdownMenuItem>
            </Link>
            {userEmail === 'am@gmail.com' && (
              <Link className="w-full" href="/admin/overview">
                <DropdownMenuItem>{t('Header.Admin')}</DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>
          <DropdownMenuItem className="p-0 mb-1">
            <Button>
              <LogoutLink>{t('Header.Sign out')}</LogoutLink>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
