/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from 'next/server';
import { iaPrompt } from './translate.services';

interface ResponseInterface {
  ok: boolean;
  status: number;
  statusText: string;
  body: string;
}

export async function GET() {
  try {
    const response: ResponseInterface = {
      ok: true,
      status: 200,
      statusText: "OK",
      body: "service is ok"
    };
    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseInterface = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      body: "Error processing the GET request"
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await iaPrompt(body);

    const response: ResponseInterface = {
      ok: true,
      status: 200,
      statusText: "OK",
      body: result
    };

    return NextResponse.json(response);
  } catch (error) {
    const errorResponse: ResponseInterface = {
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      body: `Error processing the POST request: ${error}`
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
