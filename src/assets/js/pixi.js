// const canvas = document.querySelector(".Main__canvas");

//アプリケーションを作成
const app = new PIXI.Application({
    view: canvas,
    width: window.clientWidth, //canvas横幅
    height: window.clientHeight,  //canvas縦幅
    backgroundColor: 0X090909, //背景色
    autoResize: true,//リサイズ処理
});




for (var i = 0; i < 100; i++) {

    var graphics = new PIXI.Graphics()
    graphics.x = app.renderer.width / 2;
    graphics.y = app.renderer.height / 2;
    app.stage.addChild(graphics);

    graphics.lineStyle(2, 0xffffff);
    graphics.drawPolygon([new PIXI.Point(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)), new PIXI.Point(Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)), new PIXI.Point(Math.floor(Math.random() * 200), Math.floor(Math.random() * 100))]);
    graphics.closePath();
    graphics.endFill();
    graphics.position.x = Math.floor(Math.random() * 2000);
    graphics.position.y = Math.floor(Math.random() * 1000);

}




app.ticker.add(animate);

function animate() {
}