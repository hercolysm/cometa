import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Checkbox, Header, Segment, Button, Icon, Container} from 'semantic-ui-react';
import {withTracker} from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

/*const Todos = new Mongo.Collection('todos');*/
import { Todos } from '../imports/api/todos';
console.log(Todos);
const items = [
	{_id: 1, done: false, title: 'One'},
	{_id: 2, done: true, title: 'Two'},
]

const items2 = [
	{_id: 1, done: true, title: 'One'},
	{_id: 2, done: false, title: 'Two'},
]

const App = () => (
	<Container className='App'>
		<TodoItems titulo='Lista 1' items={items}/>
		<TodoItems titulo='Lista 2' items={items2}/>
		<TodoItemsDB titulo='Lista DB'/>
	</Container>
)

const TodoItems = props => (
	<React.Fragment>
		<Header as='h2' attached='top'>
			TODO List - {props.titulo}
		</Header>
		<Segment attached>
		{
			props.items.map((item, idx) => 
				<div key={idx}>
					<Checkbox checked={item.done} label={item.title} />
				</div>
			)
		}
		</Segment>
	</React.Fragment>
)

const TodoItemsDB = withTracker( () => {
  const todosHandle = Meteor.subscribe('todos');
  const loading = !todosHandle.ready();
  return {
    loading,
    items: Todos.find().fetch(),
  };
})(TodoItems);

export default App