/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IMenuData } from "../Types/MenuData";
import Dashboard from "../../Modules/Dashboard/Dashboard";
import { RiGroupLine } from "react-icons/ri";
import { RiSuitcase2Fill } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi2";
import { BiMessageCheck, BiTrip } from "react-icons/bi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineEventNote,
} from "react-icons/md";
import { CiReceipt } from "react-icons/ci";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { TbFileInvoice } from "react-icons/tb";

export const sideBarItems: IMenuData[] | any = [
  {
    label: <Link to="/">Dashboard</Link>,
    key: "dashboard",
    icon: <AppstoreOutlined />,
    element: <Dashboard />,
  },
  {
    label: "Training",
    key: "training",
    icon: <TbFileInvoice />,
    children: [
      {
        label: <Link to="training/training-list">Training List</Link>,
        key: "training/training-list",
      },
      // {
      //   label: (
      //     <Link to="application/application-history">Application History</Link>
      //   ),
      //   key: "application/application-history",
      // },
    ],
  },
  {
    label: "Application",
    key: "application",
    icon: <RiGroupLine />,
    children: [
      {
        label: <Link to="application/application-list">Application List</Link>,
        key: "application/application-list",
      },
    ],
  },
  {
    label: "Picnic",
    key: "picnic",
    icon: <RiSuitcase2Fill />,
    children: [
      {
        label: <Link to="picnic/create-picnic">Create Picnic</Link>,
        key: "picnic/create-picnic",
      },
      {
        label: <Link to="picnic/picniclist">Picnic List</Link>,
        key: "/picniclist",
      },
    ],
  },
  {
    label: "Workshop",
    key: "workshop",
    icon: <HiAcademicCap />,
    children: [
      {
        label: <Link to="workshop/create-workshop">Create Workshop</Link>,
        key: "workshop/create-workshop",
      },
      {
        label: <Link to="workshop/workshoplist">Workshop List</Link>,
        key: "/workshoplist",
      },
    ],
  },
  {
    label: "Fam Trip",
    key: "famtrip",
    icon: <BiTrip />,
    children: [
      {
        label: <Link to="famtrip/create-famtrip">Create Fam Trip</Link>,
        key: "famtrip/create-famtrip",
      },
      {
        label: <Link to="famtrip/famtriplist">Fam Trip List</Link>,
        key: "/famtriplist",
      },
    ],
  },
  {
    label: "Events",
    key: "events",
    icon: <MdOutlineEventNote />,
    children: [
      {
        label: <Link to="events/create-events">Create Events</Link>,
        key: "events/create-events",
      },
      {
        label: <Link to="events/eventslist">Event List</Link>,
        key: "/eventslist",
      },
    ],
  },
  {
    label: "Notice",
    key: "notice",
    icon: <BiMessageCheck />,
    children: [
      {
        label: <Link to="notice/create-notice">Create Notice</Link>,
        key: "notice/create-notice",
      },
      {
        label: <Link to="notice/noticelist">Notice List</Link>,
        key: "noticelist",
      },
    ],
  },
  {
    label: "Moneyrecipt",
    key: "moneyreceipt",
    icon: <CiReceipt />,
    children: [
      {
        label: (
          <Link to="moneyreceipt/create-moneyreceipt">Create Moneyreceipt</Link>
        ),
        key: "moneyreceipt/create-moneyreceipt",
      },
      {
        label: (
          <Link to="moneyreceipt/money-receipt-list">Moneyreceipt List</Link>
        ),
        key: "moneyreceiptlist",
      },
    ],
  },
  {
    label: "Expense",
    key: "expense",
    icon: <FaMoneyBillTransfer />,
    children: [
      {
        label: <Link to="expense/create-expense-head">Expense Head</Link>,
        key: "expense/create-expense-head",
      },
      {
        label: <Link to="expense/create-expense">Create Expense</Link>,
        key: "expense/create-expense",
      },
      {
        label: <Link to="expense/expense-list">Expense List</Link>,
        key: "expense-list",
      },
    ],
  },
  {
    label: "Account",
    key: "account",
    icon: <VscAccount />,
    children: [
      {
        label: <Link to="account/create-account">Create Account</Link>,
        key: "account/create-account",
      },
      {
        label: <Link to="account/account-list">Account List</Link>,
        key: "account-list",
      },
      {
        label: <Link to="account/transaction-list">Transaction List</Link>,
        key: "account/transaction-list",
      },
      {
        label: <Link to="account/balance-transfer">Balance Transfer</Link>,
        key: "account/balance-transfer",
      },
      {
        label: <Link to="account/transfer-history">Transfer History</Link>,
        key: "account/transfer-history",
      },
    ],
  },
  {
    label: "Administration",
    key: "admin",
    icon: <MdOutlineAdminPanelSettings />,
    children: [
      {
        label: "User Admin",
        children: [
          {
            label: <Link to="admin/create-admin">Create Admin</Link>,
            key: "admin/create-admin",
          },
          {
            label: <Link to="admin/admin-list">Admin List</Link>,
            key: "admin/admin-list",
          },
        ],
      },
      {
        label: <Link to="administration/role">Role</Link>,
        key: "administration/role",
      },
      {
        label: <Link to="administration/audit-trail">Audit Trail</Link>,
        key: "administration/audit-trail",
      },
      {
        label: <Link to="administration/permissions">Permissions</Link>,
        key: "administration/permissions",
      },
    ],
  },
];
