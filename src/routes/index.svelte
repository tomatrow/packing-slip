<script lang="ts">
    import { onMount } from "svelte"
    import { loadData } from "../lib/shopify"
    import { items, data, inputs, displays, insects } from "../lib/stores"

    onMount(async () => {
        $data = await loadData()
        reset()
    })

    function reset(force = false) {
        const zeroItem = () => ({ quantity: 0, insects: {} })
        $displays.forEach(({ id }) =>
            force ? ($items[id] = zeroItem()) : ($items[id] ??= zeroItem())
        )
    }
</script>

<main class="mx-auto w-11/12">
    <div class="space-y-4 divide-y flex flex-col py-12">
        <button
            class="bg-secondary hover:bg-secondary-400 text-light mx-auto p-2 rounded"
            type="button"
            on:click={() => reset(true)}>Reset</button
        >

        <div>
            <div class="text-secondary">Order Number</div>
            <input class="w-full" type="text" bind:value={$inputs.order.number} />
        </div>
        <div>
            <div class="text-secondary">Date</div>
            <input class="w-full" type="text" bind:value={$inputs.order.date} />
        </div>
        <div>
            <div class="text-secondary">Shipping Method</div>
            <input class="w-full" type="text" bind:value={$inputs.shipping.method} />
        </div>
        <div>
            <div class="text-secondary">Shipping Address Title</div>
            <input class="w-full" type="text" bind:value={$inputs.shipping.title} />
        </div>
        <div>
            <div class="text-secondary">Shipping Address</div>
            <textarea class="w-full" rows="5" bind:value={$inputs.shipping.text} />
        </div>
        <div>
            <div class="text-secondary">Billing Address Title</div>
            <input class="w-full" type="text" bind:value={$inputs.billing.title} />
        </div>
        <div>
            <div class="text-secondary">Billing Address</div>
            <textarea class="w-full" rows="5" bind:value={$inputs.billing.text} />
        </div>
        {#each $displays as { id, title }}
            <div>
                <div class="text-secondary">{title}</div>
                <input
                    type="number"
                    min="0"
                    placeholder="quantity"
                    bind:value={$items[id].quantity}
                />
                <details>
                    <summary>Insects</summary>
                    {#each $insects as insect}
                        <div class="text-secondary text-sm">{insect.title}</div>
                        <input
                            type="number"
                            min="0"
                            placeholder="quantity"
                            bind:value={$items[id].insects[insect.id]}
                        />
                    {/each}
                </details>
            </div>
        {/each}
        <a
            href="/slip"
            target="_blank"
            class="bg-primary hover:bg-primary-400 text-light mx-auto p-2 rounded"
            >Render Packing Slip</a
        >
    </div>
</main>

<style style lang="postcss">
</style>
