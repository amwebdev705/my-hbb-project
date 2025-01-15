import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'

// Define public pages
const publicPages = [
  '/',
  '/search',
  '/sign-in',
  '/sign-up',
  '/cart',
  '/cart/(.*)',
  '/product/(.*)',
  '/page/(.*)',
]

// Create internationalization middleware
const intlMiddleware = createMiddleware(routing)

const protectedPaths = [
  /\/checkout(\/.*)?/,
  /\/account(\/.*)?/,
  /\/admin(\/.*)?/,
]

// Combine KindeAuth with Intl middleware
const middleware = withAuth(
  async (req: NextRequest & { auth: { isAuthenticated: boolean } }) => {
    const { pathname } = req.nextUrl

    // Check if the current page is public
    const publicPathnameRegex = RegExp(
      `^(/(${routing.locales.join('|')}))?(${publicPages
        .flatMap((p) => (p === '/' ? ['', '/'] : p))
        .join('|')})/?$`,
      'i'
    )

    const isPublicPage = publicPathnameRegex.test(pathname)

    if (isPublicPage) {
      // For public pages, only apply internationalization
      return intlMiddleware(req)
    }

    // For protected pages, ensure authentication
    if (protectedPaths.some((p) => p.test(pathname))) {
      const { isAuthenticated } = req.auth
      if (!isAuthenticated) {
        const signInUrl = new URL(
          `/sign-in?callbackUrl=${
            encodeURIComponent(req.nextUrl.pathname) || '/'
          }`,
          req.nextUrl.origin
        )
        return NextResponse.redirect(signInUrl)
      }
    }

    // Default to applying internationalization middleware
    return intlMiddleware(req)
  }
)

// Export the middleware
export default middleware

// Define the middleware configuration
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Skip API, Next.js internals, and static assets
}
