// guild role color: // .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
// message author role color: //.setColor(`${message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor}`)
// ​
const Discord = require("discord.js");
const reddit = require("random-puppy");

exports.run = async (client,message,args,config,dir) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  const guildColor = message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor
  const userColor = message.member.displayHexColor!=='#000000' ? message.member.displayHexColor : config.eColor
  reddit('cleanloli')
  .then(url => {
    message.channel.send({embed: new Discord.RichEmbed()
                          .setAuthor(`This are LEGAL, ${message.author.tag}!`, message.author.avatarURL)
                          .setImage(url)
                          .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
                          .setTimestamp(new Date())
                         })
  })
  
}