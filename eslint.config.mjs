import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended', // Add Prettier integration),
  ),
  {
    plugins: ['prettier'], // Add Prettier plugin
    rules: {
      'prettier/prettier': 'error', // Treat Prettier issues as errors
    },
  },
];

export default eslintConfig;
