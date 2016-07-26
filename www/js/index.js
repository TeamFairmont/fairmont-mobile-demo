define(["require", "exports", './StartPage', './Shared', "react"], function (require, exports, StartPage_1, Shared_1, React) {
    "use strict";
    var MyApp;
    (function (MyApp) {
        var Application;
        (function (Application) {
            "use strict";
            function initialize() {
                onDeviceReady();
            }
            Application.initialize = initialize;
            function onDeviceReady() {
                var w = window;
                w.pageManager = Shared_1.pageManager;
                Shared_1.pageManager.pushPage(Shared_1.pageManager.renderPage(React.createElement(StartPage_1.StartPage, null)).page, function () { }, "", { title: "Fairmont Mobile Demo", urlpath: "/" });
            }
        })(Application || (Application = {}));
        ons.ready(function () {
            Application.initialize();
        });
    })(MyApp || (MyApp = {}));
});
//# sourceMappingURL=index.js.map