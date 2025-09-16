"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { COUNTRIES } from "@/constants";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import Link from "next/link";

const formSchema = z.object({
  company_name: z.string().min(1, {
    message: "Company Name is Required.",
  }),
  brand_name: z.string().min(1, {
    message: "Brand Name is Required.",
  }),
  industry: z.string().min(1, {
    message: "Indusry is Required.",
  }),
  contact_full_name: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  job_title: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  country_region: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  phone_whatsapp_number: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  phone_number2: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  business_email: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  primary_business_type: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  reach_out: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  export_exp: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  has_import_and_export_licenses: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  target_markets: z.array(z.string()).min(1, {
    message: "Full Name is Required.",
  }),
  target_audience: z.array(z.string()).min(1, {
    message: "Full Name is Required.",
  }),
  feedback: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  documents_link: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  verified: z.string(),
  status: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  source: z.string().min(1, {
    message: "Source is Required",
  }),
  assign_to: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  subcategories: z.array(z.string()).min(1, {
    message: "Full Name is Required.",
  }),
  minimun_order_quantity: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  minimun_order_value: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  monthly_production_capacity: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  need_fund: z.string(),

  fmethod1: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fdate1: z.date("Invalid Input Data"),
  fNotes1: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fmethod2: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fdate2: z.date("Invalid Input Data"),
  fNotes2: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fmethod3: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fdate3: z.date("Invalid Input Data"),
  fNotes3: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fmethod4: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fdate4: z.date("Invalid Input Data"),
  fNotes4: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fmethod5: z.string().min(1, {
    message: "Full Name is Required.",
  }),
  fdate5: z.date("Invalid Input Data"),
  fNotes5: z.string().min(1, {
    message: "Full Name is Required.",
  }),
});
const targetAudienceItems = ["distributor", "agent", "importer"];
const subCategoriesItems = ["Coffe", "Honey", "Cookies"];
const VendorForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      brand_name: "",
      industry: "",
      contact_full_name: "",
      job_title: "",
      country_region: "",
      phone_whatsapp_number: "",
      phone_number2: "",
      business_email: "",
      primary_business_type: "",
      reach_out: "",
      export_exp: "",
      has_import_and_export_licenses: "",
      target_markets: [],
      target_audience: [],
      feedback: "",
      documents_link: "",
      verified: "",
      status: "",
      source: "",
      assign_to: "",
      subcategories: [],
      minimun_order_quantity: "",
      monthly_production_capacity: "",

      need_fund: "",
      fmethod1: "",
      fdate1: undefined,
      fNotes1: "",
      fmethod2: "",
      fdate2: undefined,
      fNotes2: "",
      fmethod3: "",
      fdate3: undefined,
      fNotes3: "",
      fmethod4: "",
      fdate4: undefined,
      fNotes4: "",
      fmethod5: "",
      fdate5: undefined,
      fNotes5: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert(`Data Saved Successfully!`);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-8">
          <div className="flex w-full bg-white z-50 justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">TijaraHub</h2>
              <Link className="underline" href={"#"}>
                Check Activity
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Discard</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will return old data
                      and discard your changes.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button className="px-8">Save Changes</Button>
            </div>
          </div>
          <div className="flex relative gap-5 *:flex-1">
            <div className="!flex-5 space-y-5">
              {/* Basic Information */}
              <div className="space-y-5 p-5 rounded-lg shadow border">
                <h3 className="font-semibold text-2xl border-b  w-fit pb-2">
                  Basic Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 *:flex-1">
                    <FormField
                      control={form.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Company Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="brand_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Brand Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="fb">
                                Food & Beverages - المأكولات والمشروبات
                              </SelectItem>
                              <SelectItem value="handcrafts">
                                HandiCrafts - المصنوعات اليدوية
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subcategories"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SubCategory</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="h-12">
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="justify-between w-full"
                                >
                                  {field.value?.length
                                    ? field.value.map((item) => item).join(", ")
                                    : "Select ..."}
                                  <ChevronsUpDown className="opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput
                                  placeholder={"Search SubCategory..."}
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>
                                    No Subcategory Found
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {subCategoriesItems?.map(
                                      (subCategoryItem) => {
                                        const isSelected = field.value?.find(
                                          (item) => item === subCategoryItem
                                        );
                                        return (
                                          <CommandItem
                                            className="capitalize"
                                            key={subCategoryItem}
                                            value={subCategoryItem}
                                            onSelect={() => {
                                              if (isSelected) {
                                                console.log(isSelected);

                                                field.onChange(
                                                  field.value.filter(
                                                    (item) =>
                                                      item !== subCategoryItem
                                                  )
                                                );
                                              } else {
                                                const newValue = [
                                                  ...field.value,
                                                  subCategoryItem,
                                                ];
                                                field.onChange(newValue);
                                              }
                                            }}
                                          >
                                            {subCategoryItem}
                                            <Check
                                              className={cn(
                                                "ml-auto",
                                                isSelected
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                          </CommandItem>
                                        );
                                      }
                                    )}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-start gap-4 *:flex-1">
                    <FormField
                      control={form.control}
                      name="contact_full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="job_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Job Title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-start gap-1">
                      <FormField
                        control={form.control}
                        name="phone_whatsapp_number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone WhatsApp</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Phone Number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone_number2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="invisible">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Second Number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="business_email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              {/* Export Information */}
              <div className="space-y-5 p-5 rounded-lg shadow border">
                <h3 className="font-semibold text-2xl border-b  w-fit pb-2">
                  Export
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 *:flex-1">
                    <FormField
                      control={form.control}
                      name="export_exp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Export Experience</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Beginner">Beginner</SelectItem>
                              <SelectItem value="Intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="has_import_and_export_licenses"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Has Export Licenses</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="true">Yes</SelectItem>
                              <SelectItem value="false">No</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              {/* Market Information */}
              <div className="space-y-5 p-5 rounded-lg shadow border">
                <h3 className="font-semibold text-2xl border-b  w-fit pb-2">
                  Marketing
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 *:flex-1">
                    <FormField
                      control={form.control}
                      name="target_markets"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Markets</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="h-12">
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="justify-between w-full"
                                >
                                  {field.value?.length
                                    ? field.value.map((item) => item).join(", ")
                                    : "Select Countries"}
                                  <ChevronsUpDown className="opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput
                                  placeholder={"Search Countries..."}
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>
                                    No Countries Found
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {COUNTRIES?.map((country) => {
                                      const isSelected = field?.value?.find(
                                        (item) => item === country.en
                                      );
                                      return (
                                        <CommandItem
                                          key={country.en}
                                          value={country.en}
                                          onSelect={() => {
                                            if (isSelected) {
                                              field.onChange(
                                                field.value.filter(
                                                  (item) => item !== country.en
                                                )
                                              );
                                            } else {
                                              const newValue = [
                                                ...field.value,
                                                country.en,
                                              ];
                                              field.onChange(newValue);
                                            }
                                          }}
                                        >
                                          {country.flag} {country.en}
                                          <Check
                                            className={cn(
                                              "ml-auto",
                                              isSelected
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      );
                                    })}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="target_audience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Audience</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="h-12">
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="justify-between w-full"
                                >
                                  {field.value?.length
                                    ? field.value.map((item) => item).join(", ")
                                    : "Select ..."}
                                  <ChevronsUpDown className="opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput
                                  placeholder={"Search Audiences..."}
                                  className="h-9"
                                />
                                <CommandList>
                                  <CommandEmpty>
                                    No Audiences Found
                                  </CommandEmpty>
                                  <CommandGroup>
                                    {targetAudienceItems?.map((audiencItem) => {
                                      const isSelected = field.value?.find(
                                        (item) => item === audiencItem
                                      );
                                      return (
                                        <CommandItem
                                          className="capitalize"
                                          key={audiencItem}
                                          value={audiencItem}
                                          onSelect={() => {
                                            if (isSelected) {
                                              console.log(isSelected);

                                              field.onChange(
                                                field.value.filter(
                                                  (item) => item !== audiencItem
                                                )
                                              );
                                            } else {
                                              const newValue = [
                                                ...field.value,
                                                audiencItem,
                                              ];
                                              field.onChange(newValue);
                                            }
                                          }}
                                        >
                                          {audiencItem}
                                          <Check
                                            className={cn(
                                              "ml-auto",
                                              isSelected
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      );
                                    })}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              {/* Additional Information */}
              <div className="space-y-5 p-5 rounded-lg shadow border">
                <h3 className="font-semibold text-2xl border-b  w-fit pb-2">
                  Production
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 *:flex-1">
                    <FormField
                      control={form.control}
                      name="minimun_order_quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Order Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Quantity"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="minimun_order_value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Order Value</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Value"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="monthly_production_capacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Production Capacity</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Capacity" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Side Inputs */}
            <div className="flex h-fit flex-col p-4 border bg-gray-50 rounded-lg shadow gap-3 ">
              <FormField
                control={form.control}
                name="country_region"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    {/* <FormLabel>Country / Region</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between bg-white",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? COUNTRIES.find(
                                  (country) => country.en === field.value
                                )?.en
                              : "Select Country"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search Countries..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No Country Found.</CommandEmpty>
                            <CommandGroup>
                              {COUNTRIES.map((country) => (
                                <CommandItem
                                  value={country.en}
                                  key={country.en}
                                  onSelect={() => {
                                    form.setValue(
                                      "country_region",
                                      country.en,
                                      { shouldValidate: true }
                                    );
                                  }}
                                >
                                  {country.flag} {country.en}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      country.en === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="primary_business_type"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Primary Business Type</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Business Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="manufacurater">
                          Manufacurater
                        </SelectItem>
                        <SelectItem value="supplier">Supplier</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verified"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Verified</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Verification" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Verified</SelectItem>
                        <SelectItem value="false">Not Verified</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Status</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hold">Hold</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                        <SelectItem value="subscribed">subscirbed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Source</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADS">ADS</SelectItem>
                        <SelectItem value="Exhibition">Exhibition</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reach_out"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Reach Out</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Reach Out" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="call">Call</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="assign_to"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Assign To</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Agent" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sherif">
                          Mohamed Sherif - CEO
                        </SelectItem>
                        <SelectItem value="engy">Engy - Sales Agent</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="need_fund"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Need Fund ?</FormLabel> */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Fund Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Fund</SelectItem>
                        <SelectItem value="false">No Fund</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Your Feedback"
                        className="resize-y min-h-36 bg-white max-h-52"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documents_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documents Link</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Documents Links..."
                        className="resize-y min-h-36 bg-white max-h-52"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Follow Up */}
          <div className="space-y-5 p-5 rounded-lg shadow border">
            <h3 className="font-semibold text-2xl border-b  w-fit pb-2">
              Follow Up
            </h3>

            <div className="space-y-8">
              {Array.from({ length: 5 }, (_, index) => {
                return (
                  <div key={index} className="flex gap-4 items-center">
                    <p className="font-bold">#0{index + 1}</p>
                    <div className="w-full flex items-start gap-4 *:flex-1">
                      <FormField
                        control={form.control}
                        name={`fmethod${String(index + 1)}`}
                        render={({ field }) => (
                          <FormItem>
                            {index === 0 ? (
                              <FormLabel> Method</FormLabel>
                            ) : null}

                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Whatsapp">
                                  Whatsapp
                                </SelectItem>
                                <SelectItem value="Call">Call</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`fdate${String(index + 1)}`}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            {index === 0 ? <FormLabel> Date</FormLabel> : null}
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  captionLayout="dropdown"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`fNotes${String(index + 1)}`}
                        render={({ field }) => (
                          <FormItem className="flex-4!">
                            {index === 0 ? <FormLabel> Notes</FormLabel> : null}
                            <FormControl>
                              <Input
                                placeholder="Enter Your Notes"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Discard</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will return old data and
                    discard your changes.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    data from our database.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button className="px-8">Save Changes</Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default VendorForm;
