const handleButton = (author)=>{
  alert(`hey I am ${author}`)
 
}
const adi = (e)=>{
console.log(e.target)
}
const Book = (props)=>{
  console.log(props)
const{img,author} = props
return (
<section onMouseOver = {()=>{
  console.log("This is the complete book information")
}}>
<img onClick = {adi} src= {img} alt ="tasveer"/>
<p>Written by {author}</p>
<button onClick = {()=>{
  handleButton(author)
}}>{author}</button>




</section>
)}
export default Book