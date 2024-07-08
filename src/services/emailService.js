require('dotenv').config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    });

    let info = await transporter.sendMail({
        from: '"Nguyen Anh Vu" <nguyenanhvu.tdc2223@gmail.com>',
        to: dataSend.receiverEmail,
        subject: "Thông tin đăt lịch khám bệnh",
        // html: getBodyHTMLEmail(dataSend),
        html: `<h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này thì đã đặt lịch khám bệnh online trên BookD</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin trên là đúng sự thật vui lòng click vào link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>Xin chân thành cảm ơn</div>
        `,
    });

    console.log("Message sent: %s", info.messageId);
}

// let getBodyHTMLEmail = (dataSend) => {
//     let result = ''
//     if (dataSend.language === 'vi') {
//         result = `
//         <h3>Xin chào ${dataSend.patientName}!</h3>
//         <p>Bạn nhận được email này thì đã đặt lịch khám bệnh online trên BookD</p>
//         <p>Thông tin đặt lịch khám bệnh:</p>
//         <div><b>Thời gian: ${dataSend.time}</b></div>
//         <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

//         <p>Nếu các thông tin trên là đúng sự thật vui lòng click vào link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
//         <div>
//         <a href=${dataSend.redirectLink} target="_blank">Click here</a>
//         </div>
//         <div>Xin chân thành cảm ơn</div>
//         `
//     }
//     if (dataSend.language === 'en') {
//         result = `
//         <h3>Hello ${dataSend.patientName}!</h3>
//         <p>You received this email because you booked an online medical appointment on BookD</p>
//         <p>Appointment details:</p>
//         <div><b>Time: ${dataSend.time}</b></div>
//         <div><b>Doctor: ${dataSend.doctorName}</b></div>

//         <p>If the above information is correct, please click the link below to confirm and complete the appointment booking</p>
//         <div>
//         <a href=${dataSend.redirectLink} target="_blank">Click here</a>
//         </div>
//         <div>Thank you very much</div>
//         `
//     }
//     return result
// }

module.exports = {
    sendSimpleEmail
}
