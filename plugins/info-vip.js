import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let inponya = `*List Harga*
  Premium: 15k/bulan
  Group VIP:20k/bulan
  
  *Pembayaran:*
  Gopay Only!
  *Gopay:* 62xxxx
  
  *Catatan:*
  _-Premium Untuk Pribadi, Vip Untuk Grup_
  _-Lakukan Konfirmasi Pembayaran Ke Owner_
  _-Harga +5k Jika Pembayaran Via Pulsa_`
 await conn.sendButton(m.chat, inponya,wmvip + '\n\n' + botdate, qr, [['Cara Pemesanan','.pesen'],['JadiBot','.jadibot'],['Berlangganan VIP!','.ovip']], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Subscribe YT My Bestie`,                                       previewType: 0,
                        thumbnail: await (await fetch(`${logotime}`)).buffer(),
                        sourceUrl: 'https://youtu.be/hklv-Ysqqac'
            }
        }
    })
}


handler.help = ['vip']
handler.tags = ['info']
handler.command = ['vip', 'vip']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
