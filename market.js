// =====================================
// THE ONE% AI SIGNAL
// MARKET ENGINE
// XAU/USD ONLY
// =====================================



let marketData = [];

let currentPrice = 0;





// =============================
// LOAD XAU/USD DATA
// =============================


async function loadMarketData(){


    try{


        if(!CONFIG.market.onlyXAUUSD &&
           CONFIG.market.symbol !== "XAU/USD"){


            console.error(
            "Market blocked. Only XAU/USD allowed"
            );

            return;

        }




        const url =

        `${CONFIG.api.endpoint}?symbol=${CONFIG.market.symbol}&interval=${CONFIG.api.interval}&outputsize=${CONFIG.api.outputsize}&apikey=${CONFIG.api.key}`;





        const response = await fetch(url);



        const data = await response.json();





        if(!data.values){


            console.log(
            "API Error:",
            data
            );

            return;


        }






        marketData = data.values.reverse();





        currentPrice =

        parseFloat(
        marketData[
        marketData.length-1
        ].close
        );





        updateMarketPrice();





        console.log(
        "XAU/USD Data Loaded",
        marketData
        );





    }

    catch(error){


        console.error(
        "Market Error:",
        error
        );


    }


}








// =============================
// UPDATE PRICE DISPLAY
// =============================


function updateMarketPrice(){


    const priceElement =

    document.getElementById(
    "price"
    );




    if(priceElement){


        priceElement.innerHTML =

        currentPrice.toFixed(2);


    }


}








// =============================
// GET CANDLES FOR AI
// =============================


function getCandles(){


    return marketData;


}







// =============================
// GET CURRENT PRICE
// =============================


function getCurrentPrice(){


    return currentPrice;


}






// =============================
// AUTO UPDATE
// =============================


setInterval(()=>{


    loadMarketData();


},60000);





// Load pertama

loadMarketData();