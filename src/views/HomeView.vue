<template>

<v-app>
    <v-navigation-drawer dark app absolute color="brown" v-model="drawer">
      <v-list>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link :to="link">

          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
      

  <div class="container-fluid">
    
      <div class="text-center">
        
        <h1 class="customerlist">Customer List</h1>
          <div class="if" v-if="customers.length === 0">
            <h3 class="nocustomer"> No customer found at the moment </h3>
          </div>
      </div>
    <div>
      <table class="table table-bordered">
        <thead class="thead-light">
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
        </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer._id">
                  <td>{{ customer.first_name }}</td>
                  <td>{{ customer.last_name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.address }}</td>
                  <td>{{ customer.description }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: customer._id}}" class="btn btn-sm btn-outline-secondary">Edit Customer </router-link>
                                  <button class="btn btn-sm btn-outline-danger" v-on:click="deleteCustomer(customer._id)">Delete Customer</button>
                                </div>
                    </div>        
                  </td>
                </tr>
              </tbody>
      </table>
    </div>
  </div>
  
  <v-app-bar app dark color="brown">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-app-bar-title>Dashboard</v-app-bar-title>          
          </v-app-bar>
  </v-app>
  
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      customers: [],
      drawer: false,
      items: [
      ['mdi-home-outline', 'Home', '/'],
      ['mdi-information', 'Create', '/create'],
      ['mdi-account-plus', 'Register', '/register'],
      ['mdi-account', 'Login', '/login'],
    ],
    };
  },

  created(){
    this.fetchCustomers();
  },

  methods:{
    fetchCustomers(){
      axios.get('http://localhost:3000/customer/customers').then(data => (this.customers = data.data));
    },

    deleteCustomer(id){
      axios.delete('http://localhost:3000/customer/delete?customerID=' + id).then(data =>{ console.log(data);
      window.location.reload();
      });
    },
    
  }
};

</script>

<style>

.text-center{
  position: absolute;
  top: 10%;
  right: 50%;
}

.customerlist{
  position: relative;
  left: 40%;
  align-content: center;
}


.nocustomer{
  position: relative;
  left: 40%;
  
}


.table, table-bordered{
  position: absolute;
  top: 20%;
  
}

</style>