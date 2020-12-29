import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
  transformers: {
    name: 'index.js',
    options: {
      plugins: [
        tailwindcss({ purge: { enabled: true, content: ['test/**/*.html'] } }),
        autoprefixer
      ]
    }
  }
};
