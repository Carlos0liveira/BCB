export interface ClienteDTO {
    id?: string
    nome: string
    email: string
    telefone: string
    cpfResponsavel: string
    cnpj: string
    nomeEmpresa: string
}

export interface MessageDTO {
    phoneNumber: string
    isWhatsApp: boolean
    message: string
}

export interface BackofficeOperationDTO {
    clientId: string
    operation: string
    amount: string
}

