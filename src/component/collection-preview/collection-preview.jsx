import React from "react";
import './collection-preview.css'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => (
    <div className="Collection-Preview">
        <h1 className="title"> {title} </h1>
        <div className="Preview">
            {items.map((item) => (
                <div>
                    <CollectionItem/>
                </div>
                ))}
        </div>   
    </div>
);
export default CollectionPreview;