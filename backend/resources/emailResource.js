const emailResource = (email) => {
    return {
        _id: email?._id,
        email: email?.email,
    };
};

export default emailResource;