import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactPage = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" className="form-control" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field as="textarea" className="form-control" id="message" name="message" />
            <ErrorMessage name="message" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactPage;
