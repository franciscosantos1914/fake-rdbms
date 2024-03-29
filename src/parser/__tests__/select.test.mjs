import assert from 'node:assert'
import { describe, it, mock, beforeEach } from 'node:test'

import { selectQueryHandler } from '../select.mjs'

describe("selectQueryHandler", () => {

    beforeEach(() => mock.restoreAll())

    it("should return invalid query message", ctx => {
        const data = selectQueryHandler()
        assert.equal(data, "Invalid Query")

        {
            const data = selectQueryHandler({})
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler([])
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler("select * ")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler("select * from")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler("from")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler("select where from where")
            assert.equal(data, "Invalid Query")
        }

        {
            const data = selectQueryHandler("* from users")
            assert.equal(data, "Invalid Query")
        }
    })
    it("should return not such table info", () => {
        const data = selectQueryHandler("select * from users")
        assert.equal(data, "No Such Table")
    })
})