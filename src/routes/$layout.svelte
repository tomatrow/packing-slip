<script>
    import "../app.postcss"
    import { onMount } from "svelte"
    import { setEndpoint, setHeaders } from "$lib/query"
    import { items, data, inputs } from "../lib/stores"

    setEndpoint(`https://${import.meta.env.VITE_SHOPIFY_SHOP_URL}/api/graphql`)
    setHeaders({
        "X-Shopify-Storefront-Access-Token": import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    })

    onMount(() => [items, data, inputs].forEach(store => store.useLocalStorage()))
</script>

<slot />
