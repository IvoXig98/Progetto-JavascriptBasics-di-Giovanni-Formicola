//contatore
let counterContainer = document.createElement("div");
counterContainer.id = "counter-container";

let counter = document.createElement("div");
counter.id = "counter";
counter.textContent = "0";
counterContainer.appendChild(counter);

let incrementButton = document.createElement("button");
incrementButton.textContent = "+";
incrementButton.addEventListener("click", increment);
counterContainer.appendChild(incrementButton);

let decrementButton = document.createElement("button");
decrementButton.textContent = "-";
decrementButton.addEventListener("click", decrement);
counterContainer.appendChild(decrementButton);


document.body.appendChild(counterContainer);

let count = 0;

// Funzione per incrementare il contatore
function increment() {
  count++;
  counter.textContent = count;
}
// Funzione per decrementare il contatore
function decrement() {
  count--;
  counter.textContent = count;
}


