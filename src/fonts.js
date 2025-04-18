export async function loadFonts(pdfDoc) {
    const verdanaBoldBytes = await fetch('fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
    const verdanaBold = await pdfDoc.embedFont(verdanaBoldBytes)

    const golosTextBytes = await fetch('fonts/GolosText-Regular.ttf').then(res => res.arrayBuffer())
    const golosText = await pdfDoc.embedFont(golosTextBytes)
    const golosTextMediumBytes = await fetch('fonts/GolosText-Medium.ttf').then(res => res.arrayBuffer())
    const golosTextMedium = await pdfDoc.embedFont(golosTextMediumBytes)

    const robotoRegularBytes = await fetch('fonts/Roboto-Regular.ttf').then(res => res.arrayBuffer())
    const robotoRegular = await pdfDoc.embedFont(robotoRegularBytes)
    const robotoBoldBytes = await fetch('fonts/Roboto-Bold.ttf').then(res => res.arrayBuffer())
    const robotoBold = await pdfDoc.embedFont(robotoBoldBytes)

    const Brygada1918Bytes = await fetch('fonts/Brygada1918-MediumItalic.ttf').then(res => res.arrayBuffer())
    const Brygada1918 = await pdfDoc.embedFont(Brygada1918Bytes)

    const notoSerifBytes = await fetch('fonts/NotoSerif-Regular.ttf').then(res => res.arrayBuffer())
    const notoSerif = await pdfDoc.embedFont(notoSerifBytes)

    return {
        verdanaBold,
        golosText,
        golosTextMedium,
        robotoRegular,
        robotoBold,
        Brygada1918,
        notoSerif,
        default: robotoRegular
    }
}
