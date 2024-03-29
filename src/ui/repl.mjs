import promptSync from 'prompt-sync'

import { insertQueryHandler } from '../parser/insert.mjs'
import { selectQueryHandler } from '../parser/select.mjs'

const prompt = promptSync({ sigint: true })

const actions = {
    clear: () => console.clear(),
    insert: command => console.table(insertQueryHandler(command)),
    select: command => console.table(selectQueryHandler(command)),
}

function handleCommand(command) {
    if (String(command).slice(0, 6).trim() in actions) {
        actions[String(command).slice(0, 6).trim()](command)
    } else {
        console.log("Query Not Recognized!")
    }

    const input = prompt("fake-rdbms > ")
    handleCommand(input)
}

console.clear()
const input = prompt("fake-rdbms > ")
handleCommand(input)