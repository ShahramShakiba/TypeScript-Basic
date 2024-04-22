// Todo Object Definition
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

/* Data Modal 
* Data models are models that help organize the internal data relations of an element. 

* It is widely used across coding languages and is an essential tool to represent "what data" and "what format" needs to be used. 

- what different kinds of data where are working here for this project, like:
  - id
  - text
  - author
  - date
  - ...
*/
