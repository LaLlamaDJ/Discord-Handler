module.exports = {
    name: 'ping',
    aliases: ["p"],
    async execute(message, args, MessageEmbed, Util, client){
        const embed = new MessageEmbed()
            .setTitle('Pong 🏓')
            .setDescription(`Mi ping es de ${client.ws.ping}ms`)
            .setColor("RANDOM")
        message.channel.send({ embeds: [embed] });
    },
};
