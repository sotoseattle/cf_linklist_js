var should = chai.should();

describe('LinkedList#insert and LinkedList#size', function(){
  var a = new Node('A');
  var ll = new LinkedList(a);
  it('insert into an empty list', function(){
    ll.head.should.equal(a);
    should.equal(ll.head.nexxt, null);
    should.equal(ll.head.prev, null);
    ll.size().should.equal(1);
  });

  var b = new Node('B');
  it('add a second element', function(){
    ll.insert(b);
    ll.head.nexxt.should.equal(a);
    a.prev.should.equal(b);
    ll.size().should.equal(2);
  });

  it('add two more elemente', function(){
    var c = new Node('C');
    var d = new Node('D');
    ll.insert(b);
    ll.insert(c);
    ll.insert(d);
    ll.size().should.equal(4);

    ll.head.should.equal(d);
    d.nexxt.should.equal(c);
    c.nexxt.should.equal(b);
    b.nexxt.should.equal(a);

    a.prev.should.equal(b);
    b.prev.should.equal(c);
    c.prev.should.equal(d);
    should.equal(d.prev, null);
  });
});

describe('LinkedList#to_s', function(){
  it('output to elements values in CSV', function(){
    var a = new Node('A');
    var b = new Node('B');
    var c = new Node('C');
    var d = new Node('D');
    var ll = new LinkedList(a);
    ll.insert(b);
    ll.insert(c);
    ll.insert(d);
    ll.to_s().should.equal('D, C, B, A');
  });
});

describe('LinkedList#search', function(){
  var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var ll = new LinkedList(a);
  ll.insert(b);
  ll.insert(c);
  ll.insert(d);
  it('search and find the node by value, return the node', function(){
    ll.search('B').should.equal(b);
  });

  it('search and return null for a 404 value', function(){
    should.equal(ll.search('Z'), null);
  });
});

describe('LinkedList#remove', function(){
  var a = new Node('A');
  var b = new Node('B');
  var c = new Node('C');
  var d = new Node('D');
  var ll = new LinkedList(a);
  ll.insert(b);
  ll.insert(c);
  ll.insert(d);

  it('removes and returns the val', function(){
    ll.remove(c).should.equal('C');

    b.prev.should.equal(d);
    d.nexxt.should.equal(b);
    ll.to_s().should.equal('D, B, A');
    ll.size().should.equal(3);
  });

  it('returns nil if 404', function(){
    var z = new Node('Z');
    should.equal(ll.remove(z), null);
    ll.size().should.equal(4);
  });
});
