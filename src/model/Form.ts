export interface PasswordState {
    isValid: boolean,
    helperTextcolor: string,
    helperText: string,
    value: string,
}
export interface EmailState {
    isValid: boolean,
    helperText: string
}

export interface TransactionState {
    isValid: boolean,
    helperText: string,
    receiverHelperText: string
}
export interface TransactionSender {
    publickey: string,
    balance: number
}
