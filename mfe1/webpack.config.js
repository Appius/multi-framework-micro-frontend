const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const shareAll = mf.shareAll;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe1"
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

      // For remotes (please adjust)
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
        './bootstrap': './src/app/bootstrap.module.ts',
      },

      // For hosts (please adjust)
      /*
      remotes: {
          'mfe1': "mfe1@http://localhost:3000/remoteEntry.js" 
      },
      */

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
