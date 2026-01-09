export default function List() {
  const product = [
    {
      id: 1,
      title: "Product 1",
      price: 1000,
      description: "Best Product",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.JiCBoh45TF97R7UfbOh-YwHaEV?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Product 3",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.zJcerO1OR1nSb_UEkRx_aAHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Product 4",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Product 5",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.zJcerO1OR1nSb_UEkRx_aAHaHa?pid=Api&P=0&h=180",
    },
     {
      id: 4,
      title: "Product 6",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Product 7",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "Product 8",
      price: 1000,
      description: "Best Product",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.JiCBoh45TF97R7UfbOh-YwHaEV?pid=Api&P=0&h=180",
    },
    {
      id: 1,
      title: "Product 9",
      price: 1000,
      description: "Best Product",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    }

  ];

  return (
    <>
    <h2 style={{textAlign : "center"}}>Product gallery</h2>
    <div className="row row-cols-1 row-cols-md-2 g-4" >
     

      {product.map((item) => (

        <div className="card mb-4 shadow w-50%" key={item.id}>

          <div className="d-flex align-items-center">

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid rounded-start"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
              }}
            />

          
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="fw-bold">₹{item.price}</p>

              <button className="btn btn-primary btn-sm">
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
    </>
  );
}
