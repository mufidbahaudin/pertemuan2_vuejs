User
<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import {BaseInput} from '@/components';

    const auth = useAuthStore()
    const username = ref('')
    const router = useRouter()

    const onLogin = () => {
        auth.login(username.value)
    }
    router.push('/')
</script>

<template>
    <div>
        <h1>Login Page</h1>
        <div class="card card-secondary p-4 gap-4 flex flex-col gap-2">
        <component
        :is="BaseInput"
        required
        v-model="username"
        label="Username"
        placeholder="John Doe"
      ></component>
      <component
        :is="BaseInput"
        v-model="password"
        label="Password"
        type="password"
        error="this is error message"
      ></component>
            <button @click="onLogin()" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>