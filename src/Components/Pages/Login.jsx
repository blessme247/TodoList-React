import React from "react";
import { Formik, Field } from "formik";
import styles from "./playground.module.css";
import LoginSchema from "./utils/validation/login-schema";

const FormikLogin = () => {
  return (
    <>
      <Formik initialValues={{ username: "", password: "", stack: "", cpassword: "" }}
      validationSchema={LoginSchema}

      onSubmit ={(values, { setSubmitting, resetForm }) => {
        const { username, password, stack, cpassword } = values;
        setSubmitting(true);
        console.log("Submitting form");
        console.log(`${username} - ${password} and your stack is ${stack}`);
        setTimeout(() => {
          setSubmitting(false);
          console.log("form submitted");
          resetForm();
        }, 4000);
      }}

      validate ={ (values) => {
        const {username, password, stack, cpassword} = values;
        const errors = {};
        // These custom error messages will override the default yup required error messages
        if (!username ) errors.username = "Username cannot be empty"
        if (!password) errors.password = "Password cannot be empty"
        if (!stack) errors.stack = "Stack cannot be empty"
        return errors;
      } }


      
      >
        
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
          /* and other goodies */
        }) => (
          <React.Fragment>
            {/* Debugging using formik...this will display user input in the DOM  */}
            <pre className={`${styles.container} ${styles.blueText}`}>
              {JSON.stringify(values, 2, null)}
            </pre>
            <pre className={`${styles.container} ${styles.blueText}`}>
              {JSON.stringify(errors, 2, null)}
            </pre>
            {/* <pre className={`${styles.container} ${styles.blueText}`}>
              {JSON.stringify(stack, 2, null)}
            </pre> */}

            <form className={`${styles.form} ${styles.container}`}>
              <input
                className={styles.input}
                type="text"
                name="username"
                placeholder="Enter Username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username && <p className={styles.errorText}>{errors.username}</p>}

              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
              />
                {errors.password && touched.password && <p className={styles.errorText}>{errors.password}</p>}

                <input
                className={styles.input}
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
                value={values.cpassword}
                onChange={handleChange}
              />
                {errors.cpassword && touched.cpassword && <p className={styles.errorText}>{errors.cpassword}</p>}


                <Field as='select' name='stack' className={styles.input}>
                <option value= 'selcet'>Select Stack</option>
                <option value= 'backend'>Backend</option>
                <option value= 'frontend'>Frontend</option>
                    <option value= 'devops'>DevOps</option>
                </Field>
                {errors.stack && touched.stack && <p className={styles.errorText}>{errors.stack}</p>}

              <button
                className={styles.submitBtn}
                disabled={isSubmitting}
                type="button"
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Login"}
              </button>

              <button
                className={styles.resetBtn}
                type="button"
                onClick={handleReset}
              >
                Reset form
              </button>
            </form>

            <div className={styles.container}>
              {isSubmitting ? (
                <h3 className={styles.blueText}>
                  Form is submitting, please don't close this window{" "}
                </h3>
              ) : null}
              <br /> <br />
              {values.username && (
                <p className={styles.blueText}>
                  Your username is: {values.username}
                </p>
              )}
              {values.password && (
                <p className={styles.blueText}>
                  Your password is: {values.password.slice(0, 3)}***
                </p>
              )}
            </div>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
};

export default FormikLogin;
