
<script setup>import { ref } from 'vue';
import { getLoginBool } from '../jsvars/connection';
import { login } from '../jsvars/scocketConection';


const username = ref(null);
const password = ref(null);

const regusername = ref(null);
const regpassword = ref(null);

 
const connectBtn = () => {
    if (username.value == null || password.value == null) {return}
    login(username.value,password.value)

}

</script>

<template>
    <div class="grid sm:grid-cols-2 gap-4 p-4 ">
        <div class="text-center bg-quaternary rounded-md p-4 mb-2 animate-fade" v-if="!getLoginBool().value">
            <h3>
                Login
            </h3>
            <div class="p-x2">            
                <label for="usernamin" class="pr-2 text-xs">Username:</label>
                <input id="usernamin" type="text" class="rounded-md text-xs p-1 focus:outline-none" size="8" v-model="username" placeholder="Username..." /> 
            </div>
            <div class="p-x2">
                <label for="passwordin" class="pr-2 text-xs">Password: </label>
                <input id="passwordin" type="password" class="rounded-md text-xs p-1 focus:outline-none" size="8"  v-model="password"  placeholder="Password..." /> 
            </div>
            <button type="button" class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover" v-on:click="connectBtn">Connect</button>
            

        </div>
        <div class="text-center bg-quaternary rounded-md p-4 mb-2 animate-fade" v-if="!getLoginBool().value">
            <h3>
                Register
            </h3>
            <div class="px-2">
                <label for="usernamregin" class="pr-2 text-xs">Username:</label>
                <input id="usernamregin" type="text" class="rounded-md text-xs p-1 focus:outline-none" size="8"  v-model="regusername" placeholder="Username..." /> 
            </div>
            <div class="p-x2">
                <label for="passwordregin" class="pr-2 text-xs">Password: </label>
                <input id="passwordregin" type="password" class="rounded-md text-xs p-1 focus:outline-none" size="8"  v-model="regpassword"  placeholder="Password..." /> 
            </div>
            <button type="button" class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover" v-on:click="connectBtn">Connect</button>

        </div>
    </div>
</template>