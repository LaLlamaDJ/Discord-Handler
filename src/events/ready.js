const Discord = require("discord.js")

module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        try {
            client.application.commands.set(client.array)
        } catch(error) {
            console.log(error)
        }
        console.log(`[INFO] Iniciado como ${client.user.username}`);
    },
};
