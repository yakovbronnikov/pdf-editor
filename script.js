import { PDFDocument, rgb } from 'https://cdn.skypack.dev/pdf-lib';
import fontkit from 'https://cdn.skypack.dev/pdf-lib/fontkit';

document.getElementById('generate').addEventListener('click', async () => {
    // Загрузка PDF из публичной папки
    const existingPdfBytes = await fetch('templates/evroins.pdf').then(res => res.arrayBuffer());

    // Загрузка кастомного шрифта
    const fontBytes = await fetch('Verdana-Bold.ttf').then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const verdanaBold = await pdfDoc.embedFont(fontBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    templateIIP(firstPage)

    const pdfBytes = await pdfDoc.save();


    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    document.getElementById('preview').src = url

    // Скачивание
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'output.pdf';
    // a.click();
    // URL.revokeObjectURL(url);
});