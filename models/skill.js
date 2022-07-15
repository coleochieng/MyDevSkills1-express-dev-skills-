const todos = [
    {id: 125223, todo: 'HTML', done: true},
    {id: 127904, todo: 'CSS', done: false},
    {id: 139608, todo: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update
  };
  
  function update(id, updatedTodo) {
    id = parseInt(id);
    const todo = todos.find((todo) => todo.id === id);
    // Merge the updatedTodo's properties into the 
    // existing todo object's properties
    Object.assign(todo, updatedTodo);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const todoIdx = todos.findIndex((t) => t.id === id);
    todos.splice(todoIdx, 1);
  }
  
  function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return todos.find((todo) => todo.id === id);
  }
  
  function getAll() {
    return todos;
}