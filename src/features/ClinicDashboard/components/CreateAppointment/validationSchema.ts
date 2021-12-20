import * as Yup from 'yup';

const createAppointmentSchema = Yup.object().shape({
  occupation: Yup.string().required('Required field'),
  doctorID: Yup.string().required('Required field'),
  reason: Yup.string().required('Please write reason of your visit'),
  note: Yup.string().max(100, 'Must be 100 characters or less'),
  day: Yup.string().required('Choose date of visit'),
  date: Yup.string().required('Choose time of visit'),
});

export default createAppointmentSchema;