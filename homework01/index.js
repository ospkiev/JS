const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let val = prompt ('Log in');
let canceled ='canceled by user';
let prohibited = 'enter prohibited';
let enterPassword = 'enter password';
let wellcome = 'Wellcome';
    if( val === null){
        alert = (canceled);
    } else if ( val !== adminLogin ){
        alert (prohibited);
    } else {
        let password = prompt(enterPassword);
            if( password === null){
                alert = (canceled);
            } else if ( password !== adminPassword){
                alert (prohibited); 
            } else if ( password === adminPassword){
                alert (wellcome);
            }
    }