const { ShardingManager } = require("discord.js");
const { token } = require(`${__dirname}/src/public/botconfig.json`);

const manager = new ShardingManager("./index.js", {
    totalShards: "auto",
    token: token
});


manager.on("shardCreate", (shard) => console.log(`[INFO] Shard ${shard.id} launched`));
manager.spawn();
