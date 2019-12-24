<template>
  <div id="app">

    <notifications group="foo" />

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="save">

          <label>Name</label>
          <input type="text" placeholder="Nome" v-model="product.name">
          <label>Description</label>
          <input type="text" placeholder="Descricao" v-model="product.description">
          <label>Price</label>
          <input type="number" placeholder="Preco" v-model="product.price">
          <label>Category</label>
          <v-select :value="id" @input="setSelected" label="name" :options="categories">
          </v-select> 

          <button class="waves-effect waves-light btn-small">Save<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>OPTIONS</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product of products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category_name }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1" @click="edit(product)"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1" @click="destroy(product)"><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import Product from './service/product'
import Category from './service/category'

export default {
  data() {
    return {
      id: '',
      categories: [],
      product: {
        id: '',
        name: '',
        description: '',
        price: '',
        category_id: ''
      },
      products: []
    }
  },

  mounted() {
    Product.read().then(response => {
        this.products = response.data.records
      })
      Category.read().then(response => {
        this.categories = response.data.records
      })
  },
  
  methods: {
    read(){
      Product.read().then(response => {
        this.products = response.data.records
      })
      Category.read().then(response => {
        this.categories = response.data.records
      })
    },

    save(){
      if (!this.product.id) {
        /* eslint no-unused-vars: ["error", { "args": "none" }] */
        Product.save(this.product).then(response => {
          this.product = {}
          this.read()
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: response.data.message,
            type: 'success'
          })
        }).catch(e => {
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: e.response.data.message,
            type: 'error'
          })
        })
      } else {
        Product.update(this.product).then(response => {
          this.product = {}
          this.read()
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: response.data.message,
            type: 'success'
          })
        }).catch(e => {
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: e.response.data.message,
            type: 'error'
          })
        })
      }
    },

    edit(product){
      this.product = product
      this.setSelected(this.product.category_name)
    },

    destroy(product){
      if (confirm('Are you sure about this?')) {
        Product.delete(product.id).then(response => {
          this.read()
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: response.data.message,
            type: 'success'
          })
        }).catch(e => {
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: e.response.data.message,
            type: 'error'
          })
        })
      }
    },

    setSelected(value) {
      this.id = value
      this.product.category_id = value.id
    }
  }
}
</script>

<style>
</style>