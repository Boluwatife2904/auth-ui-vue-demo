<script setup lang="ts">
import { supabase } from "@/supabase";
// @ts-ignore
import { Auth, ThemeSupa } from "auth-ui-vue";
import "auth-ui-vue/dist/style.css";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const providers = ref<string[]>(["google"]);

const variables = {
    default: {
        space: {
            buttonPadding: "1.6rem 2rem",
            inputPadding: "1.6rem 2rem",
        },
    },
};

const goToDashboard = () => {
    router.push({ name: "dashboard" });
};

const redirectTo = computed(() => `${import.meta.env.VITE_BASE_URL}/change-password`);
</script>

<template>
    <Auth
        :supabase-client="supabase"
        :appearance="{
            theme: ThemeSupa,
            variables,
        }"
        :providers="providers"
        :redirect-to="redirectTo"
        @signin-completed="goToDashboard"
        @signup-completed="goToDashboard"
    />
</template>

<style scoped></style>

