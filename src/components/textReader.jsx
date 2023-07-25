// import React, { useState } from 'react';
// import { createWorker } from 'tesseract.js';

// function PdfOcrReader() {
//   const [file, setFile] = useState(null);
//   const [text, setText] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };

//   const readPdfWithOcr = async () => {
//     if (!file) {
//       console.log('No file selected');
//       return;
//     }

//     const worker = createWorker();
//     await worker.load();
//     await worker.loadLanguage('eng');
//     await worker.initialize('eng');
//     const { data } = await worker.recognize(file);
//     setText(data.text);
//     await worker.terminate();
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={readPdfWithOcr}>Read with OCR</button>
//       <pre>{text}</pre>
//     </div>
//   );
// }

// export default PdfOcrReader;


// // const pdfjs = require("pdfjs-dist/es5/build/pdf")
// // async function getContent(src){
// //   const doc = await pdfjs.getDocument(src).promise
// //   const page = await doc.getPage(1)
// //   return await page.getTextContent()
// // }
// // async function getItems(src)
// // {
// //   const content =  await getContent(src)
// //   const items  = content.items.map((item)=>{
// //     console.log(item.str)
// //   })
// //   return items
// // }
// // getItems 