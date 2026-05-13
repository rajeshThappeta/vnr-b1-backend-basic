// Create HTTP server
import exp from 'express'
const app=exp()

//assign a port number to server(through whioch it can listen frontend reqs)
app.listen(4000,()=>console.log("server listening on port 4000"))

// localhost:4000/

// Define API(routes - handle reqs)

    //route to handle GET req made by frontend
    app.get('/',(req,res)=>{
        res.json({message:"This res is from GET req handler"})
    })
    
    //route to handle POST req made by frontend
    app.post('/',(req,res)=>{
         res.json({message:"This res is from POST req handler"})
    })

    //route to handle PUT req made by Frontend
    app.put('/',(req,res)=>{
         res.json({message:"This res is from PUT req handler"})
    })
    
    //route to handle DELETE req made by Frontend
    app.delete('/',(req,res)=>{
         res.json({message:"This res is from DELETE req handler"})
    })








