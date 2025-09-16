import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const EditRecordModal = ({ value }: { value: string }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const detectCurrentStatus = (status: string = "closed"): string => {
    const lowStatus = status.toLowerCase();
    if (lowStatus === "active") {
      return "bg-green-500";
    }
    if (lowStatus === "wating") {
      return "bg-yellow-500";
    }
    return "bg-red-500";
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Badge className={`${detectCurrentStatus(value)} cursor-pointer`}>
            {value}
          </Badge>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1024px]">
          <DialogHeader>
            <DialogTitle>Edit Record</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid  gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Status</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hold-na">Hold / NA</SelectItem>
                  <SelectItem value="meeting">Hold / Meeting</SelectItem>
                  <SelectItem value="trial">Free Trial</SelectItem>
                  <SelectItem value="Subscriped">Subscriped</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-5 shadow rounded-lg border">
              <h4 className="font-semibold mb-4 border-b border-gray-200 w-fit pb-2">
                Follow Up
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold">01</h5>
                  <div className="flex flex-1  items-start *:flex-1 gap-4">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WA">WhatsApp</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex *:flex-1 gap-4">
                      <div className="flex flex-col gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid gap-3 flex-3!">
                      <Input placeholder="Type your Note here." />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold">02</h5>
                  <div className="flex flex-1  items-start *:flex-1 gap-4">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WA">WhatsApp</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex *:flex-1 gap-4">
                      <div className="flex flex-col gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid gap-3 flex-3!">
                      <Input placeholder="Type your Note here." />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold">03</h5>
                  <div className="flex flex-1  items-start *:flex-1 gap-4">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WA">WhatsApp</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex *:flex-1 gap-4">
                      <div className="flex flex-col gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid gap-3 flex-3!">
                      <Input placeholder="Type your Note here." />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold">04</h5>
                  <div className="flex flex-1  items-start *:flex-1 gap-4">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WA">WhatsApp</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex *:flex-1 gap-4">
                      <div className="flex flex-col gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid gap-3 flex-3!">
                      <Input placeholder="Type your Note here." />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold">05</h5>
                  <div className="flex flex-1  items-start *:flex-1 gap-4">
                    <div className="grid gap-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WA">WhatsApp</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex *:flex-1 gap-4">
                      <div className="flex flex-col gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date-picker"
                              className="justify-between font-normal"
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid gap-3 flex-3!">
                      <Input placeholder="Type your Note here." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditRecordModal;
