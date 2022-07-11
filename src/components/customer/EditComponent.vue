<template>
    <v-card class="col-sm-2 form-wrapper">
        <h4 class="edit">
            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-dark" v-on:click="navigate()"> View All Customers </button>
            </div>
        </h4>
        <div class="col-md-12 form-wrapper">
                <h2> Edit Customer </h2>
            <form id="create-post-form" @submit.prevent="editCustomer">
                <div class="form-group col-md-12">
                    <label for="title"> First Name </label>
                    <input type="text" id="first_name" v-model="customer.first_name" name="first_name" class="form-control" placeholder="Enter firstname">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Last Name </label>
                    <input type="text" id="last_name" v-model="customer.last_name" name="last_name" class="form-control" placeholder="Enter Last name">
                </div>
                    <div class="form-group col-md-12">
                    <label for="title"> Email </label>
                    <input type="text" id="email" v-model="customer.email" name="email" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Phone </label>
                    <input type="text" id="phone_number" v-model="customer.phone" name="phone" class="form-control" placeholder="Enter Phone number">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Address </label>
                    <input type="text" id="address" v-model="customer.address" name="address" class="form-control" placeholder="Enter Address">
                </div>
                <div class="form-group col-md-12">
                  <label for="description"> Description </label>
                  <input type="text" id="description"  v-model="customer.description" name="description" class="form-control" placeholder="Enter Description">
                </div>
                <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-primary btn-sm" type="submit"> Edit Customer </button>
                </div>           
            </form>
        </div>
    </v-card>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
    data(){
        return{
            customer:{},
        };
    },

    created(){
        this.id = this.$route.params.id;
        this.getCustomer();
    },

    methods: {
        getCustomer(){
            axios.get('http://localhost:3000/customer/customer/' + this.id).then(data => (this.customer = data.data));
            console.log();
        },
        
        editCustomer(){
            let customerData = {
                first_name: this.customer.first_name,
                last_name: this.customer.last_name,
                email: this.customer.email,
                phone: this.customer.phone,
                address: this.customer.address,
                description: this.customer.description
            };
            axios.put(('http://localhost:3000/customer/update?customerID=' + this.id), customerData).then(data => {
                router.push({name: "home"});
                console.log(data)
            });
        },

        navigate(){
            router.go(-1);
        }
    }
};
</script>

<style>

.v-card{
    left: 40%;
}

.btn-success{
    position: absolute;
    top: 310%;
}





</style>