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
	data:{
		todo_list:todo_list
	},
	methods: {
		clear: function() {
			console.log("Begin to clear:");
			var todo_list_new = [];
			var id = 0;
			for (var ids in todo_list) {
				//console.log(todo_list[id].is_finished)
				if (todo_list[id].is_finished === true) {
					todo_list.splice(ids,1)
					//console.log(todo_list_new)
				}
			}
			for (var ids in todo_list){
				todo_list[ids].id = id;
				id++;
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
		if_already_have: is_empty(todo_list),
		finished_list: []
	},
	methods: {
		finish: function() {
			for (var i in todo_list) {
				todo_list[i].is_finished = false;
			}
			console.log(this.finished_list);
			for (var i in this.finished_list) {
				//atodo_list[] = true;
			}
		}
	}
});

var add_todo = new Vue({
	el: '#add_todo',
	data: {
		text: ''
	},
	methods: {
		push_todo: function() {
			if (this.text) {
				todo_list.push({
					id: todo_list.length,
					text: this.text,
					is_finished: false
				});
				this.text = '';
			} else {
				alert("The todo is blank!Plese input the todo item.")
			}
		}
	}
});
