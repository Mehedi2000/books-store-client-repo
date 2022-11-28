import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminloading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://books-store-server-delta.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminloading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
