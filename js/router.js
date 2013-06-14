TaskList.Router.map(function(){
	this.resource('taskList', { path: '/'});
});

TaskList.TaskListRoute = Ember.Route.extend({
	model: function() {
		return TaskList.Task.find();
	}
})