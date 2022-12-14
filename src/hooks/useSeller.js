import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerloading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://books-store-server-delta.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerloading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};
export default useSeller;
