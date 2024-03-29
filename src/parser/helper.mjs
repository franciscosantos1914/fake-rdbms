export function getSelectQueryDetails(query) {
    const regex = /\bSELECT\b\s+\*\s+\bFROM\b\s+\w+\s*(\bWHERE\b\s+\w+\s*=\s*\d+)?\s*(\bORDER BY\b\s+\w+\s+(ASC|DESC))?\s*(\bLIMIT\b\s+\d+)?/i

    const str = String(query).toLowerCase().trim()

    if (!regex.test(str)) return

    const match = str.match(regex)
    const columns = str.split("from")[0].split(" ")[1]
    const table = str.split("from")[1].trimStart().split(" ")[0]

    return {
        from: table,
        select: columns,
        where: match[1] || "",
        limit: match[4] || "",
        orderBy: match[2] || "",
    }
}

export function getCreateQueryDetails(query) {
    const str = String(query).trim().toLowerCase()
    const regex = /INSERT\s+INTO\s+([^\s]+)\s+\(([^)]+)\)\s+VALUES\s+\(([^)]+)\)/ig

    if (!regex.test(str)) return

    const split = str.split("values")
    const values = split[1].trim()
    const keys = `(${split[0].split("(")[1]}`.trim()
    const table = split[0].split("(")[0].trim().split(" ")[2]

    return { table, keys, values }
}