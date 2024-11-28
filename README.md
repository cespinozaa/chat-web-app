# Chat Web App "Streamline"

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

* Signup: Users are able to create a new account with their name, username, and a password

* Login: Users are able to login once they already have an account

* Logout: Users can quickly logout using a button

* User Authentication & Authorization: Using JWT users are authenticated & authorized for login & messaging
  
* Real-time messaging with Socket.io
 
* Message notifications: The receiving user sees texts pop up, shake, and make a notification sound
   
* Online user status: Using Socket.io & React Context, users can see who is active online in real-time
  
* Search: Users can search for others using a simple search bar

* Global state management with Zustand

* Error handling: both on server & client side


## Videos/Images 🫧


## Learnings 📖

Coming into this project, I had limited knowledge of real-time data transmission, which made this an exciting and challenging learning experience. While I had prior experience building UIs for web apps and working with React, I had to dive deep into using Socket.IO to implement instant messaging and online user status functionality. This taught me how to manage real-time updates efficiently. I also expanded my understanding of authentication and authorization by implementing JWT for secure user sessions, learning how to handle tokens effectively, and guard against common errors. I also used Zustand, a state management library I had never used before, to manage conversations seamlessly throughout the app. Additionally, I explored TailwindCSS, which I found straightforward to integrate, and DaisyUI, which helped me achieve a polished and visually appealing design. This project gave me hands-on experience with new tools and technologies, expanding both my technical and problem-solving skills. Overall, this project strengthened my skills in backend integration and real-time features. 


## How can this project be improved? 🛠️

* **Make the web app responsive for smaller screens**: This web app was created for desktops, but adjusting it for cell phones would be a good idea & would expand the number of potential users

* **Make pop up text notifications**: Currently, users can only see texts when they are on a text thread with the a specific user. It would be beneficial to create pop-up notifications so users get alerted of texts when they are texting others or simply idle.

* **Allow users to upload their own profile picture**: Currently, profile pictures are randomized using an avatar placeholder API available here: <https://avatar-placeholder.iran.liara.run/>

* **Allow users to add a short bio/status**: This would appear under their name. This would be a cool feature to add which allow users to customize their profile & make the web app more unique.

* **Allow for pictures & videos to be sent**: Currently, only texts can be sent through the web app.


## Running The Project 🪄

The website is currently available at: <https://streamline-chat.onrender.com/> or ...

**Setup .env file**
````
PORT=...

MONGO_DB_URI=...

JWT_SECRET=...

NODE_ENV=...
````

**Build the app**

````
npm run build
````

**Start the app**
````
npm start
````
