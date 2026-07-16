## Steps to create Backend 

1. Generate package.json file
        npm init -y
        -> Node Package Manager tool to install Node modules


         Flow:       
           req  -->   HTTP server --> API routes -->Send res

2. Create HTTP server
        - install and import express module
        - Create http server


3. Define API (routes)

        Frontend                                        Backend
                ------HTTP GET(read resources)  --------->
                ------HTTP POST(create new resource)----->
                ------HTTP PUT(update a resource)-------->
                ------HTTP DELETE( delete a resource)---->

                             CRUD operations













        # How to use Node.js modules
            a. Install a nodejs module
                    npm install modeule-name
            b. Import and use
                    import ... from 'path of module'











15-7-26
-------
 Test API with Postman
 Adding local state to API
 Middlewares




















 JS ----->Browser(JS runtime)
    ----->Node.js(JS runtime) + Ecosystem(Library)







# USER API

        READ ALL USERS(GET)       GET http://localhost:4000/users
        READ A USER BY ID(GET)    GET http://localhost:4000/users/id

        CREATE NEW USER(POST)     POST http://localhost:4000/users

        UPDATE A USER BY ID(PUT)  PUT http://localhost:4000/users/id

        DELETE A USER BY ID(DELETE)  DELETE  http://localhost:4000/users/id