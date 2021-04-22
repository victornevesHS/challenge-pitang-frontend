import React, { useState } from 'react';
import DateInput from '../DatePicker';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormAgendSchema } from '../../Schema'
import { reactbootstrap, Button } from 'react-bootstrap'
import axios from '../../utils/api';
import { toast } from 'react-toastify';



const initialValues = {
    name: ' ',
    dataNascimento: null,
    selectedDate: null,
} 

const  onSubmit = async (values) => {
    try{
        const res = await axios.post ('/agendamento', {
            name: values.name,
            dataNascimento: values.dataNascimento,
            selectedDate: values.selectedDate,
        }).then(()=>{
            toast.success('Agendamento Feito')
        }
        );

    }catch (error) {
        toast.error(error.response.data.message)
    }
   
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