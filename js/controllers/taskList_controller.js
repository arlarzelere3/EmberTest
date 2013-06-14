TaskList.TaskListController = Ember.ArrayController.extend({
	createTask: function() {
		//Get the title from the text field for the new task
		var title = this.get('newTitle');
		var hours = this.get('newHours');
		if (!title.trim())
		{
			return;
		}

		//Create the new Task model
		var task = TaskList.Task.createRecord({
			title: title,
			isCompleted: false,
			estHours: hours
		});

		//Clear the new task text field
		this.set('newTitle', '');
		this.set('newHours', '1');

		//Save the new model
		task.save();
	}
})