import Payment from "./events/payment.js";
import PaymentSubject from "./events/subjescts/paymentSubjesct.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";

const subject = new PaymentSubject();
const marketing = new Marketing();
subject.subscribe(marketing);


const shipment = new Shipment();
subject.subscribe(shipment);

const payment = new Payment(subject)
payment.creditCard({userName: "Mateus", id: Date.now()});

subject.unsubscribe(marketing);

// só vai disparar para a área de shipment
payment.creditCard({userName: "Priscilla", id: Date.now()})