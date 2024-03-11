import dayjs from "dayjs";



export function convertToDayjs(dateString: string| null | undefined) {
    return dateString ? dayjs(dateString) : null;
  }