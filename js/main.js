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
		edits:[],
		search_arr_id : []
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
			var todo_list_new = this.todo_list.filter(function(todo){
				return !todo.is_finished;
			});
			this.todo_list = todo_list_new.slice();
		},
		finish: function(ids) {
			this.todo_list[ids].is_finished = !this.todo_list[ids].is_finished;
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
				if (!this.edits.some(function(id){return id === this.todo.id})){
					this.edits.push(ids);
				}
			}
		},
		push_todo: function() {
			console.log("success");
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
	// watch:{
	// 	text:function(){
	// 		//console.log("====================");
	// 		var search_id = [];
	// 		for (var ids in this.todo_list){
	// 			//console.log(this.todo_list[ids].text.indexOf(this.text))
	// 			if (!(this.todo_list[ids].text.indexOf(this.text) == -1)){
	// 				console.log(ids);
	// 				search_id.push(ids);
	// 			}
	// 		}
	// 		console.log(search_id);
	// 		this.search_arr_id = search_id;
	// 	}
	// }
});

//These are for what I trying use templates instead of directly usage.

// Vue.component('todo-item', {
// 	props: ['todo'],
// 	template: '<li>{{todo.text}}</li>'
// })
