
function showNotification(message) {
 
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerText = message;

 
  notification.style.position = "fixed";
  notification.style.top = "10px";
  notification.style.right = "10px";
  notification.style.padding = "15px";
  notification.style.backgroundColor = "#4caf50";
  notification.style.color = "white";
  notification.style.borderRadius = "5px";
  notification.style.zIndex = "1000";
  notification.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  notification.style.fontSize = "16px";

  
  document.body.appendChild(notification);

 
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
 
function addToCart(productName, price) {
      
  showNotification(`${productName} has been added to your cart!`);
}


  function navigateTo(page) {
    window.location.href = page;
  }
  