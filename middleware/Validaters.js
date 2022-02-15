const validaterUser =(req,res,next)=>{
  const {fullName} = req.body;
  if(!fullName || fullName.length < 3){
    res.status(400).send('Dados insuficientes');
    return;
  }
  next();
};
const validaterParams =(req,res,next)=>{
  const {id} = req.params;
  if(!id){
    res.status(400).send('Dados insuficientes, necessita de um id');
    return;
  }
  next();
}

module.exports = {
  validaterUser,
  validaterParams,
}