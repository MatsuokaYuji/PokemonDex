export const getAllPokemon = (url) => {
    // Promise　処理が成功するまで待ってくださいの意味
    return new Promise((resolve,reject) => {
        
        fetch(url)//データ取得
        .then((res) => res.json())//json変換
        .then((data) => resolve(data));//dataとして受け取る
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resolve(data)});
    });
};