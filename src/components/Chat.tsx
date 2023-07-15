"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat' ,
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4 ">
        {messages.map((message) => {
          return (
            <div key="message.id" className="flex gap-3 text-slate-600 text-sm mb-4">
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>TG</AvatarFallback>
                  <AvatarImage src="https://github.com/thegaab.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://img.freepik.com/fotos-gratis/3d-renderizar-lampada-brilhante-brilhante-sobre-lampadas-de-pilha_107791-17220.jpg?w=996&t=st=1689446073~exp=1689446673~hmac=c93d319342da945b93976d9d80b8c3ff60fede97b9eab4fc032877f9d5177b64" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'User' : 'AI'}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
