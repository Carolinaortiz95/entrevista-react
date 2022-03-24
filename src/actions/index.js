export function filterByCode(payload) {
  return {
    type: "FILTER_BY_CODE",
    payload,
  };
}

export function filterByDescription(payload) {
  return {
    type: "FILTER_BY_DESCRIPTION",
    payload,
  };
}
