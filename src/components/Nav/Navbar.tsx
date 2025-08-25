"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import {
  Menu,
  Smartphone,
  Monitor,
  Radio,
  CheckCircle,
  Ticket,
  CreditCard,
  Users,
  UserCheck,
  Tv,
  DollarSign,
  MessageCircle,
  Calendar,
  RefreshCw,
  Code,
  Package,
  BarChart3,
  FileText,
  ChevronDown,
  X,
  Puzzle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const businessesData = [
  {
    title: "Cell Phone Repair",
    description: "Complete solutions for mobile device repair businesses to grow and scale efficiently.",
    icon: Smartphone,
    href: "/Businesses/CellPhoneRepair/cellphonerepair",
    badge: "Popular",
  },
  {
    title: "Computer Repair",
    description: "Comprehensive features and tools designed to drive growth for computer repair shops.",
    icon: Monitor,
    href: "/Businesses/ComputerRepair/ComputerRepair",
  },
  {
    title: "Prepaid Wireless",
    description: "Specialized tools and integrations for prepaid wireless retailers and success.",
    icon: Radio,
    href: "/Businesses/PrepaidWirelesss/PrepaidWireless",
  },
]

const featuresData = {
  solutions: [
    {
      title: "Check-ins",
      description: "A simple, user-friendly solution for effortless customer check-ins.",
      icon: CheckCircle,
      href: "/Features/Check_IN/Check_in",
    },
    {
      title: "Ticket Management",
      description: "Dynamic ticket solutions for repair shops with automated workflows.",
      icon: Ticket,
      href: "/Features/TicketManagement/TicketManagement",
    },
    {
      title: "Integrated Payments",
      description: "Seamless payment solutions designed to help your business thrive.",
      icon: CreditCard,
      href: "/Features/IntegratedPayment/Integrated_payment",
    },
    {
      title: "Customer Management",
      description: "Simplify customer tracking and relationship management.",
      icon: Users,
      href: "/Features/CustomerManagement/Customer_Management",
    },
    {
      title: "Employee Management",
      description: "Comprehensive employee management with scheduling and tracking.",
      icon: UserCheck,
      href: "/Features/EmployManagement/Employ_Management",
    },
    {
      title: "Smart Displays",
      description: "Increase revenue with creative in-store advertising displays.",
      icon: Tv,
      href: "/Features/SmartDisplay/Smart_Display",
    },
  ],
  automation: [
    {
      title: "Automated Commissions",
      description: "Boost performance with effortless commission tracking.",
      icon: DollarSign,
      href: "/features/commissions",
    },
    {
      title: "Team Communication",
      description: "Simplify team communication with built-in chat tools.",
      icon: MessageCircle,
      href: "/Features/TeamCommunication/TeamCommunication",
    },
    {
      title: "Staff Scheduling",
      description: "Manage staff schedules effortlessly with shift tracking.",
      icon: Calendar,
      href: "/Features/StaffScheduling/SaffScheduling",
    },
    {
      title: "Developer API",
      description: "Use our comprehensive API to develop custom integrations.",
      icon: Code,
      href: "/features/api",
    },
  ],
  inventory: [
    {
      title: "Inventory Management",
      description: "Streamlined tools for managing your stock levels effectively.",
      icon: Package,
      href: "/Features/InventoryManagement/InventoryManagement",
    },
    {
      title: "Stock Counting",
      description: "Accurate counting solutions to keep inventory in check.",
      icon: BarChart3,
      href: "/Features/StockCounting/StockCounting",
    },
    {
      title: "Purchase Orders",
      description: "Simplify the process of tracking and ordering stock.",
      icon: FileText,
      href: "/Features/PurchaseOrders/PurchaseOrders",
    },
    {
      title: "RMA Management",
      description: "Hassle-free return merchandise authorization management.",
      icon: RefreshCw,
      href: "/Features/RMA_Management/RMA_Management",
    },
  ],
}

