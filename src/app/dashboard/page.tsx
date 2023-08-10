import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/")
  }else{
    redirect("/dashboard/mypaymasters")
  }
};

export default DashboardPage;