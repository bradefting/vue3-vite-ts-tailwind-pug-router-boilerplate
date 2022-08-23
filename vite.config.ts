import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode: ', mode);

  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // console.log('process.env.VITE_NAME: ', process.env.VITE_NAME);
  // console.log('process.env.VITE_PORT: ', process.env.VITE_PORT);
  return {
    plugins: [
      vue(),
    ],
    // plugins: [vue()],

    // server: {
    //   port: process.env.VITE_PORT,
    // },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
  };
});