function gotoPage(select) {
    (select.selectedIndex === 1) ? (window.location = select.value) : (alert(select.options[select.selectedIndex].value))
}
