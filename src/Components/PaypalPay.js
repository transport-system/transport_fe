import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import paymentApi from '../api/paymentApi';
import { useNavigate } from 'react-router-dom';

function PaypalPay({totalPriceUSD,bookId,c_Email,booked}) {

  const price = (price) =>{ const  newPrice = price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
return newPrice
}

const tranfer=(time)=>{
  const newTime = new Date(time).toLocaleString("en-US", {
       month: "short",
       day: "2-digit",
       year: "numeric",
       hour: "2-digit",
       minute: "2-digit",
     });
     return newTime;
 }

const handlePaypal = async (e) => {

        const bookingId = bookId
        const method = "CARD"
        const data ={bookingId,method}
        
     
        
        try {
          const response = await paymentApi.payLater(data);
          console.log(response);
          console.log();
          const sEmail = booked.c_Email ? booked.c_Email:  booked.email
          if (response.data) {
            // message.success(response.data.message);
            window.Email.send({
              Host: "smtp.elasticemail.com",
              Username : "kgzeref@gmail.com",
              Password : "44E27D2678B035AAC846BC9057D6A2FF67F6",
              To : `${sEmail}`,
              From : "kgzeref@gmail.com",
              Subject : "confirm payment",
              Body : `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                  <title>Invoice</title>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"
                  />
                  <style>
                    @media print {
                      @page {
                        size: A3;
                      }
                    }
                    ul {
                      padding: 0;
                      margin: 0 0 1rem 0;
                      list-style: none;
                    }
                    body {
                      font-family: "Inter", sans-serif;
                      margin: 0;
                    }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                    }
                    table,
                    table th,
                    table td {
                      border: 1px solid silver;
                    }
                    table th,
                    table td {
                      text-align: right;
                      padding: 8px;
                    }
                    h1,
                    h4,
                    p {
                      margin: 0;
                    }
              
                    .container {
                      padding: 20px 0;
                      width: 1000px;
                      max-width: 90%;
                      margin: 0 auto;
                    }
              
                    .inv-title {
                      padding: 10px;
                      border: 1px solid silver;
                      text-align: center;
                      margin-bottom: 30px;
                    }
              
                    .inv-logo {
                      width: 150px;
                      display: block;
                      margin: 0 auto;
                      margin-bottom: 40px;
                    }
              
                    /* header */
                    .inv-header {
                      display: flex;
                      margin-bottom: 20px;
                    }
                    .inv-header > :nth-child(1) {
                      flex: 2;
                    }
                    .inv-header > :nth-child(2) {
                      flex: 1;
                    }
                    .inv-header h2 {
                      font-size: 20px;
                      margin: 0 0 0.3rem 0;
                    }
                    .inv-header ul li {
                      font-size: 15px;
                      padding: 3px 0;
                    }
              
                    /* body */
                    .inv-body table th,
                    .inv-body table td {
                      text-align: left;
                    }
                    .inv-body {
                      margin-bottom: 30px;
                    }
              
                    /* footer */
                    .inv-footer {
                      display: flex;
                      flex-direction: row;
                    }
                    .inv-footer > :nth-child(1) {
                      flex: 2;
                    }
                    .inv-footer > :nth-child(2) {
                      flex: 1;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="inv-title">
                    <h1>Invoice # ${booked.id}</h1>
                    </div>
                    <div class="inv-header">
                      <div>
                        <h2>SWP Team</h2>
                        <ul>
                          <li>Bus Booking</li>
                          <li>Ho Chi Minh</li>
                          <li>0338148702 |dtgkhang99@gmail.com</li>
                        </ul>
                      </div>
                      <div>
                        <table>
                          <tr>
                            <th>Due Date</th>
                            <td>${tranfer(booked.createBookingTime)}</td>
                          </tr>
                    
                          <tr>
                            <th>Total</th>
                            <td>${ price(booked.totalPrice)}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="inv-body">
                 
                    </div>
                    <div class="inv-footer">
                      <div><!-- required --></div>
                      <div>
                        <table>
                          <tr>
                            <th>Sub total</th>
                            <td>200</td>
                          </tr>
                          <tr>
                            <th>Sales tax</th>
                            <td>200</td>
                          </tr>
                          <tr>
                            <th>Grand total</th>
                            <td>1200</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </body>
              </html>              `
          }).then(
          );
            navigate(`/paymentcomplete/${response.data.id}`)
    
          } else {
            console.log(response);
          }
        } catch (err) {
        //   console.log(values);
        }
      }; 
    

  const navigate = useNavigate();
  return (
    <div>             <PayPalScriptProvider options={{ "client-id": "AYotY_599WqOKYnkhPqjmwHKN3pFcVVXjZk68fmGIhozA9WA43JvK1_sz3jEpL9G1DRHjIR-KWeWgiG_" }}>
    <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: totalPriceUSD,
                        },
                    },
                ],
            });
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);

                handlePaypal()
   
      

            });
        }}
    />
</PayPalScriptProvider>
</div>
  )
}

export default PaypalPay