const { BAD_REQUEST }=require('../Utils/Response');

const authReqValidate=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(BAD_REQUEST).json({
            data:{},
            success:false,
            err:"invalid credential",
            message:"missing email or password",
        });
    }
    next();
}

const roleReqValidate=(req,res,next)=>{
    if(!req.body.id){
        return res.status(BAD_REQUEST).json({
            data:{},
            success:false,
            err:"invalid credential",
            message:"missing userId",
        });
    }
    next();
}

module.exports={
    authReqValidate,
    roleReqValidate
}