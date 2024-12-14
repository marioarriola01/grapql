import { gql, useQuery } from  "@apollo/client";

const QUERY_PRODUCTS = gql`
  query {
    products {
      price
    }
  }
`;

export default function Product() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <div>....</div>;
  if (error) return <div>error</div>;

  console.log(data);

  const { products } = data;
  return (
    <div>
      {products.map((product) => {
        return <h1 key={product.price}>{product.price}</h1>;
      })}
    </div>
  );
}