"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Send } from "lucide-react"
import type { MessageDTO } from "@/types/dtos"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCookie } from "cookies-next"

export default function DashboardPage() {
    const [messageData, setMessageData] = useState<MessageDTO>({
        phoneNumber: "",
        isWhatsApp: false,
        message: "",
    })
    const router = useRouter()

    useEffect(() => {
        const token = getCookie("auth_token")
        if (!token) {
            router.push("/login")
        }
    }, [router])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Mensagem enviada:", messageData)
        setMessageData({
            phoneNumber: "",
            isWhatsApp: false,
            message: "",
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setMessageData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSwitchChange = (checked: boolean) => {
        setMessageData((prev) => ({ ...prev, isWhatsApp: checked }))
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Painel de Mensagens</CardTitle>
                <CardDescription>Envie uma nova mensagem para seus clientes</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Número de Telefone</Label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={messageData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Ex: +55 11 98765-4321"
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="isWhatsApp" checked={messageData.isWhatsApp} onCheckedChange={handleSwitchChange} />
                        <Label htmlFor="isWhatsApp">Enviar via WhatsApp</Label>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={messageData.message}
                            onChange={handleInputChange}
                            placeholder="Digite sua mensagem"
                            required
                            rows={4}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

