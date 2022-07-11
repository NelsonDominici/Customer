<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-card-title>Register</v-card-title>
            <v-card-text>
              <v-text-field label="Username" v-model="username"></v-text-field>
              <v-text-field label="Email" v-model="email"></v-text-field>
              <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            </v-card-text>
          <v-card-actions>
            <v-btn class="enter" color="success" @click="register">Submit</v-btn>
          </v-card-actions>
        </v-card>
        <div class="text-center">
          <v-btn class="already-have-account" text color="black" router-link to="/login">Already have an Account?</v-btn>
          <v-btn class="gobackhomeregister" text color="primary" router-link to="/">Go back home</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
        username: '',
        email: '',
        password: '',
      }
  },
      
  methods: {

    async register(){
        
        const result = await axios.post("http://localhost:3000/users/register",{

          username: this.username,
          email: this.email,
          password: this.password,

        });
        console.log(result.data);
        localStorage.token = result.data.token;
        this.$router.push('/login');
    },

    validate(){
      this.$refs.form.validate();
    },
        
  }
};

</script>

<style>

.enter{
    left: 2%;
}

.already-have-account{
    left: 110%;
    top: 320px;
    position: relative;
    
}

.gobackhomeregister{
    left: 130%;
    position: relative;
    bottom: 100%;
}

.gobackhomeregister{
    
    position: absolute;
    bottom: -1000%;
}

</style>