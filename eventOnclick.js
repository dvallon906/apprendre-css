
const dateTimeNow = new Date()

const dateTimeFormatter = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Paris', 
})


function myFunction(){
    alert(dateTimeFormatter.format(dateTimeNow));
} 