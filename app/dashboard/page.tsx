export const dynamic = "force-dynamic";
export const revalidate = 0;

import Product from "../../models/Product";
import connectDB from "../../lib/db";

export default async function Dashboard() {
  await connectDB();
  const products = await Product.find();

  return (
    <div>
      Dashboard
    </div>
  );
}


