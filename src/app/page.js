import { stripe } from "src/utils/stripe"

export default async function Home() {
  const {props} = await getStaticProps();
  console.log(props.products.data);
  return props.products.data.map(p => <div key={p.id}>{p.name}</div>)
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({ limit: 8 });
  return {
    props: {
      products: inventory
    }
  }
}