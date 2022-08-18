// source/server.ts
// The entrypoint for the server.

import express from 'express'
import rateLimit from 'express-rate-limit'

const app = express()

app.use(
	rateLimit({
		max: 10,
	}),
)

app.get('/', (_, response) => response.send('Ello there!'))

app.listen(8080)
