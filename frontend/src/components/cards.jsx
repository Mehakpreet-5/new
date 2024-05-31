import React from 'react'

function cards({item}) {
    console.log(item);
  return (
   <>
   <div>
   <div className="card  bg-base-100 shadow-xl mt-20 ml-10 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure><img src={item.image} className=""/></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary"> {item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className=" cursor-pointer badge badge-outline hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default cards
