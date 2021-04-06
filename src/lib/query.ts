let endpoint: string | null = null
export function setEndpoint(newValue: string) {
    endpoint = newValue
}

let baseHeaders: Record<string, string> = {}
export function setHeaders(newValue: Record<string, string>) {
    baseHeaders = newValue
}

export async function query(query: string, variables?: Record<string, string>) {
    let body

    const headers = { ...baseHeaders }

    if (variables === undefined) {
        body = query
        headers["Content-Type"] = "application/graphql"
    } else {
        Object.assign(headers, {
            "Content-Type": "application/json",
            Accept: "application/json"
        })
        body = JSON.stringify({ query, variables })
    }

    if (!endpoint) throw new Error("endpoint is unset")

    return await fetch(endpoint, {
        method: "post",
        headers,
        body
    })
        .then(response => response.json())
        .then(json => {
            if (json.errors) throw new Error(json.errors[0].message)
            return json
        })
}

// just to get prettier to autocorrect syntax
export function graphql(strings: TemplateStringsArray, ...keys: string[]) {
    return strings.reduce((acc, next, index) => {
        return acc + next + (keys[index] ?? "")
    }, "")
}
