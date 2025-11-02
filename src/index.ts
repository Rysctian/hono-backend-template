import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { routes } from './controllers/routes.js'
import { errorHandlerMiddleware } from './middlewares/error-handler.js';
import { auth } from './lib/auth.js';
import { cors } from 'hono/cors';

const app = new Hono()

app.onError(errorHandlerMiddleware);

routes.forEach((route) =>{
  app.route("/", route);
});

app.use(
	"/api/auth/*",
	cors({
		origin: "http://localhost:3000",
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);


app.on(["POST", "GET"], "/api/auth/**", (c) => {
	return auth.handler(c.req.raw);
});



serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
