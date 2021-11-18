import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {
    ContentContainer,
    ContentHeader,
    ContentHeaderTitle,
} from '../../core/ContentStyles'
import { useFormik } from 'formik'
import InputWrapper from './StyledInputWrapper'
import Selector from './SelectorStyles'
import SelectorStyles from './SelectorStyles'
import './Calendar/Calendar.css'

import TimeSlots from './TimeSlots/TimeSlots'
import TimeCalendar from './Calendar/Calendar'
import {
    StyledForm,
    StyledHeading,
    StyledNumber,
    StyledSubmitWrapper,
    StyledWrapper,
    StyledSubmitButton,
    StyledInput,
} from './styles'
import { createAppointmentSchema } from './validationSchema'
import Select from 'react-select'
import { InputError } from '../../../UserAuth/components/Input/InputStyles'

const CreateAppointment = () => {
    const [time, setTime] = useState(null)

    const timeSlots = [
        { time: '12:00 am', inUse: false },
        { time: '1:00 pm', inUse: false },
        { time: '2:00 pm', inUse: true },
        { time: '3:00 pm', inUse: false },
        { time: '4:00 pm', inUse: false },
        { time: '5:00 pm', inUse: false },
    ]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]

    const formik = useFormik({
        initialValues: {
            occupation: '',
            doctor: '',
            reason: '',
            note: '',
            day: new Date(),
            time: '',
        },
        validationSchema: createAppointmentSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <>
            <ContentHeader>
                <ContentHeaderTitle>Make an appointment</ContentHeaderTitle>
            </ContentHeader>
            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>1</StyledNumber>Select a doctor and define
                        the reason of your visit
                    </StyledHeading>
                    <InputWrapper
                        label={'Occupation'}
                        touched={formik.touched.occupation}
                        error={formik.errors.occupation}
                    >
                        <Select
                            name={'occupation'}
                            styles={SelectorStyles}
                            options={options}
                            value={
                                options
                                    ? options.find(
                                          (option) =>
                                              option.value ===
                                              formik.values.occupation
                                      )
                                    : ''
                            }
                            onChange={({ value }) =>
                                formik.setFieldValue('occupation', value)
                            }
                            onBlur={() =>
                                formik.setFieldTouched('occupation', true)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper
                        label={'Doctor`s name'}
                        touched={formik.touched.doctor}
                        error={formik.errors.doctor}
                    >
                        <Select
                            name={'doctor'}
                            styles={SelectorStyles}
                            options={options}
                            value={
                                options
                                    ? options.find(
                                          (option) =>
                                              option.value ===
                                              formik.values.doctor
                                      )
                                    : ''
                            }
                            onChange={({ value }) =>
                                formik.setFieldValue('doctor', value)
                            }
                            onBlur={() =>
                                formik.setFieldTouched('doctor', true)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper
                        label={'Reason for the visit'}
                        touched={formik.touched.reason}
                        error={formik.errors.reason}
                    >
                        <StyledInput
                            name={'reason'}
                            placeholder={'Reasons..'}
                            onChange={formik.handleChange}
                            value={formik.values.reason}
                            onBlur={() =>
                                formik.setFieldTouched('reason', true)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper
                        label={'Note'}
                        touched={formik.touched.note}
                        error={formik.errors.note}
                    >
                        <StyledInput
                            name={'note'}
                            placeholder={'Leave a note if needed'}
                            onChange={formik.handleChange}
                            value={formik.values.note}
                            onBlur={() => formik.setFieldTouched('note', true)}
                        />
                    </InputWrapper>
                </StyledWrapper>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>2</StyledNumber>Choose a day for an
                        appointment
                    </StyledHeading>
                    <TimeCalendar
                        name={'day'}
                        onClickDay={(value) =>
                            formik.setFieldValue('day', value)
                        }
                        value={formik.values.day}
                    />
                    {formik.touched.day && formik.errors.day ? (
                        <InputError>{formik.errors.day}</InputError>
                    ) : null}
                </StyledWrapper>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>3</StyledNumber>Select an available
                        timeslot
                    </StyledHeading>
                    <TimeSlots
                        data={timeSlots}
                        value={formik.values.time}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.time && formik.errors.time ? (
                        <InputError>{formik.errors.time}</InputError>
                    ) : null}
                </StyledWrapper>
                <StyledSubmitWrapper>
                    <StyledSubmitButton>Submit</StyledSubmitButton>
                </StyledSubmitWrapper>
            </StyledForm>
        </>
    )
}

export default CreateAppointment
