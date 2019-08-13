import axios from 'axios'
import config from '../config'

/**
 * A wrapper function that calls axios
 * can be used to add middleware, api tokens, headers ... 
 */
export default {
  request (method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

     var url = config.baseURL + uri
    return axios({ method, url, data })
  }
}

