import React from 'react';
import { Link } from "react-router-dom";
import api from '../../api/api.js'


class ListTender extends React.Component {
	constructor() {
		super(); 
		this.state = {
			tender: []
		};
	}

  componentDidMount () {
    api.request("GET", "/tender/list")
    .then(response => {
      this.setState({ tender: response.data.tender})
    })
    .catch(error => {
      // handle error
    })
  }

  removeTender (tender) {
    
    if(window.confirm("Delete the item?")) {
      api.request("DELETE", "/tender/delete/" + tender._id)
        .then(res => {
          window.location.reload();
        })
        .catch(err => {
      })
    }
  }

  renderTableData() {

    return this.state.tender.map((data, key) => {

      const { 
        _id, action, country, commodity, unit, tonnage, date, note 
      } = data 

      return (
        <tr key={key}>
          <td>{action}</td>
          <td>{country}</td>
          <td>{commodity}</td>
          <td>{unit}</td>
          <td>{tonnage}</td>
          <td>{date}</td>
          <td>{note}</td>
          <td><Link to={`/tender/edit/${_id}`}>EDIT</Link></td>
          <td><button onClick={() => this.removeTender(data)} >DELETE</button></td>
        </tr>
      )
    })
  }

  render() {
    if(!this.state.tender.length) {
      return (
        <article className="message is-warning">
          <div className="message-body">
            You currently have not made any tender. Please click <Link to="/tender/add"> here</Link> to create a tender
          </div>
        </article>
      )
    }

    return (
    <table className='table tender-table'>
      <thead>
        <tr>
        <th>Action</th>
        <th>Country</th>
        <th>Commodity</th>
        <th>Unit</th>
        <th>Tonnage</th>
        <th>Date</th>
        <th>Note</th>
        <th>EDIT</th>
        <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        { this.renderTableData() }
      </tbody>
    </table>
    )
  }

}

export default ListTender;