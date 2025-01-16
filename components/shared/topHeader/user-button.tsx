import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ChevronDownIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function UserButton() {
  const t = await getTranslations();

  // Get user session and permissions
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
  const adminPermission = await getPermission('admin-access');
  const isAdmin = adminPermission?.isGranted;

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="header-button" asChild>
          <div className="flex items-center">
            <div className="flex flex-col text-xs text-left">
              <span>
                {t('Header.Hello')}, {user ? user.given_name || user.email : t('Header.sign in')}
              </span>
              <span className="font-bold">{t('Header.Account & Orders')}</span>
            </div>
            <ChevronDownIcon />
          </div>
        </DropdownMenuTrigger>
        {user ? (
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.given_name || user.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link className="w-full" href="/account">
                <DropdownMenuItem>{t('Header.Your account')}</DropdownMenuItem>
              </Link>
              <Link className="w-full" href="/account/orders">
                <DropdownMenuItem>{t('Header.Your orders')}</DropdownMenuItem>
              </Link>
              {isAdmin && (
                <Link className="w-full" href="/admin/overview">
                  <DropdownMenuItem>{t('Header.Admin')}</DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuGroup>
            <DropdownMenuItem className="p-0 mb-1">
              <Button asChild>
                <LogoutLink>{t('Header.Sign out')}</LogoutLink>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button asChild>
                  <LoginLink>{t('Header.Sign in')}</LoginLink>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="font-normal">
                {t('Header.New Customer')}?{' '}
                <Button asChild>
                  <RegisterLink>{t('Header.Sign up')}</RegisterLink>
                </Button>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
