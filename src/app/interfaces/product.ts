export interface listProducts {
    products :  Productos[],
    message: string
}

export interface Productos{
    name: string,
    price: number,
    user_id: number,
    updated_at: Date,
    created_at: Date,
    id: number
}