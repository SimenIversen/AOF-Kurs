function getUser(userId){
    return model.data.users.find(user => user.userId == userId);
 }
 
 function getUserByUserName(userName){
     return model.data.users.find(user => user.username == userName);
  }