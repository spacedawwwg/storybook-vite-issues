# Developing packages for the monorepo

Multiple packages are nested within directories/collections to keep the repo tidier and collected
(e.g `core` contains `components` and `styles`).

New packages should be discussed with the development team before being added.

## Package naming conventions

Naming packages consistently, logically and in a predictable way will distinguish similar packages
from one another at a glance.

Package names should always be lowercase and hyphenated.

### Examples:

```JS
// packages/utils
@project-name/utils

// packages/core/components
@project-name/core-components

// packages/website/corporate
@project-name/website-corporate

// packages/sanity/studio/corporate
@project-name/sanity-studio-corporate

// packages/app/quiz 
@project-name/app-quiz
```

## Adding a new package

Create a new feature branch and add a new package to the `/packages` directory.

Run `yarn init` from within the new package directory (https://yarnpkg.com/cli/init).

All monorepo packages should be set to private.

When the package is ready, commit the changes and open a pull request. Once the pull request has
been merged, switch to `main` and run `git pull` followed by `yarn install`.

The basic settings of the `package.json` should look this:

```JSON
{
  "name": "@project-name/package-name",
  "version": "0.0.0",
  "private": true,
  "license": "UNLICENSED"
}
```

## Package documentation

Each package should have its own README.md documenting such things as third party integrations,
URL's to external documentation and environment variables/secret keys. test **DO NOT** include
secret keys directly in any package.
