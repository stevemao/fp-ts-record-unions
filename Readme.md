> fp-ts record unions

```ts
import union from 'fp-ts-record-unions'

assert.deepStrictEqual(union([{
    foo: 'foo',
}, {
    bar: 'bar'
}]), {
    foo: 'foo',
    bar: 'bar'
})
```
