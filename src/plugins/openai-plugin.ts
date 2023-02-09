import { FastifyInstance } from 'fastify';
import { Configuration, OpenAIApi } from 'openai'

export async function registerOpenAi (server: FastifyInstance) {

    console.log(process.env.REACT_APP_OPENAI_API_KEY)
    
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    
    server.decorate('openai', openai);

    if(!server.openai) {
        server.log.info('Unable to registerer openai plugin');
    }
}

declare module "fastify" {
    interface FastifyInstance {
      openai?: OpenAIApi;
    }
  }