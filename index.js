const { Client, Events, GatewayIntentBits } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.dotenv

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, c => {
    // console.log(`Ready! Logged in as ${c.user.tag}`);
    // console.log(`F-R-I-D-A-Y is Online. \nChecando dados iniciais: \nNúmero de usuários = ${client.users.size} \nNúmero de canais = ${client.channels.size} \nNúmero de servidores = ${client.guilds.size}`)
    console.log(`PRONTO! Teoricamente era pra funcionar...`);
})

client.login(TOKEN)