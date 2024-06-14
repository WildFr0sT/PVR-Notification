const dotenv = require("dotenv");
const fetchAPI = require("./fetchApi");
const { sendSms } = require("./sendText");

const idsToFind = ["28563", "30373", "30393"];

let interval; // To store the interval reference

dotenv.config();
async function main() {
  console.log("starting....");
  let found = false; // Flag to indicate if 'yes' has been found
  try {
    const data = await fetchAPI();
    for (let item of data) {
      for (let i of idsToFind) {
        if (item.id.includes(i)) {
          console.log("yes");
          sendSms(item.name); // Send SMS
          found = true;
          clearInterval(interval); // Clear the interval to stop further calls
          break; // Break the inner loop
        }
      }
      if (found) {
        break; // Break the outer loop
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run the main function immediately
main();

// Set an interval to run the main function every 10 minutes (600000 milliseconds)
interval = setInterval(main, 1800000);
