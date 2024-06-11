const axios = require("axios");

const fetchAPI = async () => {
  const axios = require("axios");
  let data = JSON.stringify({
    city: "Trivandrum",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api3.pvrcinemas.com/api/v1/booking/content/nowshowing",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      appversion: "1.0",
      "cache-control": "no-cache",
      chain: "PVR",
      city: "Trivandrum",
      "content-type": "application/json",
      country: "INDIA",
      origin: "https://www.pvrcinemas.com",
      platform: "WEBSITE",
      pragma: "no-cache",
      priority: "u=1, i",
      referer: "https://www.pvrcinemas.com/",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    },
    data: data,
  };

  const response = await axios.request(config);
  let outputData = response.data.output.mv;
  outputData = outputData.map((item) => {
    return { id: item.filmIds, name: item.filmName };
  });
  return outputData;
};
module.exports = fetchAPI;
