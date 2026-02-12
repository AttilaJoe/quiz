import { useEffect, useState } from "react";

export function useFetch<T>(fetchFunction: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchFunction()
        .then(setData)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
