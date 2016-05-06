'use strict';
let Hapi = require('hapi');
let server = new Hapi.Server();
let Twitter = require('twitter');
let tweetClient = new Twitter({
  consumer_key: process.ENV.CONSUMER_KEY,
  consumer_secret: process.ENV.CONSUMER_SECRET,
  access_token_key: process.ENV.ACCESS_TOKEN_KEY,
  access_token_secret: process.ENV.ACCESS_TOKEN_SECRET
});

server.connection({port: 8000, host: 'localhost'});
server.register(require('inert'), (err)=>{
  if(err){
    throw err;
  }

  server.route([
    {
        method: 'GET',
        path:'/getTweets',
        handler: (request, reply) => {

              tweetClient.get('search/tweets', {q: '#ngconf'}, (err, tweets)=>{
                if(err){
                  throw err;
                }
                reply(tweets);
              });

        }
    },

    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'dist'
        }
      }
    }
  ]);

});


server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
