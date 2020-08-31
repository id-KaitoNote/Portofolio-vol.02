// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {

    // サイズを指定
    const width = window.innerWidth;// 横幅100%
    const height = window.innerHeight;// 高さ100%

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.Main__canvas'),//描画領域を取得
        alpha: true,//透過
    });


    // シーンを作成
    const scene = new THREE.Scene();


    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, 4);//カメラの初期位置
    // camera.lookAt(scene.position);//原点にカメラを向ける

    const geometry = new THREE.TetrahedronGeometry(1.0);
    var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        emissive: 0xffffff,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        wireframe: true
    });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);


    tick();

    // 初期化のために実行
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener('resize', onResize);

    function onResize() {
        // サイズを取得
        const width = window.innerWidth;
        const height = window.innerHeight;

        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }


    // 毎フレーム時に実行されるループイベントです
    function tick() {
        box.rotation.x += 0.01;
        box.rotation.x += 0.01;

        renderer.render(scene, camera); // レンダリング

        requestAnimationFrame(tick);
    }
}