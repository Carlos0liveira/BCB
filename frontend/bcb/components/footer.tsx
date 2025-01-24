export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-sm text-muted-foreground">© 2023 BCB - Big Chat Brasil</p>
                    <nav className="flex space-x-4">
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Termos
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Privacidade
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Contato
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
