import UserLayout from '@/components/dashboard/UserLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}
