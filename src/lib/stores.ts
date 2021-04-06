import { derived } from "svelte/store"
import type { Data, Selection } from "./all.type"
import { writable } from "./persistentStore"

export const inputs = writable("inputs", {
    order: {
        number: "",
        date: ""
    },
    billing: {
        title: "Bill To",
        text: ""
    },
    shipping: {
        title: "Ship To",
        text: "",
        method: ""
    }
})

export const items = writable("items", {} as Record<string, Selection>)
export const data = writable<Data>("data", {
    shop: {},
    products: []
})

export const insects = derived(data, $data => products($data, "insect"))
export const displays = derived(data, $data => products($data, "display"))

function products($data: Data, productType: string) {
    return $data.products.filter(product => product.productType === productType)
}
