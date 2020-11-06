const postmark = require('postmark')
//const client = new postmark.ServerClient("b845af9b-6bb4-4b74-a876-d17bf34657ea");
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

const sendEmail = (email, name) => {
     client.sendEmail({
        to: email,
        from: "anushtha1910100@akgec.ac.in",
        subject: "Thanks for joining!",
        textBody: `welcome to the app, ${name}. Let me know how u get long.`
     })
    }

// const sendCancellationEmail = (email, name) => {
//     client.sendCancellationEmail({
//         to: email,
//         from: "anushtha1910100@akgec.ac.in",
//         subject: "Sorry to see u go!",
//         textBody: `Good Bye, ${name}. Hope to see u back.`
//     })
// }

module.exports = {
    sendEmail,
    //sendCancellationEmail
}

// client.sendEmail({
//   "From": "anushtha1910100@akgec.ac.in",
//   "To": "anushtha1910100@akgec.ac.in",
//   "Subject": "Hello from Postmark",
//   "TextBody": "Heyy! This is ur first task",
//   "MessageStream": "outbound"
// });
// console.log('Mail sent')