import { useEffect, useState } from "react";
import fetchData from "../utils/uFetch";

const useData = <DataType,>({
	endpoint,
	shouldFetch = true,
	params,
}: {
	endpoint: string;
	shouldFetch?: boolean;
	params: string;
}) => {
	const [data, setData] = useState<DataType | null>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [shouldRefetch, refetch] = useState({});

	useEffect(() => {
		if (shouldFetch) {
			setLoading(true);
			fetchData({
				endpoint,
				params,
				onComplete: (res: DataType | null) => {
					setData(res);
					setLoading(false);
				},
				onError: (res: any) => {
					setError(res);
					setLoading(false);
				},
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [shouldFetch, params, shouldRefetch]);

	return {
		data,
		loading,
		error,
		refetch,
	};
};

export default useData;
