const path = require("path");

module.exports = {
  srcDir: "src/application",
  buildDir: "build",
  telemetry: false,
  server: {
    port: process.env.PORT || 3030
  },
  static: {
    prefix: false
  },
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      }
    ]
  },
  css: ['@/assets/styles/index.scss'],
  styleResources: {
    scss: ["@/assets/styles/index.scss"]
  },
  router: {linkActiveClass: 'active-link'},
  plugins: [{ mode: "client", src: "@/plugins/registerClientScripts" }],
  components: true,
  modules: ["@nuxtjs/style-resources"],
  buildModules: ["@nuxtjs/composition-api", "@nuxt/typescript-build"],
  fontawesome: {
    icons: {
      solid: [
        'faCaretDown',
        'faAngleDown'
      ]
    }
  },
  generate: {
    interval: 5000
  },
  build: {
    extend: config => {
      config.resolve.alias["@app"] = path.join(__dirname, "src/application");
    }
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: "src/**/*.{ts,js,vue}"
      }
    }
  },
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  }
};
