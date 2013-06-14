TaskList.Task = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	estHours: DS.attr('number')
});

TaskList.Task.FIXTURES = [
	{
		id: 1,
		title: 'Task 1',
		estHours: '7',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Task 2',
		estHours: '12',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Task 3',
		estHours: '100',
		isCompleted: false
	}
]