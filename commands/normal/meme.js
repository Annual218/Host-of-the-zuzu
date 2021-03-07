const fetch = require('node-fetch');
// If you don't have installed 'fetch', type npm i node-fetch in your terminal
const discord = require('discord.js');
module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;
    fetch('https://meme-api.herokuapp.com/gimme') // Fetchs the meme
            .then(res => res.json()) 
            .then(json => {
                const memeEmbed = new discord.MessageEmbed() // Defines the embed
                 .setTitle(json.title)
                 .setImage(json.url)
                 .setColor ("<Any hex code>")
                message.channel.send(memeEmbed); // Send the embed
        });
}
module.exports.help = {
    name: "meme",
    aliases: ['']
}