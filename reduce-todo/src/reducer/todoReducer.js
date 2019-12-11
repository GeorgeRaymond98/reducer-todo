export const initialState = {
     todos: [
        {
          item: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          item: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
      ]
}

export const reducer = (state, action) => {
      switch(action.type) {
        case "ADD_TODO":
                return {
                  todos: [ ...state.todos,
                    {
                      item: action.payload,
                      completed: false,
                      id: Date.now()
                    }
                  ]
                };
    case "TOGGLE":
            return {
                todos: state.todos.map(todo => {
                if (action.payload === todo.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
                })
            };

    case "CLEAR_TODO":
            return {
                todos: state.todos.filter(todo => !todo.completed)
            };

        default:
          return state
      }
    }