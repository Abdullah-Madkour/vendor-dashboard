import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-2 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Vendors</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-5xl">
            1,250
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex justify-between items-start gap-1.5 text-sm">
          <div>
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Vendors for the last 6 months
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              Subscribers
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Verified
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Pending
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Closed
              <IconTrendingUp />
              +12.5%
            </Badge>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Buyers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-5xl">
            1,250
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex justify-between items-start gap-1.5 text-sm">
          <div>
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Vendors for the last 6 months
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-end  items-center gap-2">
            <Badge variant="outline">
              Verified
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Middle East & Africa
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Europe
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              The Americas
              <IconTrendingUp />
              +12.5%
            </Badge>
            <Badge variant="outline">
              Asia-Pacific
              <IconTrendingUp />
              +12.5%
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
