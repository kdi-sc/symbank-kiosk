import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DollarSign, CreditCard, PiggyBank, HelpCircle } from "lucide-react"

export default function BankKiosk() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold text-center">Welcome to SymBank</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>How can we help you today?</CardTitle>
            <CardDescription>Please select an option below</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Button className="h-24 text-lg justify-start" variant="outline">
              <DollarSign className="mr-2 h-6 w-6" />
              Withdraw Cash
              <ArrowRight className="ml-auto h-6 w-6" />
            </Button>
            <Button className="h-24 text-lg justify-start" variant="outline">
              <CreditCard className="mr-2 h-6 w-6" />
              Check Balance
              <ArrowRight className="ml-auto h-6 w-6" />
            </Button>
            <Button className="h-24 text-lg justify-start" variant="outline">
              <PiggyBank className="mr-2 h-6 w-6" />
              Deposit Funds
              <ArrowRight className="ml-auto h-6 w-6" />
            </Button>
            <Button className="h-24 text-lg justify-start" variant="outline">
              <HelpCircle className="mr-2 h-6 w-6" />
              Other Services
              <ArrowRight className="ml-auto h-6 w-6" />
            </Button>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="ghost">Cancel</Button>
            <Button variant="ghost">Help</Button>
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
        © 2024 SymBank. All rights reserved. For assistance, please call 1-800-SYM-BANK
      </footer>
    </div>
  )
}