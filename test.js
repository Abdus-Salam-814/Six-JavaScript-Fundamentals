const firstName = 'fatima';
let fatimaLove = `${firstName} I Love you`

for(let i = 1; i <= 100000; i++){
    // console.log(i,fatimaLove)
}
let textCount = 0 ;

    document.getElementById('click-me').addEventListener('click',function(){
       
        textCount++
              
        const buttonText = document.getElementById('click-me');
        buttonText.innerText = textCount;
        

        
    })

    
