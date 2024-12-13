import React from 'react'
import "./PageHeading.css"


const PageHeading = ({variant, text})=>{
    var newclass = "";
    if(variant==='color')newclass='gradient-color';
    if(variant==='bw')newclass='gradient-bw';

    return (
        <div className={"page-heading" + (newclass?` ${newclass}`:'')}>
            {text}
        </div>
    )
}

export default PageHeading