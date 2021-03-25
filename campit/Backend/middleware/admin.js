function admin(req,res,next){
    if(!req.user.roles.find(x=>x==='admin')) return res.status(403).send('access denied! ');
    next();
}
 
module.exports=admin;