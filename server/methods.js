import { Meteor } from 'meteor/meteor';
import { Todos } from '../imports/api/todos';

Meteor.methods({
  insertTodo(title) {
    Todos.insert({
      done: false,
      title,
    });
  },
});