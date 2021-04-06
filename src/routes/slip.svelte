<script lang="ts">
    import { items, data, inputs } from "../lib/stores"

    function productById(id: string) {
        return $data.products.find(product => product.id === id)
    }
</script>

<div class="m-auto px-16 font-sans">
    <header class="space-y-5 my-10">
        <!-- logo  -->
        <div class="flex">
            <div id="logo" class="w-1/2 h-24 bg-contain bg-no-repeat object-top" />

            <div class="w-1/2">
                <div class="text-secondary uppercase font-bold">Insect Expressions</div>
                {#if $inputs.order.number}
                    <div>
                        <span class="uppercase font-bold">Order</span>
                        <span>{$inputs.order.number}</span>
                    </div>
                {/if}
                <div>
                    <span class="uppercase font-bold">Order Date</span>
                    <span>{$inputs.order.date}</span>
                </div>
                <div>
                    <span class="uppercase font-bold">Shipping</span>
                    <span>{$inputs.shipping.method}</span>
                </div>
            </div>
        </div>

        <div class="flex justify-end">
            <div class="mt-auto w-1/2">
                <div class="uppercase font-bold">{$inputs.billing.title}</div>
                <div class="whitespace-pre">{$inputs.billing.text}</div>
            </div>
            <div class="mt-auto w-1/2">
                <div class="uppercase font-bold">{$inputs.shipping.title}</div>
                <div class="whitespace-pre">{$inputs.shipping.text}</div>
            </div>
        </div>
    </header>

    <hr class="bg-secondary-500 h-1" />

    <section class="space-y-4 py-4">
        <div class="flex justify-between uppercase font-bold">
            <span class="mx-4">Item Description</span>
            <span class="mx-4">qty</span>
        </div>

        <hr />

        {#each Object.entries($items) as [id, { quantity, insects }]}
            {#if quantity > 0}
                <div class="space-x-4 flex justify-between my-4 pr-8 w-full h-24">
                    <img
                        alt="beetle"
                        class="h-full w-1/6 object-contain"
                        src={productById(id)?.image}
                    />
                    <span class="w-full font-bold">{productById(id)?.title}</span>
                    <div class="w-1/12 text-right">x {quantity}</div>
                </div>
                {#each Object.entries(insects) as [id, quantity]}
                    {#if quantity > 0}
                        <div class="space-x-4 flex justify-between ml-auto pr-8 w-5/6">
                            <img
                                class="w-16 h-16 object-contain"
                                src={productById(id)?.image}
                                alt=""
                            />
                            <span class="w-full">{productById(id)?.title}</span>
                            <div class="w-1/12 text-right">x {quantity}</div>
                        </div>
                    {/if}
                {/each}
                <hr />
            {/if}
        {/each}
    </section>

    <hr class="bg-secondary-500 h-1" />

    <!-- footer -->
    <footer class="space-y-10 flex items-center flex-col my-10">
        <div class="text-center font-light text-xs">
            I hope your insect art brings you peace and joy. If I can do anything to increase your
            satisfaction, please email me at
            <br />
            hello@insectexpressions.com
        </div>

        <div class="grid grid-cols-2">
            <div class="my-auto">
                <div class="font-bold">Love your insect art?</div>
                <div>
                    Please follow Insect Expressions on social media and share how you liked your
                    art piece! I love hearing stories about how insect art brings you closer to
                    nature.
                </div>
            </div>
            <div
                class="space-y-10 text-secondary-500 justify-between my-auto text-green text-center uppercase font-bold text-3xl"
            >
                <div>
                    Thank you so <br />
                    much!
                </div>
                <div>
                    I appreciate your <br />
                    support!
                </div>
            </div>
        </div>

        <div class="my-4 font-bold">insectexpressions.com</div>
        <div class="space-x-4 flex">
            <svg class="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Facebook icon</title>
                <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
            </svg>
            <svg class="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram icon</title>
                <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
            </svg>
        </div>
    </footer>
</div>

<style>
    #logo {
        background-image: url("https://cdn.shopify.com/s/files/1/0417/3244/0223/files/Green_Logo_ebfde4c7-bdb6-425d-bc80-a789304de51f.png?v=1594266195");
    }
</style>
