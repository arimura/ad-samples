(function startViewability(){
    document.body.style.backgroundColor = "#ff0000";
    const topConsole = window.top.console;
    const mraid = window.top.mraid;
    topConsole.log("start viewability");
    if(mraid.getState() === "default"){
        mraid.addEventListener(
            'exposureChange', (exposedPercentage, visibleRectangle, occlusionRectangles) => {
                    topConsole.log("exposedPercentage: " + exposedPercentage);
                }
        );
    }
})();