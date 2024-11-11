import { Button } from "@/components/ui/button";

import {  BookOpen} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";





export const metadata: Metadata = {
  title: "English irregular verbs quizz",
  description: "English irregular verbs quizz. Quizz sur les verbes irréguliers en anglais. Verbes irréguliers anglais au prétérit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full">
        <header className="border-b">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-2xl font-semibold">Irregular Verb Quiz</h1>
            </div>
            <nav>
              <ul className="flex space-x-1">
                <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
                <li><Button variant="ghost" asChild><Link href="/quiz">Quiz</Link></Button></li>
                <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8 px-4 flex-grow">
          {children}
        </main>

        <footer className="border-t mt-auto">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Irregular Verb Quiz App</p>
            <Button variant="link" asChild>
              <a href="https://github.com/your-repo" className="flex items-center space-x-2">
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </footer>
      </body>
    </html>
  );
}