const context = process.env.CONTEXT
let baseURL = context == "deploy-preview" ? process.env.DEPLOY_PRIME_URL : context == 'production' ? process.env.URL : "http://localhost:8888"
export let heroEndpoint = new URL("/api/portfolio", baseURL)
export let gridEndpoint = new URL("/api/gridImages", baseURL)
export let data = ''
