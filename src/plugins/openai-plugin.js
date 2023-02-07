import { Configuration, OpenAIApi } from 'openai'

export async function registerOpenAi (server) {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    server.decorate('openai', openai);
    server.log.info('Successfully registered openai plugin');
}