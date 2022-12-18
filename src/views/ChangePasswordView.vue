<script setup lang="ts">
import { supabase } from "@/supabase";
import { Auth, ThemeSupa } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";
import { useRouter } from "vue-router";

const variables = {
    default: {
        space: {
            buttonPadding: "1.6rem 2rem",
            inputPadding: "1.6rem 2rem",
        },
    },
};

const router = useRouter();

const goBackHome = async () => {
    router.push({ name: "home" });
};
</script>

<template>
    <Auth
        view="update_password"
        :supabase-client="supabase"
        :appearance="{
            theme: ThemeSupa,
            variables,
        }"
        @update-password-completed="goBackHome"
    />
</template>

<style scoped></style>

