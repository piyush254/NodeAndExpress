## This is for the access of id from mongoDB
```javascript
const mongoDB = require("mongodb");

{
  id: new mongoDB.ObjectId(req.params._id)
}
