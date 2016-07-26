var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
            this.handleHome = function () {
                window.location.href = "/";
            };
            this.handleCart = function () {
                ons.notification.alert('To-Do: Normally this would make a request to Fairmont API v1/cart/getCart and display results');
            };
        }
        MainMenu.prototype.render = function () {
            return React.createElement("ons-page", null, React.createElement("ons-list", null, React.createElement("ons-list-item", {onClick: this.handleHome.bind(this), tappable: true}, "Home"), React.createElement("ons-list-item", {onClick: this.handleCart.bind(this), tappable: true}, "My Cart"), React.createElement("ons-list-item", {onClick: function () { return ons.notification.alert('Our company sells great food products endorsed by cats!'); }, tappable: true}, "About")));
        };
        return MainMenu;
    }(React.Component));
    exports.MainMenu = MainMenu;
});
//# sourceMappingURL=MainMenu.js.map