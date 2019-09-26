# Totalizer Translator

> A React component that renders translated totalizer property from Checkout's OrderForm

## Setup

Through **vtex.io**:

Add the following dependency to your `manifest.json` dependencies:

```
"vtex.totalizer-translator": "1.x"
```

## Usage

```js
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

<TranslateTotalizer id="Discounts" />
// Discount

<TranslateTotalizer id="Items" />
// Subtotal

<TranslateTotalizer id="Foo Custom" />
// Foo Custom

const totalizerObject = {
  id: 'CustomTax',
  name: 'COFINS-RETIDO',
  value: 29.97,
}

<TranslateTotalizer totalizer={totalizerObject}/>
// COFINS-RETIDO
```

### Params

- **id** | Type `string` | Id of the totalizer to be translated
- **totalizer** | Type `TotalizerShape` | The totalizer object

**TotalizerShape**:

```ts
{
  id: string
  name: string
  value: number
}
```

### Returns

- **Translated value** | Type `string`

## Testing

```sh
yarn test
```
