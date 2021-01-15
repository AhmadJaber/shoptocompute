import React, { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { URL } from '../../utils/url';
import { UserContext } from '../../context/user';
import { PRODUCTS } from '../../constants/routes';

export default function Login() {
  const [errorLogin, setErrorLogin] = useState('');
  const { userLogin, showAlert } = useContext(UserContext);
  const history = useHistory();

  const intialInputValues = {
    email: '',
    password: '',
  };

  const formValidationLogic = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password is too short - should be 6 chars minimum'),
  });

  const handleSubmit = async ({ email, password }) => {
    try {
      setErrorLogin('');
      const response = await axios.post(`${URL}/auth/local`, {
        identifier: email,
        password,
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
          msg: `Login Successful, ${userName}`,
        });
        history.push(PRODUCTS);
      }
    } catch (error) {
      console.log(error.response.data.message[0].messages[0].message);
      setErrorLogin(error.response.data.message[0].messages[0].message);
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
        console.log(dirty, isValid, isSubmitting);
        return (
          <Form className="login-form">
            {errorLogin ? (
              <div className="response-error">{errorLogin}</div>
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
