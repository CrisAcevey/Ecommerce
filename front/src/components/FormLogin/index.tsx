"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '@/context/user';


const validationSchema = Yup.object({
  email: Yup.string().email('Ingresar un email real').required('Dato requerido'),
  password: Yup.string().required('Dato requerido'),
});

const FormLogin = () => {
  const router = useRouter();
  const {login} = useContext(UserContext);
  const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const resultado = await login(values);
    if (resultado) router.push("/home");
    if(!resultado) alert("Error al conectarse");
  };

  return (
  <div className='p-6 px-9 m-4 border-solid rounded-md shadow-xl place-items-center'>
    <h2 className="text-2xl font-bold mb-4 text-center">Ingresa</h2>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-200"
          >
            {isSubmitting ? 'Submitting...' : 'Enviar'}
          </button>
        </Form>
      )}
    </Formik>
  </div>
  );
};

export default FormLogin;