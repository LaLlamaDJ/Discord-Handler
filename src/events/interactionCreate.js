const Discord = require("discord.js")

module.exports = {
    name: 'interactionCreate',
    once: true,
    async execute(interaction, client){
        if(interaction.isCommand()){
            const command = client.slash.get(interaction.commandName.toLowerCase())
            if(!command) return interaction.reply({ content: `${interaction.commandName.toLowerCase()} no es un comando valido!`})
            try {
                command.execute(Discord, client, interaction)
            } catch(error) {
                console.log(error)
                interaction.reply({ content: `Ocurrio un error al ejecutar ese comando` })
            }
        }
    },
};
