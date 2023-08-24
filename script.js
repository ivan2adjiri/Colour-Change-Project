 var index = 0;

 function  newColours(){
    var colors = ['green', 'orange', 'yellow', 'red','purple','blue']

  document.getElementsByTagName("body")[0].
  style.background = colors[index++];

  if( index > colors.length - 1)
  index = 0;
 }
