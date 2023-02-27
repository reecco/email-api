# Email API

### Built with
- Node.js with TypeScript

<br>

### How to use
Clone the repository on your desktop
````
git clone https://github.com/reecco/email-api.git
````

Enter the folder
````
cd email-api
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
USER_EMAIL= Gmail from send
PASS_EMAIL= Generated pass to your gmail
````
[How generate PASS_EMAIL here](./static/README.md)

### Example


````
TOKEN=eSUnAEaOdRVbJn0Xp2BAPHQu5Q4oCyL9QCp8gxWW2
PORT=3000
USER_EMAIL=contact.tommy@gmail.com
PASS_EMAIL=lrqrayorczvhjmpg
````

<br>

### How to test

To run the project, type in the terminal
````
npm run dev
````

API endpoint
````
/v2/send/email
````


Using JSON format, see below an example of the request body

- Use POST method for sending email

````json
{
  "fromEmail": "fred@hotmail.com",
  "toEmail": "user@user.com",
  "name": "Any User",
  "text": "Any message, lorem ipsum"
}
````

In the authorization header, include the token
````
Bearer -token here-
````
