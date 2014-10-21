# Linked List

The code is similar to the Light Linked List from the ruby assignment. It uses two types of objects, a Node and a Linked List.

The Node only holds properties as val, nexxt and prev. The Linked List holds a reference to the first node in the list (head) and implements a bunch of functions.

I coded both classes with the Constructor Patterns, and in the case of the Linked List I extended its behavior through the prototype object of its constructor.

I encapsulated all the code inside a module so it was easy to call from my tests. I used Chai with spec syntax.

In terms of code the only differences from the ruby implementation are:

1- By having each node keeping track of the nexxt and prev it chains to, the remove code is simpler as before I needed a secondary pointer to keep track of the previous node.

```javascript
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
```

2- I haven't got time to think through how to create a walk function that admits another function as argument so I can reuse the basic functionality of while loop and keep it all DRY.

```javascript
  walk: function(block_?) {
    n = this.head;
    while (n) {
      // yield
      n = n.nexxt;
    }
  },
```
