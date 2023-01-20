(function startViewability() {
    document.body.style.backgroundColor = "#ff0000";
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("MRAID ads");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);

    const topConsole = window.top.console;
    const mraid = window.top.mraid;
    topConsole.log("start viewability");
    if (mraid.getState() === "default") {
        mraid.addEventListener(
            'exposureChange', (exposedPercentage, visibleRectangle, occlusionRectangles) => {
                topConsole.log("exposureChange: " + exposedPercentage);
            }
        );
        mraid.addEventListener(
            'viewableChange',(isViewable) => {
                topConsole.log("viewableChange :" + isViewable);
            }
        );
    }
})();