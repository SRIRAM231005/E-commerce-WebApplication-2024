const User = require('../models/user');
const Order = require('../models/orders');


let FoundUser;

async function GetHtmlContent(req , res){
    const { cEmail, cartItm, OrderPrice } = req.body;
    const orderDetails = await Order.create({
        cEmail : cEmail,
        CartOrders : cartItm,
        OrderPrice : OrderPrice
    });

    return res.json({message : "done"});
};

async function PostDetails(req , res){
    /*const userDetails = await User.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email
    });*/
    
    const dbUser = await User.find({});
    /*const html = `
    <ul>
        ${dbUser.map((user) => `<li style="color: green;">User First Name = ${user.firstName} ${user.Password}</li>
                               <li style="color: red;">User EmailID = ${user.email}</li>`).join("\n")}
    </ul>
    <form action="/user" method="GET"><button>Enter other User</button></form>
    <form action="/user/login" method="GET"><button>Login</button></form>`*/
    
    return res.json(FoundUser);
};

async function AddDetails(req , res){
    const userDetails = await User.create({
        firstName : req.body.firstName,
        Password : req.body.Password,
        email : req.body.email
    });

    return res.json({message : "done"});
};

async function GetLoginContent(req , res){
    const FirstName = req.body.UserName;
    const Pswd = req.body.UserPassword;
    const loginDetails = await User.findOne({ firstName: FirstName , Password: Pswd });

    if(!loginDetails){
        return res.json({message: "notFound"});
    };

    FoundUser = {firstName : loginDetails.firstName , email: loginDetails.email };

    return res.json({message: "done"});
};

async function GetHiContent(req , res){
    if(!FoundUser){
        return res.json({message: "LoginFirst"});
    };
    const cfEmail = FoundUser.email;
    const ReviewOrder = await Order.find({cEmail : cfEmail});

    return res.json(ReviewOrder);
};

module.exports = {
    GetHtmlContent,
    PostDetails,
    GetLoginContent,
    GetHiContent,
    AddDetails,
}