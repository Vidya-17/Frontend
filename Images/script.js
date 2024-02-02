
//  let n=5;
// // //increasing 1-n , 1-i
// // //decreasing 1-n , i-n

//  for(let i=1;i<=n;i++){
//     for(j=i;j<=n;j++){
//          document.write('&nbsp; ');
            
              
//      }    
//      for(j=1;j<i;j++){
//        document.write( 
//              String.fromCharCode("a".charCodeAt(0) - 1 + j)) ;
//      }
//      for(j=1;j<=i;j++){
//         document.write( 
//              String.fromCharCode("a".charCodeAt(0) - 1 + j)) ;
//      }
//      document.write('<br> ')
// }

let n=5;
let a=2*n;
let b=n-3
let c= n-2

//for(let i=1;i<=n;i++){
     // for(j=i;j<=n;j++){
     //      document.write('* ');
     // }


// for(let i=1;i<=(b+1);i++){
    
//      for( let j=i;j<=(b+1);j++){
//          document.write('# ');
         
//      }
//      document.write('<br>');
// //------//
// for(let i=1;i<c;i++){
//           document.write('* ');
//       }
     
//       document.write('<br>')

//       for(let i=1;i<=c;i++){
//           document.write('* ');
//       }
      

// document.write('<br>')
//---/
// for(let i=1;i<c;i++){
//      document.write('* ');
//  }

 
//  document.write('<br>')
//  for(let i=1;i<=c;i++){
//      document.write('* ');
//  }
 

// document.write('<br>')
for(let i=1;i<=(n-3);i++){
     for(let j=i;j<(n-2);j++){
             document.write('&nbsp; ');
     }
     for(let j=1;j<=i-1;j++){
                  document.write('* ');
          }
          for(let j=1;j<=i;j++){
               document.write('* ');
       }
       
       for(let j=i;j<=n-i+1;j++){
          document.write('&nbsp; ');
  }


  for(let j=1;j<=i-1;j++){
     document.write('* ');
}
for(let j=1;j<=i;j++){
  document.write('* ');
}

document.write('<br>')
}

 for(i=1;i<=(a-1);i++){
         document.write('* ');
     }
 document.write('<br>')



for(let i=1;i<=n;i++){
     for(let j=1;j<i;j++){
             document.write('&nbsp; ');
     }
     for(let j=i;j<n;j++){
          document.write('* ');
  }
  for(j=i;j<=n;j++){
     document.write('* ');
}
document.write('<br>')
}





