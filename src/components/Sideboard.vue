<script setup>
import { ref } from 'vue'
import { getLoginBool } from '../jsvars/connection';
import { login } from '../jsvars/scocketConection';
import User from './User.vue';

const username = ref(null);
const password = ref(null);

const regusername = ref(null);
const regpassword = ref(null);

const connectBtn = () => {
    if (username.value == null || password.value == null) {return}
    login(username.value,password.value)
    

}
console.log(getLoginBool())
</script>


<template>
    <div class="bg-secondary rounded-md h-full p-3 ">
        <div class="text-center bg-quaternary rounded-md p-4 mb-2" v-if="!getLoginBool().value">
            <h3>
                Login
            </h3>
            <div class="p-2">
                <label for="usernamin" class="pr-2 text-xs">Username:</label>
                <input id="usernamin" type="text" class="rounded-md text-xs p-1" size="8"  v-model="username" placeholder="Username..." /> 
                <label for="passwordin" class="pr-2 text-xs">Password: </label>
                <input id="passwordin" type="password" class="rounded-md text-xs p-1" size="8"  v-model="password"  placeholder="Password..." /> 
            </div>
            <button type="button" class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover" v-on:click="connectBtn">Connect</button>
            

        </div>
        <div class="text-center bg-quaternary rounded-md p-4 mb-2" v-if="!getLoginBool().value">
            <h3>
                Register
            </h3>
            <div class="p-2">
                <label for="usernamregin" class="pr-2 text-xs">Username:</label>
                <input id="usernamregin" type="text" class="rounded-md text-xs p-1" size="8"  v-model="regusername" placeholder="Username..." /> 
                <label for="passwordregin" class="pr-2 text-xs">Password: </label>
                <input id="passwordregin" type="password" class="rounded-md text-xs p-1" size="8"  v-model="regpassword"  placeholder="Password..." /> 
            </div>
            <button type="button" class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover" v-on:click="connectBtn">Connect</button>
            

        </div>
        <div class="text-center bg-quaternary rounded-md p-5 mb-2" v-if="getLoginBool().value">
            <h3>
                Group
            </h3>
            <div class="p-2">
                <label for="groupidin" class="pr-2 text-xs">Group Code:</label>
                <input id="groupidin" type="text" class="rounded-md text-xs p-1" size="5" placeholder="e.g. 0000" /> 
            </div>
            <div class="pb-2">
                <button class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover">Join</button>
            </div>
            <div>
                <button class="bg-button rounded-md px-2 py-0.5 hover:bg-button-hover">Current Groups</button>
            </div>
            

        </div>
        <div class="text-center bg-quaternary rounded-md p-5 " v-if="getLoginBool().value">
        
            <h3>
                Connected Users
            </h3>
            <div class="border-2 border-secondary rounded-md px-1">
                <User username="TestUser" />
            </div>
        </div>
    </div>
</template>