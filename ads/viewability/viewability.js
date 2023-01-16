(function startViewability(){
    const mraid = window.top.mraid;
    if(mraid.getState() === "default"){
        mraid.addEventListener(
            'exposureChange', (exposedPercentage, visibleRectangle, occlusionRectangles) => {
                    console.log("exposedPercentage: " + exposedPercentage);
                }
        );
    }

})();