import assert from 'node:assert'
import { describe, it } from 'node:test'

import { getSelectQueryDetails, getCreateQueryDetails } from '../helper.mjs'

describe("getSelectQueryDetails", () => {
    it("should return all details of the complete query", () => {
        const query = "SELECT * FROM users WHERE id = 1 ORDER BY id DESC LIMIT 10"

        const details = getSelectQueryDetails(query)
        assert.deepEqual(details, {
            select: "*",
            from: "users",
            limit: "limit 10",
            where: "where id = 1",
            orderBy: "order by id desc",
        })
    })

    it("should return all details of the incomplete query with no limit", () => {
        const incompleteQuery = "SELECT * FROM users WHERE id = 1 ORDER BY id DESC"

        const details = getSelectQueryDetails(incompleteQuery)
        assert.deepEqual(details, {
            select: "*",
            from: "users",
            limit: "",
            where: "where id = 1",
            orderBy: "order by id desc",
        })
    })

    it("should return all details of the incomplete query with no orderBy", () => {
        const incompleteQuery = "SELECT * FROM users WHERE id = 1"

        const details = getSelectQueryDetails(incompleteQuery)
        assert.deepEqual(details, {
            select: "*",
            from: "users",
            limit: "",
            where: "where id = 1",
            orderBy: "",
        })
    })

    it("should return all details of the incomplete query with no orderBy", () => {
        const incompleteQuery = "SELECT * FROM users"

        const details = getSelectQueryDetails(incompleteQuery)
        assert.deepEqual(details, {
            select: "*",
            from: "users",
            limit: "",
            where: "",
            orderBy: "",
        })
    })
})

describe("getCreateQueryDetails", () => {
    it("should return all details of the query", () => {
        const query = "INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway')"
        const details = getCreateQueryDetails(query)
        assert.equal(details.table, 'customers')
        assert.equal(/(CustomerName, ContactName, Address, City, PostalCode, Country)/i.test(details.keys), true)
    })
})