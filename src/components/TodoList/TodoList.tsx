import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedTodoId: number,
  selectTodo: (id: number) => void,
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodoId,
  selectTodo,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(({ id, title, completed }) => (
          <tr
            data-cy="todo"
            className="has-background-info-white"
            key={id}
          >
            <td className="is-vcentered">{id}</td>

            <td className="is-vcentered">
              {completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>

            <td className="is-vcentered is-expanded">
              <p className={
                classNames({
                  'has-text-success': completed,
                  'has-text-danger': !completed,
                })
              }
              >
                {title}
              </p>
            </td>

            <td className="has-text-right is-vcentered">
              {selectedTodoId === id
                ? (
                  <button
                    data-cy="selectButton"
                    className="button is-link"
                    type="button"
                    onClick={() => selectTodo(0)}
                  >
                    <span className="icon">
                      <i className="far fa-eye-slash" />
                    </span>
                  </button>
                ) : (
                  <button
                    data-cy="selectButton"
                    className="button"
                    type="button"
                    onClick={() => selectTodo(id)}
                  >
                    <span className="icon">
                      <i className="far fa-eye" />
                    </span>
                  </button>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
