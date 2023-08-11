import React from "react";
import Layout from "../components/layout";
import Todo from "../components/todo";
import DisplayTodo from "../components/displaytodo";
import Seo from "../components/seo";

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

export const Head = () => <Seo title="Todo" />;

export default Todos;
