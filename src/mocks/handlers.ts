import { rest } from 'msw'
import { Body } from '../hooks'
import ajaxConfig from '../config/Ajax'

export const handlers = [
  rest.post(ajaxConfig.url + ajaxConfig.path, (req, res, ctx) => {
    const body = req.body as Body

    console.log(`POST complete, score: ${body.score}, time: ${body.time}`)

    return res(
      ctx.json({
        status: 'ok',
        score: body.score,
        time: body.time,
      }),
    )
  }),
]
