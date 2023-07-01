function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    var contentDiv = document.getElementById("content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    contentDiv.style.marginTop = dropdownContent.style.display === "block" ? dropdownContent.offsetHeight + "px" : "0";
}