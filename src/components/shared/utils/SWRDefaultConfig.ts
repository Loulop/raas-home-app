const defaultFetcher = async () => {
  // TODO: note https://github.com/vercel/swr/discussions/545
};

export default {
  refreshInterval: 3000,
  fetcher: (resource: string, init: { [id: string]: any }) =>
    fetch(resource, init).then((res) => res.json())
};
