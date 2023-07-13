import Joi from "joi";


class addEmailRequest {
    static schema = Joi.object({
        email: Joi.string().email().required(),
    })
    constructor(data) {
        this.data = data;
    }
    validate() {
        const { error, value } = addEmailRequest.schema.validate(this.data);
        if (error) {
          throw new Error(error.details[0].message);
        }
        return value;
      }
}


export default addEmailRequest;