import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Menu | Maison Pho",
  description: "Explore our full menu of premium Vietnamese cuisine, featuring our signature Pho dishes and more.",
}

export default function MenuPage() {
  return (
    <>
      <Navigation />

      <main className="pt-24">
        {/* Menu Header */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Menu</h1>
              <p className="text-lg text-muted-foreground mb-0">
                Discover our selection of premium Vietnamese dishes, crafted with the finest ingredients and traditional
                techniques
              </p>
            </div>
          </div>
        </section>

        {/* Signature Pho Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Signature Pho</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Menu Item 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Pho Royal"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Pho Royal</h3>
                    <span className="text-lg font-medium text-primary ml-4">$24</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Premium beef bone broth, wagyu beef slices, bone marrow, truffle oil, and hand-selected herbs
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Signature</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Pho Seafood Deluxe"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Pho Seafood Deluxe</h3>
                    <span className="text-lg font-medium text-primary ml-4">$28</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Seafood broth, lobster tail, jumbo shrimp, scallops, and seasonal vegetables
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Chef's Choice</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Dairy-free</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Pho Vegetable Garden"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Pho Vegetable Garden</h3>
                    <span className="text-lg font-medium text-primary ml-4">$22</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Aromatic vegetable broth, seasonal organic vegetables, tofu, and exotic mushrooms
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Vegan</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Organic</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Pho Filet Mignon"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Pho Filet Mignon</h3>
                    <span className="text-lg font-medium text-primary ml-4">$26</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    24-hour simmered beef broth, premium filet mignon slices, bone marrow, and fresh herbs
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Premium</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appetizers Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Appetizers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Appetizer 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Truffle Spring Rolls"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Truffle Spring Rolls</h3>
                    <span className="text-lg font-medium text-primary ml-4">$16</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Fresh rice paper rolls with king prawns, pork belly, truffle oil, and premium herbs
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Signature</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>

              {/* Appetizer 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Crispy Imperial Rolls"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Crispy Imperial Rolls</h3>
                    <span className="text-lg font-medium text-primary ml-4">$14</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Crispy fried rolls with Wagyu beef, crab meat, and wood ear mushrooms
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Chef's Choice</span>
                  </div>
                </div>
              </div>

              {/* Appetizer 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Lotus Root Salad"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Lotus Root Salad</h3>
                    <span className="text-lg font-medium text-primary ml-4">$18</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Crisp lotus root, poached prawns, pork, and Vietnamese herbs with a premium fish sauce dressing
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Refreshing</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>

              {/* Appetizer 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Beef Carpaccio"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Beef Carpaccio</h3>
                    <span className="text-lg font-medium text-primary ml-4">$20</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Thinly sliced Wagyu beef, Vietnamese herbs, crispy shallots, and citrus dressing
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Premium</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Courses Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Main Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Main Course 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Caramelized Pork Belly"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Caramelized Pork Belly</h3>
                    <span className="text-lg font-medium text-primary ml-4">$32</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Slow-braised pork belly in caramel sauce with quail eggs, served with jasmine rice
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Traditional</span>
                  </div>
                </div>
              </div>

              {/* Main Course 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Lemongrass Seabass"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Lemongrass Seabass</h3>
                    <span className="text-lg font-medium text-primary ml-4">$36</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Pan-seared seabass with lemongrass, ginger, and a light coconut sauce
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Chef's Choice</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>

              {/* Main Course 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Five-Spice Duck"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Five-Spice Duck</h3>
                    <span className="text-lg font-medium text-primary ml-4">$34</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Crispy duck breast with five-spice glaze, served with tamarind sauce and steamed greens
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Signature</span>
                  </div>
                </div>
              </div>

              {/* Main Course 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Grilled Lemongrass Beef"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Grilled Lemongrass Beef</h3>
                    <span className="text-lg font-medium text-primary ml-4">$30</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Grilled premium beef with lemongrass, served with rice noodles and fresh herbs
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Popular</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Desserts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Dessert 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Coconut Pandan Crème Brûlée"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Coconut Pandan Crème Brûlée</h3>
                    <span className="text-lg font-medium text-primary ml-4">$14</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Creamy coconut custard infused with pandan, topped with caramelized palm sugar
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Signature</span>
                  </div>
                </div>
              </div>

              {/* Dessert 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Mango Sticky Rice"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Mango Sticky Rice</h3>
                    <span className="text-lg font-medium text-primary ml-4">$12</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Sweet coconut sticky rice with fresh mango and a drizzle of coconut cream
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Traditional</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Gluten-free</span>
                  </div>
                </div>
              </div>

              {/* Dessert 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Vietnamese Coffee Tiramisu"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Vietnamese Coffee Tiramisu</h3>
                    <span className="text-lg font-medium text-primary ml-4">$15</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Layers of coffee-soaked ladyfingers and mascarpone cream, with Vietnamese coffee
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Chef's Choice</span>
                  </div>
                </div>
              </div>

              {/* Dessert 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Lychee Sorbet"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Lychee Sorbet</h3>
                    <span className="text-lg font-medium text-primary ml-4">$10</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Refreshing lychee sorbet with fresh berries and mint</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Light</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Vegan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Beverages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beverage 1 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Vietnamese Coffee"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Vietnamese Coffee</h3>
                    <span className="text-lg font-medium text-primary ml-4">$6</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Traditional Vietnamese coffee with condensed milk, served hot or iced
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Signature</span>
                  </div>
                </div>
              </div>

              {/* Beverage 2 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Lemongrass Ginger Tea"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Lemongrass Ginger Tea</h3>
                    <span className="text-lg font-medium text-primary ml-4">$5</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Fresh lemongrass and ginger infusion, served hot or iced</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Refreshing</span>
                  </div>
                </div>
              </div>

              {/* Beverage 3 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Passion Fruit Mojito"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Passion Fruit Mojito</h3>
                    <span className="text-lg font-medium text-primary ml-4">$12</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Fresh passion fruit, mint, lime, and rum (non-alcoholic option available)
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Popular</span>
                  </div>
                </div>
              </div>

              {/* Beverage 4 */}
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Coconut Juice"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">Fresh Coconut</h3>
                    <span className="text-lg font-medium text-primary ml-4">$8</span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    Young coconut served with its refreshing water and tender meat
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full mr-2">Natural</span>
                    <span className="inline-block px-2 py-1 bg-secondary rounded-full">Vegan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury Vietnamese Cuisine?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join us for an unforgettable dining experience. Reserve your table today and discover the refined
                flavors of Maison Pho.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#">Make a Reservation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
