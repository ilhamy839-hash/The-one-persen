// =====================================
// THE ONE% AI SIGNAL
// CHART ENGINE
// XAU/USD ONLY
// =====================================



let chartCanvas;

let chartContext;







// =============================
// INIT CHART
// =============================


function initChart(){


    const container =

    document.getElementById(
    "chart"
    );



    if(!container){

        return;

    }





    container.innerHTML = `

    <canvas id="priceChart"></canvas>

    `;




    chartCanvas =

    document.getElementById(
    "priceChart"
    );



    chartContext =

    chartCanvas.getContext(
    "2d"
    );




    resizeChart();

    drawChart();



}







// =============================
// RESIZE
// =============================


function resizeChart(){


    if(chartCanvas){


        chartCanvas.width =

        chartCanvas.parentElement.clientWidth;



        chartCanvas.height = 240;


    }


}







// =============================
// DRAW XAU/USD CHART
// =============================


function drawChart(){



    if(!chartContext){

        return;

    }





    const candles =

    getCandles();





    if(!candles ||
       candles.length < 5){

        return;

    }







    chartContext.clearRect(

        0,

        0,

        chartCanvas.width,

        chartCanvas.height

    );







    const prices =

    candles.map(c=>

    parseFloat(c.close)

    );





    const max =

    Math.max(...prices);



    const min =

    Math.min(...prices);





    const width =

    chartCanvas.width /

    prices.length;







    chartContext.beginPath();





    prices.forEach(

    (price,index)=>{



        const x =

        index * width;



        const y =

        chartCanvas.height -

        ((price-min)/(max-min))

        *

        chartCanvas.height;



        if(index===0){


            chartContext.moveTo(
            x,y
            );


        }

        else{


            chartContext.lineTo(
            x,y
            );


        }



    });






    chartContext.strokeStyle =

    "#facc15";



    chartContext.lineWidth = 2;



    chartContext.stroke();




}







// =============================
// AUTO UPDATE CHART
// =============================


setInterval(()=>{


    drawChart();


},5000);






window.addEventListener(

"resize",

()=>{

resizeChart();

drawChart();

}

);






// START

window.onload = ()=>{


    initChart();


};