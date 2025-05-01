function toggleMode() {
  const html = document.documentElement
  /*primeira opção
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
 }
*/
html.classList.toggle("light")
}

 