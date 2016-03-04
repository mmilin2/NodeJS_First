function placeAnOrder(orderNumber){

    console.log("Order Placed for:", orderNumber);

    cookAndDeliver(function(){
        console.log("Food Delivered for:", orderNumber);
    });

}

function cookAndDeliver(callback){
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
placeAnOrder(8);
placeAnOrder(9);
placeAnOrder(10);