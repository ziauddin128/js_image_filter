var button = document.querySelectorAll(".filter_button button");
var card = document.querySelectorAll(".filter_cards .card");

button.forEach(function(elem)
{
    elem.addEventListener("click",function()
    {
        button.forEach(function(btn)
        {
            btn.classList.remove("active");

        })

        elem.classList.add("active");
        var btn_attr = elem.getAttribute("data-image");

        filter_cart(btn_attr);
        
    })
})

function filter_cart(btn_attr)
{
    card.forEach(function(elem)
    {
      var card_attr = elem.getAttribute("data-image");

      if(card_attr === btn_attr || btn_attr === "All")
      {
        elem.style.display = "block";
      }
      else 
      {
        elem.style.display = "none";
      }

    })
} 
