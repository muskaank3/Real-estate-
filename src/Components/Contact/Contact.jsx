import React, { useEffect } from "react";
import "./Contact.css";
import newImg from "../../assets/Contact/new1.jpg";
import { useFormik } from "formik";
import { signUpSchema } from "../../Schema";

const initialValues = {
  firstName: "",
  lastName: "",
  tel: "",
  email: "",
  purpose: "",
  message: "",
};

const Contact = () => {

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    submitCount   // 🔥 added
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, action) => {
      console.log("Form value:", values);
      action.resetForm();
    }
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="contact-main">
      <div className="contact-wrap">
        {/* Left Form */}
        <div className="contact-left">
          <h2 className="contact-title">GET IN TOUCH</h2>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="boxess">
              <input
                type="text"
                placeholder="First Name*"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.firstName && (touched.firstName || submitCount > 0) ? "input-error" : ""}
              />
              {errors.firstName && (touched.firstName || submitCount > 0) ? (
                <span className="error-text">{errors.firstName}</span>
              ) : null}
            </div>

            <div className="boxess">
              <input
                type="text"
                placeholder="Last Name*"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lastName && (touched.lastName || submitCount > 0) ? "input-error" : ""}
              />
              {errors.lastName && (touched.lastName || submitCount > 0) ? (
                <span className="error-text">{errors.lastName}</span>
              ) : null}
            </div>

            <div className="boxess">
              <input
                type="tel"
                placeholder="Phone*"
                name="tel"
                value={values.tel}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.tel && (touched.tel || submitCount > 0) ? "input-error" : ""}
              />
              {errors.tel && (touched.tel || submitCount > 0) ? (
                <span className="error-text">{errors.tel}</span>
              ) : null}
            </div>

            <div className="boxess">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && (touched.email || submitCount > 0) ? "input-error" : ""}
              />
              {errors.email && (touched.email || submitCount > 0) ? (
                <span className="error-text">{errors.email}</span>
              ) : null}
            </div>

            <div className="boxess">
              <select name="purpose" value={values.purpose} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Select the Purpose*</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent Property</option>
                <option value="investment">Investment</option>
                <option value="site-visit">Book a Site Visit</option>
                <option value="general">General Enquiry</option>
              </select>
            </div>

            <div className="boxess">
              <textarea
                rows="3"
                placeholder="How can we help?*"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message && (touched.message || submitCount > 0) ? "input-error" : ""}
              />
              {errors.message && (touched.message || submitCount > 0) ? (
                <span className="error-text">{errors.message}</span>
              ) : null}
            </div>

            <p className="contact-note">
              By submitting this form, you agree to be contacted by our team for
              property-related updates and offers. We respect your privacy and
              never share your information with third parties.
            </p>

            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="contact-right">
          <img src={newImg} className="contact-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;