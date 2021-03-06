import { useEffect } from "react";
import { connect } from "react-redux";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import Block from "../../elements/Block";
import TodoFooter from "./TodoFooter";
import { fetchTodos } from "../../../store/actions/todo";

const Todos = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="container mt-5">
      <Block>
        <TodoHeader/>
        <TodoList/>
        <TodoFooter/>
      </Block>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(null, mapDispatchToProps)(Todos);
