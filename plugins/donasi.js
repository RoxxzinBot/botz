import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 8 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
┏━✧〔 *Donasi • Dana* 〕✧━⬣
┃✦ Pulsa  [087753812675]
┃✦ Dana  [087753812675]
┃✦ Saweria  [-]
┃✦ *Gopay Scan Qr Diatas Ya><*
┗━━━━✧
┏━━✧〔 *NOTE* 〕✧━⬣
┃ *Jangan Lupa Kirim Bukti Pembayaran Donasi Ke Owner Yah*
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *RDP/VPS* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┃ _Kalo Donasi Namamu Akan Terpajang diDonation Ranked_
┗━━━━✧
`.trim(), wm, qr, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
