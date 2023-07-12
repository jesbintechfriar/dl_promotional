import asyncHandler from 'express-async-handler'
import PromotionalSubscription from '../models/promotionSubscriptionsModel.js';




/*
api/promotion-email
parameters: email
method: POST
response: _id,email,message
*/
const insertEmail = asyncHandler(async (req, res) => {
   //get email
   const email = req.query.email;
   const emailExists = await PromotionalSubscription.findOne({ email });
   if (emailExists) {
      res.status(400);
      throw new Error('Email already exists')
   }
   else {
      const insertEmail = await PromotionalSubscription.create({
         email
      })
      if (insertEmail) {
         res.status(201).json({
            _id: insertEmail._id,
            email: insertEmail.email,
            message: "Promotion Email Added Successfully"
         })
      }
   }
})



/*
api/promotion-email/delete
parameters: email
method: DELETE
response: _id,email,message
*/
const deleteEmail = asyncHandler(async (req, res) => {
   const email = req.query.email;
   const emailExists = await PromotionalSubscription.findOne({ email });
   if (!emailExists) {
      res.status(400);
      throw new Error('Email not available')
   }
   else {
      const deleteEmail = await PromotionalSubscription.findOneAndDelete({ email });
      if (deleteEmail) {
         res.status(201).json({
            _id: deleteEmail._id,
            email: deleteEmail.email,
            message: "Email deleted successfully"
         })
      }
      else {
         res.status(400);
         throw new Error("An error occured")
      }
   }
})



/*
api/promotion-email
parameters:
method: GET
response: Email List{id,email}
*/
const listEmails = asyncHandler(async (req, res) => {
   const emailList = await PromotionalSubscription.find();
   if (emailList) {
      res.send(emailList);
   }
   else {
      res.status(400);
      throw new Error("An error occured")
   }
})



/*
api/promotion-email/update
parameters : id,email
method: PUT
response : id,email,message
*/
const updateEmail = asyncHandler(async (req, res) => {

   //get id and new email
   const { id, email } = req.query;

   const updateEmail = await PromotionalSubscription.findByIdAndUpdate(id, { email: email });
   if (!updateEmail) {
      res.status(400);
      throw new Error('An error occured / Id not found')
   }
   else {
      res.status(201).json({
         _id: updateEmail.id,
         email: email,
         message: "Email updated successfully"
      })
   }
})


export { insertEmail, deleteEmail, listEmails, updateEmail }