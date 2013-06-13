App.Router.map(function(){
	this.resource('task-list', {path: '/'});
	this.resource('tasks')
});

App.TasksRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render(outlet: 'left');
	}
});