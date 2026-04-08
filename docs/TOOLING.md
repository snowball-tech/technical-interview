# Tooling

## Dependencies

<details>
  <summary>Discussions about some dependencies</summary>

This chapter serves as an annotation to `package.json` and the dependencies of
the project.

The goal is not to explain the ins and outs of every dependency, but rather to
serve as useful history and background to some of the choices made — and why we
have some of the dependencies in the project.

<details>
  <summary>Lodash</summary>

Using `lodash-es` had a severe performance penalty on the Jest tests, since
`lodash-es` uses an index.js file which contains references to all of the
operators this had to be compiled for every test file. There is also the initial
performance penalty of having to transform from ESM to CJS.

The performance of `lodash-es` is significantly worse, and only becomes worse as
more tests are run.

Also, `lodash-es` is not tree-shakeable, so it will always be included in the
final bundle.

That's why the preferred way of using Lodash is by importing functions through
their dedicated export file, e.g.:

```js
import isEmpty from 'lodash/fp/isEmpty'
```

> Note that if you are using TypeScript and want to enjoying typeguards in some
> Lodash functions (like `isEmpty` or `isString`) you should consider importing
> it from the `fp` submodule as demonstrated above.

</details>
</details>

## Convention enforcement

This repository is based on packages offered in the
[Glacier](https://github.com/snowball-tech/glacier) mono-repository and
distributed as open-source NPM packages in the `@snowball-tech` scope.

Those package offers out of the box:

- Linting based on [ESLint](https://eslint.org/) with
  [`@snowball-tech/eslint-snowball-config`](https://www.npmjs.com/package/@snowball-tech/eslint-snowball-config).
  It automatically detects your dependencies and activate rules accordingly.  
  Of course, you can still configure/disable/extend the linting configuration at
  the whole repository level
  _(using the [`eslint.config.mjs`](../eslint.config.mjs) file at the root)_ or at each
  package/app level
  _(by adding a `eslint.config.mjs` file in the appropriate folder)_.  
  See
  [the package documentation](https://github.com/snowball-tech/glacier/tree/main/packages/eslint-snowball-config/README.md)
  for more information.
- Formatting based on [Prettier](https://prettier.io) with
  [`@snowball-tech/prettier-config`](https://www.npmjs.com/package/@snowball-tech/prettier-config).
  Of course, you can still configure/disable/extend the formatting configuration
  at the whole repository level
  _(using the [`.prettierrc.js`](../.prettierrc.js) file at the root)_
  or at each package/app level
  _(by adding a `.prettierrc.js` and/or a `.prettierignore` file in the appropriate folder)_.  
  You can also add plugins in each of your package/app according to your needs.
  See
  [the package documentation](https://github.com/snowball-tech/glacier/tree/main/packages/prettier-config/README.md)
  for more information.

We also have those conventions enforced:

1. as a pre-commit hook, that check the format, errors and warning before
   committing the code (see [`.husky/pre-commit`](../.husky/pre-commit)),
2. during Continuous Integration, by running a non-changing linting step
   (`yarn run -T lint` and `yarn run -T format`).

> **Note:** while these steps ensure our codebase follows our coding standards,
> it is recommended to enable automatic fixing in your IDE, to reduce friction
> during commit.

<details>
  <summary>Why no `lint-staged`</summary>

We tried to integrate [`lint-staged`](https://github.com/okonet/lint-staged) in
the repository to automatically fix linting and formatting errors and warning as
a pre-commit hooks.

However this does not behave really nicely with mono-repository and the
dependency detection of our linter, making it skip some errors or reports some
false positive.

So instead, we really on the basic `husky` hooks to run the linter and the
formatter during pre-commit.

</details>

## VSCode

### Plugins

The [`.vscode/extensions.json`](../.vscode/extensions.json) file contains a list of
recommended plugins for you to use. When you'll load the repository for the
first time in VSCode, your IDE will offer you to install the one you don't have.

#### Prettier

1. Install
   [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
1. Enable **Editor: Format on Save** in your Workspace settings.
1. Make sure that the proper version (> 2.0) of Prettier is used.
   To do so, you _may_ have to enforce the usage of the
   [@snowball-tech/prettier-config](https://github.com/snowball-tech/glacier/packages/prettier-config)
   Prettier binary:
   `"prettier.prettierPath": "./node_modules/@snowball-tech/prettier-config/node_modules/prettier",`
1. Test: edit a `.md`, `.js`, `.tsx` or any other supported file (ex: jump
   multiple lines), and save your file.

#### ESLint

1. Install
   [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Enable auto-fix on save by adding the following to
   `Editor: Code Actions on Save` in your workspace settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Settings

There is also a [`.vscode/settings.json`](../.vscode/settings.json) that is used to
shared the recommended setting for VSCode.

Please be carefull to not add anything specific to your personal use case in
this file.

3. Test: edit a `.js`, `.vue` (ex: add unwanted spaces), and press
   <kbd>⌘</kbd> + <kbd>S</kbd>.

#### Recommended Visual Studio Code settings

```json
{
  "eslint.validate": ["javascript", "typescript"],
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "javascript.preferences.quoteStyle": "single",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
