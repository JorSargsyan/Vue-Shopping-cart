const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
let app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get("/",function(req,res){
   res.sendFile(__dirname + "/" + "index.html") 
})
app.get("/products",function(req,res){
    // res.send('Hello ssss');
    fs.readFile("server-product-data.json", function(err, data) { const cartProducts = JSON.parse(data); 
        res.send(cartProducts);// ...
     });
})

app.get("/cart",function(req,res){
    fs.readFile("server-cart-data.json", function(err, data) { const cartProducts = JSON.parse(data); 
        res.send(cartProducts);// ...
     });
})

app.post("/cart",upload.array(),function(req,res){
  fs.readFile("server-cart-data.json",function(err,data){
      let cartItems = JSON.parse(data);
      let AddedItem = req.body;
        AddedItem.quantity = 1;

        let mustAdd = true;

        for(var i = 0; i < cartItems.length; ++i){
            if(cartItems[i].id == AddedItem.id){
                cartItems[i].quantity++;
                mustAdd = false;
            }
        }

        if(mustAdd){
            cartItems.push(AddedItem);
        }

    
      cartItems = JSON.stringify(cartItems);
      fs.writeFileSync("server-cart-data.json",cartItems);
      res.send(cartItems);
  })
})

app.post("/cart/delete",function(req,res){
    fs.readFile("server-cart-data.json",function(err,data){
        let cartItems = JSON.parse(data);
        let DecreaseQuantityItem = req.body;

        for(var i = 0; i < cartItems.length; ++i){
            if(cartItems[i].id == DecreaseQuantityItem.id){
                if(cartItems[i].quantity > 1){
                    cartItems[i].quantity--;
                }
               else {
                   cartItems.splice(i,1);
               }
            }
        }
        cartItems = JSON.stringify(cartItems);
        // res.send(cartItems);
         fs.writeFile("server-cart-data.json",cartItems);
         res.send(cartItems)
    })
})

app.post("/cart/removeall",function(req,res){
    fs.readFile("server-cart-data.json",function(err,data){
        let cartItems = JSON.parse(data);
        cartItems = [];
        cartItems = JSON.stringify(cartItems);
         fs.writeFile("server-cart-data.json",cartItems);
         res.send(cartItems)
    })
   
})


app.post("/cart/checkout",function(req,res){
    
    res.send("Checkout DONE!!!");
})

app.listen(3000);
