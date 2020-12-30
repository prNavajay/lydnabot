const Discord = require('discord.js');
const config = require('../../configs/config.json');
const superagent = require('superagent');


module.exports = {
    config: {
        name: 'slap',
        description: 'Slaps people',
        aliases: ["slap"],
        usage: '<user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/slap");
              const embed = new Discord.MessageEmbed()
             .setColor(config.embedcolor)
              .setTitle("Slap, 🤪")
          .setDescription(`${victim} Slap ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
          .setFooter(`Lydia™`, "https://telegra.ph/file/c10b721d49aafaa162b35.jpg")
      
               message.channel.send(embed);
    }
}

