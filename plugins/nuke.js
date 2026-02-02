// REAL NUKE FULL - ENDY REGNA x OBSIDIAN 💣

let handler = async (m, { conn, command, args }) => {
    if (command !== '#ENDYREGNA') return;
    if ((args[0] || '').toLowerCase() !== 'full') return;

    try {
        // METADATA
        const metadata = await conn.groupMetadata(m.chat);
        const originalName = metadata.subject;

        // 1) CAMBIA NOME GRUPPO
        await conn.groupUpdateSubject(
            m.chat,
            `${originalName} | nukked by obsidian`
        );

        // 2) CAMBIA DESCRIZIONE
        await conn.groupUpdateDescription(
            m.chat,
            'Endy Regna'
        );

        // 3) MESSAGGIO TAGGATO
        await conn.sendMessage(m.chat, {
            text: `👑 @${m.sender.split('@')[0]}\n\nQuesto è *https://chat.whatsapp.com/L91xjOCp1y6KhRPi8Zq8tl?mode=gi_t CI TRASFERIAMO QUA*.\n\n🔥 *ENDY REGNA*`,
            mentions: [m.sender]
        });

        // 4) CHIUDE GRUPPO
        await conn.groupSettingUpdate(m.chat, 'announcement');

        // 5) RIMUOVE TUTTI (ADMIN COMPRESI)
        const participants = metadata.participants
            .map(p => p.id)
            .filter(id => id !== conn.user.id);

        if (participants.length) {
            await conn.groupParticipantsUpdate(
                m.chat,
                participants,
                'remove'
            );
        }

        m.react('ENDY DOMINA ANCHE STO GRUPPO💣');
    } catch (e) {
        console.error(e);
    }
};

handler.help = ['#ENDYREGNA full'];
handler.tags = ['gruppo'];
handler.command = ['#ENDYREGNA'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;