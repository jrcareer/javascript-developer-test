const { httpGet } = require('./mock-http-interface');

const Status = {
  SUCCESS: 200,
  FAILURE: 500
};

const getArnieQuotes = async (urls) => {
  const results = [];

  await Promise.all(urls.map(async url => {
    const response = await httpGet(url);

    const { message } = JSON.parse(response.body)

    if (response.status === Status.SUCCESS) results.push({ 'Arnie Quote': message })

    // For mock purposes, will always be 200 or 500 however README states if it is not 200, not specifically if it is a 500
    else results.push({ FAILURE: message })
  }))

  return results;
};


module.exports = {
  getArnieQuotes,
};
