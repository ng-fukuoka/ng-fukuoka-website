const fetch = require('node-fetch');

const API_ENDPOINT =
  'https://connpass.com/api/v1/event?series_id=3886&count=100';

exports.handler = async (event, context) => {
  let response;
  try {
    response = await fetch(API_ENDPOINT).then((res) => res.json());
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    },
    body: JSON.stringify({
      data: response,
    }),
  };
};
