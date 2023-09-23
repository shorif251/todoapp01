const {username, password} = process.env;

export const connestionTodoApi = `mongodb+srv://${username}:${password}@cluster0.n21dyrt.mongodb.net/todosappDB?retryWrites=true&w=majority` ;

