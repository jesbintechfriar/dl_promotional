import express from 'express'

import { publicAddEmail, publicDeleteEmail } from '../controllers/promotionSubscriptionController.js'
const router = express.Router()

//public/promotion-email/
router.route('/add').post(publicAddEmail)

//public/promotion-email/delete
router.route('/delete').delete(publicDeleteEmail)



export default router;