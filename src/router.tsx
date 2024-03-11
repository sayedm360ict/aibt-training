import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./Modules/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import AppLayout from "./components/AppLayout/AppLayout";
import Picniclist from "./Modules/Picnic/pages/Picniclist";
import CreatePicnic from "./Modules/Picnic/components/CreatePicnic";
import SinglePicnicOnly from "./Modules/Picnic/pages/SinglePicnicOnly";
import CreateWorkshop from "./Modules/Workshop/components/CreateWorkshop";
import Workshoplist from "./Modules/Workshop/pages/Workshoplist";
import SingleWorkshopOnly from "./Modules/Workshop/pages/SingleWorkshopOnly";
import CreateFamTrip from "./Modules/FamTrip/components/CreateFamTrip";
import SingleFamTripOnly from "./Modules/FamTrip/pages/SingleFamTripOnly";
import Famtriplist from "./Modules/FamTrip/pages/FamTriplist";
import CreateEvents from "./Modules/Events/components/CreateEvents";
import Eventlist from "./Modules/Events/pages/Eventlist";
import SingleEventOnly from "./Modules/Events/pages/SingleEventOnly";
import CreateNotice from "./Modules/Notice/components/CreateNotice";
import Noticelist from "./Modules/Notice/pages/Noticelist";
import CreateMoneyReceipt from "./Modules/MoneyReceipt/components/CreateMoneyReceipt";
import Moneyreceiptlist from "./Modules/MoneyReceipt/pages/Moneyreceiptlist";
import MoneyReceiptView from "./Modules/MoneyReceipt/pages/MoneyReceiptView";
import CreateExpense from "./Modules/Expense/components/CreateExpense";
import Expenselist from "./Modules/Expense/pages/Expenselist";
import ExpenseView from "./Modules/Expense/pages/ExpenseView";
import CreateAccount from "./Modules/Account/components/CreateAccount";
import Accountlist from "./Modules/Account/pages/Accountlist";
import Transactionlist from "./Modules/Account/pages/Transactionlist";
import BalanceTransfer from "./Modules/Account/components/BalanceTransfer";
import TransferHistory from "./Modules/Account/pages/TransferHistory";
import SingleAccount from "./Modules/Account/pages/SingleAccount";
import ProtectedRoute from "./app/utils/ProtectedRoute";
import Login from "./auth/pages/Login";
import UnauthorizePage from "./common/notfound/UnauthorizePage";
import ForgotPassword from "./auth/pages/ForgotPassword";
import SendOtp from "./auth/pages/SendOtp";
import CreateExpenseHead from "./Modules/Expense/components/CreateExpenseHead";
import Adminlist from "./Modules/Administration/Admin/pages/Adminlist";
import CreateAdmin from "./Modules/Administration/Admin/components/CreateAdmin";

import Profile from "./Modules/Profile/Profile";
import ChangePassword from "./auth/pages/ChangePassword";
import TrainingList from "./Modules/Training/pages/TrainingList";
import TrainingDetails from "./Modules/Training/pages/TrainingDetails";
import Application from "./Modules/Application/pages/Application";
import SingleApplication from "./Modules/Application/pages/SingleApplication";
// import RequireUser from "./app/utils/requireUser";

export const routers = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/unauthorized",
    element: <UnauthorizePage />,
  },
  {
    path: "/login",
    element: <ProtectedRoute children={<Login />} />,
  },
  {
    path: "/forget-password",
    element: <ProtectedRoute children={<ForgotPassword />} />,
  },
  {
    path: "forget-password/otp",
    element: <ProtectedRoute children={<SendOtp />} />,
  },
  {
    path: "/change-password",
    element: <ProtectedRoute children={<ChangePassword />} />,
  },
  {
    path: "/",
    element: <AppLayout />,
    // element: (
    //   <RequireUser
    //     children={<AppLayout />}
    //     allowedRoles={["user", "Super Admin", "admin"]}
    //   />
    // ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
        // element: (
        //   <RequireUser
        //     children={<Dashboard />}
        //     allowedRoles={['user', 'Super Admin', 'admin']}
        //   />
        // ),
      },
      {
        path: "/training",
        children: [
          {
            path: "training-list",
            element: <TrainingList />,
          },
          {
            path: "training-list/:id",
            element: <TrainingDetails />,
          },
        ],
      },
      {
        path: "/application",
        children: [
          {
            path: "application-list",
            element: <Application />,
          },
          {
            path: "application-list/:id",
            element: <SingleApplication />,
          },
        ],
      },
      {
        path: "/picnic",
        children: [
          {
            path: "create-picnic",
            element: <CreatePicnic />,
          },
          {
            path: "picniclist",
            element: <Picniclist />,
          },
          {
            path: "picniclist/:id",
            element: <SinglePicnicOnly />,
          },
        ],
      },
      {
        path: "/workshop",
        children: [
          {
            path: "create-workshop",
            element: <CreateWorkshop />,
          },
          {
            path: "workshoplist",
            element: <Workshoplist />,
          },
          {
            path: "workshoplist/:id",
            element: <SingleWorkshopOnly />,
          },
        ],
      },
      {
        path: "/famtrip",
        children: [
          {
            path: "create-famtrip",
            element: <CreateFamTrip />,
          },
          {
            path: "famtriplist",
            element: <Famtriplist />,
          },
          {
            path: "famtriplist/:id",
            element: <SingleFamTripOnly />,
          },
        ],
      },
      {
        path: "/events",
        children: [
          {
            path: "create-events",
            element: <CreateEvents />,
          },
          {
            path: "eventslist",
            element: <Eventlist />,
          },
          {
            path: "eventslist/:id",
            element: <SingleEventOnly />,
          },
        ],
      },
      {
        path: "/notice",
        children: [
          {
            path: "create-notice",
            element: <CreateNotice />,
          },
          {
            path: "noticelist",
            element: <Noticelist />,
          },
        ],
      },
      {
        path: "/moneyreceipt",
        children: [
          {
            path: "create-moneyreceipt",
            element: <CreateMoneyReceipt />,
          },
          {
            path: "money-receipt-list",
            element: <Moneyreceiptlist />,
          },
          {
            path: "money-receipt-list/:id",
            element: <MoneyReceiptView />,
          },
        ],
      },
      {
        path: "/expense",
        children: [
          {
            path: "create-expense-head",
            element: <CreateExpenseHead />,
          },
          {
            path: "create-expense",
            element: <CreateExpense />,
          },
          {
            path: "expense-list",
            element: <Expenselist />,
          },
          {
            path: "expense-list/:id",
            element: <ExpenseView />,
          },
        ],
      },
      {
        path: "/account",
        children: [
          {
            path: "create-account",
            element: <CreateAccount />,
          },
          {
            path: "account-list",
            element: <Accountlist />,
          },
          {
            path: "account-list/:id",
            element: <SingleAccount />,
          },
          {
            path: "transaction-list",
            element: <Transactionlist />,
          },
          {
            path: "balance-transfer",
            element: <BalanceTransfer />,
          },
          {
            path: "transfer-history",
            element: <TransferHistory />,
          },
        ],
      },
      {
        path: "/admin",
        children: [
          {
            path: "create-admin",
            element: <CreateAdmin />,
          },
          {
            path: "admin-list",
            element: <Adminlist />,
          },
        ],
      },
      {
        path: "/setting",
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
