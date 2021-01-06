import React from 'react'
import { Fragment } from 'react'
import '../../../../assets/css/custom-form.css'
import {Field, Form, Formik} from "formik";

const SendSetting =()=> {
    return (
        <Fragment>
            <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 card mr-3">
                    <div className="card-header">
                        Recipents
                    </div>
                    <div className="card-body">


                    <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">


                                <div className="col-md-12 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Send to*</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Select recipients</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3 mt-2">
                                    <div className="col-md-12 mb-3">
                                        <label className="f-w-600">Don't Send to</label>
                                        <Field name="insurance_experience" as="select"
                                               className="form-control">
                                            <option value="freshar">Select lists or contacts</option>
                                            <option value="married">Other options</option>
                                        </Field>
                                    </div>
                                </div>
                                </Form>
                        </Formik>
                    </div>
                    <div className="card-footer">

                    </div>
                </div>
                <div className="col-md-4 card ">
                <div className="card-header">
                    Sending options
                </div>
                <div >
                <Formik initialValues={{}}
                                validationSchema={{}}
                                onSubmit={(values) => console.log(values)}>
                            <Form className="theme-form">

                            <div className="col-md-12 mb-3 mt-2 borderCircle">
                                    
                                    <div className="form-check-inline ml-3">
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="carOwner1"
                                                   name="carOwner" value="company"/>
                                            <label className="form-check-label"
                                                   htmlFor="carOwner1">Send Now</label>
                                        </div>
                                        <div className="form-check-inline">
                                            <Field className="form-check-input" type="radio"
                                                   id="carOwner2"
                                                   name="carOwner" value="individual"/>
                                            <label className="form-check-label"
                                                   htmlFor="carOwner2">Schedule for later</label>
                                        </div>
                                    </div>
                                </div>
                                </Form>
                        </Formik>
                    
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default SendSetting
