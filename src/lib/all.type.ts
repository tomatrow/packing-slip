export interface Product {
    id: string
    title: string
    productType: string
    image?: string
}

export interface Data {
    shop: {
        name?: string
        primaryDomain?: {
            host: string
            url: string
        }
    }
    products: Product[]
}

export interface Selection {
    quantity: number
    insects: Record<string, number>
}