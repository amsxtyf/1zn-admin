import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

console.log("import.meta", import.meta.env);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //本地开发服务器配置
  server: {
    // 端口号
    port: 3000,
    //代理配置
    proxy: {
      //代理路径
      "/api": {
        //代理目标地址
        target: "http://localhost:8080",
        //是否允许跨域
        changeOrigin: true,
        //重写路径 去掉/api前缀
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    //是否自动打开浏览器s
    open: true,
  },
  //生产构建打包配置
  build: {
    //输出目录
    outDir: "build",
    //静态资源目录
    assetsDir: "images",
    //是否开启sourcemap
    //什么是sourcemap？
    // sourcemap是源代码的映射文件，当浏览器报错时，会根据sourcemap找到对应的源代码位置，而不是编译后的代码位置。
    sourcemap: false,
  },
  //路径配置
  resolve: {
    //路径别名
    alias: {
      "@": "/src",
    },
  },
});
