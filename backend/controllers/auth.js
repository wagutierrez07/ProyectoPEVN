import pools from '../config/db';

const auth = {};

auth.signUp = (req,res)=>{
  console.log(req.body);
   res.send('registrado')
}



module.exports = auth;
