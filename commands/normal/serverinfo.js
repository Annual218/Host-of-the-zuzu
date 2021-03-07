const discord = require('discord.js');
const moment = require(`moment`)


// setting all the verification levels to a nice look
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGHT: 'Very High'
}


// setting the regions to a nice look
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
}

module.exports.run = async (Client, message, args, prefix) => {
    
    // getting all the roles of the server
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)

    // getting the total members of the server
    const members = message.guild.members.cache;
    
    // getting the total channels of the server
    const channels = message.guild.channels.cache;
    
    // getting the total emojis of the server
    const emojis = message.guild.emojis.cache

    
    let rolesdisplay;

    // if the length is lower then 20, display all roles
    if(roles.length < 20) {
        rolesdisplay = roles.join(' ')
    } else {
    
        // if length of roles is higher then 20, only display 20 roles
        rolesdisplay = roles.slice(20).join(' ')
    }

    // setting so you can type guild insteed of message.guild
    const { guild } = message
    
    // setting so you can type name, region, memberCount or owner insteed of guild.name
    const { name, region, memberCount, owner } = guild
    
    // getting the server his profile
    const icon = guild.iconURL()

    // making the embed
    var serverEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    
    // setting the title of the embed
    .setTitle(`Server info of ${name}`)
    
    // setting the image in the embed of the server his profile
    .setImage(message.guild.iconURL())
    
    // adding a field with the general info
    .addField(`General`, [
        `**Name:** ${name}`,
        `**ID:** ${message.guild.id}`,
        `**Owner:** ${message.guild.owner.user.tag}`,
        `**Region:** ${regions[message.guild.region]}`,
        `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
        `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
        `**Boost Level:** ${message.guild.premiumSubscriptionCount || '0'}`,
        `**Created At:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
        '\u200b'
    ])
    
    // adding a field with the stats info
    .addField('Stats', [
        `**Role Count:** ${roles.length}`,
        `**Emoji Count:** ${emojis.size}`,
        `**Normal Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
        `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Member Count:** ${message.guild.memberCount}`,
        `**Humans:** ${members.filter(member => !member.user.bot).size}`,
        `**Bots:** ${members.filter(member => member.user.bot).size}`,
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
        `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        '\u200b'
    ])
    
    // adding a field what displays all the roles
    
    
    // sending the embed
    message.channel.send(serverEmbed)
}
module.exports.help = {
    name: "serverinfo",
    aliases: ['server', 'server-info']
}