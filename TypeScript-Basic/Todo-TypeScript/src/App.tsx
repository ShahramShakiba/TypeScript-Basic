import Todos from './components/Todos';
import Todo from './models/todo';

export default function App() {
  const todos = [new Todo('learn react'), new Todo('learn typescript')];

  return (
    <>
      <Todos items={todos} />
    </>
  );
}
