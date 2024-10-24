import { clsx, type ClassValue } from "clsx";
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sendApiResponse(
  status: boolean = false,
  statusCode: number = 200,
  message: string = "Ok",
  data: Object | Array<any> | null = null
) {
  return NextResponse.json(
    {
      status,
      message,
      data: data !== null ? data : undefined,
    },
    { status: statusCode }
  );
}
