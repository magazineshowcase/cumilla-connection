const form = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = form.querySelector("textarea").value.trim();
  if(text){
    const li = document.createElement("li");
    li.textContent = text;
    commentList.appendChild(li);
    form.reset();
  }
});
