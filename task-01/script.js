new Vue({
  el: '#app',
  data: {
    selected: 'Sort by price',
    items: [
      {id: 1, val: 'Sort by price'},
      {id: 2, val: 'Sort by name'},
      {id: 3, val: 'Sort by relevance'}
    ]
  },
  watch: {
  	selected: function (value) {
    	if (!this.findItemWith(value, 'val')) {
      	this.updateDynamicOption(value);
      }
    }
  },
  methods: {
  	findItemWith: function (value, prop) {
    	for (var item in this.items) {
  			if (this.items[item][prop] === value) {
          return this.items[item];
        }
    	}
      return false;
    },
    updateDynamicOption: function(value) {
      item = this.findItemWith(true, 'dynamic');
    	item.val = value;
    }
  }   
});