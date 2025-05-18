import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import s from "./LoginForm.module.css";


export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm, setErrors, setSubmitting }) => {
    try {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        resetForm();
        navigate('/contacts'); // Redirect on success
      } else {
        setErrors({ general: resultAction.payload || 'Login failed' });
      }
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ errors, isSubmitting }) => (
        <Form className={s.form}>
          <label>Email
            <Field name="email" type="email" required autoComplete="email" />
          </label>
          <label>Password
            <Field name="password" type="password" required autoComplete="current-password" />
          </label>
          <button type="submit" disabled={isSubmitting}>Login</button>
          {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
        </Form>
      )}
    </Formik>
  );
}
