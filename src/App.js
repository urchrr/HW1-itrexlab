import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ClinicDashboardLayout from './features/ClinicDashboard/layouts/DashboardLayout'
import AuthPageLayout from './features/UserAuth/layouts/AuthPageLayout'
import SignUp from './features/UserAuth/SignUp'
import SignIn from './features/UserAuth/SignIn'
import RestorePassForm from './features/UserAuth/components/RestorePassForm'
import Patients from './features/ClinicDashboard/components/Patients'
import Appointments from './features/ClinicDashboard/components/Appointments'
import CreateAppointment from './features/ClinicDashboard/components/CreateAppointment/CreateAppointment'

const userAuthReducer = (state) => state.userAuthReducer

const RequireAuth = ({ children }) => {
    const { isLoggedIn } = useSelector(userAuthReducer)
    if (!isLoggedIn) {
        return <Navigate to={'/sign-in'} />
    }
    return children
}

function App() {
    return (
        <>
            <Routes>
                <Route element={<AuthPageLayout />}>
                    <Route exact path={'/'} element={<SignUp />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                    <Route path={'/sign-in'} element={<SignIn />} />
                    <Route
                        path={'/restore-password'}
                        element={<RestorePassForm />}
                    />
                </Route>
                <Route
                    path={'clinic'}
                    element={
                        <RequireAuth>
                            <ClinicDashboardLayout />
                        </RequireAuth>
                    }
                >
                    <Route path={'patients'} element={<Patients />} />
                    <Route path={'resolutions'} element={<></>} />
                    <Route path={'profile'} element={<></>} />
                    <Route path={'appointments'} element={<Appointments />} />
                    <Route path={'resolutions'} element={<></>} />
                    <Route
                        path={'create-appointment'}
                        element={<CreateAppointment />}
                    />
                </Route>
            </Routes>
        </>
    )
}

RequireAuth.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired,
}

export default App
