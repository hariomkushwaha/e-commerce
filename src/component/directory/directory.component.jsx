import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {

            section:[
                {
                title:'hat',
                imageUrl:'https://gringosabroad.com/wp-content/uploads/2010/07/panama_hats20090923_022.jpg',
                id:1
                },
                {
                    title:'jackets',
                    imageUrl:'https://www.aasharley-davidson.com/img/shop/gm.png',
                    id:2
                },
                {
                    title:'sneakers',
                    imageUrl:'https://static.dezeen.com/uploads/2015/07/Converse-Chuck-Taylor-All-Star-II_dezeen_784_10.jpg',
                    id:3
                },
                {
                    title:'women',
                    imageUrl:'https://lh3.googleusercontent.com/proxy/fyhVf29aab6pkljrTj1_mH_tzlLasect8B-hrWAUvGy2pNOo904BFIwi1ZGg2qIBNKKyVi2j9Iderb6AaBwjS0z9e1Rz7uO0',
                    size:'large',
                    id:4
                },
                {
                    title:'men',
                    imageUrl:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/06/27/15/indybest-mens-ethical-clothing.jpg',
                    size:'large',
                    id:5
                }


            ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                 {
                  this.state.section.map(({ title,imageUrl,id ,size}) => (
                      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                  ))
                }
            </div>
        )
    }
}

export default Directory;