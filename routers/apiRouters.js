var db = require("../models");

 module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll().then(function(db_burger){
                // console.log(db_burger);
                
                var hbsObject = {
                  burger: db_burger
                  };
                  res.render("index", hbsObject);
              })
            });


  app.post("/api/burgers", function(req, res) {
      console.log("Adding Burger routes");
      
    db.Burger.create({
        "burger_name":req.body.name,
        "devoured":"false"}).then(
             function(result) {
                 console.log("success");
                 
                // Send back the ID of the new quote
            // res.json({ id: result.insertId });
            res.send("success")
        })
    
    });

    app.put("/api/burgers/:id", function(req, res) {
       
        db.Burger.update(
        {devoured: true},
        {
        where: {
            id: req.params.id
          }
          
        }
        ).then(() => {
            console.log("Burger updated");
            res.send("sucess");
          });
      });

}

    
