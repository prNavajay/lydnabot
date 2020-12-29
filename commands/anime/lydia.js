const Discord = require('discord.js');
const config = require('../../configs/config.json');
const superagent = require('superagent');


module.exports = {
    config: {
        name: 'lydia',
        description: 'Anime wallpaper  people',
        aliases: ["lydia"],
        usage: '<user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/wallpaper");
              const embed = new Discord.MessageEmbed()
             .setColor(config.embedcolor)
              .setTitle("Here's your lydia, 👀")
          .setDescription(`${victim} lydia ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
          .setFooter(`Lydia™`)
      
               message.channel.send(embed);
    }
}

