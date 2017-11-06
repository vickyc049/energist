var User = require('../models/user.model')

_this = this


exports.getUsers = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var users = await User.paginate(query, options)
        return users;
    } catch (e) {
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function(user){

    var newUser = new User({
        title: user.title,
        description: user.description,
        date: new Date(),
        status: user.status
    })

    try{
        var savedUser = await newUser.save()
        return savedUser;
    }catch(e){
        throw Error("Error while Creating User");
    }
}

exports.updateUser = async function(user){
    var id = user.id

    try{
        var oldUser = await User.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the user");
    }

    if(!oldUser){
        return false;
    }

    console.log(oldUser)

    oldUser.title = user.title
    oldUser.description = user.description
    oldUser.status = user.status


    console.log(oldUser)

    try{
        var savedUser = await oldUser.save()
        return savedUser;
    }catch(e){
        throw Error("And Error occured while updating the user");
    }
}

exports.deleteUser = async function(id){
    
    try{
        var deleted = await User.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("user Could not be deleted");
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the user");
    }
}