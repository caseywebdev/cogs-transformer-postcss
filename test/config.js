import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
  transformers: {
    name: 'index.js',
    options: {
      plugins: [
        tailwindcss({ mode: 'jit', purge: ['test/**/*.html'] }),
        autoprefixer
      ]
    }
  }
};
