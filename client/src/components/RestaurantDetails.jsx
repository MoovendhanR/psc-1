

function RestaurantDetails({
    image:url,
   name:title,
    cost,
    rating,
    votes,
    reviews,
    cuisine:tags
}){
   return(
       <div style={{display: 'flex',gap:"2rem",border:"1px solid black",padding:"1rem",margin:"1rem"}}>
         <div>
             <img src={url} width="50px" alt={title} />
         </div>
         <div>
             <div>{title}</div>
             <div>{tags}</div>
             <div>Cost ${cost}for one</div>
         </div>
         <div>
               <div>{rating}</div>
               <div>{votes}votes</div>
               <div>{reviews}reviews</div>
         </div>
       </div>
   )  
}


export default RestaurantDetails;