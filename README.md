# Email API

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

### Example


````
TOKEN=eSUnAEaOdRVbJn0Xp2BAPHQu5Q4oCyL9QCp8gxWW2
PORT=3000
TO_EMAIL=any.user@user.com
USERNAME_EMAIL=Contact Tommy
FROM_EMAIL=contact.tommy@gmail.com
PASS_EMAIL=lrqrayorczvhjmpg
````

<br>

### How to test

To run the project, type in the terminal
````
npm start
````

You can test using Insomnia or Postman

Using JSON format, see below an example of the request body

- Use POST method for sending email

````json
{
  "token": "eSUnAEaOdRVbJn0Xp2BAPHQu5Q4oCyL9QCp8gxWW2",
  "fromEmail": "fred@hotmail.com",
  "name": "Any User",
  "text": "Any message, lorem ipsum"
}
````