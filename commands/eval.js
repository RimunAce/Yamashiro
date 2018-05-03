const Discord = require("discord.js");
const sm = require("string-similarity");
let eColor = 0xffff00

exports.run = (client, message, args, config, dir) => {
  if(message.channel.type !== "text") return;
  if(message.author.id !== "152762077038116864") return message.channel.send(`:no_bicycles: **|** No Access to Execute Command`).thenthen(m => m.delete(10000))
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
  let member = message.guild.members.get(indexes[members.indexOf(username)]);
  
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  try {
      const code = args.slice(0).join(" ");
      let evaled = eval(code);

    
    if(!code) return message.channel.send("This command does nothing. I'm serious!");
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send({embed: new Discord.RichEmbed()
                            .setAuthor(message.author.tag, message.guild.iconURL)
                            .setDescription(`
:inbox_tray: **Input**
\`\`\`js
${code}
\`\`\`
:outbox_tray: **Output**
\`\`\`
${clean(evaled).replace(client.token, "The token is: Get yourself a token at discordapp.com")}
\`\`\`
:paperclip: **Type**
\`\`\`
${typeof code}
\`\`\``)
                            .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
                           }), {code:"xl"};
    } catch (err) {
      message.channel.send({embed: new Discord.RichEmbed()
                            .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.eColor}`)
                            .setDescription(`
:interrobang: :interrobang: :interrobang:  **ERROR!** :interrobang: :interrobang: :interrobang: 
\`\`\`js
${clean(err)}
\`\`\``)
                            
                           })
    }

}  