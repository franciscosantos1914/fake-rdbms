import { STORAGE } from '../engine/storage.mjs'
import { getSelectQueryDetails } from './helper.mjs'

export function selectQueryHandler(query) {
    const queryObject = getSelectQueryDetails(query)
    if (queryObject == null) return 'Invalid Query';

    let array = []
    // Handle From
    const data = STORAGE[queryObject?.from]

    if (!Array.isArray(data)) return 'No Such Table'

    // Handler Select
    switch (queryObject.select) {
        case '*':
            array = data
            break;
        default:
            const splitted = queryObject.select.split(",")
            for (const mapper of splitted) array.push(...data.map(e => e[String(mapper).trim()]))
            break;
    }

    // Handle Limit
    array = array.slice(0, queryObject.limit || array.length)

    // Handle Where
    //const rmWhereStr = queryObject.where.replace(/where/ig, "")
    

    // Handle Order By
    array.sort((a, b) => {
        let orderKey = queryObject.orderBy.split(" ")[2]
        if (/asc/ig.test(queryObject.orderBy)) {
            return a[orderKey] - b[orderKey]
        } else return b[orderKey] - a[orderKey]
    })
    
    return array
}