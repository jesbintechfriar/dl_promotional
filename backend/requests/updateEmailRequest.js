import Joi from "joi";

class updateEmailRequest {
    static schema = Joi.object({
        id: Joi.string().required(),
        email: Joi.string().email().required(),
    })
    constructor(data) {
        this.data = data;
    }
    validate() {
        const { error, value } = updateEmailRequest.schema.validate(this.data);
        if (error) {
            throw new Error(error.details[0].message);
        }
        return value;
    }
}


export default updateEmailRequest;