import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginUser from '../strapi/login-user';
import registerUser from '../strapi/register-user';

export default function LogIn() {
  const [isMember, setIsMember] = React.useState(true);

  const intialInputValues = {
    username: '',
    email: '',
    password: '',
  };

  const formValidationLogic = Yup.object().shape({
    username: Yup.string()
      .required('UserName is required')
      .min(3, 'should be more than 3 less than 10')
      .max(10, 'should be more than 3 less than 10'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password is too short - should be 6 chars minimum'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const toggleMember = () => {
    setIsMember((prevMember) => {
      const newMember = !prevMember;
      return newMember;
    });
  };

  return (
    <Formik
      initialValues={intialInputValues}
      validationSchema={formValidationLogic}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;

        return (
          <section className="form section">
            <h2 className="section-title">
              {isMember ? 'sign in' : 'register'}
            </h2>
            <Form className="login-form">
              {/* single input */}
              <div className="form-control">
                <label htmlFor="email">email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={
                    errors.email && touched.email ? 'input-error' : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
              {/* end of single input */}
              {/* single input */}
              <div className="form-control">
                <label htmlFor="password">password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={
                    errors.password && touched.password ? 'input-error' : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>
              {/* end of single input */}
              {/* single input */}
              {!isMember && (
                <div className="form-control">
                  <label htmlFor="username">username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className={
                      errors.username && touched.username ? 'input-error' : null
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="span"
                    className="error"
                  />
                </div>
              )}
              {/* end of single input */}
              {/* submit btn */}(
              <button
                type="submit"
                className={`btn btn-block btn-primary ${
                  !(dirty && isValid) ? 'disabled-btn' : ''
                }`}
                disabled={!dirty}
              >
                submit
              </button>
              ){/* register link */}
              <p className="register-link">
                {isMember ? 'need to register' : 'already a member'}
                <button type="button" onClick={toggleMember}>
                  click here
                </button>
              </p>
            </Form>
          </section>
        );
      }}
    </Formik>
  );
}
