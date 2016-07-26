var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "ProductDetailPage"], function (require, exports, Shared_1, React, ProductDetailPage_1) {
    "use strict";
    var ProductListItem = (function (_super) {
        __extends(ProductListItem, _super);
        function ProductListItem() {
            _super.apply(this, arguments);
            this.handleClick = function (ev) {
                var target = ev.currentTarget;
                var sku = target.getAttribute("data-sku");
                Shared_1.pageManager.pushPage(Shared_1.pageManager.renderPage(React.createElement(ProductDetailPage_1.ProductDetailPage, {sku: sku})).page);
            };
        }
        ProductListItem.prototype.render = function () {
            return React.createElement("ons-list-item", {class: this.props.stock >= 1 ? "" : "oos", tappable: true, onClick: this.handleClick.bind(this), "data-sku": this.props.sku}, React.createElement("div", {className: "left"}, React.createElement("img", {className: "list__item__thumbnail", src: this.props.previewImage})), React.createElement("div", {className: "center"}, React.createElement("span", {className: "list__item__title"}, this.props.name), React.createElement("span", {className: "list__item__subtitle"}, "$", this.props.price, " - ", this.props.stock >= 1 ? 'In-Stock' : 'Out of Stock')), React.createElement("div", {className: "right"}, React.createElement("ons-icon", {icon: "ion-ios-list-outline", size: "32px"})));
        };
        return ProductListItem;
    }(React.Component));
    exports.ProductListItem = ProductListItem;
});
//# sourceMappingURL=ProductListItem.js.map