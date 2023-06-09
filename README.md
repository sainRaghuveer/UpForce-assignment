<h1 align="center">UpForce System (MERN)</h1>


<details>
<summary>Backend Docs</summary>

<br>

# UpForce Backend System

## About

<br>

This is a simple application that displays information about users like their name, email, profile, mobile number etc. You can also view particular user's information and also update that and delete that. Also you can change status and pagination also available.

<br>

## Clone Repository

```
https://github.com/sainRaghuveer/UpForce-assignment.git
```

## Installation

```js
Step 1 :  Clone the repository in your local system
Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd backend`
Step 4 :  npm install / npm i
```

## Start the Backend server 

```js
npm run server

npm run start

node index.js

nodemon start

nodemon index.js
```

Note : You can use any of them 

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── user.model.js
├── routes
|    └── user.route.js
|    └── exportCSV.route.js
├── middleware
|    └── 
├──controllers
|    └── user.controller.js
|    └── exportCSV.controller.js
```

Note: 

- Before doing anything first create `.env` file and put `port` , `mongoURl`.
- `port` is for listening the server.
- `mongoURl` is for running database and store your data in database so put your mongo link.

<br>

## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```js
{
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
    },
    status:{
        type:String,
        default:"active"
    },
    profile:{
        type:String,
        default:"https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
    },
    location:{
        type:String,
    }
}
```

<br>

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/user</td>
            <td>This endpoint should allow users to add the data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/page/:page</td>
            <td>This endpoint should allow users to view the data according the page.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to view the single data according to their choice.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to edit own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/user/:id</td>
            <td>This endpoint should allow users to delete own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/export-csv</td>
            <td>This endpoint should allow users to download the content all data</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

<br>


## Backend Deployed Link 

<br>

<a href="https://upforce-backend.onrender.com"><strong>Render</strong></a>

<br>

## Presentation Video Link

<br>

<a href="">UpForce Backend Presentation</a>

</details>

<br>

<details>
<summary>Frontend Docs</summary>

<br>

# UpForce Frontend System

<br>

##  Folder Structure

```
├── public
|    └── favicon.ico
|    └── index.html
|    └── logo192.png
|    └── logo512.png
|    └── manifest.json
├── src
|    └── components
|    |      └── ActionMenu.jsx  
|    |      └── Navbar.jsx  
|    |      └── SingleUserCard.jsx  
|    |      └── Skelton.jsx  
|    |      └── StatusMenu.jsx  
|    |      └── UserCard.jsx  
|    |      └── UserUpdateModal.jsx  
|    └── customHook
|    |      └── UseToast.jsx       
|    └── pages
|    |      └── AddDetails.jsx  
|    |      └── Home.jsx  
|    |      └── SingleView.jsx  
|    └── routes
|    |      └── AllRoutes.jsx  
|    └── styles
|    |      └── AddDetails.css  
|    |      └── Home.css  
|    |      └── Navbar.css  
|    └── App.css
|    └── App.js
|    └── App.test.js
|    └── index.css
|    └── index.js
|    └── logo.svg
|    └── reportWebVital.js
|    └── setupTests.js
├── styles
|    └── index.css
|    └── product.css
```

<br>

Note : `Don't Change any file name or do not delete any files`

<br>

## Installation

```js
Step 1 :  Clone the repository in your local system
Step 2 :  Open terminal `VSCode / GitBash / powershell`
Step 3 :  Type `cd frontend`
Step 4 :  npm install / npm i
```

## Start the Frontend 

```js
npm run start

npm start
```

<br>

Note : `You can use any one of them.`

<br>

## API endpoints with Base Url

<br>

### BaseUrl : `https://upforce-backend.onrender.com`

<br>

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>`${BaseUrl}/api/user`</td>
            <td>This endpoint should allow users to add the data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>`${BaseUrl}/api/user/page/:page`</td>
            <td>This endpoint should allow users to view the data according the page.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>`${BaseUrl}/api/user/:id`</td>
            <td>This endpoint should allow users to view the single data according to their choice.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>`${BaseUrl}/api/user/:id`</td>
            <td>This endpoint should allow users to edit own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>`${BaseUrl}/api/user/:id`</td>
            <td>This endpoint should allow users to delete own data by their id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>`${BaseUrl}/api/export-csv`</td>
            <td>This endpoint should allow users to download the content all data</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

<br>

## Frontend Deployed Link

<br>

<a href="https://upforce-assignment-by-raghuveersain.vercel.app/"><strong>Vercel</strong></a>

<br>

## Presentation Video Link

<br>

<a href="">UpForce Frontend Presentation</a>
    
# ScreenShots

<br>
    
## Home Page
 
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/0a2d3ecc-f877-4c61-8bc1-62a682880bd2" alt="image"/>

<br>
    
##  Status Menu  
    
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/a684bee9-0952-42ce-8fd1-1381aad5b8ac" alt="image"/>

<br>
    
## Action Menu
    
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/a2105b09-195e-4e32-876c-8f326327234e" alt="image"/>

<br>
    
## Single user View   

<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/60f05651-0f7f-4eaa-ada7-ab6c4cc1d54e" alt="image"/>

<br>
    
## Download Csv of User data   
    
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/315f65e3-6967-44c0-b359-7cff5969388f" alt="image"/>
    
## User update   
    
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/a9bead4d-aabd-4ddb-99c8-a37a8926facb" alt="image"/>

<br>
    
## Add new user
    
<img src="https://github.com/sainRaghuveer/UpForce-assignment/assets/112657812/acb93e13-fc82-4dfb-9ad7-5137eb94a4fa" alt="image"/>
    

</details>
