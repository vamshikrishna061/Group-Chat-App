const Chat = require('../models/chat');
const jwt = require('jsonwebtoken');


exports.getMessage = async (req,res,next)=>{
    try{
    const {id, name} = req.user;

    const mesg = await Chat.findAll({where: {userId:id}});
    res.status(200).json({mesg, name});
    } catch(error) {
        console.log(error);
        res.status(500).json({error,success: false});
    }
}

exports.postMessage = async (req,res,next)=>{
    try{
    const {id,name} = req.user;
    const {message} = req.body;

    const mesg = await Chat.create( {message, userId:id});
    res.status(200).json({mesg, name});
    } catch(error) {
        console.log(error);
        res.status(500).json({error,success: false});
    }
}