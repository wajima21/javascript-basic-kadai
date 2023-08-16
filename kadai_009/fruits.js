const fruits = ["りんご", "オレンジ", "バナナ", "ぶどう", "キウイ", "さくらんぼ", "メロン", "スイカ", "パイナップル", "マンゴー"];

// for文

for (let i = 1; i < fruits; i += 2) {
    console.log(fruits[i]);
}

//while文 

let j = 1;
while (j < fruits){
  console.log(fruits[j]);
  j += 2;
}

// length：オブジェクトの「長さ」または「サイズ」を取得するために使用