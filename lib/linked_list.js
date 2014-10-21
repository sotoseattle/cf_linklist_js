(function(exports) {
  function Node(val) { // very simple object with no functions
    this.val = val;
    this.nexxt = null;
    this.prev = null;
  }

  function LinkedList(head) {
    this.head = head;
  }

  LinkedList.prototype = {
    insert: function(node) {
      node.nexxt = this.head;
      node.prev = null;

      this.head.prev = node;
      this.head = node;
    },

    remove: function(node) {
      n = this.head;
      while (n) {
        if (n == node) {
          n.nexxt.prev = n.prev;
          n.prev.nexxt = n.nexxt;
          return n.val;
        }
        n = n.nexxt;
      }
      return null;
    },

    search: function(value) {
      n = this.head;
      while (n) {
        if (n.val == value) { return n; }
        n = n.nexxt;
      }
      return null;
    },

    size: function() {
      var i = 0;
      n = this.head;
      while (n) {
        i++;
        n = n.nexxt;
      }
      return i;
    },

    to_s: function() {
      var arr = [];
      n = this.head;
      while (n) {
        arr.push(n.val);
        n = n.nexxt;
      }
      return arr.join(', ');
    }
  };

  exports.Node = Node;
  exports.LinkedList = LinkedList;
})(this);
