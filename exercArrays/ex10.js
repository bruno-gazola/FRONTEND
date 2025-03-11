let times = ["Flamengo", "Palmeiras", "São Paulo"];

times.push("Corinthians");
times.unshift("Grêmio");
times.pop();

let posicaoPalmeiras = times.indexOf("Palmeiras");
times.reverse();

console.log(times);
console.log('Posição do Palmeiras: ' + posicaoPalmeiras);