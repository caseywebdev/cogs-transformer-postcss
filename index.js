import postcss from 'postcss';

export default async ({ file, options: { plugins, ...options } }) => {
  const { css } = await postcss(plugins).process(file.buffer, {
    ...options,
    from: file.path
  });
  return { buffer: Buffer.from(css) };
};
