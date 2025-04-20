function switchOff(){
    document.getElementById("BulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("ImageCat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("SwitchOn").textContent="Switched Off";
    document.getElementById("OnSwitch").style.backgroundColor="#22c55e";
    document.getElementById("OffSwitch").style.backgroundColor="#cbd2d9";
}

function switchOn(){

    document.getElementById("BulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("ImageCat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("SwitchOn").textContent="Switched On";
    document.getElementById("OnSwitch").style.backgroundColor="#cbd2d9";
    document.getElementById("OffSwitch").style.backgroundColor="#e12d39";
}