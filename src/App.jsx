import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 550,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 600,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 700,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 750,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 900,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 1200,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


export default function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header(){
  return(
    <header className='header'>
      <h1>Pizzaaaaaaaa</h1>
    </header>
  );
}

function Menu(){
  return(
    <main className='menu'>
      <h2>Our menu</h2>
      <p>Authentic Italian cuisine. Six creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul className='pizzas'>
        { pizzaData.map((pizza) =>(
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ) )}
      </ul>
      
    </main>
  );
}

function Pizza({pizzaObj}){

  const classSoldOut = pizzaObj.soldOut ? 'sold-out' : '';

  return(
    <li className={`pizza ${classSoldOut}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}DA </span>
      </div>
    </li>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour ;

  return(
    // ternary operator :  (condition ? trueBlock : falseBlock)
   <footer className="footer">
      {isOpen ? (<Order closeHour={closeHour} />) : (
        <div className='order'>
          <p>We're happy to welcome you between  {openHour}:00 and {closeHour}:00. </p>
      </div>
      )
      }
   </footer>
  );
}

function Order({closeHour}){
  return(
      <div className='order'>
        <p>We're Open until {closeHour}:00. Come visit us or order online</p>
        <button className='btn'>Order</button>
      </div>
  );
}