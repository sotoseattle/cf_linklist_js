var m = require('../lib/linked_list.js');
var expect = require('chai').expect;

// These tests cover most the scenarios.

var a = new m.node('A');
var b = new m.node('B');
var c = new m.node('C');
var d = new m.node('D');

// insert && size
var ll = new m.linked_list(a);
  expect(ll.head).to.equal(a);
  expect(ll.head.nexxt).to.equal(null);
  expect(ll.head.prev).to.equal(null);
  expect(ll.size()).to.equal(1);

ll.insert(b);
  expect(ll.size()).to.equal(2);
  expect(ll.head.nexxt).to.equal(a);
  expect(a.prev).to.equal(b);

ll.insert(c);
  expect(ll.size()).to.equal(3);
ll.insert(d);
  expect(ll.size()).to.equal(4);
  expect(ll.head).to.equal(d);
  expect(d.nexxt).to.equal(c);
  expect(c.nexxt).to.equal(b);
  expect(b.nexxt).to.equal(a);
  expect(a.prev).to.equal(b);
  expect(b.prev).to.equal(c);
  expect(c.prev).to.equal(d);
  expect(d.prev).to.equal(null);

// to_s
expect(ll.to_s()).to.equal('D, C, B, A');

// search
expect(ll.search('B')).to.equal(b);
var n99 = new m.node('Z');
expect(ll.search('Z')).to.equal(null);

// remove
ll.remove(c);
expect(b.prev).to.equal(d);
expect(d.nexxt).to.equal(b);
expect(ll.to_s()).to.equal('D, B, A');
expect(ll.size()).to.equal(3);

expect(ll.remove(n99)).to.equal(null);
