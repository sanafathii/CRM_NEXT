import React from "react";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../components/template/CustomerDetailsPage";
import { useRouter } from "next/router";

function Index() {
  const [data, setData] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady, customerId]);

  if (data) return <CustomerDetailsPage data={data} id={customerId} />;
}

export default Index;
