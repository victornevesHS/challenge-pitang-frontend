import React, { useState } from 'react';
import DateInput from '../DatePicker';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormAgendSchema } from '../../Schema'
import { reactbootstrap, Button } from 'react-bootstrap'



const initialValues = {
    name: ' ',
    datanascimento: null,
    selectedDate: null,
}

const FormAgend = () => {
    return (
        <Formik
            initialValues={initialValues}

        >

            {(formik) =>{
                return(
                    <Form>
                        <div className="form-agend">
                            <label htmlFor="name">Nome</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" />
                        </div>

                    <DateInput name="datanascimento" label="Data de nascimento" />

                    <DateInput
                        name="selectedDate"
                        label="Data para a vacinação"
                        showTimeSelect
                     />

                     <Button  type="submit" disabled={!formik.dirty && formik.isValid}>
                         Enviar 
                    </Button>





                    </Form>
                )
            }}

        </Formik>
    )
}

export default FormAgend;