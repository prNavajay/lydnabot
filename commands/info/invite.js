const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Lydia Bot Project** \n\n**👋 I Am Lydia\n Do you want Invite me? [Click here](https://discord.com/api/oauth2/authorize?client_id=793456777613410314&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .setTimestamp()
    .setFooter(
      "Lydia™",
      "https://telegra.ph/file/c10b721d49aafaa162b35.jpg"
    )
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

