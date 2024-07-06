module.exports =  reqfilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please enter your age")
  }
  else if(req.query.age <= 18){
    resp.send("Your age must be greater then 18 for voating");
  }
  else{
    next();
  }
};