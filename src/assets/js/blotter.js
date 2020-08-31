

const MathUtils = {

    // ラインの方程式

    lineEq: (y2, y1, x2, x1, currentVal) => {

        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;

        return m * currentVal + b;

    },

    // 線形補間の関数

    lerp: (a, b, n) => (1 - n) * a + n * b

};

// Blotterのマテリアルを作成

const material = new Blotter.LiquidDistortMaterial();

// デフォルトのマテリアルuniform値を設定

material.uniforms.uSpeed.value = .5;

material.uniforms.uVolatility.value = 0;

material.uniforms.uSeed.value = 0.4;

// Blotterのインスタンスを作成



// data-blotterを持つすべてのHTML要素においてBlotterテキストを初期化

// const blotterElems = [...document.querySelectorAll('[data-blotter]')];


// blotterElems.forEach((el) => {

//     const text = new Blotter.Text(el.innerHTML, {
//         family: 'Cormorant Garamond, serif', //font-family
//         size: 120, //font-size
//         fill: "white" //color
//     });

//     // const text = new Blotter.Text(el.innerHTML);
//     blotter.addText(text);

//     // ここでHTMLコンテンツを削除
//     // 作成されたキャンバス
//     const scope = blotter.forText(text);

//     // メイン要素に添える
//     scope.appendTo(el);

// });

const text01 = new Blotter.Text('Jelly Fish', {
    family: 'Cormorant Garamond, serif', //font-family
    size: 120, //font-size
    fill: "white" //color
});
const text02 = new Blotter.Text('Distortion', {
    family: 'Cormorant Garamond, serif', //font-family
    size: 120, //font-size
    fill: "white" //color
});
const text03 = new Blotter.Text('Portfolio vol.1', {
    family: 'Cormorant Garamond, serif', //font-family
    size: 120, //font-size
    fill: "white" //color
});
const text04 = new Blotter.Text('Sin Wave', {
    family: 'Cormorant Garamond, serif', //font-family
    size: 120, //font-size
    fill: "white" //color
});

const text05 = new Blotter.Text('Hello World', {
    family: 'Cormorant Garamond, serif', //font-family
    size: 120, //font-size
    fill: "white" //color
});

const blotter01 = new Blotter(material, {
    texts: text01
});
const blotter02 = new Blotter(material, {
    texts: text02
});
const blotter03 = new Blotter(material, {
    texts: text03
});
const blotter04 = new Blotter(material, {
    texts: text04
});
const blotter05 = new Blotter(material, {
    texts: text05
});

const scope01 = blotter01.forText(text01);
const scope02 = blotter02.forText(text02);
const scope03 = blotter03.forText(text03);
const scope04 = blotter04.forText(text04);
const scope05 = blotter05.forText(text05);

let el01 = document.querySelector(".WorksImage01");
let el02 = document.querySelector(".WorksImage02");
let el03 = document.querySelector(".WorksImage03");
let el04 = document.querySelector(".WorksImage04");
let el05 = document.querySelector(".WorksImage05");


scope01.appendTo(el01);
scope02.appendTo(el02);
scope03.appendTo(el03);
scope04.appendTo(el04);
scope05.appendTo(el05);


// ここで、スクロールすると1つ（またはそれ以上）のuniform値が変化するようにする

// スクロールが速いほど値の変化も大きくなる

let currentScroll = window.pageYOffset;

// volatilityは変化するuniformを示す

let volatility = 0;

// 0（スクロールなし）から0.9（maxscrollの速度でのスクロール）まで設定可能

const maxscroll = 10;

const uniformValuesRange = [0, 0.005];

// requestAnimationFrameと線形補間を使用し効果を演出

const render = () => {

    // 現在のスクロール位置

    const newScroll = window.pageYOffset;

    // 最後のリペイントからどれだけスクロールしたか

    const scrolled = Math.abs(newScroll - currentScroll);

    // volatilityの新たな値を取得

    volatility = MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.9), 0.05);

    // volatilityを設定

    material.uniforms.uVolatility.value = volatility;

    // 現在のスクロール位置を更新

    currentScroll = newScroll;

    // 繰り返し

    requestAnimationFrame(render);

}

requestAnimationFrame(render);