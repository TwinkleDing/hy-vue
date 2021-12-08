import {
    PORTRAIT,
    LANDSCAPE
} from "./common";

export let orientation = PORTRAIT;
if ( window.androidObject ) {
    orientation = window.androidObject.getOrientation() ? window.androidObject.getOrientation() : PORTRAIT;
} else {
    window.addEventListener("orientationchange", function(event) {
        orientation = window.orientation === 180 || window.orientation === 0 ? PORTRAIT : LANDSCAPE;
    });
}

export default {
    orientation
};