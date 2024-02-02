//let depositt =prompt('Enter the amount to be deposited')
//let withdrawn = prompt('Enter the amount to be withdrawn')
let a=0
let deposit = () => {
    let depositt =prompt('Enter the amount to be deposited');
    document.write('Amount deposited is : '+   depositt);
    document.write('<br>');
   
    let  m=a+ parseInt(depositt);
     document.write('Available balance is :'+ m );
}

let withdraw = () => {
    let withdrawn = prompt('Enter the amount to be withdrawn');
    document.write('Amount withdrawn is : '+   withdrawn);
    document.write('<br>');
let l=a-parseInt(withdrawn);
    document.write('Available balance is :'+ l );
}

//  let balance1 = () => {
//     document.write('Available balance is :'+ l );
//     document.write('<br>');
//     let b=withdraw();
//     document.write('<br>');
    


//     document.write('Available balance  is : '+   c);

// }
//balance();

let n= prompt('Enter one of the options')

switch(n){
    case 'deposit':
        
        deposit();
        
        break;
    case 'withdraw':
        
        withdraw();
        break;
    // case 'balance':
        
    //     balance1();
    //     break;
    default:
        mytext='Sorry !Please select an option from the menu';
       document.write(mytext);
        
}