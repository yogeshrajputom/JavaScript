// Immediately Invoked  Fuction Expression (IIFE)

(function one(){
    console.log("DB is Connected");
})();
 // Glovel scope ke polution se bachne ke liye  use hota hai 


 ((name)=>{
    console.log(`DB is Connecter ${name}`);
    
 })('yoge')