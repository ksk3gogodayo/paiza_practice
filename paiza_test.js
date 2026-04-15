// paizaで入力値を受け取るための決まり文句や！
const fs = require('fs');

function main() {
    // 1.入力を全部読み込んで、改行や空白でばらばらにする
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    
    // 2.一つ目が時給（N)、二つ目が時間（M）
    // ※入力は「文字列」やから、Number（）で数字に変換
    const N = Number(input [0]); 
    const M = Number(input [1]); 
    //　3.掛け算して出力
        console.log(N * M);
}

main();