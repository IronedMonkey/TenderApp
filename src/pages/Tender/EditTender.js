import React from 'react'
import * as Yup from 'yup';
import {  withFormik } from 'formik';

import api from '../../api/api'
import CountryTenderForm from '../../components/Form/CountryTenderForm'
import utils from '../../utils/utils'


const AddTenderFormWrapper = withFormik({
  enableReinitialize: true, 

  mapPropsToValues: (props) => (props.tender),
  
  validationSchema: Yup.object().shape({
    country: Yup.string().required('Country is Required'),
    commodity: Yup.string().required("Please choose a Commodity"),
    tonnage: Yup.string().required("Tonnage is required"),
    unit: Yup.string().required("Unit is required"),
    action: Yup.string().matches(/(BUY|SELL)/).required("Tender Type must be BUY/SELL"),
    date: Yup.date().required("Date is required")
  }),
  
    
  handleSubmit: (values, { setSubmitting }) => {
    api.request("PUT", "/tender/add/" + utils.getTenderIdFromUrl(), values)
    .then(
      response => {
        window.location.href = "/"
      }
    )
    .catch(
      error => {
        console.log("error", error)
      }
    )

    setSubmitting(false)
  },

    displayName: 'AddTender',
  })(CountryTenderForm);




class EditTender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tender: {}
    }
  }

  componentDidMount() {
    api.request("GET", "/tender/get/" + utils.getTenderIdFromUrl())
    .then(
      response => {
        // don't show edit page if param isn't available. 
        // @todo check if react has navigation guard on router
        if(!response.data.tender) {
          window.location.href = "/"
        }else{
          this.setState({
            tender: response.data.tender
          })
        }

        console.log("tender:", response.data.tender)
      }
    )
    .catch(
      err => {
      }
    )
  }

 render () {
	 return (
		<AddTenderFormWrapper tender={this.state.tender}/>
	 )
 }
}


export default EditTender; 