const prefix = "!"
module.exports = {
    name: 'messageCreate',
    execute(message, client, MessageEmbed, Util){
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
   
        const command = client.commands.get(commandName.toLowerCase()) ||  client.commands.find((command) => command.aliases && command.aliases.includes(commandName));
        if(!command) return message.reply(`${commandName} no es un comando valido!`);
        if(command) {
            if(!message.member.permissions.has(command.userPerms || [])) {
                return message.channel.send(`No tienes el permiso \`${command.userPerms || []}\``)
            }
            if(!message.guild.me.permissions.has(command.clientPerms || [])) {
                return message.channel.send(`No tengo el permiso \`${command.clientPerms || []}\``)
            }
            if (command.toggleOff) {
                return message.channel.send(`Este comando fue deshabiltado por mi creador!!`)
            }
        }
        try{
            command.execute(message, args, MessageEmbed, Util, client)
        }catch(error){
            console.log(error)
            message.channel.send("Ocurrio un error al ejecutar ese comando")
        }
    },
};
