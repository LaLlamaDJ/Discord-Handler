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
