const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const shareAll = mf.shareAll;

    module.exports = {
      output: {
        publicPath: "auto",
        uniqueName: "shell"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      experiments: {
        outputModule: true
      },      
      plugins: [
        new ModuleFederationPlugin({
  
            library: { type: "module" },

      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          eager: true
        })
      }
        })
      ],
    };
