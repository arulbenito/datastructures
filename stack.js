let Stack = function (){
    this.count = 0;
    this.stack = {};
    this.push = function (value){
      this.stack[this.count]=value;
      this.count++;
    }
    this.pop = function (){
      let value = this.stack[this.count-1];
      delete this.stack[this.count-1];
      this.count--;
      return value;
    }
    this.peek = function(){
      return this.stack[this.count-1]
    }
  }
  
  let stack1 = new Stack();
  stack1.push(2);
  stack1.push(3);
  console.log(stack1.peek());
  console.log(stack1.pop());
  console.log(stack1.peek());
  