
const sql = require("../db/db.js");


let attempts = 0;
let block_Account = false;

const userLogin = async (req, res) => {

    try {
        const { emailId, password } = req.body;


        if (!emailId || !password)
            return res.status(400).send({ status: false, message: "Please enter email and password." })

        let Max_attempts = 5;

        let userData = await sql(`SELECT * FROM register WHERE emailId = '${emailId}' AND password = '${password}'`)

        console.log(userData.length == 0 && Max_attempts >= attempts)

        if (block_Account === false) {

            if (userData.length == 0 && Max_attempts > attempts) {

                attempts++

                return res.status(400).send({ status: false, message: `remaining attempts ${Max_attempts - attempts}` })

            }

            if (attempts == 5) {
                block_Account = true

                setTimeout(() => {
                    block_Account = false
                    attempts = 0
                }, 87000000)

                return res.status(400).send({ status: false, message: 'your are account blocked for 24 hours.' })
            }

            return res.status(200).send({ status: true, message: "user login successfully." })

        }
        else return res.status(400).send({ status: false, message: 'your are account blocked.' })

    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
}

module.exports.userLogin = userLogin