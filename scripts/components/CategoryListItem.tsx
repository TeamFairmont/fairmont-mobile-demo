import {pageManager} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {ProductListPage} from "ProductListPage"

export interface Props { name:string, id:number }

export class CategoryListItem extends React.Component<Props, {}> {
    private _el:Element;
 
    render() { 
        return <ons-list-item onClick={this.handleClick.bind(this)} modifier="chevron" tappable data-id={this.props.id} data-name={this.props.name}> 
                {this.props.name}
            </ons-list-item>;
    }

    private handleClick = (ev:Event) => {
        var target = ev.currentTarget as Element;
        var id = parseInt(target.getAttribute("data-id"));
        var name = target.getAttribute("data-name");

        pageManager.pushPage(pageManager.renderPage(
            <ProductListPage categoryId={id} name={name}></ProductListPage>
        ).page);
    }
}