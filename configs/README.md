# Configs

Shared configs for consitentency across packages.

## Naming conventions

### Within this directory

Config files **within this directory** should follow the `{product}.{variant}.{ts,js,cjs}` pattern.

```
foo.ts
bar.base.js
bar.variant.cjs
```

If a config requires breaking out into multiple files, nest as such:

```
configs/
  product/
    index.{ts,js,cjs}
    foo.{ts,js,cjs}
    bar.{ts,js,cjs}
```

### Within the monorepo

It is prefered that the `.{product}rc.{js,cjs}` pattern is used where possible, followed by
`{product}.config.{ts,js,cjs}` when it is not.

## Example usage

### Typescript

```TS
import { defineConfig } from('product');
import commonProductConfig from('../../configs/product.ts');

export default defineConfig({
  ...commonProductConfig,
  {
    customThing: 'theValue'
  }
})
```

### ES Module

```JS
import commonProductConfig from('../../configs/product.js');

export default {
  ...commonProductConfig,
  {
    customThing: 'theValue'
  }
}
```

### Common JS

```JS
const commonProductConfig = require('../../configs/product.cjs');

module.exports = {
  ...commonProductConfig,
  {
    customThing: 'theValue'
  }
}
```

### Extends

`extends` can also be used if the config supports it.

```JS
module.exports = {
  extends: ['../../configs/product.cjs'],
};
```
