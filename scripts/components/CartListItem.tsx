import * as React from "react"
import * as ReactDOM from "react-dom"

declare var ons:any;

export interface Props { meta:any, name:string, price:number, stock:number, sku:string, previewImage?:string }

export class CartListItem extends React.Component<Props, {}> {
    private _el:Element;
 
    render() { 
        return <ons-list-item data-sku={this.props.sku}>
                <div className="left"><img className="list__item__thumbnail" src={this.props.previewImage} /></div>
                <div className="center">
                    <span className="list__item__title">{this.props.name}</span>
                    <span className="list__item__subtitle">${this.props.price}</span>
                    {(() => {
                        if (this.props.meta.giftmessage) {
                            return <span className="list__item__subtitle">Gift Message: {this.props.meta.giftmessage}</span>     
                        }
                    })()}                                   
                </div>
                <div className="right">
                    <ons-button modifier="quiet" onClick={this.handleClick.bind(this)}><ons-icon icon="ion-close-circled" size="32px" /></ons-button>
                </div>
            </ons-list-item>;
    }

    private handleClick = (ev:Event) => {
        var target = ev.currentTarget as Element;
        var sku = target.getAttribute("data-sku");
        ons.notification.alert("TODO: Normally this would call Fairmont API mobile/adjustCart and update the state to remove "+sku);
    }
}