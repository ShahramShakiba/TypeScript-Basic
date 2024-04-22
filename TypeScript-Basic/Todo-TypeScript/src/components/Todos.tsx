const Todos: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  );
};

export default Todos;

/* Type Annotations - React.FC
React.FC is a type that stands for "Function Component" in React. It is a generic type that allows you to specify the props that a function component will accept.

? Using React.FC can be helpful for a number of reasons:
01. It provides type safety for the props that a component expects to receive. This can help catch bugs early on and make your code easier to understand.

02. It makes it easier to refactor your component's props. For example, if you want to rename a prop, the TypeScript compiler will catch any places where that prop is used and help you update them.

03. It makes it easier to see the expected shape of a component's props just by looking at its type definition.
*/
