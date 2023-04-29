import { defineConfig } from "vite";

export default defineConfig({
    base: process.env.NODE_ENV === 'prodution' ? '/vite-js' : '/',
    publicDir: 'public',

})