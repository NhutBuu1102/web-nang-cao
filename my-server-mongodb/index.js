const express = require('express');
const app = express();
const port = 4000;

const morgan=require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));
app.use(express.json());

const cors=require("cors");
app.use(cors())

app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("This Web server is processed for MongoDB")
})

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("Products");
productCollection = database.collection("Products");


app.get("/products",cors(),async (req,res)=>{
    const result = await productCollection.find({}).toArray();
    res.send(result)
})

// app.get("/products/:id",cors(),async (req,res)=>{
//     var o_id = new ObjectId(req.params["id"]);
//     const result = await productCollection.find({_id:o_id}).toArray();
//     res.send(result[0])
// })

app.get("/products/:category",cors(), async (req,res)=>{
    const result = await productCollection.find({category}).toArray()
    res.send(result)
})

app.get("/products/cakes",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Bánh"}).toArray()
    res.send(result)
})

app.get("/products/candy",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Kẹo"}).toArray()
    res.send(result)
})

app.get("/products/freshwater",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Nước ngọt"}).toArray()
    res.send(result)
})

app.get("/products/snack",cors(), async (req,res)=>{
    const result = await productCollection.find({category:"Snack"}).toArray()
    res.send(result)
})

app.post("/products",cors(),async(req,res)=>{
    const data = req.body;
    console.log(`run add product\n${data.title}`);
    console.log(`run add product\n${data.category}`);
    console.log(`run add product\n${data.brand}`);
    console.log(`run add product\n${data.price}`);
    console.log(`run add product\n${data.image}`);
    console.log(`run add product\n${data.description}`);
    await productCollection.insertOne(req.body)
    res.send(true)
})

// app.put("/products", cors(), async(req,res)=>{
//     // update json product into database
//     await productCollection.updateOne(
//         {_id:new ObjectId(req.body._id)}, //condition for update
//         {$set: {//Field for updating
//             style: req.body.style,
//             product_subject: req.body.product_subject,
//             product_detail: req.body.product_detail,
//             product_image: req.body.product_image
//         }}
//     )
//     var o_id = new ObjectId(req.body._id);
//     const reuslt = await productCollection.find({_id:o_id}).toArray();
//     res.send(result[0])
// })


app.delete("/products/:id", cors(), async(req,res)=>{
    const product = await productCollection.findByIdAndRemove(req.params.id).toArray();
    if (!product) return res.status(404).send('Product not found');
    res.send(product)
})

// var cookieParser = require('cookie-parser');
// app.use(cookieParser());

// app.get("/create-cookie", cors(), (req,res)=>{
//     res.cookie("username","lynhutbuu")
//     res.cookie("password","291101")
//     account={"username":"lynhutbuu",
//             "password":"291101"}
//     res.cookie("account", account)
//     // Expires after 360000 ms from the time it is set
//     res.cookie("infor_limit1", "I am limited Cookie - way 1", {expire: 360000 + Date.now()})
//     res.cookie("infor_limit2", "I am limited Cookie - way 2"), {maxAge: 360000};
//     res.send("cookies are created")
// })

// app.get("/read-cookie", cors(), (req, res)=>{
//     // cookie is stored in client, so we use req
//     username=req.cookies.username
//     password=req.cookies.password
//     account=req.cookies.account
//     infor="username = "+username+"<br/>"
//     infor+="password = "+password +"<br/>"
//     if (account != null)
//     {
//         infor+="account.username = "+account.username+"<br/>"
//         infor+="account.password = "+account.password +"<br/>"
//     }
//     res.send(infor)
// })

// app.get("/clear-cookie", cors(),(req,res)=>{
//     res.clearCoooki("account")
//     res.send("[account] Cookie is remove")
// })

// var session = require('express-session');
// const {hasSubcribers} = require('diagnostics_channel');
// app.use(session({secret:"Shh, it's a secret!"}));
// app.get("/contact", cors(),(req, res)=>{
//     if(req.session.visited!=null)
//     {
//         req.session.visited++
//         res.send("You visited this page" +req.session.visited +" times")
//     }
//     else
//     {
//         req.session.visited=1
//         res.send("Welcome to this page for the first time")
//     }
// })


// app.post("/cart", cors(), (req,res)=>{
//     product = req.body
//     if(req.session.carts==null)
//         req.session.carts=[]
//         req.session.carts.push(product)
//         res.send(product)
// })

// app.get("/cart", cors(), (req,res)=>{
//     if(req.session.carts!=null){
//         p=req.session.carts.find(x=>x.barcode==req.body.barcode)
//         res.send(p)
//     }
//     else
//         res.send(null)
// })

// app.delete("/cart/:id", cors(), (req,res)=>{
//     if(req.session.carts!=null)
//     {
//         id = req.params["id"]
//         req.session.carts = req.session.carts.filter(x => x.barcode !== id);
//     }
//     res.send(req.session.carts)
// })

// app.put("/carts", cors(), (req,res)=>{
//     if(req.session.carts!=null)
//     {
//         p=req.session.carts.find(x => x.barcode==req.body.barcode)
//         if (p!=null)
//         {
//             p.quantity=req.body.quantity
//         }
//     }
//     res.send(req.session.carts)
// })