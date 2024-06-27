**This project is designed to fetch movie data from an API and send an SMS notification when specific movies are found. It uses Node.js and Axios for API requests and Fast2SMS for sending SMS notifications.**
# PVR-Notification

This project is designed to fetch movie data from an API and send an SMS notification when specific movies are found. It uses Node.js and Axios for API requests and Fast2SMS for sending SMS notifications.
## Features

- Fetches movie data from the PVR Cinemas API.
- Searches for specific movie IDs in the fetched data.
- Sends an SMS notification if a specified movie ID is found.



## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/movie-notification-system.git
cd movie-notification-system
```
Install the required dependencies:

```bash
npm install
```
Create a .env file in the root directory and add your Fast2SMS API token and phone number:

```bash
SMS_TOKEN=your_fast2sms_token
PHONE=your_phone_number
```





    
## Usage/Examples

1. Start the script:

```
node index.js
```

2. The script will run immediately and then repeat every 30 minutes, fetching movie data and checking for the specified IDs. If a match is found, an SMS notification will be sent.


