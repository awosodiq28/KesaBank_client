"use client";

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import AdminDashboardNav from "./AdminDashboardNav";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";
import { API_URL } from "@/helpers/vars";

const AdminLayout = ({ children }: any) => {
  const { getAllUsers }: any = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.matchMedia("(min-width: 1050px)").matches);
    getAllUsers();
  }, []);

  // useEffect(() => {
  //   if (!authChecking && !!user?.isAdmin) {
  //     setLoading(false);
  //     getAllUsers();
  //   } else if (!authChecking && !user?.isAdmin) {
  //     router.push('/login');
  //   }
  // }, [user, authChecking]);

  return (
    <section className={styles.dashboardLayout}>
      <span onClick={() => setOpen(!open)} className={styles.toggle}>
        {open ? "<" : ">"}
      </span>
      <div className={styles.layout}>
        <span className={open ? styles.nav : styles.navClose}>
          <AdminDashboardNav />
        </span>
        {children}
      </div>
    </section>
  );
};

export default AdminLayout;

// "use client";

// import {
//   Bell,
//   CircleUser,
//   Home,
//   LineChart,
//   Menu,
//   Package,
//   Package2,
//   Search,
//   ShoppingCart,
//   Users,
//   Landmark,
//   Columns3,
//   Gift,
//   Vault,
//   ArrowRight,
//   CircleDollarSign,
//   HandCoins,
//   Ticket,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useContext, useEffect, useState } from "react";
// import AuthContext from "../AuthContext";
// import { MdSpaceDashboard, MdRequestQuote } from "react-icons/md";
// import {
//   FaMoneyCheckAlt,
//   FaUsers,
//   FaUnlockAlt,
//   FaMinusCircle,
//   FaPlusCircle,
// } from "react-icons/fa";
// import { RiMoneyDollarBoxFill } from "react-icons/ri";
// import { HiDocumentReport } from "react-icons/hi";
// import { BiSupport, BiTransfer } from "react-icons/bi";
// import { BsGiftFill } from "react-icons/bs";
// import Link from "next/link";
// import Dropdown from "../dashboard/Dropdown";

// const AdminLayout = ({ children }: any) => {
//   const { getAllUsers }: any = useContext(AuthContext);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setOpen(window.matchMedia("(min-width: 1050px)").matches);
//     getAllUsers();
//   }, []);

//   // useEffect(() => {
//   //   if (!authChecking && !!user?.isAdmin) {
//   //     setLoading(false);
//   //     getAllUsers();
//   //   } else if (!authChecking && !user?.isAdmin) {
//   //     router.push('/login');
//   //   }
//   // }, [user, authChecking]);

//   return (
//     <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-muted/40 md:block h-full">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//             <Link href="/" className="flex items-center gap-2 font-semibold">
//               <Landmark className="h-6 w-6" />
//               <span>
//                 <Link href="/">
//                   <h2 className="logo text-xl">CountyCU</h2>
//                 </Link>
//               </span>
//             </Link>
//             <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
//               <Bell className="h-4 w-4" />
//               <span className="sr-only">Toggle notifications</span>
//             </Button>
//           </div>
//           <div className="flex-1 h-full bg-white">
//             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//               <Link
//                 href="/admin"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <Columns3 className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Dropdown
//                 top="Users"
//                 content={{
//                   "Add New": "/admin/users/create",
//                   "All Users": "/admin/users",
//                   "KYC Documents": "/admin/users/kyc",
//                   "Verified Users": "#",
//                   "Unverified Users": "#",
//                 }}
//               >
//                 <FaUsers />
//               </Dropdown>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 {/* <Send className="h-4 w-4" /> */}
//                 <CircleDollarSign className="h-4 w-4" />
//                 Transfer Requests
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
//               >
//                 {/* <Package className="h-4 w-4" /> */}
//                 <BiTransfer />
//                 Wire Transfer
//               </Link>
//               <Dropdown
//                 top="Deposit"
//                 content={{
//                   "Deposit Request": "#",
//                   "Make Deposit": "/admin/users/credit-acc",
//                   "Deposit History": "#",
//                 }}
//               >
//                 <FaPlusCircle />
//               </Dropdown>
//               <Dropdown
//                 top="Withdraw"
//                 content={{
//                   "Withdraw Request": "#",
//                   "Make Withdraw": "/admin/users/debit-acc",
//                   "Withdraw History": "#",
//                 }}
//               >
//                 <ArrowRight className="h-4 w-4" />
//               </Dropdown>
//               <Dropdown
//                 top="Loans Management"
//                 content={{
//                   "All Loans": "#",
//                   "Loan Calculator": "#",
//                   "Add New Loan": "#",
//                   "Loan Products": "#",
//                   "Loan Repayments": "#",
//                 }}
//               >
//                 <RiMoneyDollarBoxFill />
//               </Dropdown>
//               <Dropdown
//                 top="Fixed Deposit"
//                 content={{
//                   "All New": "#",
//                   "All FDR": "#",
//                   "FDR Packages": "#",
//                 }}
//               >
//                 <Vault className="h-4 w-4" />
//               </Dropdown>
//               <Dropdown
//                 top="Gift Cards"
//                 content={{ "Gift Cards": "#", "Used Gift Cards": "#" }}
//               >
//                 <Gift className="h-4 w-4" />
//               </Dropdown>
//               <Dropdown
//                 top="Support Tickets"
//                 content={{
//                   "Active Tickets": "#",
//                   "Pending Tickets": "#",
//                   "Closed Tickets": "#",
//                 }}
//               >
//                 <Ticket className="h-4 w-4" />
//               </Dropdown>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//               >
//                 <HandCoins className="h-4 w-4" />
//                 All Transactions
//               </Link>
//             </nav>
//           </div>
//           <div className="mt-auto p-4">
//             {/* <Card x-chunk="dashboard-02-chunk-0">
//               <CardHeader className="p-2 pt-0 md:p-4">
//                 <CardTitle>Upgrade to Pro</CardTitle>
//                 <CardDescription>
//                   Unlock all features and get unlimited access to our support
//                   team.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
//                 <Button size="sm" className="w-full">
//                   Upgrade
//                 </Button>
//               </CardContent>
//             </Card> */}
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="shrink-0 md:hidden"
//               >
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle navigation menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="flex flex-col">
//               <nav className="grid gap-2 text-lg font-medium">
//                 <Link
//                   href="#"
//                   className="flex items-center gap-2 text-lg font-semibold"
//                 >
//                   <Package2 className="h-6 w-6" />
//                   <span className="sr-only">Acme Inc</span>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Home className="h-5 w-5" />
//                   Dashboard
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
//                 >
//                   <ShoppingCart className="h-5 w-5" />
//                   Orders
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Package className="h-5 w-5" />
//                   Products
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <Users className="h-5 w-5" />
//                   Customers
//                 </Link>
//                 <Link
//                   href="#"
//                   className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
//                 >
//                   <LineChart className="h-5 w-5" />
//                   Analytics
//                 </Link>
//               </nav>
//               {/* <div className="mt-auto">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Upgrade to Pro</CardTitle>
//                     <CardDescription>
//                       Unlock all features and get unlimited access to our
//                       support team.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Button size="sm" className="w-full">
//                       Upgrade
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div> */}
//             </SheetContent>
//           </Sheet>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search products..."
//                   className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
//                 />
//               </div>
//             </form>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" size="icon" className="rounded-full">
//                 <CircleUser className="h-5 w-5" />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
