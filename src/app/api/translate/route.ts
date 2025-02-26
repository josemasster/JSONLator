import { NextResponse } from 'next/server'
import TranslateService from './translate.services';

export  async function GET() {
      return NextResponse.json(TranslateService());
}