let Queue = function (){
    collection =[];
    this.size = function (){
      return collection.length;
    }
    this.print = function(){
      console.log(collection.toString());
    }
    this.enqueue = function(value){
      if (collection.length ===0){
            collection.push(value);
      } else {
        let added = false;
        for (i=0;i<collection.length;i++){
          if (value[1]<collection[i][1]){
            collection.splice(i,0,value);
            added = true;
            break;
          }
        }
            if (!added){
         collection.push(value);
      }
      }
  
      
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
  q.enqueue([1,1]);
  q.enqueue([2,2]);
  q.enqueue([3,1]);
  q.enqueue([4,2]);
  q.print();
  console.log(q.front());
  console.log(q.isEmpty());
  console.log(q.size());
  q.dequeue();
  q.print();
  console.log(q.size());
  
  
  
  
  
