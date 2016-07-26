import {pageManager} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {ProductDetailPage} from "ProductDetailPage"

export interface Props { name:string, price:number, stock:number, sku:string, previewImage?:string }

export class ProductListItem extends React.Component<Props, {}> {
    private _el:Element;
 
    render() { 
        return <ons-list-item class={this.props.stock>=1 ? "" : "oos"} tappable onClick={this.handleClick.bind(this)} data-sku={this.props.sku}>
                <div className="left"><img className="list__item__thumbnail" src={this.props.previewImage} /></div>
                <div className="center">
                    <span className="list__item__title">{this.props.name}</span>
                    <span className="list__item__subtitle">${this.props.price} - {this.props.stock>=1 ? 'In-Stock' : 'Out of Stock'}</span>
                </div>
                <div className="right"><ons-icon icon="ion-ios-list-outline" size="32px" /></div>
            </ons-list-item>;
    }

    private handleClick = (ev:Event) => {
        var target = ev.currentTarget as Element;
        var sku = target.getAttribute("data-sku");

        pageManager.pushPage(pageManager.renderPage(
            <ProductDetailPage sku={sku}></ProductDetailPage>
        ).page);
    }
}