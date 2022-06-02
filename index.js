const api = require('./api');


    const DAI =  'DAI';
    const USDT =  'USDT';
    const BTC =  'BTC';

    

setInterval(async () => {
    const resultBTCDAI = await api.btcdai(); 

    const resultBTCUSDT = await api.btcusdt();  

    //Recebo valor de venda do BTC DAI
    const venderBTCDAI = parseInt(resultBTCDAI.bids[0][0]);

    //Recebo valor de compra do BTC DAI
    const comprarBTCDAI = parseInt(resultBTCDAI.asks[0][0]);
    
    


    //Recebo valor de venda do BTC USDT
    const venderBTCUSDT = parseInt(resultBTCUSDT.bids[0][0]);

    //Recebo valor de compra do BTC USDT
    const comprarBTCUSDT = parseInt(resultBTCUSDT.asks[0][0]);


    //Calculo a diferença entre a venda e a compra de DAI para USDT
    spreadUSDTDAI = venderBTCDAI - comprarBTCUSDT;

    //Calculo a diferença entre a venda e a compra de USDT e DAI
    spreadDAIUSDT = venderBTCUSDT - comprarBTCDAI;

    txusdtdai = (comprarBTCUSDT * (0.225 / 100));
    txvip4 = ((comprarBTCUSDT * (0.015 / 100)) + venderBTCUSDT * (0.03 / 100));

    spreadtxUSDTDAI = spreadUSDTDAI - txusdtdai;

    spreadtxDAIUSDT = spreadDAIUSDT - txusdtdai ;

    spreadtxUSDTDAIvip = spreadUSDTDAI - txvip4;
    
    spreadtxDAIUSDTvip = spreadDAIUSDT - txvip4;
    

    //Imprime valores de compra e venda de USDT para DAI
    if(spreadtxUSDTDAI > 0){
    console.log(`${DAI} | ${BTC} | ${USDT}`);
    console.log(`${comprarBTCDAI} | ${venderBTCDAI} | ${spreadUSDTDAI} | ${txusdtdai} | executa`);
    }  
        
    else if(spreadtxUSDTDAIvip > 0){
        console.log(`${DAI} | ${BTC} | ${USDT}`);
        console.log(`${comprarBTCDAI} | ${venderBTCDAI} | ${spreadtxUSDTDAIvip} | ${txvip4} | executa VIP`);
    } 
    else {
        console.log(`${DAI} | ${BTC} | ${USDT}`);
        console.log(`${comprarBTCDAI} | ${venderBTCDAI} | ${spreadtxUSDTDAIvip} | ${txvip4} | nao executa`);
    }

    //Imprime valores de compra e venda de DAI para USDT
    if(spreadtxDAIUSDT > 0){
        console.log(`${USDT} | ${BTC} | ${DAI}`);
        console.log(`${comprarBTCUSDT} | ${venderBTCUSDT} | ${spreadDAIUSDT} | ${txusdtdai} | executa`);
        }  
            
        else if(spreadtxUSDTDAIvip > 0){
            console.log(`${USDT} | ${BTC} | ${DAI}`);
    
            console.log(`${comprarBTCUSDT} | ${venderBTCUSDT} | ${spreadtxDAIUSDTvip} | ${txvip4} | executa VIP`);
        } 
        else {
    
            console.log(`${USDT} | ${BTC} | ${DAI}`);
            console.log(`${comprarBTCUSDT} | ${venderBTCUSDT} | ${spreadtxDAIUSDTvip} | ${txvip4} | nao executa`);
        }

    




    /* //Se Spread da DAI para USDT for maior que o valor de 0
    if (spreadDAIUSDT > 0) {            
        console.log(`Comprei BTC com DAI e vendi por USDT com Spread de: ${spreadDAIUSDT}`);
        
        //Senão Spread da USDT para DAI for maior que o valor de 0
    } else if (spreadDAIUSDT < 0) {
        console.log(`Comprei BTC com DAI e vendi por USDT com Spread negativo de ${spreadUSDTDAI}`);              

    } 


    //Se Spread da DAI para USDT for maior que o valor de 0
    if (spreadUSDTDAI > 0) {            
        console.log(`Comprei BTC com USDT e vendi por DAI com Spread de: ${spreadUSDTDAI}`);
        
        //Senão Spread da USDT para DAI for maior que o valor de 0
    } else if (spreadUSDTDAI < 0) {
        console.log(`Comprei BTC com USDT e vendi por DAI com Spread negativo de ${spreadUSDTDAI}`);              

    }  */



    
}, process.env.CRAWLER_INTERVAL)