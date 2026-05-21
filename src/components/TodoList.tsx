"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            // className="rounded-lg border"
            required
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="h-[400px] mt-4 overflow-auto">
        <div className="flex flex-col gap-2">
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" checked />
              <label htmlFor="item2" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" checked />
              <label htmlFor="item6" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item7" />
              <label htmlFor="item7" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item8" checked />
              <label htmlFor="item8" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
          {/* LIST ITME */}
          <Card className="p-4 ring-0 border">
            <div className="flex items-center gap-4">
              <Checkbox id="item9" />
              <label htmlFor="item9" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, nam!
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
