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
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ChevronDownIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function UserButton() {
  const t = await getTranslations();

  // Fetch session and user details via KindeAuth
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="header-button" asChild>
          <div className="flex items-center">
            <div className="flex flex-col text-xs text-left">
              <span>
                {t('Header.Hello')},{' '}
                {isUserAuthenticated && user ? user.given_name || user.email : t('Header.sign in')}
              </span>
              <span className="font-bold">{t('Header.Account & Orders')}</span>
            </div>
            <ChevronDownIcon />
          </div>
        </DropdownMenuTrigger>
        {isUserAuthenticated && user ? (
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.given_name || user.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link className="w-full" href="/account">
                <DropdownMenuItem>{t('Header.Your account')}</DropdownMenuItem>
              </Link>
              <Link className="w-full" href="/account/orders">
                <DropdownMenuItem>{t('Header.Your orders')}</DropdownMenuItem>
              </Link>
              {user.email === 'Admin' && (
                <Link className="w-full" href="/admin/overview">
                  <DropdownMenuItem>{t('Header.Admin')}</DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuGroup>
            <DropdownMenuItem className="p-0 mb-1">
              <LogoutLink>{t('Header.Sign out')}</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button>
                  <LoginLink>{t('Header.Sign in')}</LoginLink>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="font-normal">
                {t('Header.New Customer')}?{' '}
                <Link href="/sign-up">{t('Header.Sign up')}</Link>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
