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
                id:1,
                linkUrl:'hats'
                },
                {
                    title:'jackets',
                    imageUrl:'https://www.aasharley-davidson.com/img/shop/gm.png',
                    id:2,
                    linkUrl:''
                },
                {
                    title:'sneakers',
                    imageUrl:'https://static.dezeen.com/uploads/2015/07/Converse-Chuck-Taylor-All-Star-II_dezeen_784_10.jpg',
                    id:3,
                    linkUrl:''
                },
                {
                    title:'women',
                    imageUrl:'https://i.cbc.ca/1.4713184.1529440884!/fileImage/httpImage/image.png_gen/derivatives/16x9_780/petite.png',
                    size:'large',
                    id:4,
                    linkUrl:''
                },
                {
                    title:'men',
                    imageUrl:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/06/27/15/indybest-mens-ethical-clothing.jpg',
                    size:'large',
                    id:5,
                    linkUrl:''
                }


            ]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                 {
                  this.state.section.map(({id, ...otherSectionProp  }) => (
                      <MenuItem key={id} {...otherSectionProp} />
                  ))
                }
            </div>
        )
    }
}

export default Directory;