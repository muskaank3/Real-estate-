import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name should be at least 2 characters")
    .required("Please enter your first name"),

  name: Yup.string()
    .min(2, "First name should be at least 2 characters")
    .required("Please enter your name"),

  lastName: Yup.string()
    .min(2, "Last name should be at least 2 characters")
    .required("Please enter your last name"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("We need your email to contact you"),

  tel: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Please provide your phone number"),

  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Please write a brief message so we can help you"),

     password: Yup.string()
    .min(4, "Minimum 4 characters")
    .required("Password is required"),
    

  purpose: Yup.string().required("Please select a purpose"),
});


