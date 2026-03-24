const blog_form=document.querySelector("#blog_form")
const blog_title=document.querySelector("#blog_title")
const blog_img=document.querySelector("#blog_img")
const blog_desc=document.querySelector("#blog_desc")
const blog_list=document.querySelector("#blog_list")


blog_form.addEventListener("submit",AddPst);
document.addEventListener("DOMContentLoaded",loadBlogs)

function loadBlogs(){
  let oldBlogs=getBlogsFromLocalStroage();
  oldBlogs.forEach(blog=>{
    addBlogtoDom(blog)
  })
}

function AddPst(e){
   e.preventDefault();
   blog_title.value;
   blog_img.value;
   blog_desc.value;

   if (
  blog_title.value.trim() !== "" &&
  blog_img.value.trim() !== "" &&
  blog_desc.value.trim() !== ""
){

    const blog = {
  id: Date.now(),
  title: blog_title.value,
  img: blog_img.value,
  desc: blog_desc.value
}
  
    addBlogtoDom(blog)
    saveBlogToLocalStorage(blog);
    blog_title.value="";
   blog_img.value="";
   blog_desc.value="";
   }

  // console.log(blog_title.value)
  // console.log(blog_desc.value)
  // console.log(blog_img.value)

}
function addBlogtoDom(blog){
const li=document.createElement("li");
li.className="blog_list"
li.dataset.id = blog.id;
// console.log(li)

li.innerHTML = `
  <span class="blog_title">${blog.title}</span>
  <img src="${blog.img}" alt="Blog Image" class="blog_image">
  <p class="blog_desc">${blog.desc}</p>
  <button class="edit_btn">Edit</button>
  <button class="delete_btn">Delete</button>
`;
   blog_list.appendChild(li)
   attachEventListers(li,blog)

}

function attachEventListers(li,blog){
  const delete_btn=li.querySelector(".delete_btn")
  const edit_btn=li.querySelector(".edit_btn")

  delete_btn.addEventListener("click",function(){
    handleDelet(blog.id,li)
  })

  edit_btn.addEventListener("click",function(){
  handleEdit(blog.id,li)
})

}



function handleDelet(blogID,li){

  let blogs=getBlogsFromLocalStroage();
  blogs = blogs.filter(blog => blog.id != blogID);
  localStorage.setItem("blogs",JSON.stringify(blogs))
  li.remove();


}
function handleEdit(blogID,li){
  const blog_title=li.querySelector(".blog_title");
  const blog_image=li.querySelector(".blog_image");
  const blog_desc=li.querySelector(".blog_desc")
  const new_blog_title=prompt("Edit your Titile",blog_title.textContent);
  const new_blog_image=prompt("change The Image",blog_image.src);
  const new_blog_desc=prompt("Edit your Blog Post Description",blog_desc.textContent)



const title = new_blog_title?.trim();
  const img = new_blog_image?.trim();
  const desc = new_blog_desc?.trim();

  if (title && img && desc) {

    // ✅ Update DOM
    blog_title.textContent = title;
    blog_image.src = img;
    blog_desc.textContent = desc;

    // ✅ Update Local Storage
    updateBlog(blogID, title, img, desc);

  }
  

}

function updateBlog(id, newTitle, newImg, newDesc){
  const blogs = getBlogsFromLocalStroage();

  const updatedBlogs = blogs.map(blog => {
    if (blog.id == id) {
      return {
        ...blog,
        title: newTitle,
        img: newImg,
        desc: newDesc
      };
    }
    return blog;
  });

  localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
}




function saveBlogToLocalStorage(blog){
let oldBlogs=getBlogsFromLocalStroage()
oldBlogs.push(blog)

localStorage.setItem("blogs",JSON.stringify(oldBlogs))
}
function getBlogsFromLocalStroage(){
  const oldData=JSON.parse(localStorage.getItem("blogs"))||[]
  // console.log(oldData)
  return oldData;
}