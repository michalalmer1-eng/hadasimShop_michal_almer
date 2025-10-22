import Card from "@/app/components/Card/card";

export default function Home() {
  return (
    <main
      dir="ltr"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "24px",
      }}
    >
      {/* Product grid */}
      <section
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        {/* 10 clothing cards (update image paths to your actual files) */}
        <Card
          image="/images/products/1.jpg"
          title="Classic Cotton Tee"
          description="100% cotton, breathable jersey, relaxed everyday fit."
          price={99}
          href="/product/sku-tee-001"
          inv={{ hifa: 6, tlv: 3, eilat: 2 }}
        />
        <Card
          image="/images/products/2.jpg"
          title="Oversized Hoodie"
          description="Soft fleece interior, kangaroo pocket, ribbed cuffs."
          price={189}
          href="/product/sku-hood-002"
          inv={{ hifa: 4, tlv: 5, eilat: 1 }}
        />
        <Card
          image="/images/products/3.jpg"
          title="Slim Fit Jeans"
          description="Mid‑wash denim with a touch of stretch for comfort."
          price={239}
          href="/product/sku-jeans-003"
          inv={{ hifa: 3, tlv: 4, eilat: 2 }}
        />
        <Card
          image="/images/products/4.jpg"
          title="Linen Button‑Down Shirt"
          description="Lightweight linen blend, airy feel, summer essential."
          price={169}
          href="/product/sku-shirt-004"
          inv={{ hifa: 2, tlv: 3, eilat: 2 }}
        />
        <Card
          image="/images/products/5.jpg"
          title="Chino Pants"
          description="Clean look with slight stretch and a comfy waist."
          price={199}
          href="/product/sku-chino-005"
          inv={{ hifa: 5, tlv: 5, eilat: 3 }}
        />
        <Card
          image="/images/products/6.jpeg"
          title="Lightweight Windbreaker"
          description="Packable shell, water‑repellent finish, everyday layer."
          price={279}
          href="/product/sku-wind-006"
          inv={{ hifa: 1, tlv: 2, eilat: 1 }}
        />
        <Card
          image="/images/products/7.jpg"
          title="Knit Crewneck Sweater"
          description="Fine‑gauge knit with a soft handfeel and tidy hem."
          price={159}
          href="/product/sku-knit-007"
          inv={{ hifa: 4, tlv: 2, eilat: 2 }}
        />
        <Card
          image="/images/products/8.jpg"
          title="Canvas Tote Bag"
          description="Sturdy recycled‑cotton canvas with inner pocket."
          price={89}
          href="/product/sku-tote-008"
          inv={{ hifa: 8, tlv: 6, eilat: 4 }}
        />
        <Card
          image="/images/products/9.jpg"
          title="Baseball Cap"
          description="Adjustable back strap, subtle tonal embroidery."
          price={79}
          href="/product/sku-cap-009"
          inv={{ hifa: 10, tlv: 7, eilat: 6 }}
        />
        <Card
          image="/images/products/10.jpg"
          title="Everyday Socks (3‑Pack)"
          description="Breathable knit with cushioned heel and toe."
          price={49}
          href="/product/sku-socks-010"
          inv={{ hifa: 12, tlv: 12, eilat: 12 }}
        />
      </section>
    </main>
  );
}
