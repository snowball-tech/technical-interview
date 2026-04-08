module.exports = {
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,json,json5,jsonc,htm,html,xhtml,html5,yml,yaml}':
    [
      'eslint --cache --fix',
      'prettier --ignore-unknown --ignore-path .gitignore --cache --write',
    ],
}
