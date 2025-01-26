"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ClienteDTO } from "@/types/dtos"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"

export default function CadastroPage() {
    const [clienteData, setClienteData] = useState<ClienteDTO>({
        nome: "",
        email: "",
        telefone: "",
        cpfResponsavel: "",
        cnpj: "",
        nomeEmpresa: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Cliente cadastrado:", clienteData)


        setClienteData({
            nome: "",
            email: "",
            telefone: "",
            cpfResponsavel: "",
            cnpj: "",
            nomeEmpresa: "",
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setClienteData((prev) => ({ ...prev, [name]: value }))
    }

    const router = useRouter()

    useEffect(() => {
        const token = getCookie("auth_token")
        if (!token) {
            router.push("/login")
        }
    }, [router])

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Cadastro de Cliente</CardTitle>
                <CardDescription>Preencha os dados para cadastrar um novo cliente</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="nome">Nome</Label>
                            <Input
                                id="nome"
                                name="nome"
                                value={clienteData.nome}
                                onChange={handleInputChange}
                                placeholder="Digite o nome completo"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={clienteData.email}
                                onChange={handleInputChange}
                                placeholder="Digite o e-mail"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input
                                id="telefone"
                                name="telefone"
                                value={clienteData.telefone}
                                onChange={handleInputChange}
                                placeholder="Digite o telefone"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cpfResponsavel">CPF do Responsável</Label>
                            <Input
                                id="cpfResponsavel"
                                name="cpfResponsavel"
                                value={clienteData.cpfResponsavel}
                                onChange={handleInputChange}
                                placeholder="Digite o CPF do responsável"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cnpj">CNPJ</Label>
                            <Input
                                id="cnpj"
                                name="cnpj"
                                value={clienteData.cnpj}
                                onChange={handleInputChange}
                                placeholder="Digite o CNPJ da empresa"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
                            <Input
                                id="nomeEmpresa"
                                name="nomeEmpresa"
                                value={clienteData.nomeEmpresa}
                                onChange={handleInputChange}
                                placeholder="Digite o nome da empresa"
                                required
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Cadastrar Cliente
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

