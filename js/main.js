//todos = {{id:num.,text:"text",is_finished:true/false}}

function is_empty(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

var todos = new Vue({
	el: '#todos',
	data: {
		todo_list: [],
		if_already_have: is_empty(this.todo_list),
		finished_list: [],
		text: "",
		edits:[]
	},
	methods: {
		init:function(){
			for (i=0;i<10;i++){
				this.todo_list.push({
					id: this.todo_list.length,
					text: i,
					is_finished: false
				});
			}
		},
		re_join_list: function(){
			var id = 0;
			for (var ids in this.todo_list) {
				this.todo_list[ids].id = id;
				id++;
			}
		},
		clear: function() {
			this.re_join_list();
			var id = 0;
			for (var ids in this.finished_list) {
				console.log(this.todo_list[ids].is_finished)
				if (this.todo_list[ids].is_finished === true) {
					console.log(ids);
					this.todo_list.splice(this.finished_list[ids], 1);
				}
			}
			this.re_join_list();
		},
		finish: function() {
			for (var i in this.todo_list) {
				this.todo_list[i].is_finished = false;
			}
			console.log(this.finished_list);
			for (var i in this.finished_list) {
				console.log(i);
				this.todo_list[i].is_finished = true;
			}
		},
		delete_item: function(ids) {
			console.log(ids);
			this.re_join_list();
			this.todo_list.splice(ids,1);
			this.re_join_list();
		},
		edit:function(type,ids){
			if(type === 0){
				this.edits.splice(this.edits.indexOf(ids),1);
			}
			else if(type ===1){
				this.edits.push(ids);
			}
		},
		push_todo: function() {
			if (this.text) {
				this.todo_list.push({
					id: this.todo_list.length,
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

//These are for what I trying use templates instead of directly usage.

// Vue.component('todo-item', {
// 	props: ['todo'],
// 	template: '<li>{{todo.text}}</li>'
// })
