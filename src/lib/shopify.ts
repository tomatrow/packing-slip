import type { Data } from "$lib/all.type"
import { graphql, query } from "./query"

export const allData = graphql`
    {
        shop {
            name
            primaryDomain {
                host
                url
            }
        }
        products(first: 250) {
            edges {
                node {
                    id
                    title
                    productType
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`

export async function loadData() {
    const result = await query(allData)

    return {
        ...result,
        products: result.data.products.edges.map((edge: any) => {
            return {
                image: edge.node.images.edges[0]?.node.originalSrc,
                ...edge.node
            }
        })
    } as Data
}
