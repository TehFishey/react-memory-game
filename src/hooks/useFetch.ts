export type Body = {
  time: number
  score: number
}

export const useFetch = (url: string, body: Body): void => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => console.log(err))
}
