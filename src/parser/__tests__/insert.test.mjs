import assert from 'node:assert'
import { describe, it } from 'node:test'

import { insertQueryHandler } from '../insert.mjs'

describe("insertQueryHandler", () => {
    it("should return invalid query message", ctx => {
        const data = insertQueryHandler()
        assert.equal(data, "Invalid Query")

        {
            const data = insertQueryHandler({})
            assert.equal(data, "Invalid Query")
        }

        {
            const data = insertQueryHandler([])
            assert.equal(data, "Invalid Query")
        }

        {
            const data = insertQueryHandler("insert * ")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = insertQueryHandler("insert into")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = insertQueryHandler("values")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = insertQueryHandler("insert into users values")
            assert.equal(data, "Invalid Query")
        }
    })
})