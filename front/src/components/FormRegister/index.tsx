"use client"

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string().required("Nombre Requerido"),
  email: Yup.string().email("Ingresar un email real").required("Email requerido"),
  password: Yup.string().min(8, "La contraseña debe tener mas de 8 caracteres").required("Contraseña requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Contraseña incorrecta")
    .required("Confirmar contraseña"),
  address: Yup.string().required("Direccion requerida"),
  phone: Yup.string().required("Telefono requerido"),
});

const FormRegister = () => {
  const router = useRouter();
  const {register} = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className='p-6 px-9 m-4 border-solid rounded-md shadow-xl'>
    <h2 className="text-2xl font-bold mb-4 text-center">Registrate</h2>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
      const resultado = await register(values);
      if (resultado) router.push("/home");
      if (!resultado) alert("Error al crear el usuario")
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <Field
              name="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <Field
              name="email"
              type="email"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <Field
              name="password"
              type="password"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirmar contraseña</label>
            <Field
              name="confirmPassword"
              type="password"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Direccion</label>
            <Field
              name="address"
              type="text"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.address && touched.address ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="address" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefono</label>
            <Field
              name="phone"
              type="text"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Enviar"}
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default FormRegister;