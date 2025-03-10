export function saveLocalStorage(key: string, data: object[]) {
  const encoded = JSON.stringify(Array.from(data))
  window.localStorage.setItem(key, encoded)
}

export function readLocalStorage(key: string): object[] {
  const encoded = window.localStorage.getItem(key)
  const data = JSON.parse(encoded ?? "[]")
  return data
}

export function deleteLocalStorage(key: string) {
  window.localStorage.removeItem(key)
}
