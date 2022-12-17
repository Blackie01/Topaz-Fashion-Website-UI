import './App.css';
import Homepage from './components/homepage';
import Navbar from './components/nav';
import Collections from './components/collections';
import Categories from './components/categories';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {

  return (
    <div className="app">
      <Navbar />
      <Homepage /> 
      <Collections />
      <Categories /> 
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


/*
Pseudo Code 

----Nav Bar
* the nav bar will have three sections
*** section 1 for logo area
*** section 2 for the menu items in the center
*** section 3 for button and login (detecting location) 



when we get to the collections section, we will have an API call from a 
stock image area to display there. 

Unsplash image API


Add a cart section
*/
