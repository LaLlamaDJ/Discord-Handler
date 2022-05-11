module.exports.slash = function (fs, client, Collection, Discord) {
    client.slash = new Collection();
    client.array = []
    const commandFolder = fs.readdirSync(__dirname + "/" + `../../slash`);
    for (const folder of commandFolder) {
      const commandFile = fs.readdirSync(__dirname + "/" + `../../slash/${folder}`);
      for (const file of commandFile) {
        const command = require(__dirname + "/" + `../../slash/${folder}/${file}`);
        client.slash.set(command.name, command)//establecemos por objeto el nombre del comando y el archivo  
        const data = {//se crea un objeto recolectando todos los datos del comando
           name: command.name,
           description: command.description,
           options: command.options ? command.options : [],
           type: 1
        }
        client.array.push(data)
      }
    }
  };
