const axios = require("axios");

exports.homeRoutes = (req,res) =>{
    res.render('index', {users: "New Data"});
}


exports.add_user = (req, res) =>{

    // Make a Get request to /api/users
    axios.get('https://localhost:3000/api/users')
    .then(function(response){
      
        res.render('index', {users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })


    res.render('add_user');
}

exports.update_user = (req, res)=>{
    res.render('update_user');
}