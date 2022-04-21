# Discord-Handler
El handler de SystemTheCow pero con aliases, event handler y anti-crash. El mejor handler para iniciar a programar un bot de discord!

Primero tienes que hacer en el terminal ``npm i discord.js fs``
Luego tienes que poner tu token en [botconfig.json](./src/public/botconfig.json)

Aqui tienes la base para todos los comandos que quieras hacer:

```js
module.exports = {
    name: '', //El nombre del comando ---- Obligatorio
    aliases: [], //El alias es obligatorio que este en todos los comandos, si no se va a usar se sacan las " ---- Obligatorio
    category: '', //La categoria del comando ---- Opcional
    description: '', //La descripcion del comando ---- Opcional
    usage: '', //Como se usa el comando: Syntax: <> = required, [] = optional ---- Opcional
    userPerms: [""], //Defines los permisos necesarios del usuario ---- Opcional
    clientPerms: [""], //Defines los permisos necesarios del bot ---- Opcional
    toggleOff: false, //Defines si el comando esta deshabilitado o no, default false ---- Optional
    async execute(message, args, MessageEmbed, Util, client){
    },
};
```
Para finalizar hacer tus comandos y disfrutar del handler! <3

# Soporte
Mi user: Matt.7w7#2112
Mi bot: [Click Aqui](https://dsc.gg/sanctuary-bot)
Servidor de soporte: [Beta](https://discord.gg/PqFmHfXans)

# Repositorio original
https://github.com/SystemTheCow/discord-js-v13/tree/Command-y-Event-Handler
