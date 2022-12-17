const header = document.querySelector("header")

const header_bar_menu = ["Home","News","Sport","More"]



const tag_ul = document.createElement("ul")
tag_ul.className = "bar_list"

header_bar_menu.forEach(item =>{
    const tag_li = document.createElement("li")
    tag_li.className = "item_li"
    const tag_a = document.createElement("a")
    tag_a.innerHTML = item
    tag_ul.append(tag_li)
    tag_li.append(tag_a)
    header.append(tag_ul)
    lastChild_tag("a","active")
    lastChild_tag("li","float_right item_li")
})


function lastChild_tag( create_a_new_tag_element , className_tag){
    const tag_Selector = document.querySelectorAll(create_a_new_tag_element)

    tag_Selector.forEach(ele =>{
  // ele.innerHTML.includes("More") ? ele.className = className_tag :null
  if (ele.innerHTML.includes("More")) {
    ele.className = className_tag
}
 })}











const tag_a_All = document.querySelectorAll("a")

const href_bar_menu = ["Navbar.html","News.html","Sport.html","More.html"]

    tag_a_All.forEach(element =>{
       
            if (element.innerHTML.includes("Home")) {
                element.href = "Navbar.html"
            } else if(element.innerHTML.includes("News")){
                element.href = "News.html"
            } else if(element.innerHTML.includes("Sport")){
                element.href = "Sport.html"
            }else if(element.innerHTML.includes("More")){
                element.href = "More.html"
            }else{
                element.href = "#"
            }
    })
   
    