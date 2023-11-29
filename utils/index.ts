type SearchParamUpdate = {
  type: string;
  value: string;
};

export const updateSearchParams = (
  param: SearchParamUpdate | SearchParamUpdate[]
) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (Array.isArray(param)) {
    param.forEach(({ type, value }) => {
      searchParams.set(type, value);
    });
  } else {
    const { type, value } = param;

    searchParams.set(type, value);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type);

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};
