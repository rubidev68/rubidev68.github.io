// LanguageSwitcher.tsx (TypeScript)
import { useRouter } from "next/navigation"

export function LanguageSwitcher() {
    const router = useRouter()
    const { locale, asPath } = router

    function changeLanguage(newLocale: string) {
        router.push(asPath, asPath, { locale: newLocale })
    }

    return (
        <div className="flex gap-2">
            <button onClick={() => changeLanguage("fr")}>🇫🇷</button>
            <button onClick={() => changeLanguage("en")}>🇬🇧</button>
            {/* Ajouter d'autres boutons pour d'autres langues */}
        </div>
    )
}