## Email API

<br>

### Built with
- Node.js

<br>

### How to use
Clone the repository on your desktop
````
git clone https://github.com/reecco/api-email.git
````

Enter the folder
````
cd api-email
````
Install dependencies
````
npm install
````
<br>

### How generate Gmail password
#### [Access here](./static/README.md)

<br>

Create a .env file and save this environment variables
````
TOKEN= Create a any token
PORT=3000
TO_EMAIL= Email to send
USERNAME_EMAIL= Username Gmail
FROM_EMAIL= Gmail from send
PASS_EMAIL= Generated pass to your gmail
````
[How generate PASS_EMAIL here](./static/README.md)

<br>

### How to test

To run the project, type in the terminal
````
npm start
````

You can test using Insomnia or Postman

Using JSON format, see below an example of the request body

````json
{
  "token": "Your token here",
  "fromEmail": "User email here",
  "name": "User name here",
  "text": "Message here"
}
````