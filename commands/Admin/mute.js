const discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
 if (message.channel.type == "dm") return message.channel.send(`:x: Dosen\'t work in DMs!`)

        
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command!')
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('Brooo i cant too that cause somebody is messing with MY PERMS!!!!')
    
            const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            if(!Member) return message.channel.send('Member is not found.')
            const role = message.guild.roles.cache.find(role => role.name === 'Mute')
            if(!role) {
                try {
                    message.channel.send('Muted role is not found, attempting to create muted role.')
    
                    let muterole = await message.guild.roles.create({
                        data : {
                            name : 'Mute',
                            permissions: [],
                            color: 'RED'
                        }
                    });
                    message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                        await channel.createOverwrite(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false
                        })
                    });
                    message.channel.send('Muted role has sucessfully been created.')
                } catch (error) {
                    console.log(error)
                }
            };
            let role2 = message.guild.roles.cache.find(r => r.name === 'Mute')
            if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
            await Member.roles.add(role2)
            message.channel.send(`${Member.displayName} is now muted.`)
        }
            module.exports.help = {
                name: 'mute',
                aliases: []
            }
            
