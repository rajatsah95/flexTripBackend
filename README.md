# Flex Trip
----------------------
## 1. clone repository in vs code by 'git clone https://github.com/rajatsah95/flexTripBackend.git'
## 2. install dependencies by 'npm i'
## 3. create .env file inside flexTripBackend folder and then add variable 'MONGODB_URL' for mongodb storage, variable 'JWT_SECRET' for json web token and variable PORT for server as key in it.
## 4. run server by 'npm run start'
## 5. use below api for flexTripBackend

# deployed link
## backend - https://flextripbackend.onrender.com/
## frontend - https://sparkling-panda-8894e1.netlify.app/

# github link
## backend - https://github.com/rajatsah95/flexTripBackend
## frontend - https://github.com/rajatsah95/flexTripFrontend

------------
# Auth
------------

# Signup
---------
POST/    https://flextripbackend.onrender.com/auth/signup

body-
{
	"name":"a",
	"email":"a@gmail.com",
	"password":"123"
}

# Login
----------
POST/    https://flextripbackend.onrender.com/auth/login

body-
{
	"email":"a@gmail.com",
	"password":"123"
}

-----------
# Trip Query
-----------

# Create
----------
POST/    https://flextripbackend.onrender.com/trip

body-
{
	"name":"a",
	"email":"a@gmail.com",
	"phone":"0000000000",
	"message":"a"
}

# Update
-----------
PUT/     https://flextripbackend.onrender.com/trip/:id

body-
{
	"name":"a",
	"email":"a@gmail.com",
	"phone":"0000000000",
	"message":"a"
}

path parameter-
id  as  '683803b1aa5bca19b20c67be'

headers-
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# Delete
----------
DELETE/    https://flextripbackend.onrender.com/trip/:id

path parameter-
id  as  '683803b1aa5bca19b20c67be'

headers-
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'

# getAllTrip
--------------
GET/       https://flextripbackend.onrender.com/trip

query parameters-
pageNumber as   '1'
pageSize   as   '10'
name       as   'a'
email      as   'a@gmail.com'

headers-
token as 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzgwMDhiMGQxMmFhM2MxMThhYTAxMyIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJpYXQiOjE3NDg1MDEwMTYsImV4cCI6MTc0ODUwNDYxNn0.4byosUPVdIv9XLUf2bckeI1o-JLVUJlPIuo_QVXFHCM'
