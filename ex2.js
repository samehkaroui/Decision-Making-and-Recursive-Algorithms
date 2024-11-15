function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket price is $10";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price is $15";
    } else if (age >= 18) {
        return "Ticket price is $20";
    }
}

console.log(getTicketPrice(10));  
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(30));
