import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
const cloudinary = require('cloudinary');

/**
 * See https://michaelheap.com/netlify-function-lambda-return-image/
 * for more information on how to return an image from a Netlify function.
 */

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const handlerFn: Handler = async (event, context) => {
  console.log(event);
  const { name, role, company } = event.queryStringParameters as {
    name: string;
    role?: string;
    company?: string;
  };

  const image = await cloudinary.url('ondemand-badge/summit-badge.png', {
    transformation: [
      {
        width: 369,
        height: 758,
      },
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 16,
          font_weight: 'bold',
          text: name,
        },
        gravity: 'north_west',
        color: 'black',
        x: 52,
        y: 423,
      },
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 16,
          font_weight: 'regular',
          text: role || ' ',
        },
        gravity: 'north_west',
        color: 'black',
        x: 52,
        y: 468,
      },
      {
        overlay: {
          font_family: 'Montserrat',
          font_size: 16,
          font_weight: 'regular',
          text: company || ' ',
        },
        gravity: 'north_west',
        color: 'black',
        x: 52,
        y: 495,
      },
    ],
  });

  const response = await fetch(image).then((res) => res.arrayBuffer());
  const imageBuffer = Buffer.from(response);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': `filename="image-builder.png"`,
      'Access-Control-Allow-Origin': '*',
    },
    body: imageBuffer.toString('base64'),
    isBase64Encoded: true,
  };
};

// exports.handler = builder(handlerFn);
exports.handler = handlerFn;
