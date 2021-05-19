class Request {

    // constructor() {
    //   this.base = "";
    // }
  
      get(url) {
        return fetch(url, {
          method: "GET",
          headers: {"subscription-key": "805f56b529eb41a4b637be5b35154149"}
          })
        .then((res) => res.json());
      }
      
  }
  
  export default Request;