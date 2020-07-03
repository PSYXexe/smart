const CryptoJS = require("crypto-js");
const {MessageAttachment} = require('discord.js')
const db = require("sigidb")
let userID = "";
let guildID = "";
const e = text => {
  if (!text) return;
  return CryptoJS.TripleDES.encrypt(text, "Secret Passphrase");
};
const d = cyphertext => { //lol sypher
  if (!cyphertext) return;
  return CryptoJS.TripleDES.decrypt(cyphertext, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
};
const Discord = require("discord.js");
const {MessageEmbed: embed} = require("discord.js");

const client = new Discord.Client();
let express = require('express');
let app = express();
//let guild = e("727934714974830722");
//let user = e("382572416708116482");
//console.log(`guild: ${guild}\nUser: ${user}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guild}&userID=${user}`}`)



const website = () => {
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {guildID: req.query.guildID,userID: req.query.userID});
});
app.post("/verify", async(req,res) => {
  console.log(req.query)
  const guildID = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID = d(req.query.userID.replace(/ /gi, "+"));
  const guildID1 = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID1 = d(req.query.userID.replace(/ /gi, "+"));
  if(db.fetch(`verified_${guildID1}_${userID1}`)) return res.redirect("/error");
//  var en = CryptoJS.TripleDES.encrypt("382572416708116482", "Secret Passphrase");
//var de = CryptoJS.TripleDES.decrypt(en, "Secret Passphrase").toString(CryptoJS.enc.Utf8);

  console.log(`guild: ${guildID}\nUser: ${userID}\nLink: ${`https://smart-captcha.glitch.me?guildID=${guildID}&userID=${userID}`}`) //what logo should i design for the bot? a cop? a robot? an alien?
  
  await res.redirect(`/verified?guildID=${req.query.guildID.replace(/ /gi, "+")}&userID=${req.query.userID.replace(/ /gi, "+")}`);
})

  
  
  
app.get("/verified", (req,res) => {
  const guildID = d(req.query.guildID.replace(/ /gi, "+")); 
  const userID = d(req.query.userID.replace(/ /gi, "+"));
  client.guilds.cache.get(guildID).members.cache.get(userID).roles.add("728308339058147431");
  db.set(`verified_${guildID}_${userID}`, "verified.");
  res.render("verified", {guild: client.guilds.cache.get(guildID), member: client.guilds.cache.get(guildID).members.cache.get(userID)})
//  alert(d(req.headers.guildID))
})
app.listen(3000, () => console.log('Example app listening on port 4000!'));
};
client.on("ready", () => {
  console.log(`Bot is online`)
website();
});
client.on("message", message => {
  let msg = message;
  if(!msg.content.startsWith('!')) return;
  const cmd = msg.content.split(' ')[0].replace('!', "")
if(message.author.bot) return;
  if(cmd === "create"){
    message.channel.send(`https://smart-captcha.glitch.me/?guildID=${e(message.guild.id)}&userID=${e(message.author.id)}`)
  }

  if(cmd === 'verify') {

async function generate() {
  const am = require("random-animals-apis");

let e = await msg.channel.send(new embed()
.setColor('BLUE')
.setDescription('**Generating CAPTCHA**\nPlease wait. <a:loading:728501325364723733>'))
const Canvas = require('canvas')
const canvas = Canvas.createCanvas(700, 699);
const ctx = canvas.getContext('2d');

    const one = await Canvas.loadImage(await am.getRandomBirdImage());
    // // ctx.drawImage(one, 0, 0, 233, 233);


const two = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(two, 0, 233, 233, 233);

const th = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(th, 0, 466, 233, 233);

const fo = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(fo, 233, 0, 233, 233);

const fi = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(fi, 233, 233, 233, 233);

const six = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(six, 466, 233, 233, 233);

const sev = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(sev, 466, 0, 233, 233);

const eight = await Canvas.loadImage(await am.getRandomBirdImage());
// ctx.drawImage(eight, 233, 466, 233, 233);

const nine = await Canvas.loadImage(await am.getRandomBirdImage());
 //ctx.drawImage(nine, 466, 466, 233, 233);
    const numObj = {
      "1" : "ctx.drawImage(one, 0, 0, 233, 233)",
      "2" : "ctx.drawImage(two, 233, 0, 233, 233)",
      "3" : "ctx.drawImage(th, 466, 0, 233, 233)",
      "4" : "ctx.drawImage(fo, 0, 233, 233, 233)",
      "5" : "ctx.drawImage(fi, 233, 233, 233, 233)",
      "6" : "ctx.drawImage(six, 466, 233, 233, 233)",
      "7" : "ctx.drawImage(sev, 0, 466, 233, 233)",
      "8" : "ctx.drawImage(eight, 233, 466, 233, 233)",
      "9" : "ctx.drawImage(nine, 466, 466, 233, 233)"
    }
    //ctx.drawImage(sev, 0, 466, 233, 233)
                let rights = "";
    let times = Math.floor(Math.random() * Math.floor(3) + 2);
    var i;
    var array = [1,2,3,4,5,6]

    for (i = 0; i < times; i++) {
      const { inspect } = require("util")

      let rand = Math.floor(Math.random() * array.length + 1);;
       console.log(rand) 

      let evaluated = inspect(eval(numObj[rand.toString()], { depth: 0 }));

      console.log("s" , numObj[rand.toString()])
      delete numObj[rand.toString()]
      delete array[rand - 1]
      rights += `&&${rand}`
      
    }
    const collector = message.channel.createMessageCollector(m => m.author == msg.author);
    console.log(rights)
    collector.on('collect', m => {
    if(Array.from(m.content.match(/[0-9]/g)).sort().join('') === rights.split('&&').sort().join('')) {
      m.reply('correct')
    }else{
      m.reply('wrong')
    }
    });
    


const background = await Canvas.loadImage('https://i.imgur.com/kJRwFdg.png')
 ctx.drawImage(background, 0, 0, canvas.height, canvas.width)
  const a = new Discord.MessageAttachment(canvas.toBuffer(), 'captcha.png');
message.channel.send(a).then(await e.delete())

}
generate()

  }
  
})
client.login("NzI4MjgxNTA3MzEwOTkzNDI5.Xv4c1A.1JBIBr_aWcy_OtuTBda-NP1426M")