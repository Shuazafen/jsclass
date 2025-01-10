let url = '"https://opentdb.com/api.php?amount=10&type=boolean"'


fetch(`${url}`)
	.then(response => response.json())
	.then( data => {
        console.log(data);
        document.getElementById('btn').addEventListener('click', ()=>{
            if (document.getElementById('input').value = data[0].id) {
                window.location.href='./quiz.html'
               }
            if (document.getElementById('input').value = data[1].id) {
                window.location.href='./quiz.html'
               }
        })

    })