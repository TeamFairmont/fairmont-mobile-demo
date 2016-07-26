import {pageManager, boltCall} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {CategoryListPage} from "CategoryListPage"
import {MainMenu} from "MainMenu"
import {ProductListItem} from "components/ProductListItem"
import {CategoryListItem} from "components/CategoryListItem"

export interface StartPageProps {  }

export class StartPage extends React.Component<StartPageProps, { images:Array<string>, products:Array<any> }> {
    private _el:Element;

    constructor() {
        super();
        this.state = {
            images:[],
            products:[],
        };
    }

    render() { 
        return <ons-page id="startpage" ref={(c:Element) => this._el = c}>
                <ons-toolbar>
                <div className="left">
                    <ons-back-button>Back</ons-back-button>
                </div> 
                <div className="center">Start Page</div>
                <div className="right">
                    <ons-toolbar-button>
                        <ons-icon icon="fa-bars" onClick={this.handleClick} />
                    </ons-toolbar-button>
                </div>
                </ons-toolbar>
                <ons-carousel style={{height:"300px"}} swipeable overscrollable auto-scroll auto-refresh>
                    <div style={{float:"left", zIndex:1, position:"absolute", textAlign:"center", color:"white",fontWeight:"bold", textShadow:"1px 1px black"}}>
                        <br/>Welcome to our store<br />
                        Check out some of these great foods!
                    </div>
                    {this.state.images.map((v, i)=>{
                        return <ons-carousel-item key={i}><img src={v} style={{width:"100%", height:"300px"}} /></ons-carousel-item>
                    })}                    
                </ons-carousel>
                <ons-list>
                    <ons-list-header>View Products</ons-list-header>
                    <CategoryListItem name="Super Specials" id={123}></CategoryListItem>
                    <ons-list-item onClick={this.handleViewAllClick.bind(this)} modifier="chevron" tappable>All Products</ons-list-item>

                    <ons-list-header>Recommended For You</ons-list-header>
                    {this.state.products.map((v, i)=>{
                        return <ProductListItem key={i} name={v.name} price={v.price} stock={v.stock} sku={v.sku} previewImage={v.previewImage}></ProductListItem>
                    })} 
                </ons-list>
                
            </ons-page>;
    }

    public componentDidMount = () => {
        this._el.addEventListener("init", this.handleInit.bind(this));
        this._el.addEventListener("destroy", this.handleDestroy.bind(this));
        this._el.addEventListener("show", this.handleShow.bind(this));
        this._el.addEventListener("hide", this.handleHide.bind(this));
        
        boltCall("mobile/getHomeBanners", {}, (result:any) => {
            this.setState(result.return_value);
        });

        boltCall("mobile/getRecommendedProducts", {userId:"someuser"}, (result:any) => {
            this.setState(result.return_value);
        });
        
    }

    private handleViewAllClick = (ev:Event) => {
        pageManager.pushPage(pageManager.renderPage(
            <CategoryListPage></CategoryListPage>
        ).page);
    }

    private handleClick = (ev:Event) => {
        var menu = document.querySelector("ons-splitter-side") as any;
        menu.open();
    }

    private handleInit(ev:Event) {
    }

    private handleDestroy(ev:Event) {
    }

    private handleShow(ev:Event) {
        ReactDOM.render(<MainMenu></MainMenu>, document.getElementById("menu"));
    }

    private handleHide(ev:Event) {
    }
}   