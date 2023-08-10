import React from "react";
import Layout from "../components/layout";
import Todo from "../components/todo";
import DisplayTodo from "../components/displaytodo";

const Todos = () => {
  return (
    <Layout>
      <div>
        <Todo />
        <br />
        <DisplayTodo />
      </div>
    </Layout>
  );
};

export default Todos;
