import express from 'express'

import {insertEmail,deleteEmail, listEmails, updateEmail }  from '../controllers/promotionSubscriptionController.js'
const router = express.Router()

//api/promotional/
router.route('/').get(listEmails)

//api/promotional/insert
router.route('/insert').post(insertEmail)

//api/promotional/delete
router.route('/delete').delete(deleteEmail)

//api/promotional/update
router.route('/update').put(updateEmail)

export default router;