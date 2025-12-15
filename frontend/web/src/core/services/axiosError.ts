import axios from "axios";

export function extractAxiosErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (
      error.response?.data &&
      typeof error.response.data === "object" &&
      "message" in error.response.data
    ) {
      return String((error.response.data as { message: string }).message);
    }
    return error.message;
  }
  return "An unknown error occurred";
}
