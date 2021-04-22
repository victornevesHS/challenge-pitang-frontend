import React, { useState } from 'react';
import DateInput from '../DatePicker';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormAgendSchema } from '../../Schema'
import { reactbootstrap, Button } from 'react-bootstrap'



const initialValues = {
    name: ' ',
    dataNascimento: null,
    selectedDate: null,
} 

const onSubmit = (values) => {
    
   return  console.log(values)
}

const FormAgend = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit = {onSubmit}
        >

            {(formik) =>{
                return(
                    <Form>
                        <div className="form-group form-focus">
                            <label className="focus-label" htmlFor="name">Nome</label>
                            <Field className="form-control floating" type="text" id="name" name="name" />
                            <ErrorMessage name="name" />
                        </div>

                    <DateInput name="dataNascimento" label="Data de nascimento" />

                    <DateInput
                        name="selectedDate"
                        label="Data para a vacinação"
                        showTimeSelect
                     />
                    
                    
                    <div className="d-flex justify-content-end">
                        <Button  type="submit" disabled={!formik.dirty && formik.isValid}>
                             Enviar
                        </Button>
                    </div>





                    </Form>
                )
            }}

        </Formik>
    )
}

export default FormAgend;