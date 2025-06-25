export interface Auth {
    message : string,
    token   : string,
    user    : User
}

export interface User {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    created_at: string,
    updated_at: string
}