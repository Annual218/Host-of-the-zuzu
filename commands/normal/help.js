const Discord = require('discord.js');
const Client = new Discord.Client(); // creating a new Client

module.exports.run = async (Client, message, args, prefix) => { // for the cmd handler 

    if(!message.content.startsWith(prefix)) return;
const embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('___***Available Command For Members***___\n\n__**covid**__\n>This Command is used to get covid cases in any country.\n***example:*** =covid {country}\n\n__**avatar**__\n>This Command is used to show someone profile picture.\n***example:*** =avatar {@user}\n\n__**serverinfo**__\n>This Command is used to know how many members and how many are online in the server\n***example:*** =server__\n\n__**botinfo**__\n>This Command is used to get the info about the bot.\n***example:*** =botinfo. Still updating help commmands!\n\n_')
            
            .addFields({ name: 'Prefix', value: '=', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

module.exports.help = {
    name: "help", // name of the cmd
    aliases: [] // another names for the cmd
}