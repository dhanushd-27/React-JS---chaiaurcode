import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    //useState will have the object which includes all currency convertors
    const [data, setData] = useState({});

    // Runs when the currency is changed and fetch the coverting rate to all currencies
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${ currency }.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;