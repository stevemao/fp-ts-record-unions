import union from './'
import * as assert from 'assert'

assert.deepStrictEqual(union([{
    foo: 'foo',
}, {
    bar: 'bar'
}]), {
    foo: 'foo',
    bar: 'bar'
})

assert.deepStrictEqual(union([{
    foo: 'foo',
}, {
    bar: 'bar'
}, {
    baz: 'baz'
}, {
    foo: 'foo2'
}]), {
    foo: 'foo2',
    bar: 'bar',
    baz: 'baz'
})
