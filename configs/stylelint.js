// Examples of BEM selector matching: https://regexr.com/6dpas
const bemSelector =
  /^(?:(?<namespace>[a-z]{3})-)?(?:(?<type>(?:[olcu]|has|is))-)(?<block>(?:[a-z0-9]+(?:-[a-z0-9]+)*))(?:__(?<element>(?:[a-z0-9]+(?:-[a-z0-9]+)*)))?(?:--(?<modifier>(?:[a-z0-9]+(?:-[a-z0-9]+)*)))?(?:\.(?<state>(?:[a-z0-9]+(?:-[a-z0-9]+)*)))?/;

// Examples of nested selector matching: https://regexr.com/6dplr
const nestedSelector = /&(\.|:{1,2})[a-z]+((-[a-z]+)*)?(:{1,2}[a-z]+((-[a-z]+)*)?)?/;

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    'at-rule-no-unknown': null,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'selector-class-pattern': [
      bemSelector,
      {
        message: `Expected class selector to match Unilver Online conventions (see documentation)`,
        severity: 'error',
      },
    ],
    'selector-nested-pattern': [
      nestedSelector,
      {
        message: `Expected nested selector to match Unilver Online conventions (see documentation)`,
        severity: 'error',
      },
    ],
  },
};
