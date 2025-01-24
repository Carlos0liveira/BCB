"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { deleteCookie } from "cookies-next"

export function MainNav() {
    const router = useRouter()

    const handleLogout = () => {
        deleteCookie("auth_token")
        router.push("/login")
    }

    return (
        <header className="bg-background border-b border-border">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-semibold text-primary">
                        BCB
                    </Link>
                    <div className="space-x-1">
                        <Link href="/">
                            <Button variant="ghost" size="sm">
                                Início
                            </Button>
                        </Link>
                        <Link href="/cadastro">
                            <Button variant="ghost" size="sm">
                                Cadastro
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm">
                                Painel
                            </Button>
                        </Link>
                        <Link href="/backoffice">
                            <Button variant="ghost" size="sm">
                                Admin
                            </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={handleLogout}>
                            Sair
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

