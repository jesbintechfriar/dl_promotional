import PromotionSubscription from "../models/promotionSubscriptionsModel.js";

class PromotionEmailRepository {
    async addEmail(data) {
        const newEmail = await PromotionSubscription.create(data)
        return newEmail;
    }
    async deleteEmail(data) {
        const emailData = await PromotionSubscription.findOne(data);
        if (!emailData) {
            return null;
        }
        await PromotionSubscription.deleteOne(data);
        return true;
    }

    async listEmail(data) {
        const emails = await PromotionSubscription.find();
        return emails;
    }
    async updateEmail(data){
        const updateEmail =  await PromotionSubscription.findByIdAndUpdate(data.id, { email: data.email });
         return updateEmail;
    }
}

export default PromotionEmailRepository;