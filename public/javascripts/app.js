/*global axios */
/*global Vue */
var app = new Vue({
  el: '#app',
  data: {
    catURL: '',
    catpic: '',
  },
  created: function() {
    console.log("creating");
    this.getcat();
    
  },
  methods: {
    async getcat() {
      // `this` points to the vm instance
      console.log("get cat");
      var url = "http://cs.taylormeurs.com:3000/cats";
      try {
        let response = await axios.get(url);
        this.catURL = response.data;
        console.log(this.catURL);
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
  }
});
