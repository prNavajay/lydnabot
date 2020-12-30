const Discord = require('discord.js');
const config = require('../../configs/config.json');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
    config: {
        name: 'uptime',
        description: 'Shows bot uptime',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
        const prefix = config.prefix
        if (!message.content.startsWith(prefix)) return;

        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle("Lydia Bot")
        .setColor(config.embedcolor)
        .setDescription(`<a:pyramid:793456777613410314> **Lydia has been active for** \`${uptime}\`. \n <a:pyramid:793456777613410314> **The ping is currently** \`${bot.ws.ping} ms\`. \n\n  ❗  **__Attention!__** **Lydia is restarting himself after \`10 to 15 hours\` for a good quality and lagless sound!**`)
        .setTimestamp()
        .setThumbnail(bicon);
 message.react ('793456777613410314')
    message.channel.send(botembed);
    }
}
