"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateAccountSchema, schema } from "@/schemas/create-account-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "sonner";

export default function CreateAccountForm({
  accountType,
}: {
accountType: string
}) {
  const router = useRouter();

  const [showPass, setShowPass] = useState<boolean>(false);

  const form = useForm<CreateAccountSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      accountType: 'demo',
      leverage: "1:200",
      currency: "USD",
      nickname: "saleh",
      password: "",
    },
  });

  const onSubmit = (data: CreateAccountSchema) => {
    const accountData = {
      ...data,
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`, 
      type: accountType,
      platform: "mt5",
    };

    const existingData = JSON.parse(localStorage.getItem("accountData") || "[]") as CreateAccountSchema[];

    const updatedData = Array.isArray(existingData) ? [...existingData, accountData] : [accountData];


    localStorage.setItem("accountData", JSON.stringify(updatedData));

    toast.success("Account created successfully");

    form.reset({
      accountType: 'demo',
      leverage: "1:200",
      currency: "USD",
      nickname: "saleh",
      password: "",
    });

    router.push("/");
  };

  return (
    <div className="flex-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <div className="border shadow-md p-6 rounded-lg">
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Account type
                  </FormLabel>
                  <FormControl>
                    <Tabs
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full rounded-lg h-12 "
                    >
                      <TabsList className="w-full grid grid-cols-2 h-12 ">
                        <TabsTrigger value="demo" className="py-2">
                          Demo
                        </TabsTrigger>
                        <TabsTrigger value="real" className="py-2">
                          Real
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Risk-free account. Trade with virtual money
            </p>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="leverage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum leverage</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="Select leverage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1:200">1:200</SelectItem>
                        <SelectItem value="1:100">1:100</SelectItem>
                        <SelectItem value="1:500">1:500</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="AED">AED</SelectItem>
                        <SelectItem value="BDT">BDT</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account nickname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Standard"
                        className="bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password for this account</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPass ? "text" : "password"}
                          placeholder="Create password"
                          className="bg-white pr-10"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPass(!showPass)}
                        >
                          {showPass ? (
                            <LuEyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <LuEye className="h-4 w-4 text-gray-400" />
                          )}
                          <span className="sr-only">
                            {showPass ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-10">
            <Button
              className="rounded-lg cursor-pointer flex items-center justify-center gap-2 border px-6 py-3 bg-[#2A8EFF] text-white
              hover:bg-[#1F73D8] hover:border-[#1F73D8] text-sm shadow-sm duration-300"
              type="submit"
            >
              Create Account
              <FaChevronRight />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
