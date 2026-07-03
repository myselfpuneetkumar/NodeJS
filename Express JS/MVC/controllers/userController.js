import UserList from "../models/userModel.js"

export default function handleUsers(req,res){
    const userData = UserList();
    console.log(userData);
    
    res.render('user',{users:userData});
}