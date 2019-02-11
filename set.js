let MySet = function (){
    this.collection = [];
    this.values = function (){
      return this.collection;
    }
    this.has = function(value){
      return (this.collection.indexOf(value) > -1)
    }
    
    this.add = function(value){
      if (!this.has(value)){
        this.collection.push(value)
        return true
      }
      return false;
    }
    this.remove = function (value){
      if (this.has(value)){
        this.collection.splice(this.collection.indexOf(value),1)
        return true;
      }
      return false;
    }
    this.size = function (){
      return this.collection.length;
    }
    this.union = function(otherSet){
      let unionSet = new MySet();
      let thisSet = this.values();
      let otherSetValues = otherSet.values()
      thisSet.forEach(function(e){
          unionSet.add(e);
      })
      otherSetValues.forEach(function(e){
          unionSet.add(e);
      })
      return unionSet;
    }
    
    this.intersection = function (otherSet){
      let intersectionSet = new MySet();
      let thisSet = this.values();
      thisSet.forEach(function(e){
        if (otherSet.has(e)){
          intersectionSet.add(e)
        }
      })
      return intersectionSet;
    }
     this.difference = function (otherSet){
      let differenceSet = new MySet();
      let thisSet = this.values();
      thisSet.forEach(function(e){
        if (!otherSet.has(e)){
          differenceSet.add(e)
        }
      })
      return differenceSet;
    }
     this.subSet =function(otherSet){
       let thisSetValues = this.values();
       return thisSetValues.every(function(e){
         return (otherSet.has(e))
       })
     }
   
  }
  let set = new MySet();
  
  set.add(1);
  set.add(2);
  set.add(8);
  
  let set1 = new MySet();
  
  set1.add(8);
  set1.add(3);
  set1.add(1);
  set1.add(2);
  set1.add(8);
  console.log(set.subSet(set1));