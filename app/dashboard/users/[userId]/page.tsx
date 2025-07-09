"use client";

import { useParams } from 'next/navigation';
import { UserDetails } from '@/views/dashboard/users-page/ui';

export default function UserIdPage() {
  const params = useParams();
  const userId = params.userId as string;

  return (
    <UserDetails id={userId} />
  );
}