// =====================================
// THE ONE% AI SIGNAL
// CONFIGURATION FILE
// XAU/USD ONLY
// =====================================


// =============================
// MARKET SETTINGS
// =============================

const CONFIG = {


    market: {

        symbol: "XAU/USD",

        name: "Gold / US Dollar",

        exchange: "FOREX",

        enabled: true

    },





    // =============================
    // MARKET DATA API
    // =============================

    api: {


        provider: "TWELVE_DATA",


        // Masukkan API Key kamu disini
        key: "6a958496909545299a1b0fe9ebc00265",


        endpoint:
        "https://api.twelvedata.com/time_series",



        interval: "5min",


        outputsize: 100


    },






    // =============================
    // TIMEFRAME ANALYSIS
    // =============================


    timeframe: {


        primary: "M5",


        confirmation: "M15",


        trend: "H1"


    },






    // =============================
    // AI SIGNAL PARAMETER
    // =============================


    ai: {


        strategy:


        [

            "SMART_MONEY_CONCEPT",

            "ICT",

            "PRICE_ACTION"

        ],




        indicators:


        {


            EMA_FAST:50,


            EMA_SLOW:200,


            USE_EMA_FILTER:true,


            USE_BOS:true,


            USE_CHOCH:true,


            USE_FVG:true,


            USE_ORDERBLOCK:true,


            USE_LIQUIDITY:true


        },







        // Minimum score untuk signal keluar

        confidence:


        {


            buy_min:75,


            sell_min:75,


            hold_max:50


        }



    },








    // =============================
    // RISK MANAGEMENT
    // =============================


    risk:{


        enabled:true,


        risk_reward:2,


        stopLossPoints:300,


        takeProfitPoints:600


    },






    // =============================
    // SIGNAL SETTINGS
    // =============================


    signal:{


        onlyXAU/USD:true,


        allowBuy:true,


        allowSell:true,


        allowHold:true,


        notification:true,


        saveHistory:true


    }




};





// Export untuk file lain

window.CONFIG = CONFIG;