module.exports = {
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}':
    'prettier --config ./template/_prettierrc.js --debug-check --ignore-path=template/.prettierignore -c',
  '*.{css,less,scss}': 'stylelint --config ./template/.stylelintrc.js',
  '*.{js,jsx,ts,tsx}': [() => 'eslint -c ./template/_eslintrc.js'],
};
