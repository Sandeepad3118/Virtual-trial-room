import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="https://www.textronic.com/images/overview-tailor-i-bg.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Cascade blue shirt"
            price={11.96}
            rating={4}
            image="https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B41ED0F83-1DC4-4568-B273-4DBCCE756419%7D"
          />
          <Product
            id="49538094"
            title="Red Checkered shirt"
            price={239.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_EOIyC9mjos9pUy3NpAOXWWxgj6T5zsbPKQ&usqp=CAU"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fashion Jean Pants"
            price={199.99}
            rating={3}
            image="https://previews.123rf.com/images/siraphol/siraphol1701/siraphol170100940/68592490-fashion-jean-pants-isolated-on-white-background.jpg"
          />
          <Product
            id="23445930"
            title="Girl Jeans"
            price={98.99}
            rating={5}
            image="https://previews.123rf.com/images/olgagi/olgagi1808/olgagi180800050/107457331-children-jeans-girl-jeans-pants-isolated-on-white-background-jeans-fashion-.jpg"
          />
          <Product
            id="3254354345"
            title="Cheegslongsleeve"
            price={598.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QOXN2ux84Rg848yqD8qZW8DX8BJvWwxsJg&usqp=CAU"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="White Formal"
            price={1094.98}
            rating={4}
            image="https://mpng.subpng.com/20180414/vjq/kisspng-t-shirt-dress-shirt-collar-sleeve-dress-shirt-5ad2486d079cd9.1334762015237305410312.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
