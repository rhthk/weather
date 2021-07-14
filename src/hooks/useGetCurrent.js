import { useState, useEffect } from "react";
const axios = require("axios");
const apiKey = "dad2566575504e5584d111216210806";
export default function useGetCurrent(location) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json`,
      params: { key: apiKey, q: location },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [location]);
  return { loading, error, data };
}
