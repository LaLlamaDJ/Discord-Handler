const { Client, Intents, Collection, MessageEmbed, Util } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents: 32767,
  presence: {
    status: "dnd",
    activities: [
      {
      name: "Some games...",
      type: "PLAYING"
    }
  ]
  }
});
const { token } = require(`${__dirname}/src/public/botconfig.json`);
const { comandos } = require(`${__dirname}/src/utils/handler/comandos.js`);
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);

comandos(fs, client, Collection)
eventos(fs, client, MessageEmbed, Util)
////////////----Anti Crash----////////////
client.on('shardError', error => {
  console.log(" [antiCrash] :: ShardError");
  console.log(error);
})
process.on("unhandledRejection", (reason, p) => {
  console.log(" [antiCrash] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [antiCrash] :: Multiple Resolves");
  console.log(type, promise, reason);
});
////////////----Anti Crash----////////////

client.login(token);
