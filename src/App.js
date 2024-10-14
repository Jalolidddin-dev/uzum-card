import { CiStar } from "react-icons/ci";
import "./App.css";
import { FcLike } from "react-icons/fc";
import { TbBasketPlus } from "react-icons/tb";

function App() {
  const AllProducts = [
    {
      id: 1,
      image: "https://images.uzum.uz/cnmspvg4idugcqeh09rg/original.jpg",
      title: "Aqlli soat ZK8 Pro Max, Smart Watch Amoled Screen",
      oldPrice: "899 000",
      nowPrice: "199 000",
    },
    {
      id: 2,
      image: "https://images.uzum.uz/co1j696pom4ma10r2vhg/original.jpg",
      title:
        "Antishpion himoya oynasi iPhone 11, 12, 13, 14, 15 PRO, MAX uchun, oleofob qoplama bilan",
      oldPrice: "49 000",
      nowPrice: "19 000",
    },
    {
      id: 3,
      image: "https://images.uzum.uz/crjvr21bjcvd8a76umpg/original.jpg",
      title: "Smartfon Ajib I1 4/64 GB + chexol va himoya oynasi",
      oldPrice: "2 000 000",
      nowPrice: "999 000",
    },
    {
      id: 4,
      image: "https://images.uzum.uz/co1j696pom4ma10r2vhg/original.jpg",
      title:
        "Simsiz quloqchinlar, sovg'a g'ilof, sensorli, IOS/Android/Windows",
      oldPrice: "1 990 000",
      nowPrice: "95 000",
    },

    {
      id: 5,
      image: "https://images.uzum.uz/crj9b5c2gps3jqbgoo70/original.jpg",
      title:
        "Simsiz quloqchinlar, Pods Pro 2 display bilan, ekranli, shovqinni kamaytiradigan",
      oldPrice: "1 500 000",
      nowPrice: "199 000",
    },
    {
      id: 6,
      image: "https://images.uzum.uz/cr27akviraat934q60q0/original.jpg",
      title:
        "Kabel to'qilgan HDMI - HDMI , 1.5 m / 3 m / 5 m / 10 m / 15 m / 20 m",
      oldPrice: "60 000",
      nowPrice: "17 000",
    },
    {
      id: 7,
      image: "https://images.uzum.uz/cs13lissslojjk5rga2g/original.jpg",
      title: "O'yin sichqonchasi RGB yoritgichli Fire cam EM102",
      oldPrice: "200 000",
      nowPrice: "29 000",
    },
    {
      id: 8,
      image: "https://images.uzum.uz/cp63govfrr80f2gm4e7g/original.jpg",
      title: "Simsiz quloqchinlar P9 max/P9 max",
      oldPrice: "150 000",
      nowPrice: "70 000",
    },
  ];

  return (
    <div className="card_box">
      {AllProducts.map((product) => (
        <div className="card">
          <div className="card_header">
            <img src={product.image} alt="product-image" />
            <FcLike className="product_like" />
          </div>

          <div className="card_body">
            <span>{product.title}</span>
            <div className="product_rating">
              <CiStar className="star" />
              <p>4.9 (8 sharh)</p>
            </div>
          </div>

          <div className="card_footer">
            <div className="price">
              <p className="old_price">{product.oldPrice}</p>
              <p className="now_price">{product.nowPrice} so'm</p>
            </div>

            <div className="basket">
              <TbBasketPlus className="basket_icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
