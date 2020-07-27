var eventUtility = {
    addEvent: (function () {
        return function (obj, evt, fn) {
            if (typeof addEventListener === "function") obj.addEventListener(evt, fn, false);
            else obj.attachEvent("on" + evt, fn);
        };
    }()),
    removeEvent: (function () {
        return function (obj, evt, fn) {
            if (typeof removeEventListener === "function") obj.removeEventListener(evt, fn, false);
            else obj.detachEvent("on" + evt, fn);
        };
    }()),
    getTarget: (function () {
        return function (event) {
            if (typeof addEventListener !== "undefined") return event.target;
            else return event.srcElement;
        };
    }()),
    preventDefault: (function () {
        return function (event) {
            if (typeof addEventListener !== "undefined") event.preventDefault();
            else event.returnValue = false;
        };
    }())
};