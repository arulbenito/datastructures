let Queue = function (){
    collection =[];
    this.size = function (){
      return collection.length;
    }
    this.print = function(){
      console.log(collection.toString());
    }
    this.enqueue = function(value){
      collection.push(value);
    }
    this.dequeue = function(){
      return collection.shift();
    }
    this.front = function (){
      return collection[0];
    }
    this.isEmpty = function (){
      return (collection.length===0);
    }
  }
  
  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.print();
  console.log(q.front());
  console.log(q.isEmpty());
  console.log(q.size());
  q.dequeue();
  q.print();
  console.log(q.size());