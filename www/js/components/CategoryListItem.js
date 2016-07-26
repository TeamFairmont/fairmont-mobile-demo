var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "ProductListPage"], function (require, exports, Shared_1, React, ProductListPage_1) {
    "use strict";
    var CategoryListItem = (function (_super) {
        __extends(CategoryListItem, _super);
        function CategoryListItem() {
            _super.apply(this, arguments);
            this.handleClick = function (ev) {
                var target = ev.currentTarget;
                var id = parseInt(target.getAttribute("data-id"));
                var name = target.getAttribute("data-name");
                Shared_1.pageManager.pushPage(Shared_1.pageManager.renderPage(React.createElement(ProductListPage_1.ProductListPage, {categoryId: id, name: name})).page);
            };
        }
        CategoryListItem.prototype.render = function () {
            return React.createElement("ons-list-item", {onClick: this.handleClick.bind(this), modifier: "chevron", tappable: true, "data-id": this.props.id, "data-name": this.props.name}, this.props.name);
        };
        return CategoryListItem;
    }(React.Component));
    exports.CategoryListItem = CategoryListItem;
});
//# sourceMappingURL=CategoryListItem.js.map