TaskList.TaskListController = Ember.ObjectController.extend({
	isCompleted: function(key, value){
		var model = this.get('model');

		if (value === undefined) {
			//property is being used as a getter
			return model.get('isCompleted');
		} else {
			//property is being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
})