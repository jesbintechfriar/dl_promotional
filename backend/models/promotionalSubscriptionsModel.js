import mongoose from "mongoose";

const promotionalSubscriptionSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                // Regular expression for basic email format validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format',
        },
    }

})


const PromotionalSubscription = mongoose.model('PromotionSubscription', promotionalSubscriptionSchema)

export default PromotionalSubscription;