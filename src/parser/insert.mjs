import { STORAGE } from '../engine/storage.mjs'
import { getCreateQueryDetails } from './helper.mjs'

export function insertQueryHandler(query) {
    const queryObject = getCreateQueryDetails(query)
    if (queryObject == null) return 'Invalid Query'

    const sanitizedValues = []
    const values = queryObject.values.replace(/(\(|\))/g, "").split("'")
    const keys = queryObject.keys.replace(/(\(|\))/g, "").split(",").map(e => String(e).trim())

    for (const value of values) {
        let sanitized = String(value).trim()
        if (sanitized.length === 0 || sanitized == ",") continue
        sanitizedValues.push(sanitized)
    }

    if (keys.length != sanitizedValues.length) {
        return "Key quantities do not match value quantities. Do not forget the right format: INSERT INTO schools (name, email) VALUES ('School1', 'school@edu.com')"
    }

    let obj = {}
    STORAGE[queryObject.table] = STORAGE[queryObject.table] || []

    for (let index = 0; index < keys.length; index++) {
        obj = { ...obj, [keys[index]]: sanitizedValues[index] }
    }

    STORAGE[queryObject.table].push(obj)

    return STORAGE[queryObject.table].length
}