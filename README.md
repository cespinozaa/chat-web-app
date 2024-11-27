# "Streamline" Chat Web App

## Intro ✨

This is a real-time messaging web app. It has instant message delivery and real-time updates. It is available here: <https://streamline-chat.onrender.com/>

## Tech Stack ⚙️

- Vite
- MongoDB
- Express
- React
- Node.js
- JavaScript
- TailwindCSS
- JWT
- Socket.io
- Zustand
- DaisyUI
- React Toastify


## Features ⚗️

1. Signup: Users are able to create a new account with their name, username, and a password

2. Login: Users are able to login once they already have an account

3. Logout: Users can quickly logout using a button

4. User Authentication & Authorization: Using JWT users are authenticated & authorized for login & messaging
  
5. Real-time messaging with Socket.io
 
6. Message notifications: The receiving user sees texts pop up, shake, and make a notification sound
   
7. Online user status: Using Socket.io & React Context, users can see who is active online in real-time
  
8. Search: Users can search for others using a simple search bar

9. Global state management with Zustand

10. Error handling: both on server & client side


## Process 🫧



## Learnings 📖



## How can this project be improved? 🛠️

* **Make the web app responsive for smaller screens**: This web app was created for desktops, but adjusting it for cell phones would be a good idea & would expand the number of potential users

* **Make pop up text notifications**: Currently, users can only see texts when they are on a text thread with the a specific user. It would be beneficial to create pop-up notifications so users get alerted of texts when they are texting others or simply idle.

* **Allow users to upload their own profile picture**: Currently, profile pictures are randomized using an avatar placeholder API available here: <https://avatar-placeholder.iran.liara.run/>

* **Allow users to add a short bio/status**: This would appear under their name. This would be a cool feature to add which allow users to customize their profile & make the web app more unique.

* **Allow for pictures & videos to be sent**: Currently, only texts can be sent through the web app.


## Running The Project 🪄

The website is currently available at: <https://streamline-chat.onrender.com/> or ...

**Setup .env file**

PORT=...

MONGO_DB_URI=...

JWT_SECRET=...

NODE_ENV=...

**Build the app**

npm run build

**Start the app**

npm start
