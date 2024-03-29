## Fake RDBMS

### About

This Node.js application allows the manipulation of SQL queries dynamically, converting them into operations on an in-memory database. The application supports `INSERT` and `SELECT` operations and interacts with the user through a Command Line Interface (CLI) using the `prompt-sync` library.

### Key Features

- **SQL Query Manipulation**: The application accepts `INSERT` and `SELECT` SQL queries, converting them into operations on the in-memory database.
- **In-Memory Database**: It uses a JavaScript object as an in-memory database, enabling fast and efficient operations.
- **Command Line Interface (CLI)**: Interacts with the user through a CLI, utilizing the `prompt-sync` library to receive and present information.

### How to Use

1. **Installation**:
   - Clone the repository.
   - Run `npm install` to install the dependencies.

2. **Execution**:
   - Start the application with `npm run start`.
   - The CLI will prompt you to enter a SQL query.

3. **Supported Operations**:
   - **INSERT**: To insert data into the in-memory database, input an `INSERT` SQL query. 
  <br /> For example: `INSERT INTO users (name, age) VALUES ('John Doe', 30)`.
   - **SELECT**: To retrieve data from the in-memory database, input a `SELECT` SQL query. 
  <br /> For example: `SELECT * FROM users WHERE age > 25`.

### Usage Examples

- **Insert Data**:
`INSERT INTO users (name, age) VALUES ('Jane Doe', 28)`
- **Retrieve Data**:
`SELECT * FROM users WHERE age > 25`

### Security Considerations

- The application does not perform input validation or string escaping, so it's important to ensure that the entered SQL queries are secure to prevent SQL injection attacks.
