var list = document.getElementById("list");
var input = document.getElementById("todo-item");
input.addEventListener("keydown",function(e){
    if(e.code === "Enter"){
        addTodo()
    }
})
function addTodo() {
    var todo_item = document.getElementById("todo-item");
if(todo_item.value == "" || todo_item.value == " " || todo_item.value == "  "){
  alert("please first write something")
}
else{
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class","size")
    li.appendChild(liText);

    var delBtn = document.createElement('button');
    delBtn.setAttribute("class","btn");
    var iconTrash = document.createElement('i');
    iconTrash.setAttribute("class","fa fa-trash size")
    delBtn.appendChild(iconTrash);
    delBtn.style.backgroundColor = "transparent"
    delBtn.style.border = "none"
    delBtn.style.margin = "3px";
    delBtn.style.margin = "3px";
    delBtn.setAttribute("onclick","deleteItem(this)");
    
    var editBtn = document.createElement('button');
    var iconEdit = document.createElement('i');
    iconEdit.setAttribute("class","fa fa-edit size")
    editBtn.style.backgroundColor = "transparent";
    editBtn.style.border = "none";
    editBtn.style.margin = "3px";
    editBtn.setAttribute("class","btn");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(iconEdit)
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    todo_item.value= "";


}
    
}
function deleteItem(e){
            e.parentNode.remove()
}
function editItem(e){
  var val = prompt("Enter your value you want to be edited",e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = val
}
function deleteAll(){
    list.innerHTML = ""
}
