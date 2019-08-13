// reustable function. 
export default {
   /**
    * A reusable function get the tender ID from a URL. 
    */
  getTenderIdFromUrl: () => {
    var id = false 

    let href = window.location.href || ''

    if(href) {
      var split = href.split("/").filter( arr => arr) 
      if(split[4] !== undefined) {
        id = split[4]
      }
    }

    return id
  }  
}