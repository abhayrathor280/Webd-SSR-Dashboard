export const dynamic = "force-dynamic";

import { connectDB } from "../../lib/db";
import Product from "../../models/Product";
import Chart from "../../components/Chart";

export default async function Dashboard() {
  await connectDB();
  const products = await (Product as any).find();

  return (
    <div>
      <Chart data={products} />
    </div>
  );
}

