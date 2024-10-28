import express from 'express'
import { Router } from 'express'
import contactModel from '../models/ContactModel.js'

const router = express.Router()
router.use(express.json())
router.get("/", async(req, res) => {
    const response = await contactModel.find()
    res.send(response)
})

router.post("/", async(req, res)=>{
    try {
        if(req.body.email == null || req.body.query == null){
            return res.json({message: "Fill all the fields"})
        }
        else{
            const contact = new contactModel({
                email: req.body.email,
                query: req.body.query
            })
            await contact.save();
            res.json({message: "Successfull"})
        }
      
    } catch (error) {
        console.log(error)   
    }
})

export {router as contactRouter}


/**/