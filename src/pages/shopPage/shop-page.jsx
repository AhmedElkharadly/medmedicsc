import React from "react";
import './shop-page.css'

import { SHOPDATA } from '../shopPage/ShopData';
import CollectionPreview from '../../component/collection-preview/collection-preview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          collections: SHOPDATA
    }
}
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />))}
            </div>
        );
    }
}
export default ShopPage;


      


  