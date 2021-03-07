const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => { 
    if(!message.content.startsWith(prefix)) return;
       if (message.channel.type == "dm") return message.channel.send(`:x: Dosen\'t work in DMs!`)


        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command!')
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('Brooo i cant too that cause somebody is messing with MY PERMS!!!!')


        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Hmm Can´t find that guy')

        const role = message.guild.roles.cache.find(r => r.name === 'Mute');

        if (!role) return message.channel.send(`You need the mute role to mute. Do \`\`r!mute @member\`\` to get started!`)


        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted!`)
}
module.exports.help = {
    name: 'unmute',
    aliases: []
}
