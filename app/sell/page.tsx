import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@tiptap/react";
import { TipTapEditor } from "../components/Editor";

export default function SellRoute(){
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>Sell your products with ease</CardTitle>
                        <CardDescription>Please describe your prouct here so that it can be sold</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <Label>Name</Label>
                            <Input type="text" placeholder="Type the name of your product"/>
                        </div>
                        <SelectCategory/>
                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input placeholder="$69" type="number"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Small Summary</Label>
                           <Textarea placeholder="Please describe your product briefly right here..."/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Description</Label>
                             <TipTapEditor/>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </section>
    )
}