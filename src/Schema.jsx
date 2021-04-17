import * as Yup from 'yup';

export const FormAgendSchema = Yup.object({
   name: Yup.string().min(2).required(),
   datanascimento: Yup.date().min(2).required().nullable,
   selectedDate: Yup.date().min(2).required().nullable,

    
});