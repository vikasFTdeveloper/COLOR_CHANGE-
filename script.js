let randomClour = function () {
    const hex = '0123456789ABCDEF'
        let colur = '#' ;
       for (let i = 0; i < 6; i++) {
           colur += hex[Math.floor( Math.random()*16)]  
       }

       return colur;
}

 let start;

const startChanngeColor = function () {

        if (!start) {
            
            start = setInterval(chnagebgcolor,1000)
        }


    function chnagebgcolor() {
        document.body.style.backgroundColor = randomClour()
    }
}
const stopChanngeColor = function () {
    clearInterval(start)
    start = NaN
    console.log(start);
}

function colurchangee () {
    document.body.style.backgroundColor = randomClour()
}


  document.querySelector('#start').addEventListener('click', startChanngeColor);
  document.querySelector('#stop').addEventListener('click', stopChanngeColor );

 

