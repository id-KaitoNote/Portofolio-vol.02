

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

const blotter = new Blotter(material);

// data-blotterを持つすべてのHTML要素においてBlotterテキストを初期化

const blotterElems = [...document.querySelectorAll('[data-blotter]')];


blotterElems.forEach((el) => {

    const text = new Blotter.Text(el.innerHTML, {
        family: 'Cormorant Garamond, serif', //font-family
        size: 120, //font-size
        fill: "white" //color
    });

    // const text = new Blotter.Text(el.innerHTML);
    blotter.addText(text);

    // ここでHTMLコンテンツを削除
    // 作成されたキャンバス
    const scope = blotter.forText(text);

    // メイン要素に添える
    scope.appendTo(el);

});


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