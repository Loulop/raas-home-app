export default {
  refreshInterval: 3000,
  fetcher: (resource: string, init: { [id: string]: any }) =>
    fetch(resource, init).then((res) => res.json())
};
