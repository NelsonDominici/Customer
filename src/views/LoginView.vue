<template>
   <v-container>
        <v-row>
            <v-col cols="4">
                    <v-card>   
                        <v-card-title>Login</v-card-title>
                            <v-card-text>
                            <v-text-field label="Email" v-model="email"></v-text-field>
                            <v-text-field label="password" type="password" v-model="password"></v-text-field>
                        </v-card-text>
                        
                        <v-card-actions>
                            <v-btn class="enter"
                            color="success"
                            @click="login"
                            >Enter
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                        <div class="text-center">
                            <v-btn class="notregisteryetlogin" text color="primary" router-link to="/register" >Not registered yet?</v-btn>
                            <v-btn class="gobackhomelogin" text color="primary" router-link to="/">Go back home</v-btn>
                        </div> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
                email: "",
                password: "",
        }
    },
            
    methods: {
        async login(){
            
            const result = await axios.post("http://localhost:3000/users/login",{
                email: this.email,
                password: this.password,
            });
            console.log(result.data);
            localStorage.token = result.data;
            this.$router.push({path: '/home'});
        },
    },
};

</script>

<style>

.enter{
    left: 2%;
}

.notregisteryetlogin{
    left: 125%;
    top: 260px;
    position: relative;
}

.gobackhomelogin{
    left: 125%;
    top: 260px;
    position: relative;
}

</style>