const resourcesData = [
  {
    title: "Integrations",
    description: "Discover our industry-leading partners and integrations.",
    icon: Puzzle,
    href: "/resources/integrations",
  },
  {
    title: "Public API",
    description: "Use our Public API to help develop your own internal tools!",
    icon: Code,
    href: "/resources/api",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    badge?: string
  }
>(({ className, title, description, icon: Icon, badge, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className="group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:shadow-md focus:bg-gradient-to-r focus:from-orange-50 focus:to-blue-50 focus:shadow-md border border-transparent hover:border-orange-100"
          {...props}
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold leading-none text-slate-800 font-sans">{title}</div>
                {badge && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-orange-100 text-orange-700 border-orange-200 font-medium"
                  >
                    {badge}
                  </Badge>
                )}
              </div>
              <p className="text-xs leading-relaxed text-slate-600 line-clamp-2 font-sans">{description}</p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSections, setOpenSections] = React.useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container flex h-16 max-w-6xl mx-auto items-center px-4">
        {/* Logo */}
        <Link
          to="/"
          className="mr-4 flex items-center space-x-3 lg:mr-6 hover:opacity-80 transition-opacity duration-200"
        >
          <img src="/cellpointpro.jpg" alt="CellPointPro Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Businesses Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-200 font-sans">
                Businesses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[440px] p-6 bg-white rounded-xl shadow-xl border border-slate-100">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-800 font-sans">Choose Your Business Type</h3>
                    <p className="text-sm text-slate-600 font-sans">
                      Tailored solutions for different repair businesses
                    </p>
                  </div>
                  <ul className="grid gap-3">
                    {businessesData.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        badge={item.badge}
                        to={item.href}
                      />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-200 font-sans">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[1000px] max-h-[80vh] overflow-y-auto p-8 bg-white rounded-xl shadow-xl border border-slate-100">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-800 font-sans">Powerful Features</h3>
                    <p className="text-sm text-slate-600 font-sans">
                      Everything you need to run and grow your repair business
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="mb-4 text-xs font-bold text-blue-600 uppercase tracking-wider font-sans">
                        Core Solutions
                      </h4>
                      <ul className="space-y-2">
                        {featuresData.solutions.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            to={item.href}
                          />
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-4 text-xs font-bold text-blue-600 uppercase tracking-wider font-sans">
                        Automation
                      </h4>
                      <ul className="space-y-2">
                        {featuresData.automation.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            to={item.href}
                          />
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-4 text-xs font-bold text-blue-600 uppercase tracking-wider font-sans">
                        Inventory
                      </h4>
                      <ul className="space-y-2">
                        {featuresData.inventory.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            to={item.href}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors duration-200 font-sans">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[440px] p-6 bg-white rounded-xl shadow-xl border border-slate-100">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-800 font-sans">Resources & Support</h3>
                    <p className="text-sm text-slate-600 font-sans">Get help and extend your CellPointPro experience</p>
                  </div>
                  <ul className="grid gap-3">
                    {resourcesData.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        to={item.href}
                      />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="ml-auto flex items-center space-x-3">
          <Button
            variant="ghost"
            className="hidden text-sm font-semibold lg:inline-flex h-10 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-sans"
          >
            Log In
          </Button>
          <Button className="hidden bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 lg:inline-flex h-10 px-6 rounded-lg font-sans">
            Get Started
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[350px] p-0 bg-white">
              <SheetHeader className="p-4 pb-2">
                <SheetTitle className="flex items-center justify-between text-left">
                  <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <img src="/Videos/cellpointpro.jpg" alt="CellPointPro Logo" className="h-8 w-auto" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-600 hover:text-slate-800"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto px-4 max-h-[calc(100vh-200px)]">
                  {/* Mobile Businesses */}
                  <Collapsible
                    open={openSections.includes("businesses")}
                    onOpenChange={() => toggleSection("businesses")}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors font-sans">
                      Businesses
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSections.includes("businesses") ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pb-3">
                      {businessesData.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 border border-transparent hover:border-orange-100"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold truncate text-slate-800 font-sans">{item.title}</span>
                              {item.badge && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 border-orange-200"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator className="my-3 bg-slate-200" />

                  {/* Mobile Features */}
                  <Collapsible open={openSections.includes("features")} onOpenChange={() => toggleSection("features")}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors font-sans">
                      Features
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSections.includes("features") ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 pb-3">
                      <div>
                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 font-sans">
                          Core Solutions
                        </h4>
                        <div className="space-y-2">
                          {featuresData.solutions.slice(0, 4).map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 border border-transparent hover:border-orange-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <span className="font-semibold text-slate-800 font-sans">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 font-sans">
                          Automation
                        </h4>
                        <div className="space-y-2">
                          {featuresData.automation.slice(0, 4).map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 border border-transparent hover:border-orange-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-800 font-sans">{item.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 font-sans">
                          Inventory
                        </h4>
                        <div className="space-y-2">
                          {featuresData.inventory.slice(0, 4).map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 border border-transparent hover:border-orange-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm">
                                <item.icon className="h-4 w-4" />
                              </div>
                              <span className="font-semibold text-slate-800 font-sans">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Separator className="my-3 bg-slate-200" />

                  {/* Mobile Resources */}
                  <Collapsible
                    open={openSections.includes("resources")}
                    onOpenChange={() => toggleSection("resources")}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors font-sans">
                      Resources
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSections.includes("resources") ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pb-3">
                      {resourcesData.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center gap-3 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 border border-transparent hover:border-orange-100"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-sm">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <span className="font-semibold text-slate-800 font-sans">{item.title}</span>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Mobile Action Buttons */}
                <div className="border-t border-slate-200 p-4 space-y-3 bg-slate-50">
                  <Button
                    variant="outline"
                    className="w-full h-10 text-sm font-semibold text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 font-sans bg-transparent"
                  >
                    Log In
                  </Button>
                  <Button className="w-full h-10 text-sm font-semibold bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg font-sans">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
