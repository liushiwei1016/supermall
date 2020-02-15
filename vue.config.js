module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'css': '@/assets/css',
        'images': '@/assets/images',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/_public.scss";`
      }
    }
  }
};

