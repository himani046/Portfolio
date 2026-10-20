import { defineConfig } from 'vite';

export default defineConfig({
  // The repository is published as a GitHub Pages project site.
  // Keep root-relative paths for local development and use the repo path in Actions.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Portfolio/' : '/',
});
