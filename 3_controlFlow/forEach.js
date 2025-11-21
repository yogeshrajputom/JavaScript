const coding =["java","python", "html", "php", "c++", "java script"];

coding.forEach((item) => {
    // console.log(item);
});

coding.forEach(function (value){
    // console.log(value);
    
})

function prints(item){
    // console.log(item);
}
coding.forEach(prints)

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})


// most importent and mostely user 

const data =[
    {
        languageName:'java',
        languageFil:'java'
    },
    {
        languageName:'python',
        languageFil:'py'
    },
    {
        languageName:'java script',
        languageFil:'js'
    }
]

data.forEach((item)=>{
    console.log((item.languageFil));
    
})