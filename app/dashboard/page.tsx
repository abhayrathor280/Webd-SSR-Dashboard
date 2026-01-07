import { connectDB } from "../../lib/db";
import Product from "../../models/Product";

import Chart from "../../components/Chart";


export default async function Dashboard() {
  await connectDB();
  const products = await Product.find();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Chart products={JSON.parse(JSON.stringify(products))} />
    </div>
  );
}
