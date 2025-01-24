import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary mb-6">
          Comunicação empresarial simplificada
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          BCB oferece soluções de mensagens eficientes e elegantes para sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/cadastro">
            <Button size="lg" className="w-full sm:w-auto">
              Cadastrar-se
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Acessar Painel
            </Button>
          </Link>
        </div>
      </div>
  )
}

