const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const declineBtn = document.getElementById('decline-btn')
const buttonGroup = document.getElementById('modal-choice-btns')

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    buttonGroup.classList.toggle('reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    
    const fullName = consentFormData.get('fullName')


    document.getElementById('modal-text').innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    ` 
    setTimeout(function() {
        document.getElementById('uploadText').innerText = `Making the sale...`
    }, 1500)

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
})