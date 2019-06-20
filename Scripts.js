var cardBack = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";

for(var i = 0; i <= document.getElementsByTagName("img").length; i++){
  document.getElementsByTagName("img")[i].src = cardBack;
}
