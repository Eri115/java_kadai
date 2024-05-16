const productSelect = document.getElementById("product");
const number = document.getElementById("number"); 
const products = [
  {//これは配列
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500
  },
  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700
  },
  {
    id: 4,
    name: "スペシャルブレンド500g",
    price: 1200
  }
]

let purchases = [];

function add() {
  // 選択した商品のvalueを変数に入れる
  // parseIntはproductSelectとvalueを比較するために数値に変換する関数
  const value = parseInt(productSelect.value)
  // 変数に入れたものを数字に変換
  const product = products.find((element) => element.id == value);
  // products変数に格納されているデータの中から一つずつとって見つけ出す関数。それを比較演算子で比較する
  // const products = parseInt("product");
  const selectnumber = parseInt(number.value);
  let purchase = {
    product: product,
    number: selectnumber,
  };
  purchases.push(purchase);
  window.alert(`${display()}小計\n${subtotal()}円`);
}
//関数
//関数に対しの引数
//戻り値は何か

function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
   
    string += `${purchases[i].product.name}${purchases[i].product.price}円が${purchases[i].number}点\n`;
  }
  return string;
}


function subtotal (){
  let sum = 0;
  for(let i =0; i < purchases.length; i++){
    sum += purchases[i].product.price * purchases[i].number;
  }
  return sum;
}


function calc() {
  const sum = subtotal();
  debugger
  const postage = calcPostageFrompurchase();
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  product = "";
  number = "";
}

function calcPostageFrompurchases(){
  if (sum == 0 < 3000) {
    return  0;
  } else if (sum < 2000) {
    return  500;
  } else if (sum > 2000) {
    return 250;
  }
}