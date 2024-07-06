require('dotenv').config();
const nodemailer = require("nodemailer");


let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Sửa lại host
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
        html: `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này thì đã đặt lịch khám bệnh online trên BookD</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ gian: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin trên là đúng sự thật vui lòng click vào link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>Xin chân thành cảm ơn</div>
        `,
    });

    console.log("Message sent: %s", info.messageId);
}

async function main(){

}

module.exports = {
    sendSimpleEmail
}