const Yup = require("yup");

const formSchemaBase = Yup.object({
    username: Yup.string()
        .required("Username required!")
        .min(6, "Username too short!")
        .max(28, "Username too long!"),
    password: Yup.string()
        .required("Password required!")
        .min(6, "Password too short!")
        .max(28, "Password too long!"),
    email: Yup.string()
        .email("Invalid email address"),
});

const validateForm = (req, res, isSignup = false) => {
    const formData = req.body;

    // Clone the base schema and modify it based on isSignup
    const schema = formSchemaBase.clone().shape({
        email: isSignup ? Yup
            .string()
            .required("Email is required.")
            .email("Invalid email address") : Yup.string(),
    });

    schema
        .validate(formData)
        .catch(err => {
            res.status(422).send();
            console.log(err.errors);
        })
        .then(valid => {
            if (valid) {
                console.log("Form is good.");
            }
        });
};


module.exports = validateForm;