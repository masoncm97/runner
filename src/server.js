import Fastify from 'fastify'
import { chatRoutes } from './routes/chat-routes.js'
import { registerOpenAi } from './plugins/openai-plugin.js'
import * as dotenv from 'dotenv'

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

const createServer = async () => {
  const server = Fastify({
    logger: true
  })

  dotenv.config()
  console.log(process.env.REACT_APP_OPENAI_API_KEY)
  
  console.log(chatRoutes)
  
  server.register(chatRoutes)

  registerOpenAi(server)
  
  return server
}

export default createServer
