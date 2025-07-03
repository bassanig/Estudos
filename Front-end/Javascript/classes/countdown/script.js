import CountDown from './countdown.js';

const diasParaOAnoNovo = new CountDown('31 December 2025 23:59:59')

console.log(diasParaOAnoNovo._futureDate);

console.log(diasParaOAnoNovo._timeStampDiff);

console.log(diasParaOAnoNovo);


console.log(Math.floor((diasParaOAnoNovo._timeStampDiff / 1000) / 60 / 60 / 24));
console.log(diasParaOAnoNovo._days);

console.log(diasParaOAnoNovo._total);




