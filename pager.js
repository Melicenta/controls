function FramePager (srcArray) {
  var newSrc = '', 
        newId = '',
        current = $('.image-container').children('img').attr('src'),
        number = $.inArray(current, srcArray),
        i = number,
        arrLength = srcArray.length;
  

  this.number = number;

  
  var self = this;
  
  this.nextStep = function (i) {
     i = ++self.number; 
     if ( i < arrLength){
         newSrc = srcArray[i];
         newId = "img" + i;
    }
     if ( i > arrLength){
        newSrc = srcArray[1];
        newtId = "img" + 0;
    }
     return  show(newId, newSrc); 
  };
  
  this.prevStep =  function  (i) {
       i = --self.number;
       
        if (i < 0){
          newSrc = srcArray[arrLength-1];
          newId = "img" + arrLength;
      } else {
          newSrc = srcArray[i];
          newId = "img" + i;
      }
        return show(newId, newSrc);
   };
    
};



 

