import React, { useState } from "react";
import "../css/CheckboxForm.css";

/* =======================
   TYPES
======================= */

type ToppingsState = Record<string, boolean>;

type FormData = {
  name: string;
  pizzaSize: string;
  specialInstructions: string;
  delivery: boolean;
};

type SizeOption = {
  value: string;
  label: string;
  price: number;
};

type ToppingInfo = {
  name: string;
  price: number;
};

type ToppingInfoMap = Record<string, ToppingInfo>;

/* =======================
   COMPONENT
======================= */

const CheckboxForm = () => {
  /* ---------- STATE ---------- */

  const [toppings, setToppings] = useState<ToppingsState>({
    pepperoni: false,
    mushrooms: false,
    onions: false,
    sausage: false,
    bacon: false,
    olives: false,
    peppers: false,
    pineapple: false,
    spinach: false,
    extraCheese: false,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    pizzaSize: "medium",
    specialInstructions: "",
    delivery: false,
  });

  /* ---------- CONSTANT DATA ---------- */

  const sizeOptions: SizeOption[] = [
    { value: "small", label: "Small ($10)", price: 10 },
    { value: "medium", label: "Medium ($12)", price: 12 },
    { value: "large", label: "Large ($14)", price: 14 },
    { value: "xlarge", label: "Extra Large ($16)", price: 16 },
  ];

  const toppingInfo: ToppingInfoMap = {
    pepperoni: { name: "Pepperoni", price: 1.5 },
    mushrooms: { name: "Mushrooms", price: 1.0 },
    onions: { name: "Onions", price: 1.0 },
    sausage: { name: "Sausage", price: 1.5 },
    bacon: { name: "Bacon", price: 2.0 },
    olives: { name: "Olives", price: 1.0 },
    peppers: { name: "Bell Peppers", price: 1.0 },
    pineapple: { name: "Pineapple", price: 1.5 },
    spinach: { name: "Spinach", price: 1.0 },
    extraCheese: { name: "Extra Cheese", price: 1.5 },
  };

  /* ---------- HANDLERS ---------- */

  const handleToppingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;

    setToppings(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(toppings).every(Boolean);

    const newToppings: ToppingsState = {};
    Object.keys(toppings).forEach(key => {
      newToppings[key] = !allChecked;
    });

    setToppings(newToppings);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedToppings = Object.keys(toppings).filter(
      key => toppings[key]
    );

    const orderData = {
      ...formData,
      toppings: selectedToppings,
      totalToppings: selectedToppings.length,
      totalPrice: calculateTotal(),
    };

    console.log("Pizza Order:", orderData);
    alert(`Order placed! Total: $${calculateTotal().toFixed(2)}`);
  };

  const handleReset = () => {
    setToppings(
      Object.keys(toppings).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as ToppingsState)
    );

    setFormData({
      name: "",
      pizzaSize: "medium",
      specialInstructions: "",
      delivery: false,
    });
  };

  /* ---------- DERIVED DATA ---------- */

  const selectedToppings = Object.keys(toppings).filter(
    key => toppings[key]
  );

  const calculateTotal = (): number => {
    const basePrice =
      sizeOptions.find(size => size.value === formData.pizzaSize)?.price ?? 12;

    const toppingsPrice = selectedToppings.reduce(
      (total, topping) => total + (toppingInfo[topping]?.price ?? 0),
      0
    );

    return basePrice + toppingsPrice + (formData.delivery ? 3 : 0);
  };

  /* ---------- JSX ---------- */

  return (
    <div className="checkbox-form-container">
      <h1>🍕 Pizza Order Form</h1>

      <form onSubmit={handleSubmit} className="pizza-order-form">
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <select
          name="pizzaSize"
          value={formData.pizzaSize}
          onChange={handleInputChange}
        >
          {sizeOptions.map(size => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>

        <button type="button" onClick={handleSelectAll}>
          {selectedToppings.length === Object.keys(toppings).length
            ? "Deselect All"
            : "Select All"}
        </button>

        <div className="toppings-grid">
          {Object.entries(toppings).map(([key, checked]) => (
            <label key={key}>
              <input
                type="checkbox"
                name={key}
                checked={checked}
                onChange={handleToppingChange}
              />
              {toppingInfo[key].name} (+$
              {toppingInfo[key].price})
            </label>
          ))}
        </div>

        <textarea
          name="specialInstructions"
          placeholder="Special instructions"
          value={formData.specialInstructions}
          onChange={handleInputChange}
        />

        <label>
          <input
            type="checkbox"
            name="delivery"
            checked={formData.delivery}
            onChange={handleInputChange}
          />
          Home Delivery (+$3)
        </label>

        <button type="submit">
          Place Order (${calculateTotal().toFixed(2)})
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default CheckboxForm;
