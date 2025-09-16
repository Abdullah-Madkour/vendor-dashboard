"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, BadgeAlert, BadgeCheck, Settings2 } from "lucide-react";
import * as React from "react";
import { BsFiletypeCsv, BsFiletypePdf } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
import { TbFileExport } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TablePagination } from "./TablePagination";
import EditRecordModal from "./EditRecordModal";
import Link from "next/link";

const data: Vendor[] = [
  {
    id: 1,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 1121795091",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: true,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "wating",
  },
  {
    id: 2,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Active",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },

  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },

  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  {
    id: 3,
    company_name: "TijaraHub",
    brand_name: "TijaraHub",
    business_email: "example@mail.com",
    contact_full_name: "Abdullah Madkour",
    job_title: "Frontend Developer",
    phone_whatsapp_number: "+20 0123456789",
    sub_category: ["Coffe", "Pasta Sauce", "Juice"],
    Industry: "Food & Beverages",
    country_region: "Egypt",
    reach_out: "WhatsApp",
    primary_business_type: "Manufacturer",
    export_exp: "Advanced",
    has_import_and_export_licenses: true,
    target_industry: "All",
    target_markets: "Saduia Arabia",
    feedback: "That's Feed Back",
    source: "Facebook",
    verified: false,
    assignedTo: "Mohamed Sherif - CEO",
    subCategories: ["Food", "Beverages"],
    status: "Closed",
  },
  // {
  //   id: 2,
  //   company_name: "So Plus",
  //   brand_name: "So Plus",
  //   business_email: "soplus@mail.com",
  //   contact_full_name: "Ezz Elsadaty",
  //   job_title: "Frontend Developer",
  //   phone_whatsapp_number: "+20 0123456789",
  //   sub_category: ["Coffe", "Pasta Sauce", "Juice"],
  //   Industry: "Food & Beverages",
  //   country_region: "Egypt",
  //   reach_out: "WhatsApp",
  //   primary_business_type: "Manufacturer",
  //   export_exp: "Advanced",
  //   has_import_and_export_licenses: true,
  //   target_industry: "All",
  //   target_markets: "Saduia Arabia",
  //   feedback: "That's Feed Back",
  //   source: "Backend / Subscription",
  // },
];

export type Vendor = {
  id: number;
  company_name: string;
  brand_name: string;
  business_email: string;
  contact_full_name: string;
  job_title: string;
  phone_whatsapp_number: string;
  sub_category: string[];
  Industry: string;
  country_region: string;
  reach_out: string;
  primary_business_type: string;
  export_exp: string;
  has_import_and_export_licenses: boolean;
  target_industry: string;
  target_markets: string;
  feedback: string;
  source: string;
  assignedTo: string;
  verified: boolean;
  subCategories: string[];
  status: string;
};

export const columns: ColumnDef<Vendor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        ID
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          #{row.original.id}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "company_name",
    header: "Company Name",
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">
          {row.getValue("company_name")}
        </div>
      );
    },
  },
  {
    accessorKey: "contact_full_name",
    header: "Full Name",
    cell: ({ row }) => (
      <div className="capitalize text-center">
        {row.getValue("contact_full_name")}
      </div>
    ),
  },
  {
    accessorKey: "business_email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">
        {row.getValue("business_email")}
      </div>
    ),
  },
  {
    accessorKey: "phone_whatsapp_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">
        {row.getValue("phone_whatsapp_number")}
      </div>
    ),
  },
  {
    accessorKey: "target_industry",
    header: "Industry",
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">
          {row.getValue("target_industry")}
        </div>
      );
    },
  },

  {
    accessorKey: "country_region",
    header: "Country / Region",
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">
          {row.getValue("country_region")}
        </div>
      );
    },
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">{row.getValue("source")}</div>
      );
    },
  },
  {
    accessorKey: "verified",
    header: "Verified",
    cell: ({ row }) => {
      return (
        <div className="capitalize flex justify-center text-center">
          {row.getValue("verified") === true ? (
            <BadgeCheck className="text-blue-600" />
          ) : (
            <BadgeAlert className="text-yellow-600" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned",
    cell: ({ row }) => {
      return (
        <div className="capitalize text-center">
          {row.getValue("assignedTo")}
        </div>
      );
    },
  },
  {
    accessorKey: "subCategories",
    header: "Subcategories",
    cell: ({ row }) => {
      console.log(row.getValue("subCategories"));

      return (
        <div className="capitalize flex items-center gap-2 flex-wrap">
          {row.getValue("subCategories").map((item) => item)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const detectCurrentStatus = (status: string): string => {
        const lowStatus = status.toLowerCase();
        if (lowStatus === "active") {
          return "bg-green-500";
        }
        if (lowStatus === "wating") {
          return "bg-yellow-500";
        }
        return "bg-red-500";
      };
      const value = row.getValue("status");
      return (
        <div className="capitalize text-center">
          <EditRecordModal value={value} />
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center items-center gap-2 *:text-xs!">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={`/vendors/${row.original.id}`}>View / Edit</Link>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"} size={"sm"}>
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this record.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex justify-between gap-2 items-center py-4">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Filter emails..."
            value={
              (table.getColumn("business_email")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("business_email")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Settings2 />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={"lg"} variant="outline">
                <TbFileExport /> Export as
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <FaRegFileExcel />
                Excel
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BsFiletypePdf />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BsFiletypeCsv />
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"} size={"lg"}>
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  selected records.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="text-center" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
      <div className="pt-4 pb-10">
        <TablePagination table={table} />
      </div>
    </div>
  );
}
