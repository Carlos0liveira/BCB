"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MoreHorizontal } from "lucide-react"
import type { ClienteDTO } from "@/types/dtos"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCookie } from "cookies-next"

// mock para entender como esta ficando a tela
const clientesMock: ClienteDTO[] = [
    {
        id: "1",
        nome: "João Silva",
        email: "joao@empresa.com",
        telefone: "11999999999",
        cpfResponsavel: "12345678900",
        cnpj: "12345678000199",
        nomeEmpresa: "Empresa A",
    },
    {
        id: "2",
        nome: "Maria Santos",
        email: "maria@empresa.com",
        telefone: "11988888888",
        cpfResponsavel: "98765432100",
        cnpj: "98765432000188",
        nomeEmpresa: "Empresa B",
    },
]

const ClienteActions = ({ clienteId, handleAction }: { clienteId: string; handleAction: (action: string, id: string) => void }) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Abrir menu de ações">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
            <div className="grid gap-2">
                {[
                    { action: "incluirCreditos", label: "Incluir Créditos" },
                    { action: "consultarSaldo", label: "Consultar Saldo" },
                    { action: "alterarLimite", label: "Alterar Limite" },
                    { action: "alterarPlano", label: "Alterar Plano" },
                    { action: "verDados", label: "Ver Dados" },
                ].map(({ action, label }) => (
                    <Button
                        key={action}
                        variant="ghost"
                        className="justify-start"
                        onClick={() => handleAction(action, clienteId)}
                    >
                        {label}
                    </Button>
                ))}
            </div>
        </PopoverContent>
    </Popover>
)

export default function BackofficePage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [clientes, setClientes] = useState<ClienteDTO[]>(clientesMock)
    const router = useRouter()

    useEffect(() => {
        const token = getCookie("auth_token")
        if (!token) {
            router.push("/login")
        }
    }, [router])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        //fazer requisição para o back end

        const filteredClientes = clientesMock.filter(
            (cliente) =>
                cliente.nome.toLowerCase().includes(e.target.value.toLowerCase()) ||
                cliente.email.toLowerCase().includes(e.target.value.toLowerCase()),
        )
        setClientes(filteredClientes)
    }

    const handleAction = (action: string, clienteId: string) => {
        console.log(`Ação ${action} para o cliente ${clienteId}`)
    }

    return (
        <Card className="mx-auto">
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Backoffice</CardTitle>
                <CardDescription>Gerencie os clientes e suas operações</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <Label htmlFor="search">Buscar Cliente</Label>
                    <Input
                        id="search"
                        placeholder="Digite o nome ou e-mail do cliente"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>Empresa</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clientes.map((cliente) => (
                            <TableRow key={cliente.id}>
                                <TableCell>{cliente.nome}</TableCell>
                                <TableCell>{cliente.email}</TableCell>
                                <TableCell>{cliente.nomeEmpresa}</TableCell>
                                <TableCell className="text-right">
                                    <ClienteActions clienteId={cliente.id!} handleAction={handleAction} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
