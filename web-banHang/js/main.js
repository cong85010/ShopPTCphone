var checkSearch = false;

function search_out(){
    if(checkSearch == false) {
        document.getElementById('input_bar').classList.add('timra')
        change_search()
        checkSearch = true;
    }
    else {
        closetim()
        document.getElementById('button-addon').innerHTML = '<i class="fa fa-search"></i>'
    }
}
function closetim() {
    if(checkSearch == true) {
        document.getElementById('input_bar').classList.remove('timra')
        checkSearch = false
    }
}
function change_search (){
    document.getElementById('button-addon').innerHTML = '<i class="fas fa-times-circle"></i>'
    checkSearch = false
}