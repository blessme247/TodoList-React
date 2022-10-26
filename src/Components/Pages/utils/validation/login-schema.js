import * as yup from "yup"

let LoginSchema = yup.object().shape({
    username: yup.string().min(4).max(10).required("Username cannot be less than 4 characters"),
    password: yup.string().min(4).required("Password cannot be blank").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    stack: yup.string().required(),
    email: yup.string().email(),
    cpassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  export default LoginSchema;