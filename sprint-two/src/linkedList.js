var LinkedList = function(){

  // Functional instantiation pattern
  var list = {};

  // Initialize head and tail values to null
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // If no head value exists
    if (this.head === null){
      // Create a new Node for head
      this.head = new Node(value);
      // Set tail equal to head
      this.tail = this.head;
    // If head exists
    } else {
      // Set value after tail to a new Node
      this.tail.next = new Node(value);
      // Move tail to be at the end
      this.tail = this.tail.next;
    }
  };

  list.addToHead = function(value){
    // If no tail value exists
    // if ()
      // Create a new Node for tail
      // Set head equal to tail
    // If tail exists
      // Set value before head to a new Node
      // Move head to be at the front
  };

  list.removeHead = function(){
    var temp = this.head.value;
    this.head = this.head.next;
    return temp;
  };

  list.contains = function(target){
    for(var key in this){
      if(_.contains(this[key],target)){
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
