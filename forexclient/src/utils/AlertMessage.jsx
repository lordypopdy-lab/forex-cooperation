import React from 'react'

const AlertMessage = () => {

    const names = ["John", "Emma", "Michael", "Sophia", "David", "Olivia", "Daniel", "Ava", "James", "Isabella"];
    const traderTypes = ["FOREX Trader", "Crypto Investor", "Stock Market Expert", "Gold Trader", "Binary Options Trader"];
    const messages = [];

    for (let i = 0; i < 200; i++) {
        let name = names[Math.floor(Math.random() * names.length)] + " " + (Math.random() < 0.5 ? "Smith" : "Johnson");
        let amount = "£" + (Math.floor(Math.random() * 9000) + 1000).toLocaleString(); // Random £1,000 - £10,000
        let traderType = traderTypes[Math.floor(Math.random() * traderTypes.length)];
        messages.push({ name, amount, traderType });
    }


    function showNotification() {
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];

        Swal.fire({
            position: "top-end",
            html: `<div class='test'>
                   <span style="color: rgb(181, 67, 67); font-weight: bold;">${randomMessage.name}</span> 
                   <span style="color: black;">successfully withdrew ${randomMessage.amount} from ${randomMessage.traderType}</span>
               </div>`,
            showConfirmButton: false,
            timer: 3200,
            customClass: {
                popup: "custom-swal-popup",
                title: "custom-swal-title",
                html: "html-custom"
            },
        });

        let nextTime = Math.random() < 0.5 ? 14000 : 19000;
        setTimeout(showNotification, nextTime);
    }

    showNotification();
    return (
        <div>

        </div>
    )
}

export default AlertMessage
