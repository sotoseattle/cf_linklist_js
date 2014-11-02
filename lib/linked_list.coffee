Node = (val) ->
  @.val = val
  @.nexxt = null
  @.prev = null


LinkedList = (head) ->
  @.head = head


LinkedList.prototype =
  insert: (node) ->
    node.nexxt = @.head
    node.prev = null
    @.head.prev = node
    @.head = node

  remove: (node) ->
    n = @.head;
    while n
      if (n == node)
        n.nexxt.prev = n.prev
        n.prev.nexxt = n.nexxt
        return n.val
      n = n.nexxt
    null

  search: (value) ->
    n = @.head
    while (n)
      return n if (n.val == value)
      n = n.nexxt
    null

  size: () ->
    i = 0
    n = @.head
    while n
      i++
      n = n.nexxt
    i

  to_s: () ->
    arr = []
    n = @.head
    while n
      arr.push(n.val)
      n = n.nexxt
    arr.join(', ')

module.exports =
  node: Node,
  linked_list: LinkedList
