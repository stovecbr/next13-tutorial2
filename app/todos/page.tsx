import Link from "next/link";

// type Todo = {
//   title: string;
// };

// async function getData() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));  //https://reffect.co.jp/react/next-js-13-app#loadingtsx

  // const res = await fetch("http://localhost:3000/api/todos"
  // ,{
  //   next: {
  //     revalidate: 5000,
  //   }, //動画で紹介されているコード。2回め更新かけるとloading...出ない
  // }
  // );
  // return res.json();
// }

// export default async function Page() {
//   const todos: Todo[] = await(getData());

//   return (
//     <>
//       <h1>Todos</h1>
//       {todos.map((todo) => (
//         <div key={todo.title}>{todo.title}</div>
//       ))}
//       <Link href="/">Home</Link>
//     </>
//   );
// }

