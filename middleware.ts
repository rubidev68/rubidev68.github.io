import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const supportedLocales = ['en', 'fr', 'de']
    const pathnameLocale = pathname.split('/')[1]

    // Si l'URL commence par "en", rediriger vers "/"
    if (pathnameLocale === 'en') {
        const newPath = pathname.replace(/^\/en/, '') || '/'
        return NextResponse.redirect(new URL(newPath, request.url))
    }

    // Si une locale non supportée est présente (aucun préfixe), détecter la langue du navigateur
    if (!supportedLocales.includes(pathnameLocale)) {
        const acceptLang = request.headers.get('accept-language')
        const detectedLocale = acceptLang?.split(',')[0].split('-')[0]
        // Si la langue détectée est "fr" ou "de", rediriger vers ce préfixe, sinon continuer (langue par défaut "en")
        if (detectedLocale && ['fr', 'de'].includes(detectedLocale)) {
            return NextResponse.redirect(new URL(`/${detectedLocale}${pathname}`, request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
}