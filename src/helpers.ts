import { timestampOptions as options } from "./constants";

export function formatRussianDate(timestampString: string) {
  const date = new Date(timestampString);

  const dateFormatter = new Intl.DateTimeFormat("ru-RU", options);
  return dateFormatter.format(date);
}

export function getQueryParams(urlString: string): URLSearchParams {
  const url = new URL(urlString);
  return url.searchParams;
}
