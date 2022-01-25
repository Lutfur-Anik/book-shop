//error msg
const  errorMsg=document.getElementById('show');
const loadBooks=()=>{
    const book=document.getElementById('input');
    displaySpinner('block')
    
    const searchText=book.value;
    book.value=''
    //show spinner
    
    const  errorMsg=document.getElementById('show');
    
 if(searchText==''){

  errorMsg.innerHTML=`<h3>plz something type</h3>`
 
 }
 else{
  errorMsg.textContent=''
 }
 

   const url=`https://openlibrary.org/search.json?q=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>{
    displayResult(data.docs)
   })
}
const displaySpinner=spinnerDisplay=>{
  document.getElementById('spinner').style.display=spinnerDisplay;
}
const displayResult=book=>{
  const length= document.getElementById('length-books')
  length.innerHTML=''
  length.innerHTML=`<h5> Total searches found: ${book.length} </h5>`
   
  
    if(book.length == 0){
    
     errorMsg.innerHTML=`<h3>Result not found</h3>`;
    }
    else{
      errorMsg.textContent=''
    }
    
    const card=document.getElementById('display-result');
    card.textContent=''
   
    book.forEach(list => {
      
       
        const div=document.createElement('div');
      
        div.classList.add('col-md-4')
        div.innerHTML=`<div class="card h-100">
        <img  src="https://covers.openlibrary.org/b/id/${list?.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h2 class="card-title">${list.title}</h2>
          <h5 class="card-title text-danger mb-4 fst-italic">${list.author_name}</h5>
          <h6 class="card-title"><span class='fs-5 fw-bold'>First Publish Year:</span> ${list.first_publish_year}</h6>
          <h6 class="card-title"><span class='fs-5 fw-bold'>Publish Date:</span> ${list.publish_date}</h6>
          <h6 class="card-title"><span class='fs-5 fw-bold'>Publisher:</span> ${list.publisher}</h6>
        </div>
        </div>`
       card.appendChild(div);
   
    });
    displaySpinner('none')
   }
