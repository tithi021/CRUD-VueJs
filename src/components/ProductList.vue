<template>
  <div class="container">
    <b-container fluid>
      <navbar/>
      <b-table class="container" striped hover :items="products">
        <template slot="Delete" scope="row">
          <b-button size="sm" variant="danger" @click.stop="deleteItem(row.index)">Delete</b-button>
          <b-button size="sm" variant="secondary" @click.stop="editItem(row.item, row.index)">Edit</b-button>
        </template>
      </b-table>

      <!-- Product Update form -->
      <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
        <b-form>
          <!-- Product Name -->
          <b-row class="my-1">
            <b-col sm="3">
              <label>Name:</label>
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
              <label>Price:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input type="number" v-model="form.price" required placeholder="Product Price"></b-form-input>
            </b-col>
          </b-row>
        </b-form>
        <b-btn class="mt-3" variant="outline-success" block @click="hideModal()">Update</b-btn>
      </b-modal>
    </b-container>
  </div>
</template>

<script>

let products = [
  { name: 'Dress', description: 'New dress', price: 12, category: 'Carrots', Delete: 'Delete' },
];

export default {
  data() {
    return {
      products: products,
      form: {
        name: '',
        description: '',
        price: '',
        category: null
      },
    }
  },
  methods: {
    deleteItem(index) {
      products.splice(index, 1);
    },
    editItem(data, index) {
      this.$refs.myModalRef.show();
      this.form = data;
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  },
  created() {
    this.$bus.$on('NewProduct', (product) => {
      product.Delete = 'Delete';
      products.push(product);
      products = [...new Set(products.filter(p => p.name))];
    });
  }
}
</script>

<style>
.container {
  width: 80%;
}

th {
  text-align: center;
}
</style>