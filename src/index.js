import createServer from './server.js';

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

const server = await createServer();

await server.ready();
  
server.listen({ port: 3000 }, function (err, address) {
if (err) {
    fastify.log.error(err)
    process.exit(1)
}
console.log(`Server is now listening on ${address}`)
})