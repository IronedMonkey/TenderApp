import React from 'react'
import * as Yup from 'yup';
import {  withFormik } from 'formik';
import moment from 'moment'

import api from '../../api/api'
import CountryTenderForm from '../../components/Form/CountryTenderForm'


var defaultDate = moment().format('MM/DD/YYYY')

const AddTenderFormWrapper = withFormik({

  mapPropsToValues: () => ({ country: '', commodity: "", tonnage: "", unit: "", note: "", action: "",  date: '' }),
  validationSchema: Yup.object().shape({
    country: Yup.string().test('test-name', 'Commodity choice is not available this country', 
      function(value) {
        return this.options.originalValue !== "JP"
      }).required("Please choose a Country"),
		commodity: Yup.string().required("Please choose a Commodity"),
		tonnage: Yup.string().required("Tonnage is required"),
		unit: Yup.string().required("Unit is required"),
		action: Yup.string().matches(/(BUY|SELL)/).required("Tender Type must be BUY/SELL"),
		date: Yup.date().default(defaultDate).required("Date is required").min(defaultDate, `Tender date should be equal or later than ${defaultDate}`)
  }),

  
  handleSubmit: (values, { setSubmitting }) => {
    var confirmation = window.confirm ("Are you sure you want to create this tender?")

    if(confirmation) {
      // setTimeout(() => {
        api.request("POST", "/tender/add", values)
        .then(
          response => {
            if(response.data) {
              window.location.href = "/"
            }
          }
        )
        .catch(
          error => {
            console.log("error", error)
          }
        )
  
      // }, 1000)
    }

    setSubmitting(false)
  },

  displayName: 'AddTender',
})(CountryTenderForm);


class AddTender extends React.Component {

 render () {
	 return (
		<AddTenderFormWrapper />
	 )
 }
}


export default AddTender; 