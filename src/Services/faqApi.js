export async function getFAQ() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/69f4c41d36566621a81378a7 ",
    {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$Cbrd.nXJFZPW4gEbg2ken.IjS.XNZprFnV1VEK7e5nmdlLpwq/lT2",
      },
    },
  );
  const data = await res.json();
  const faqData = data.record.faq;

  return faqData;
}
