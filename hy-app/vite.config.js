import { defineConfig } from "vite"; // 使用 defineConfig 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");

export default ({ command, mode }) => {
    let isProd = command === "serve"; // 情景配置 是否为开发模式  serve 或 build
    return defineConfig({
        base: "./",
        plugins: [vue()], //查看 插件 API 获取 Vite 插件的更多细节 https://www.vitejs.net/guide/api-plugin.html
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "@components": resolve(__dirname, "./src/components"),
            },
        },
        server: {
            host: "0.0.0.0",
            port: 8006, // 本地服务端口
            open: true, //在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。
            strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
            proxy: {
                // 代理
                // 字符串简写写法
                // '/foo': 'http://localhost:4567/foo',
                // 选项写法
                // '/api': {
                //   target: 'http://jsonplaceholder.typicode.com',
                //   changeOrigin: true,
                //   rewrite: (path) => path.replace(/^\/api/, '')
                // },
                // 正则表达式写法
                // '^/fallback/.*': {
                //   target: 'http://jsonplaceholder.typicode.com',
                //   changeOrigin: true,
                //   rewrite: (path) => path.replace(/^\/fallback/, '')
                // }
            },
        },
        build: {
            assetsDir: "static", // 指定生成静态资源的存放路径（相对于 build.outDir）
        },
    });
};
