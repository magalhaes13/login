// criar as coisas depois

function sair(){
    localStorage.removeItem('token')
    window.location.href = '/login'
}