import React, { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { URL } from '../../utils/url';
import { UserContext } from '../../context/user';
import { PRODUCTS } from '../../constants/routes';

export default function Register() {
  const [errorLogout, setErrorLogout] = useState('');
  const { userLogin, showAlert } = useContext(UserContext);
  const history = useHistory();

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

  const handleSubmit = async ({ email, password, username }) => {
    try {
      setErrorLogout('');
      const response = await axios.post(`${URL}/auth/local/register`, {
        email,
        password,
        username,
      });

      console.log(response);

      if (response) {
        const {
          jwt: token,
          user: { username: userName },
        } = response.data;

        const newUser = { token, userName };
        userLogin(newUser);
        showAlert({
          msg: `Registration Successful, ${username}`,
        });
        history.push(PRODUCTS);
      }
    } catch (error) {
      console.log(error.response);
      setErrorLogout(error.response.data.message[0].messages[0].message);
    }
  };

  return (
    <Formik
      initialValues={intialInputValues}
      validationSchema={formValidationLogic}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, isSubmitting } = formik;

        return (
          <Form className="login-form">
            {errorLogout ? (
              <div className="response-error">{errorLogout}</div>
            ) : null}
            {/* single input */}
            <div className="form-control">
              <label htmlFor="email">email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={errors.email && touched.email ? 'input-error' : null}
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
            {/* submit btn */}
            <button
              type="submit"
              className={`btn btn-block btn-primary ${
                !(dirty && isValid) ? 'disabled' : ''
              }`}
              disabled={!dirty || isSubmitting}
            >
              submit
            </button>
            {/* register link */}
          </Form>
        );
      }}
    </Formik>
  );
}
