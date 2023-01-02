
const sql = require("../db/db.js");


const createRegister = async (req, res) => {

    try {


        const { firstName, lastName, emailId, password } = req.body
   

        if(!firstName && !lastName && !emailId && !password ) return res.status(400).send({status: false, message:"please all fields."})
        if( !firstName ) return res.status(400).send({status: false, message:"please firstName fields."})
        if( !lastName ) return res.status(400).send({status: false, message:"please lastName fields."})
        if( !emailId ) return res.status(400).send({status: false, message:"please emailId fields."})
        if( !password ) return res.status(400).send({status: false, message:"please password fields."})

        let getuser = "select * from user.register";
      let user=  await sql(getuser)
        let userdata = "INSERT INTO register SET ?";
        let data1 = await sql(userdata, req.body)
        console.log(data1)
        return res.status(201).send({ status: true, message: "user register sucussfully" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getData = async(req,res)=>{

    try {

        let getuser = "select  emailId from user.register";
      let userdata=  await sql(getuser)
        return res.status(200).send({ status: true, data: userdata })
        
    } catch (error) {
        
    }

}
module.exports.createRegister = createRegister
module.exports.getData = getData