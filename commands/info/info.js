const mapping = {
    " ": "  ",
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "!": "!",
    "?": "?",
    "#": "#",
    "*": "*"
  };
  const Discord = require('discord.js');
  const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'botinfo',
        description: 'Information about bot',
        aliases: ["info"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
          });
            let guilds;
            let channels;
            let users;
          setTimeout(()=>{
            guilds = 
                `${client.guilds.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            channels = 
                `${client.channels.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            let sayy = 0;
            client.guilds.cache.forEach(x =>{
               
               sayy+= x.memberCount
               
             })
             users = 
                
                
                 
                 `${sayy}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
          
             },200)
            //let kullanicisayi = donustur()
          setTimeout(()=>{
            const embed = new Discord.MessageEmbed()
            .setImage("https://telegra.ph/file/b2be44a2104a780eaf47a.jpg")
          .setThumbnail(client.user.avatarURL())
          .setDescription("**Lydia Bot Project.**"+"\n\n <a:pyramid:793456777613410314> **Number of servers serviced :** " + guilds +
          "\n <a:pyramid:793456777613410314> **Number of channels served : ** " + channels +
          "\n <a:pyramid:793456777613410314> **Number of users served : ** " + users +
          "\n\n<:discordbotdev:786577330516000768> **Developers:** \n <@786577330516000768>")
          .setTimestamp()
          .setFooter('Lydia™', 'https://telegra.ph/file/c10b721d49aafaa162b35.jpg')
          .setColor(config.embedcolor);
           message.react ('793456777613410314')
          message.channel.send(embed)
                     },500)
    }
}

