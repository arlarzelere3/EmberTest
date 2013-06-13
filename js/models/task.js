TaskList.Task = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	dueDate: DS.attr('date')
});

TaskList.Task.FIXTURES = [
	{
		id: 1,
		title: 'Task 1',
		dueDate: '2013-01-01'
	},
	{
		id: 2,
		title: 'Task 2',
		dueDate: '2013-02-02'
	},
	{
		id: 3,
		title: 'Task 3',
		dueDate: '2013-03-03'
	}
]