var todo_list = [];
//todos = {{id:num.,text:"text",is_finished:true/false}}

function is_empty(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

var h1 = new Vue({
	el: '#h1',
	data: {

	}
});

var clear_finished = new Vue({
	el: '#clear_finished',
	methods: {
		clear: function() {
			console.log("Begin to clear:");
			var todo_list_new = [];
			var id = 0;
			for (var todo in todo_list) {
				
				if (todo.is_finished === false) {
					todo_list_new.push({
						id: id,
						text: todo.text,
						is_finished : false
					});
					id++;
				}
				todo_list = todo_list_new;
			}
		}
	}
});

//These are for we use templates instead of directly usage.

// Vue.component('todo-item', {
// 	props: ['todo'],
// 	template: '<li>{{todo.text}}</li>'
// })

var todos_display = new Vue({
	el: '#todos_display',
	data: {
		todo_list: todo_list,
		this_id: 0,
		if_already_have: is_empty(todo_list)		
	}
	// methods: {
	// 	change_state: function() {
	// 		var id = this.this_id;
	// 		console.log(id);
	// 		todo_list[id].is_finished = true;
	// 	}
	//}
});

var add_todo = new Vue({
	el: '#add_todo',
	data: {
		text: ''
	},
	methods: {
		push_todo: function() {
			todo_list.push({
				id: todo_list.length,
				text: this.text,
				is_finished: false
			});
			this.text = '';
		}
	}
});
