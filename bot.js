const { GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");

const config = require("./config.json");

const client = new Discord.Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    console.log('mes')
	if (!interaction.isChatInputCommand()) return;
	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Typed: ' + interaction.options.get('input').value);
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'add') {
        await interaction.reply('add');
    }
});

client.login(config.token);
