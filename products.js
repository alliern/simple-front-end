/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Add some new products!",
      products: [],
      name: "",
      description: "",
      imageUrl: "",
      price: ""


    };
  
  },  
  created() {
    axios
      .get("http://localhost:3000/api/products")
      .then(response => {
        console.log(response.data);
        this.products = response.data;
      });
  },
  methods: {
    createProduct: function () {
      var params ={name: this.name, description: this.description, image_url: this.imageUrl, price: this.price };
      axios.post("http://localhost:3000/api/products", params).then(response => {
        console.log(response.data);
        this.products.push(response.data);
        this.name = "";
        this.description = "";
        this.imageUrl = "";
        this.price = "";
      });
    },
    updateProduct: function () {
      var params ={name: this.name, description: this.description, image_url: this.imageUrl, price: this.price };
      axios.post("http://localhost:3000/api/products", params).then(response => {
        console.log(response.data);
        this.products.push(response.data);
        this.name = "";
        this.description = "";
        this.imageUrl = "";
        this.price = "";
      });
    },

    }
  }
});