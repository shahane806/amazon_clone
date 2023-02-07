import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="banner"
        src="https://m.media-amazon.com/images/I/610NTFOyhAL._SX3000_.jpg"
        alt="banner"
      ></img>
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12343"
            title="Noise Pulse Go Buzz Bluetooth Calling Smart Watch"
            price={1}
            rating={2}
            image="https://m.media-amazon.com/images/I/61akt30bJsL._SX522_.jpg"
          />
          <Product
          id="34545"
            title="boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)"
            price={2}
            rating={5}
            image="https://m.media-amazon.com/images/I/719elVA3FvL._SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id="67583"
            title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
            price={3}
            rating={1}
            image="https://m.media-amazon.com/images/I/41KB80oxxfL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
          id="23464"
            title="Apple iPhone 14 Plus 512GB (Product) RED"
            price={4}
            rating={3}
            image="https://m.media-amazon.com/images/I/716fAVud8PL._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg"
          />
          <Product
          id="74578"
            title="Wesley Milestone 2.0 Casual Waterproof Laptop Backpack(Blue & black)"
            price={10}
            rating={4}
            image="https://m.media-amazon.com/images/I/811AxL+qTpL._SY450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id="4589"
            title="Samsung 138 cm (55 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA55AUE70AKLXL (Black)"
            price={12040}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Appo-sRyL._AC_SS450_.jpg"
          />
        </div>
        <div className=" home__row ">
          <Product
          id="3495"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={130}
            rating={1}
            image="https://images-eu.ssl-images-amazon.com/images/I/51UHoxzInpL._AC_SX184_.jpg"
          />
          <Product
          id="12343"
            title="Cezo UpClose Standard 20-60 X 60 Zoom Spotting Scope with Tripod Stand for Bird Watching"
            price={10}
            rating={4}
            image="https://m.media-amazon.com/images/I/51gPjfcTX8L._AC_SR160,160_.jpg"
          />
          <Product
          id="6723"
            title="Celestron PowerSeeker 50 AZ Refractor Telescope"
            price={1340}
            rating={2}
            image="https://m.media-amazon.com/images/I/51Paa5l6J0L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
          id="2346"
            title="Celestron AstroMaster 130 EQ Motor Drive Telescope (Grey)"
            price={10}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Wlv-tbcEL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
