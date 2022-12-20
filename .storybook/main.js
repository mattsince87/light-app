module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    docsPage: "automatic"
  },
  webpackFinal: async config => {
    // this modifies the existing image rule to exclude .svg files
    // since we want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find(rule => rule.test.test('.svg'))
    imageRule.exclude = /\.svg$/

    // configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
};