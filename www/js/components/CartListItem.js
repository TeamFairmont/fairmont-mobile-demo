var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var CartListItem = (function (_super) {
        __extends(CartListItem, _super);
        function CartListItem() {
            _super.apply(this, arguments);
            this.handleClick = function (ev) {
                var target = ev.currentTarget;
                var sku = target.getAttribute("data-sku");
                ons.notification.alert("TODO: Normally this would call Fairmont API mobile/adjustCart and update the state to remove " + sku);
            };
        }
        CartListItem.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-list-item", {"data-sku": this.props.sku}, React.createElement("div", {className: "left"}, React.createElement("img", {className: "list__item__thumbnail", src: this.props.previewImage})), React.createElement("div", {className: "center"}, React.createElement("span", {className: "list__item__title"}, this.props.name), React.createElement("span", {className: "list__item__subtitle"}, "$", this.props.price), (function () {
                if (_this.props.meta.giftmessage) {
                    return React.createElement("span", {className: "list__item__subtitle"}, "Gift Message: ", _this.props.meta.giftmessage);
                }
            })()), React.createElement("div", {className: "right"}, React.createElement("ons-button", {modifier: "quiet", onClick: this.handleClick.bind(this)}, React.createElement("ons-icon", {icon: "ion-close-circled", size: "32px"}))));
        };
        return CartListItem;
    }(React.Component));
    exports.CartListItem = CartListItem;
});
//# sourceMappingURL=CartListItem.js.map