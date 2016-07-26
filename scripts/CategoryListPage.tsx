import {pageManager, boltCall} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {ProductListPage} from "ProductListPage"
import {CategoryListItem} from "components/CategoryListItem"

export interface CategoryListPageProps { }

export class CategoryListPage extends React.Component<CategoryListPageProps, { categories:any }> {
    private _el:Element;

    constructor() {
        super();
        this.state={
            categories:[]
        }
    }

    render() {
        return <ons-page id="categorylistpage" ref={(c:Element) => this._el = c}>
                <ons-toolbar>
                <div className="left">
                    <ons-back-button>Back</ons-back-button>
                </div> 
                <div className="center">Product Categories</div>
                </ons-toolbar>
                <ons-list>
                    <ons-list-header>Main Categories</ons-list-header>
                    {this.state.categories.map((v:any, i:any)=>{
                        return <CategoryListItem key={i} name={v.name} id={v.id}></CategoryListItem>
                    })}
                </ons-list>
            </ons-page>;
    }

    public componentDidMount = () => {
        this._el.addEventListener("init", this.handleInit.bind(this));
        this._el.addEventListener("destroy", this.handleDestroy.bind(this));
        this._el.addEventListener("show", this.handleShow.bind(this));
        this._el.addEventListener("hide", this.handleHide.bind(this));

        boltCall("mobile/getCategories", {}, (result:any) => {
            this.setState(result.return_value);
        });
    }

    private handleInit(ev:Event) {
    }

    private handleDestroy(ev:Event) {
    }

    private handleShow(ev:Event) {
    }

    private handleHide(ev:Event) {
    }
}   