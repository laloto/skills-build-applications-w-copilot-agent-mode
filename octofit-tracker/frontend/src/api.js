export function getCollection(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  return []
}

export async function fetchCollection(endpoint) {
  const response = await fetch(endpoint)
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return getCollection(await response.json())
}
