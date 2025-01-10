        let shua = document.getElementById('shua'),
            number = 0,
            caleb = document.getElementById('subt');
        


    
        shua.addEventListener('click', () => {
                console.log(document.getElementById('number').innerHTML= number++ ) 
        });

        caleb.addEventListener('click', () => {
            console.log(document.getElementById('number').innerHTML= number--) 
    });
