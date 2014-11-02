// AS CONSTRUCTOR PATTERN

function Thingy(colour, texture, smell, tone, temp) {
  this.colour = colour;
  this.texture = texture;
  this.smell = smell;
  this.tone = tone;
  this.temp = temp;
}

Thingy.prototype = {
  keys: function() { return Object.keys(this); },

  to_s: function() {
    var a = this.keys();
    var str = '';
    for (var i = 0; i < a.length; i++) { str += this[a[i]] + ' '; }
    return str;
  },

  sing_like_a_class: function() {
    return 'I look like methods defined at the class level in Ruby';
  }
}

bottle = new Thingy('green', 'smooth', 'none', 'clink', 'cold');
console.log(bottle.keys());
console.log(bottle.to_s());

// AS MODULE

var thingo = (function() {
  // private parts
  var secretMethod = function() {
      console.log('I can only be called inside thingo!');
  };

  // returned object with properties that can accessed
  return {
    colour: '',
    texture: '',
    smell: '',
    tone: '',
    temp: '',

    all_keys: function() {
      return Object.keys(this);
    },

    to_s: function() {
      var a = this.all_keys(); // includes the function names!!!
      var str = '';
      for (var i = 0; i < a.length; i++) { str += a[i] + ' '; }
      return str;
    }
  };
})();

thingo.colour = 'green';
thingo.texture = 'smooth';
thingo.smell = 'none';
thingo.tone = 'clink';
thingo.temp = 'cold';

console.log(thingo.to_s());
