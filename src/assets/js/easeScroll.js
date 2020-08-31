// $(function () {

//     var ua = navigator.userAgent.toLowerCase();

//     // windowsのみ適用 macやiphone、ipadも適用させない
//     // var isWindows = (ua.indexOf('windows') > -1) && !((ua.indexOf('mac') > -1) && (ua.indexOf('os') > -1)) && !((ua.indexOf('iphone') > -1) || (ua.indexOf('ipad') > -1));

//     // if (isWindows) {
//     $("html").easeScroll({
//         frameRate: 200,//数値が大きいほど滑らか。ただしパソコンの負担も大きくなる。
//         animationTime: 10,//動いている時間
//         stepSize: 5,//動く距離
//         pulseAlgorithm: 1,// ここは１で問題ない
//         pulseScale: 20,//ブレーキを調整。値が大きいとブレーキが強くなる
//         pulseNormalize: 1, //ここは１で問題ない
//         accelerationDelta: 20,//加速度。数値を変えても変化が分からず
//         accelerationMax: 1,//加速度。数値を変えても変化が分からず
//         keyboardSupport: true,//キーボード矢印でも動かすか
//         arrowScroll: 30,//矢印で動かす距離
//         touchpadSupport: true,//スマホ、タブレットでも適用させるかどうか
//         fixedBackground: false//背景に影響を与えるか。変化分からず
//     });
//     // }

// });

    // jquery.easeScroll.js