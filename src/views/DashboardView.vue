<script setup lang="ts">
import { supabase } from "@/supabase";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userData = ref();

const fetchUserData = async () => {
    const {
        data: { user },
    } = await supabase.auth.getUser();
    userData.value = user;
};

const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push({ name: "home" });
};

onMounted(async () => {
    fetchUserData();
});
</script>

<template>
    <section v-if="userData" class="user__data">
        <p>Hello {{ userData.email }}</p>

        <button @click="handleSignOut" class="signout__button">Sign Out</button>
    </section>
</template>

<style>
.signout__button {
    display: inline-block;
    background-color: orangered;
    color: #fff;
    border: none;
    padding: 1.6rem 2.4rem;
    cursor: pointer;
    margin: 2rem auto;
    border-radius: .4rem;
    font-size: 1.6rem;
}
</style>

