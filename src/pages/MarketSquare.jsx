import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

const walletBalance = 245000;

const categories = ['All Items', 'Grains', 'Oils', 'Proteins', 'Baby Food', 'Vegetables', 'Bundles', 'Emergency Packs'];
const locations = ['All Locations', 'Ikeja', 'Lekki', 'Surulere', 'Agege', 'Ikorodu'];
const priceRanges = ['All Prices', '0 - 25,000 FTN', '25,001 - 50,000 FTN', '50,001+ FTN'];
const availabilityOptions = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];

const products = [
  {
    id: 'rice-5kg',
    name: 'Rice 5kg',
    description: 'Clean premium rice suitable for family daily meals.',
    quantity: '5kg',
    priceFtn: 22000,
    stockStatus: 'In Stock',
    location: 'Ikeja',
    deliveryOption: 'Delivery or Pickup',
    category: 'Grains',
    imageStyle: 'from-yellow-300 to-amber-200'
  },
  {
    id: 'beans-2kg',
    name: 'Beans 2kg',
    description: 'Protein-rich beans pack for home cooking support.',
    quantity: '2kg',
    priceFtn: 14000,
    stockStatus: 'In Stock',
    location: 'Surulere',
    deliveryOption: 'Pickup',
    category: 'Proteins',
    imageStyle: 'from-emerald-300 to-lime-200'
  },
  {
    id: 'garri-5kg',
    name: 'Garri 5kg',
    description: 'Nutritious and shelf-stable garri for quick meal preparation.',
    quantity: '5kg',
    priceFtn: 12000,
    stockStatus: 'Low Stock',
    location: 'Agege',
    deliveryOption: 'Delivery or Pickup',
    category: 'Grains',
    imageStyle: 'from-orange-300 to-yellow-200'
  },
  {
    id: 'palm-oil-1l',
    name: 'Palm Oil 1L',
    description: 'Fresh quality palm oil bottle for household cooking.',
    quantity: '1L',
    priceFtn: 9000,
    stockStatus: 'In Stock',
    location: 'Lekki',
    deliveryOption: 'Delivery',
    category: 'Oils',
    imageStyle: 'from-red-300 to-orange-300'
  },
  {
    id: 'family-food-pack',
    name: 'Family Food Pack',
    description: 'Multi-item family support bundle with core food essentials.',
    quantity: 'Bundle',
    priceFtn: 65000,
    stockStatus: 'In Stock',
    location: 'Ikeja',
    deliveryOption: 'Delivery or Pickup',
    category: 'Bundles',
    imageStyle: 'from-emerald-500 to-teal-300'
  },
  {
    id: 'student-survival-pack',
    name: 'Student Survival Pack',
    description: 'Affordable meal package tailored for student nutrition support.',
    quantity: 'Bundle',
    priceFtn: 28000,
    stockStatus: 'Low Stock',
    location: 'Ikorodu',
    deliveryOption: 'Pickup',
    category: 'Bundles',
    imageStyle: 'from-indigo-300 to-purple-200'
  },
  {
    id: 'baby-care-food-pack',
    name: 'Baby Care Food Pack',
    description: 'Infant-focused nutrition items and supportive feeding essentials.',
    quantity: 'Bundle',
    priceFtn: 47000,
    stockStatus: 'In Stock',
    location: 'Lekki',
    deliveryOption: 'Delivery',
    category: 'Baby Food',
    imageStyle: 'from-pink-300 to-rose-200'
  },
  {
    id: 'emergency-relief-pack',
    name: 'Emergency Relief Pack',
    description: 'Rapid-response food and essentials package for urgent need.',
    quantity: 'Bundle',
    priceFtn: 78000,
    stockStatus: 'Out of Stock',
    location: 'Surulere',
    deliveryOption: 'Delivery or Pickup',
    category: 'Emergency Packs',
    imageStyle: 'from-red-400 to-amber-300'
  }
];

function MarketSquare() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Items');
  const [location, setLocation] = useState('All Locations');
  const [priceRange, setPriceRange] = useState('All Prices');
  const [availability, setAvailability] = useState('All');
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const categoryMatch = category === 'All Items' ? true : product.category === category;
      const locationMatch = location === 'All Locations' ? true : product.location === location;
      const availabilityMatch = availability === 'All' ? true : product.stockStatus === availability;

      let priceMatch = true;
      if (priceRange === '0 - 25,000 FTN') priceMatch = product.priceFtn <= 25000;
      if (priceRange === '25,001 - 50,000 FTN') priceMatch = product.priceFtn >= 25001 && product.priceFtn <= 50000;
      if (priceRange === '50,001+ FTN') priceMatch = product.priceFtn >= 50001;

      return searchMatch && categoryMatch && locationMatch && availabilityMatch && priceMatch;
    });
  }, [search, category, location, priceRange, availability]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...current, { id: product.id, name: product.name, priceFtn: product.priceFtn, qty: 1 }];
    });
  };

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.priceFtn * item.qty, 0),
    [cart]
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-bold text-slate-900">Market Square</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Use your FTN tokens to access foodstuffs, essentials, and support bundles.
        </p>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold text-slate-900">Wallet Summary</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm text-slate-600">Available FTN balance</p>
            <p className="mt-1 text-xl font-bold text-emerald-700">{walletBalance.toLocaleString()} FTN</p>
          </article>
          <article className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm text-slate-600">Estimated naira value</p>
            <p className="mt-1 text-xl font-bold text-amber-700">₦{(walletBalance * 10).toLocaleString()}</p>
          </article>
          <div className="flex items-center">
            <Link
              to="/ftn"
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              View Wallet
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold text-slate-900">Search & Filters</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            Search product
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search items"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Location
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Price range
            <select
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {priceRanges.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Availability
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {availabilityOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <p className="mb-4 text-sm text-slate-600">{filteredProducts.length} item(s) found.</p>
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className={`h-40 bg-gradient-to-r ${product.imageStyle}`} aria-hidden="true" />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                  <p className="text-sm text-slate-700">Quantity/size: {product.quantity}</p>
                  <p className="text-sm text-slate-700">Price: {product.priceFtn.toLocaleString()} FTN</p>
                  <p className="text-sm text-slate-700">Naira equivalent: ₦{(product.priceFtn * 10).toLocaleString()}</p>
                  <p className="text-sm text-slate-700">Stock status: {product.stockStatus}</p>
                  <p className="text-sm text-slate-700">Location availability: {product.location}</p>
                  <p className="text-sm text-slate-700">Delivery/pickup option: {product.deliveryOption}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Buy with FTN
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
                    >
                      Donate This Item
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm xl:sticky xl:top-24">
          <h2 className="text-lg font-semibold text-slate-900">Cart Summary</h2>

          {cart.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">Your cart is empty.</p>
          ) : (
            <>
              <ul className="mt-3 space-y-2">
                {cart.map((item) => (
                  <li key={item.id} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <p className="font-medium">{item.name}</p>
                    <p>
                      Qty: {item.qty} · {(item.priceFtn * item.qty).toLocaleString()} FTN
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-slate-200 pt-3">
                <p className="text-sm text-slate-600">Cart total</p>
                <p className="text-xl font-bold text-emerald-700">{cartTotal.toLocaleString()} FTN</p>
              </div>
            </>
          )}
        </aside>
      </section>
    </div>
  );
}

export default MarketSquare;
