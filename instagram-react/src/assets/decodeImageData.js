
import { Buffer } from 'buffer';

const decodeImageData = (imageData) => {
   const buffer = Buffer.from(imageData.data);
   const binary = buffer.toString("base64");
   const mimeType = "image/jpeg";
   const dataUrl = `data:${mimeType};base64,${binary}`;
   return dataUrl;
};

export default decodeImageData