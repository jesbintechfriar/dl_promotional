import express from 'express'

import {deleteEmail, listEmails, updateEmail, addEmail } from '../controllers/promotionSubscriptionController.js'
const router = express.Router()

//api/promotion-email/
router.route('/').get(listEmails)

//api/promotion-email/add
router.route('/add').post(addEmail)
//api/promotion-email/delete
router.route('/delete').delete(deleteEmail)

//api/promotion-email/update
router.route('/update').put(updateEmail)

export default router;