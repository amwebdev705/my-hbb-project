import { connectToDatabase } from '@/lib/db';
import Setting from '@/lib/db/models/setting.model';
import { NextResponse } from 'next/server';
// import { connectToDatabase } from '../../../../db';
// import Setting from '../../../../db/models/setting.model';

export async function POST(req: Request) {
  const { isMaintenanceMode } = await req.json();

  await connectToDatabase();

  const updatedSetting = await Setting.findOneAndUpdate(
    {},
    { 'common.isMaintenanceMode': isMaintenanceMode },
    { new: true, upsert: true }
  );

  return NextResponse.json(updatedSetting);
}
