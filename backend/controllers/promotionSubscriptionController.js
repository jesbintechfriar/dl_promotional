import asyncHandler from 'express-async-handler'
import PromotionalSubscription from '../models/promotionSubscriptionsModel.js';
import addEmailRequest from '../requests/addEmailRequest.js';
import PromotionEmailRepository from '../repository/promotionEmailRepository.js';
import emailResource from '../resources/emailResource.js';
import deleteEmailRequest from '../requests/deleteEmailRequest.js';
import updateEmailRequest from '../requests/updateEmailRequest.js';

const emailRepo = new PromotionEmailRepository();






/*
api/promotion-email
parameters: email
method: POST
response: _id,email,message
*/

const addEmail = asyncHandler(async (req, res) => {
   const email = req.query.email;
   const emailRequest = new addEmailRequest({
      email
   })
   try {
      const validatedData = await emailRequest.validate();
      const emailDetails = await emailRepo.addEmail(validatedData);
      if (emailDetails) {
         const emailData = emailResource(emailDetails);
         res.status(200).json(emailData)
      }
      else {
         res.status(400);
         throw new Error("Unable to add email");
      }
   }
   catch (e) {
      res.status(400).json({ error: e.message });
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
   const emailRequest = new deleteEmailRequest({ email });
   try {
      const validatedData = await emailRequest.validate();
      const deleteEmail = await emailRepo.deleteEmail(validatedData);
      if (deleteEmail) {
         res.status(200).json({ message: "Email deleted successfully" });
      }
      else {
         res.status(400);
         throw new Error("Unable to get employee");
      }
   } catch (e) {
      res.status(400);
      throw new Error(e.message);
   }

})



/*
api/promotion-email
parameters:
method: GET
response: Email List{id,email}
*/
const listEmails = asyncHandler(async (req, res) => {
   const emails = await emailRepo.listEmail();
   if (emails) {
      res.status(200).json(emails);
   }
   else {
      res.status(400);
      throw new Error("Unable to get emails")
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
   const emailRequest = new updateEmailRequest({ id, email });
   try {
      const validatedData = await emailRequest.validate();
      const deleteEmail = await emailRepo.updateEmail(validatedData);
      if (deleteEmail) {
         res.status(200).json({
            _id: id,
            email: email,
            message: `Email updated to ${email}`
         });
      }
      else {
         res.status(400);
         throw new Error("Unable to get email");
      }
   }
   catch (e) {
      res.status(400);
      throw new Error(e.message);
   }

})




/*
public/promotion-email
parameters: email
method: POST
response: _id,email,message
*/

const publicAddEmail = asyncHandler(async (req, res) => {
   const email = req.query.email;
   const emailRequest = new addEmailRequest({
      email
   })
   try {
      const validatedData = await emailRequest.validate();
      const emailDetails = await emailRepo.addEmail(validatedData);
      if (emailDetails) {
         const emailData = emailResource(emailDetails);
         res.status(200).json({
            data: emailData,
            message: "Email added successfully"
         })
      }
      else {
         res.status(400);
         throw new Error("Unable to add email");
      }
   }
   catch (e) {
      res.status(400).json({ error: e.message });
   }
})



/*
public/promotion-email/delete
parameters: email
method: DELETE
response: _id,email,message
*/
const publicDeleteEmail = asyncHandler(async (req, res) => {
   const email = req.query.email;
   const emailRequest = new deleteEmailRequest({ email });
   try {
      const validatedData = await emailRequest.validate();
      const deleteEmail = await emailRepo.deleteEmail(validatedData);
      if (deleteEmail) {
         res.status(200).json({ message: "Email deleted successfully" });
      }
      else {
         res.status(400);
         throw new Error("Unable to get employee");
      }
   } catch (e) {
      res.status(400);
      throw new Error(e.message);
   }

})



export { deleteEmail, listEmails, updateEmail, addEmail, publicAddEmail, publicDeleteEmail }