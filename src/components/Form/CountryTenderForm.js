import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik';

import { countries, commodities, commodityPreferences, units } from '../../data/data'


import './Form.css';

const CountryTenderForm = props => {
  const [commodity, setCommodity] = useState([]);
  /**
   * A helper function that takes the value of selected country from 
   * the tender form and process and show the commodities related to 
   * the selected country using commodities and commodityPreferences data
   * @param {*} e 
   */
  function getCommoditiesForCountry (e) {
    var countryCode = e.target.value || false
    var commoditiesList = []
    props.initialValues.country = false

    var getCountry = commodityPreferences.find(comm => comm.code === countryCode)

    getCountry = getCountry === undefined ? [] : getCountry.preference

    let slot = []
    getCountry.forEach((v, i) => {
      slot.push({ code: v, name: commodities.find( comm => comm.code === v).name})
    })
    setCommodity(slot)
  }

/**
 * To populate the 'commodity' field for editTender page, we must first get 
 * the initial values and make sure 'commodity' has no values, otherwise the value of 
 * commodity comes from addTender page and not editTender
 * @todo: Requires refractoring, improvement and indepth understanding of the Formik library
 */
 if(!commodity.length && props.initialValues.country) {
   var pref = commodityPreferences.find(comm => comm.code === props.initialValues.country).preference
   let slot = []
   pref.forEach((v, i) => {
     slot.push({ code: v, name: commodities.find( comm => comm.code === v).name})
   })
   setCommodity([slot[0]])
 }

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>

			<select className="input"
        name="country"
        value={values.country}
        onChange={e => { handleChange(e); getCommoditiesForCountry(e) }}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
				<option value="" label="Select Country Type" />
      	{ countries.map ( c => <option key={c.code} value={c.code}> {c.country}</option>) }
      </select>
			<ErrorMessage className="form-error" name="country" component="div" />


			<select className="input"
				name="commodity"
				onChange={handleChange}
        value={values.commodity}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select commodity Type" />

        {commodity.map ( (c, i) =>     <option key={i} value={c.code}> {c.name}</option>)}
        
        
      </select>
			<ErrorMessage className="form-error" name="commodity" component="div" />
	
	
			<select className="input"
				name="action"
				onChange={handleChange}
        value={values.action}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
      <option value="" label="Select Tender Type" />
        <option value="BUY" label="BUY" />
        <option value="SELL" label="SELL" />
      </select>
			<ErrorMessage className="form-error" name="action" component="div" />


			<select className="input"
				name="tonnage"
				onChange={handleChange}
        value={values.tonnage}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
      <option value="" label="Select a Tonnage type" />
        { units.map( (unit, i)  => <option key={i} value={unit.unit}> {unit.unit}</option>) }
      </select>
			<ErrorMessage className="form-error" name="tonnage" component="div" />

 
      <input className="input"
				type="text"
				onChange={handleChange}
        onBlur={handleBlur}
        value={values.unit}
        style={{ display: 'block' }}
				name="unit"
				placeholder="Enter a quantity"
      />
			<ErrorMessage className="form-error" name="unit" component="div" />

      <input className="input"
				type="date"
				onChange={handleChange}
        onBlur={handleBlur}
        value={values.date}
        style={{ display: 'block' }}
        name="date"
      />

			<ErrorMessage className="form-error" name="date" component="div" />	

			<Field name="note" component="textarea" rows="2" className="input" />
      <button type="submit" className="button is-dark">Submit</button>

    </form>
  );
};


export default CountryTenderForm; 