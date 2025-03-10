const BASE_URL = `cnnews.xplr.ru`
const SCRAPPER_BASE_URL = `https://scrapper.cnnews.xplr.ru`

export enum Service {
  SCRAPPER = `https://scrapper.${BASE_URL}`,
  PARSER = `https://parser.${BASE_URL}`,
  LLM = `https://llm.${BASE_URL}`,
}

export async function fetchPageToS3(url: string) {
  const requesUrl = `${SCRAPPER_BASE_URL}/fetch-news/save-html`

  const requesOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: Object.entries({
      url: url,
      bucket: "raw-data",
    }).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&'),
  }

  const response = await fetch(requesUrl, requesOptions)

  if (!response.ok) {
    const data = await response.json()
    console.warn("fetchPageToS3", data)
    return {
      response: data,
      error: {
        status: response.status,
        statusText: response.statusText,
      }
    }
  }

  return {
    response: await response.json(),
    error: null,
  }
}

export async function makeRequest(
  service: Service,
  method: "GET" | "POST" | "PUT",
  endpoint: string,
  params: any | null = null,
  data: object | null = null,
) {
  const requesOptions = {
    method: method,
    // mode: "no-cors",
  }

  let requesUrl = `${service}${endpoint}`
  if (params) {
    const paramsString = (new URLSearchParams(params)).toString()
    requesUrl = `${requesUrl}?${paramsString}`
  }

  if (method === "POST") {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    Object.assign(requesOptions, { headers: headers })

    Object.assign(requesOptions, { body: JSON.stringify(data ?? {}) })
  }

  const response = await fetch(requesUrl, requesOptions)

  return response
}

export async function parseURL(url: string) {
  const res = await makeRequest(Service.PARSER, "POST", "/parse-url", null, {
    url: `http://${url}`,
    agent_uuid: "91b5d272-9dd1-474d-9728-5861b41dfbfc",
    temperature: 1,
    source: "cheshi",
  })
  if (!res.ok) {
    const data = await res.json()
    console.warn("parseURL", data)
    return {
      response: data,
      error: {
        status: res.status,
        statusText: res.statusText,
      }
    }
  }
  return {
    response: await res.json(),
    error: null,
  }
}

export async function startProcess(url: string, process_uuid: string) {
  const res = await makeRequest(Service.LLM, "POST", "/v1/llm-process/url/process", null, {
    url: url,
    process_uuid: process_uuid,
  })
  if (!res.ok) {
    const data = await res.json()
    console.warn("startProcess", data)
    return {
      response: data,
      error: {
        status: res.status,
        statusText: res.statusText,
      }
    }
  }
  return {
    response: await res.json(),
    error: null,
  }
}

export async function operationById(id: string) {
  const res = await makeRequest(Service.LLM, "GET", `/v1/operations/${id}`)
  if (!res.ok) {
    const data = await res.json()
    console.warn("operationById", data)
    return {
      response: data,
      error: {
        status: res.status,
        statusText: res.statusText,
      }
    }
  }
  return {
    response: await res.json(),
    error: null,
  }
}
