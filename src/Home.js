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
            id="4903850"
            title="Fashion Jean Pants"
            price={199.99}
            rating={3}
            image="https://previews.123rf.com/images/siraphol/siraphol1701/siraphol170100940/68592490-fashion-jean-pants-isolated-on-white-background.jpg"
          />
          
        </div>

        <div className="home__row">
         
          <Product
            id="49538094"
            title="Red Checkered shirt"
            price={239.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_EOIyC9mjos9pUy3NpAOXWWxgj6T5zsbPKQ&usqp=CAU"
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
            title="Cheegs Long Sleeve"
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
          <Product
            id="90829323"
            title="Black Formal Pant"
            price={508.3}
            rating={3}
            image="data:image/jpeg;base64,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"
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
