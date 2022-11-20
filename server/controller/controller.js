var Userdb = require('../model/model');
const { use } = require('../routes/router');

// create and save new user
exports.create = (req,res) =>{

    // validate request
    if(req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }


    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in the database
    user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    });

}

// retrieve and return all users / retrieve and return a single user
exports.find = (req, res)=>{
    Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occurred while retrieving user information" })
        })

}

// Update a new identified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id = rew.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.send(data)
        }

    })
    .catch(err=>{
        res.status(500).send({message:"Error Update user information"})
    })


}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{

}