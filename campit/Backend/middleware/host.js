function host(req,res,next){
    if(!req.user.roles.find(x=>x==='host')) return res.status(403).send('access denied! ');
    next();
}
module.exports = host;