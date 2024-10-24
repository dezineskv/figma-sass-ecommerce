import React from 'react'
import data from '../staticData/trendyProducts.json';

export default function TrendingFourCols() {
  return (
    <div className="container pb-4"  style={{maxWidth: '1440px'}}>
            <h2 className="secondary-heading">Trending Products</h2>
            <div className="row d-flex justify-content-space-between">
                 {data.trendies.map((trendy) => (          
                    <div className="col" style={{marginBottom: '2rem'}} key={trendy.id}>
                        <div className="h-100"  style={{width: '100%'}}>
                        <img src={trendy.image} className="card-img-trending" alt="trendy products"/>
                        <div className="card-body card-bg-t" style={{padding: '16px'}}>
                            <h5 className="be-vietnam-pro-ht">{trendy.name}</h5>
                            <p className="be-vietnam-pro-t">{trendy.description}</p>
                            <div className="two-col">
                                <div className="price" style={{paddingBottom: '20px'}}>{trendy.price}</div> <div className="presale">{trendy.presale}</div>
                            </div>
                        </div>
                        </div>
                        </div>
                ))} 
        </div>  
        <div className="row row-cols-1" style={{margin: '0 auto', paddingTop: '14px'}}>
              <div className="pt-20 mb-30">
                    <button className="btn-primary" type="button">View More</button>
              </div>
        </div>
  </div>  
  )
}
