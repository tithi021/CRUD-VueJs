<template>
  <div class="container">
    <b-container fluid>

      <b-navbar toggleable="md" type="dark" variant="info">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <img src="../assets/logo.png">

        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-nav is-nav-bar class="ml-auto">
            <b-nav is-nav-bar>
              <b-nav-item href="#">Product List</b-nav-item>
            </b-nav>
          </b-nav>

        </b-collapse>
      </b-navbar>

      <!-- navbar-1.vue -->
      <!-- jumbotron -->
      <b-jumbotron header="Add New Product"></b-jumbotron>
      <!-- Add New Product Form  -->
      <b-form @submit="onSubmit">
        <!-- Product Name -->
        <b-row class="my-1">
          <b-col sm="3">
            <label>Product Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="text" v-model="form.name" required placeholder="Product Name"></b-form-input>
          </b-col>
        </b-row>

        <!-- Product Description -->
        <b-row class="my-1">
          <b-col sm="3">
            <label>Product Description:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="text" v-model="form.description" required placeholder="Product Description"></b-form-input>
          </b-col>
        </b-row>

        <!-- Product Price -->
        <b-row class="my-1">
          <b-col sm="3">
            <label>Product Price:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="text" v-model="form.price" required placeholder="Product Price"></b-form-input>
          </b-col>
        </b-row>

        <!-- Product Category -->
        <b-row class="my-1">
          <b-col sm="3">
            <label>Product Category:</label>
          </b-col>
          <b-col sm="9">
            <b-form-select class="mb-3" v-model="form.category" :options="categories" required></b-form-select>
          </b-col>
        </b-row>

        <!-- Action Buttons -->
        <b-row class="my-1">
          <b-col sm="9">
          </b-col>
          <b-col sm="3">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
        price: '',
        category: null
      },
      categories: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ]
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style>
.container {
  width: 80%;
}

img {
  height: 50px;
}
</style>