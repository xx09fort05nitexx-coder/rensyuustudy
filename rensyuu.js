const calculateSum = new Promise((resolve) => {
    const result = 1 + 1; // 実際は時間がかかる処理
    resolve(result);  // 計算できたら計算結果を返すよ〜
});

console.log(calculateSum);


