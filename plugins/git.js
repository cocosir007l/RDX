const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://imgur.com/a/ag1k15Z", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `RDX BOT CREATED BY ABHIRAM SACHU 

💕CREATOR NUMBER : wa.me/919072460920

💖WEBSITE LINK : https://bit.ly/3rnlWcu

💖GIT LINK : https://github.com/cocosir007l/RDX

💓 GROUP LINK : https://bit.ly/3Heg6PY

💓 AND THANKS TO MY  COLLABORATORS 🥰

💖THANKS TO SUPPORT 😊🥰

💖ᴄͥᴏͭᴄᷤᴏ sͫᴇͤʀ  ͢  ᴍᴏᴅs💓
`}) 

}));
