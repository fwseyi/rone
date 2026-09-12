(function () {
  const image = (id, width = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

  window.RONE_CATALOG = Object.freeze([
    { slug: "moss-merino-crew", name: "Moss Merino Crew", category: "Clothing", gender: "Unisex", price: 395, colour: "Field olive", flag: "New", primary: image("5710046"), worn: image("7760239") },
    { slug: "house-blazer", name: "House Blazer", category: "Clothing", gender: "Unisex", price: 740, colour: "Stone", flag: "New", primary: image("14577586"), worn: image("13169319") },
    { slug: "fold-leather-tote", name: "Fold Leather Tote", category: "Bags", gender: "Unisex", price: 870, colour: "Cacao", flag: "Rone icon", primary: image("23223854"), worn: image("26316180") },
    { slug: "soft-step-loafer", name: "Soft-Step Loafer", category: "Shoes", gender: "Unisex", price: 520, colour: "Tobacco suede", flag: "", primary: image("31935097"), worn: image("9154684") },
    { slug: "ribbed-cashmere-polo", name: "Ribbed Cashmere Polo", category: "Clothing", gender: "Women", price: 330, colour: "Oat", flag: "New", primary: image("14377294"), worn: image("19514232") },
    { slug: "pleated-field-trouser", name: "Pleated Field Trouser", category: "Clothing", gender: "Men", price: 460, colour: "Khaki", flag: "", primary: image("3927390"), worn: image("30573777") },
    { slug: "studio-shoulder-bag", name: "Studio Shoulder Bag", category: "Bags", gender: "Women", price: 680, colour: "Black", flag: "New", primary: image("9267589"), worn: image("26316180") },
    { slug: "weekend-jacket", name: "Weekend Jacket", category: "Clothing", gender: "Men", price: 790, colour: "Putty", flag: "Limited", primary: image("13258257"), worn: image("34116217") },
    { slug: "merino-house-scarf", name: "Merino House Scarf", category: "Accessories", gender: "Unisex", price: 180, colour: "Moss", flag: "Rone icon", primary: image("9603627"), worn: image("6630853") },
    { slug: "frame-leather-belt", name: "Frame Leather Belt", category: "Accessories", gender: "Unisex", price: 240, colour: "Cacao", flag: "Rone icon", primary: image("32734334"), worn: image("13169319") },
    { slug: "club-wool-cap", name: "Club Wool Cap", category: "Accessories", gender: "Unisex", price: 165, colour: "Charcoal", flag: "New", primary: image("31078828"), worn: image("37189939") },
    { slug: "house-sock", name: "House Sock", category: "Accessories", gender: "Unisex", price: 95, colour: "Brick", flag: "", primary: image("31078828"), worn: image("30698043") },
    { slug: "everyday-rib-tank", name: "Everyday Rib Tank", category: "Underwear", subcategory: "Singlets", gender: "Unisex", price: 120, colour: "White", flag: "New", primary: image("1107604"), worn: image("11526960") },
    { slug: "mercer-boxer-two-pack", name: "Mercer Boxer 2-Pack", category: "Underwear", subcategory: "Boxers", gender: "Men", price: 90, colour: "White / Ink", flag: "", primary: image("3993401"), worn: image("18035492") },
    { slug: "court-brief-two-pack", name: "Court Brief 2-Pack", category: "Underwear", subcategory: "Pants", gender: "Women", price: 85, colour: "Chalk", flag: "", primary: image("36856704"), worn: image("18795307") },
    { slug: "geometry-pouch", name: "Geometry Pouch", category: "Bags", gender: "Unisex", price: 410, colour: "Forest", flag: "Limited", primary: image("22432981"), worn: image("37189939") },
    { slug: "east-west-carryall", name: "East-West Carryall", category: "Bags", gender: "Unisex", price: 980, colour: "Chestnut", flag: "New", primary: image("36367484"), worn: image("27046145") },
    { slug: "night-frame-bag", name: "Night Frame Bag", category: "Bags", gender: "Women", price: 620, colour: "Cacao", flag: "", primary: image("8502482"), worn: image("27046144") },
    { slug: "field-derby", name: "Field Derby", category: "Shoes", gender: "Men", price: 590, colour: "Black", flag: "New", primary: image("37008332"), worn: image("7422198") },
    { slug: "archive-brogue", name: "Archive Brogue", category: "Shoes", gender: "Men", price: 640, colour: "Cognac", flag: "Rone icon", primary: image("1619655"), worn: image("7422198") },
    { slug: "nappa-house-mule", name: "Nappa House Mule", category: "Shoes", gender: "Women", price: 460, colour: "Black", flag: "New", primary: image("9267589"), worn: image("20377874") },
    { slug: "poplin-evening-shirt", name: "Poplin Evening Shirt", category: "Clothing", gender: "Women", price: 360, colour: "Optic white", flag: "New", primary: image("14577586"), worn: image("20377874") },
    { slug: "riviera-swim-short", name: "Riviera Swim Short", category: "Underwear", subcategory: "Swimwear", gender: "Men", price: 190, colour: "Harbour blue", flag: "New", primary: image("3998649"), worn: image("7248337") },
    { slug: "form-swimsuit", name: "Form Swimsuit", category: "Underwear", subcategory: "Swimwear", gender: "Women", price: 220, colour: "Ink", flag: "New", primary: image("4271771"), worn: image("20377874") },
    { slug: "contour-base-tight", name: "Contour Base Tight", category: "Underwear", subcategory: "Tights", gender: "Women", price: 150, colour: "Black", flag: "", primary: image("16701769"), worn: image("24362254") },
    { slug: "motion-base-tight", name: "Motion Base Tight", category: "Underwear", subcategory: "Tights", gender: "Men", price: 165, colour: "Graphite", flag: "", primary: image("5327497"), worn: image("6455767") },
    { slug: "fine-rib-singlet", name: "Fine Rib Singlet", category: "Underwear", subcategory: "Singlets", gender: "Women", price: 110, colour: "Chalk", flag: "Rone icon", primary: image("1107604"), worn: image("23891643") }
  ]);

  window.RONE_MONEY = Object.freeze({
    format: (usdAmount) => window.RONE_CURRENCY
      ? window.RONE_CURRENCY.format(usdAmount)
      : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usdAmount)
  });
}());
