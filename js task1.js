var myName = "Jesuseme ";
var myCourses = ["python", "node.js", "html-css-js", "figma" ];
console.log(myName,myCourses);
document.write(myName + "<br>");
document.write("is doing "+ myCourses.length +" Courses, they are: "+ myCourses + "<br>");
 

//determines if the contents of the array are even or odd 
if((myCourses.length % 2) == 1 ){
    document.write("They are and odd number <br>");
    odd();
}

else{
    document.write("They are and even number<br> ");                
    Even();            
}
            
            
//function to determine odd numbers            
function Odd(){   
    for (i = 1; i <= 200; i++){                    
        x = i % 2;                    
        if (x==1){                    
            document.write(i + "<br>");                    
            console.log(i);                    
        }               
    }            
}            
//function to determine Even numbers            
function Even(){                
    for( i=1; i<=200; i++){                    
        x = i % 2;                    
        if(x == 0){                        
            document.write(i + "<br>");                        
            console.log(i);                    
        }                
    }            
}
