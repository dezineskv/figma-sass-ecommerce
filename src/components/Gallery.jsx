import { React } from 'react';

function Gallery () {

  return (
    <>
      <div className="outer-gallery background-gray">
        <div className="cards-gallery" style={{display: 'flex', margin: '0 auto'}}>
            <h2 className="secondary-heading"  style={{width: '100%'}}>Products Gallery</h2>
            <div className="row row-cols-1 g-4">
                    <div className="col" style={{width: '100%'}}>
                        <img style={{alignItems: 'baseline', maxWidth: '250px'}} src="/gallery/image-1.png" className="gal-img img-fluid" alt="gallery products"/>
                        <img style={{verticalAlign: 'baseline', maxWidth: '350px'}} src="/gallery/image-2.png" className="gal-img"g alt="gallery products"/>
                        <img style={{alignItems: 'baseline'}} src="/gallery/image-5.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img style={{alignItems: 'baseline', maxWidth: '250px'}} src="/gallery/image-6.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img style={{alignItems: 'center', maxWidth: '350px'}} src="/gallery/image-8.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img src="/gallery/image-3.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img src="/gallery/image-4.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img src="/gallery/image-7.png" className="img-fluid gal-img" alt="gallery products"/>
                        <img src="/gallery/image-9.png" className="gal-img" alt="gallery products"/>
                        <img src="/gallery/image-10.png" className="img-fluid gal-img" alt="gallery products"/>
                    </div>
                </div>
            </div>
      </div>
  </>
  )
}

export default Gallery