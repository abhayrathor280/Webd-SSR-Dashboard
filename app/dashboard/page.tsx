export const dynamic = "force-dynamic";

import Product from "../../models/Product";
import { connectDB } from "../../lib/db";

export default async function Dashboard() {
  await connectDB();

  const products = await Product.find();

  return (
    <div>
      Dashboard Loaded ✅  
      Products count: {products.length}
    </div>
  );
}


