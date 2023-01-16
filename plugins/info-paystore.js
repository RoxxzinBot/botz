let handler = async (m, { conn }) => {
	//-----PRICE
//vip
let pn = '15'
//premium
let sh = '20'
let info = `
Silahkan Pilih List Menu Order Nya Kak><
*⫹⫺ PAYMENT:*
• *Pulsa Telkomsel:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Ovo:* [${povo}]

–––––– *🍀 Kebijakan* ––––––
🤖: Owner Hanya Melayani Order Vip/Prem 1 Bulan Saja, Selebihnya Tidak Melayani 2-3 blnan.
🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `VIP`,
	rows: [
	    {title: "🔖 Vip Standar", rowId: '.order bang saya mau order *Paket:* STANDAR • Vip', description: 'PRICE: ' + pn + 'k /bulan' },
	]
    }, {
    title: `PREMIUM`,
	rows: [
	    {title: "🌟 Premium Standar", rowId: '.order bang saya mau order *Paket:* STANDAR • Premium', description: 'PRICE: ' + sh + 'k /bulan' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['ovip', 'premium']
handler.tags = ['main']
handler.command = /^(ovip)$/i

export default handler
